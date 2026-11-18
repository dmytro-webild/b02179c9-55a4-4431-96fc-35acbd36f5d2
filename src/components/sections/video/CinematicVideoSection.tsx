import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
  const [isMuted, setIsMuted] = useState(true);

  // Scroll-based auto play on intersect / pause on exit
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = isMuted;

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
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label={ariaLabel}
      className={`bg-white pt-0 pb-12 sm:pb-16 lg:pb-20 border-0 shadow-none overflow-hidden ${className}`}
    >
      <div className="mx-auto w-[var(--container)] max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Columna izquierda: Texto (En móviles va primero) */}
          <div className="lg:col-span-7 flex flex-col justify-start text-left lg:pt-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/15 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] w-fit mb-6">
              <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
              Educación Flexible y Humana
            </div>

            <h2 className="font-heading font-extrabold text-[#0F2755] text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">
              Tu futuro está a un clic de distancia.
            </h2>

            <p className="font-sans text-[#475569] text-base sm:text-lg lg:text-xl leading-relaxed mb-0 max-w-2xl">
              Estudia desde donde estés, con horarios que se adaptan a tu vida, tecnología educativa y acompañamiento humano durante todo tu proceso.
            </p>
          </div>

          {/* Columna derecha: Video vertical 9:16 (+15% altura en escritorio: 690px) (En móviles ocupe todo el ancho disponible) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-full sm:max-w-md lg:w-[388px] lg:h-[690px] aspect-[9/16] border-0 shadow-none bg-transparent rounded-[12px] overflow-hidden flex items-center justify-center">
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
                className={`w-full h-full object-cover block border-0 p-0 m-0 outline-none shadow-none rounded-[12px] transition-opacity duration-700 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Botón discreto para activar el sonido en la esquina inferior izquierda */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
                className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#0F2755]/85 hover:bg-[#0F2755] text-white text-xs font-semibold px-3.5 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-md"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="size-4 text-[#F4B400]" />
                    <span>Activar sonido</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="size-4 text-[#F4B400]" />
                    <span>Silenciar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
