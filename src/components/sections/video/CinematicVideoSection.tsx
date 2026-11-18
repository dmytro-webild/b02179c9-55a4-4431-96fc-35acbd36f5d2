import { useEffect, useRef, useState } from "react";

interface CinematicVideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
  ariaLabel?: string;
  className?: string;
}

const DEFAULT_VIDEO_SRC =
  "https://res.cloudinary.com/r58dzn6z/video/upload/v1794975513/VENTAJAS_EDUCACION_EN_LINEA_COMPRIMIDO_16MB.mp4";

export default function CinematicVideoSection({
  videoSrc = DEFAULT_VIDEO_SRC,
  posterSrc,
  ariaLabel = "Ventajas de la Educación en Línea ENLACES",
  className = "",
}: CinematicVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll-based auto play on intersect / pause on exit
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsLoaded(true))
              .catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label={ariaLabel}
      className={`relative w-full max-w-full aspect-video overflow-hidden bg-black p-0 m-0 border-0 shadow-none rounded-none ${className}`}
    >
      {/* HTML5 Native Video element - 16:9 horizontal format, full width, autoPlay muted loop */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover block border-0 p-0 m-0 outline-none rounded-none shadow-none transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Transición suave superior */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 sm:h-20 bg-gradient-to-b from-white to-transparent z-10" />
    </section>
  );
}
