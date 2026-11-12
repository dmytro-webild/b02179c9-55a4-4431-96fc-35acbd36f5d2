import { useEffect, useRef, useState, useCallback } from "react";

interface CinematicVideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
  ariaLabel?: string;
  className?: string;
}

// Reliable default high-quality educational/cinematic MP4 background video
const DEFAULT_VIDEO_SRC = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const DEFAULT_POSTER_SRC = "https://img.b2bpic.net/free-photo/medium-shot-young-woman-working-laptop_23-2149258288.jpg";

export default function CinematicVideoSection({
  videoSrc = DEFAULT_VIDEO_SRC,
  posterSrc = DEFAULT_POSTER_SRC,
  ariaLabel = "Video cinematográfico institucional",
  className = "",
}: CinematicVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Play / Pause handler
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    setUserInteracted(true);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Mute / Unmute handler
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  // Toggle Fullscreen
  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Time update for scrubbing / progress indicator
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  }, []);

  // Scrubbing progress
  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newPercent * video.duration;
    setProgress(newPercent * 100);
  }, []);

  // Scroll-based auto play/pause observer
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Default muted initially
    video.muted = true;
    setIsMuted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only auto-play if user didn't manually pause
            if (!userInteracted || isPlaying) {
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [userInteracted, isPlaying]);

  // Sync state on raw video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label={ariaLabel}
      className={`relative w-full w-[100vw] h-[100svh] min-h-[100svh] overflow-hidden bg-black p-0 m-0 border-0 outline-none select-none ${className}`}
    >
      {/* HTML5 Native Video occupies 100vw x 100svh with object-fit cover */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        playsInline
        autoPlay
        muted={isMuted}
        loop
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        className="w-[100vw] h-[100svh] object-cover block border-0 p-0 m-0 outline-none cursor-pointer"
      />

      {/* Discrete Floating Overlay Controls (bottom-right / bottom bar) */}
      <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none flex flex-col gap-3">
        
        {/* Subtle Progress Bar */}
        <div
          onClick={handleSeek}
          className="pointer-events-auto h-1.5 w-full bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all duration-200 group relative"
          title="Buscar en el video"
        >
          <div
            className="h-full bg-[#F4B400] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Control Buttons Group */}
        <div className="flex items-center justify-between w-full">
          {/* Status badge */}
          <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-xs font-['Montserrat'] font-bold text-white/90">
            <span className={`size-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            <span>{isPlaying ? "ENLACES Cinematográfico" : "Pausado"}</span>
          </div>

          {/* Discrete Controls Pill */}
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 rounded-full bg-black/60 backdrop-blur-xl px-4 py-2 border border-white/15 text-white shadow-2xl">
            
            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              title={isPlaying ? "Pausar video" : "Reproducir video"}
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#F4B400] hover:text-[#0F2755] transition-all duration-200 focus:outline-none"
            >
              {isPlaying ? (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="size-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Audio Mute / Unmute Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
              title={isMuted ? "Activar sonido" : "Silenciar sonido"}
              className={`flex size-9 items-center justify-center rounded-full transition-all duration-200 focus:outline-none ${
                isMuted
                  ? "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  : "bg-[#F4B400] text-[#0F2755] shadow-md"
              }`}
            >
              {isMuted ? (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 focus:outline-none"
            >
              {isFullscreen ? (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                </svg>
              ) : (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
