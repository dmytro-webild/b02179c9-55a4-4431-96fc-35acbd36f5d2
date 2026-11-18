import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Button = { text: string; href: string };

type FeatureItem = { icon: "laptop" | "calendar" | "shield" | "users"; title: string; subtitle: string };

type HeroBoardFrameProps = {
  tag?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  imageSrc?: string;
  imageAlt?: string;
  features?: FeatureItem[];
  introDelay?: number;
  ariaLabel?: string;
  className?: string;
};

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const;

const FeatureIcon = ({ name }: { name: FeatureItem["icon"] }) => {
  if (name === "laptop") {
    return (
      <svg className="size-5 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className="size-5 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className="size-5 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className="size-5 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
};

const ENLACES_WHEEL_SRC = "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794456185254-3zlenx22.png";

const HeroBoardFrame = ({
  tag = "EDUCACIÓN EN LÍNEA",
  description,
  primaryButton,
  secondaryButton,
  imageSrc = ENLACES_WHEEL_SRC,
  imageAlt = "Rueda institucional ENLACES",
  features = [],
  introDelay = 0,
  ariaLabel,
  className,
}: HeroBoardFrameProps) => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const appear = (y: number, delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { ...spring, delay: delay + introDelay } };

  return (
    <section
      ref={sectionRef}
      data-scene
      aria-label={ariaLabel ?? "Portada principal"}
      className={cn(
        "relative isolate min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden bg-white text-[#0F2755] pt-24 pb-6 sm:pb-8 lg:pt-28 lg:pb-8",
        className
      )}
    >
      <div className="relative mx-auto w-[var(--container)]">
        {/* Main Hero Row: Text composition on left, Wheel watermark on right (vertically centered with main text block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Text composition */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-10 max-w-3xl lg:max-w-none">
            {tag && (
              <motion.div
                {...appear(20, 0)}
                className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold tracking-wider text-[#1B3A7A]"
              >
                <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
                <span className="uppercase">{tag}</span>
              </motion.div>
            )}

            {/* Exact Phrase Required by User */}
            <motion.h1
              {...appear(28, 0.1)}
              className="mt-6 font-['Montserrat'] font-extrabold italic text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-[#0F2755]"
            >
              <span className="block text-[#0F2755]">La educación</span>
              <span className="block text-[#0F2755]">es el camino,</span>
              <span className="block text-[#F4B400] drop-shadow-[0_2px_15px_rgba(244,180,0,0.3)]">no el destino.</span>
            </motion.h1>

            {description && (
              <motion.p
                {...appear(32, 0.25)}
                className="mt-6 max-w-2xl font-['Inter'] text-base sm:text-lg leading-relaxed text-slate-600 font-normal"
              >
                {description}
              </motion.p>
            )}

            {/* Action Buttons */}
            {(primaryButton || secondaryButton) && (
              <motion.div {...appear(36, 0.38)} className="mt-8 flex flex-wrap items-center gap-4">
                {primaryButton && (
                  primaryButton.href.startsWith("/") ? (
                    <Link
                      to={primaryButton.href}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F4B400] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-[#0F2755] shadow-[0_10px_25px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(244,180,0,0.45)] active:translate-y-0 active:scale-95 cursor-pointer"
                    >
                      <span>{primaryButton.text}</span>
                      <svg className="size-4 stroke-[3] group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={primaryButton.href}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F4B400] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-[#0F2755] shadow-[0_10px_25px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(244,180,0,0.45)] active:translate-y-0 active:scale-95 cursor-pointer"
                    >
                      <span>{primaryButton.text}</span>
                      <svg className="size-4 stroke-[3] group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  )
                )}
                {secondaryButton && (
                  secondaryButton.href.startsWith("/") ? (
                    <Link
                      to={secondaryButton.href}
                      className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F2755] bg-transparent px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold text-[#0F2755] transition-all duration-300 hover:bg-[#0F2755] hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer"
                    >
                      <span>{secondaryButton.text}</span>
                      <svg className="size-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={secondaryButton.href}
                      className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F2755] bg-transparent px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold text-[#0F2755] transition-all duration-300 hover:bg-[#0F2755] hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer"
                    >
                      <span>{secondaryButton.text}</span>
                      <svg className="size-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  )
                )}
              </motion.div>
            )}
          </div>

          {/* Right Column - Institutional Wheel Watermark (~20% larger, vertically centered with text block) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              {...appear(40, 0.3)}
              className="relative flex items-center justify-center pointer-events-none select-none"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-[335px] sm:w-[455px] md:w-[530px] lg:w-[575px] xl:w-[625px] h-auto aspect-square object-contain mix-blend-multiply opacity-[0.18]"
              />
            </motion.div>
          </div>
        </div>

        {/* Features strip integrated below main block */}
        {features.length > 0 && (
          <motion.div
            {...appear(30, 0.5)}
            className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 pt-6 w-full"
          >
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#1B3A7A]/10">
                    <FeatureIcon name={feat.icon} />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xs sm:text-sm text-[#0F2755]">{feat.title}</h3>
                </div>
                <p className="font-['Inter'] text-[11px] sm:text-xs text-slate-500 leading-tight pl-9">{feat.subtitle}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroBoardFrame;
