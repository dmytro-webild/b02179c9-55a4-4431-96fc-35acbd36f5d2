import { useEffect, useRef, useState, useCallback } from "react";

interface CinematicVideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
  ariaLabel?: string;
  className?: string;
}

const DEFAULT_VIDEO_SRC =
  "https://res.cloudinary.com/r58dzn6z/video/upload/v1794457523/gemini_generated_video_ab0b3b50.mp4";

export default function CinematicVideoSection({
  videoSrc = DEFAULT_VIDEO_SRC,
  posterSrc,
  ariaLabel = "Sección cinematográfica ENLACES",
  className = "",
}: CinematicVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play / Pause handler
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

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

  // Scroll-based auto play on intersect / pause on exit
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;
    setIsMuted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sync isPlaying state with native video play/pause events
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
      className={`relative w-full w-[100vw] max-w-full aspect-video h-auto md:aspect-auto md:h-[100svh] md:min-h-[100svh] overflow-hidden bg-black p-0 m-0 border-0 ${className}`}
    >
      {/* HTML5 Native Video element configured full viewport, cover on desktop, 16:9 contain on mobile */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        onClick={togglePlay}
        className="w-full h-full object-contain md:absolute md:inset-0 md:object-cover block border-0 p-0 m-0 outline-none cursor-pointer"
      />

      {/* Smooth transition gradient from white hero section above */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 sm:h-24 md:h-36 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />

      {/* Discrete floating controls in the bottom corner */}
      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20 pointer-events-auto flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 backdrop-blur-md p-1 sm:p-1.5 border border-white/20 shadow-lg text-white transition-opacity duration-300 hover:bg-black/60">
        {/* Play / Pause Toggle */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          title={isPlaying ? "Pausar video" : "Reproducir video"}
          className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#F4B400] hover:text-[#0F2755] transition-colors focus:outline-none"
        >
          {isPlaying ? (
            <svg className="size-3.5 sm:size-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="size-3.5 sm:size-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Audio Mute / Unmute Toggle */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          title={isMuted ? "Activar sonido" : "Silenciar sonido"}
          className={`flex size-8 sm:size-9 items-center justify-center rounded-full transition-colors focus:outline-none ${
            isMuted
              ? "bg-white/10 text-white hover:bg-white/25"
              : "bg-[#F4B400] text-[#0F2755] font-bold"
          }`}
        >
          {isMuted ? (
            <svg className="size-3.5 sm:size-4 fill-current" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="size-3.5 sm:size-4 fill-current" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
