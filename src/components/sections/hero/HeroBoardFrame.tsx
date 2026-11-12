import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Button = { text: string; href: string };

type Kpi = { label: string; value: string; delta?: string; trend?: number[] };

type FeatureItem = { icon: "laptop" | "calendar" | "shield" | "users"; title: string; subtitle: string };

type HeroBoardFrameProps = {
  tag?: string;
  title: string;
  highlightText?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  imageSrc: string;
  imageAlt?: string;
  kpis?: Kpi[];
  features?: FeatureItem[];
  introDelay?: number;
  ariaLabel?: string;
  className?: string;
};

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const;
const calm = { duration: 1.4, ease: [0.22, 1, 0.36, 1] } as const;
const BOARD_AT = 0.4;

const FeatureIcon = ({ name }: { name: FeatureItem["icon"] }) => {
  if (name === "laptop") {
    return (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
};

const HeroBoardFrame = ({
  tag,
  title,
  highlightText,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  imageAlt = "",
  features = [],
  introDelay = 0,
  ariaLabel,
  className,
}: HeroBoardFrameProps) => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });
  const imageY = useTransform(progress, [0, 1], ["0%", reduce ? "0%" : "5%"]);

  const appear = (y: number, delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { ...spring, delay: delay + introDelay } };

  return (
    <section
      ref={sectionRef}
      data-scene
      aria-label={ariaLabel ?? "Hero"}
      className={cn("relative isolate overflow-hidden bg-[#0F2755] pb-[clamp(3rem,6vw,5rem)] pt-[clamp(6rem,8vw,8rem)] text-white", className)}
    >
      {/* Cinematic Glowing Background Flares */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-radial from-blue-600/30 via-indigo-900/20 to-transparent blur-3xl" />
        <div className="absolute top-1/4 -left-32 size-[450px] rounded-full bg-radial from-[#F4B400]/15 via-blue-900/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-32 size-[500px] rounded-full bg-radial from-blue-500/20 via-blue-950/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-[var(--container)] flex-col items-center text-center">
        {tag && (
          <motion.div {...appear(24, 0)} className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-blue-950/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-300 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#F4B400] animate-pulse" />
            <span className="uppercase">{tag}</span>
          </motion.div>
        )}

        <motion.h1
          {...appear(32, 0.12)}
          className="mt-6 max-w-4xl font-['Montserrat'] font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-white"
        >
          {title}{" "}
          {highlightText && (
            <span className="block sm:inline text-[#F4B400] italic font-black relative drop-shadow-[0_0_25px_rgba(244,180,0,0.3)]">
              {highlightText}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F4B400] opacity-80" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C50 3 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </motion.h1>

        {description && (
          <motion.p {...appear(48, 0.35)} className="mt-6 max-w-2xl text-pretty font-['Inter'] text-base sm:text-lg leading-relaxed text-blue-100/90 font-normal">
            {description}
          </motion.p>
        )}

        {(primaryButton || secondaryButton) && (
          <motion.div {...appear(48, 0.5)} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {primaryButton && (
              <a
                href={primaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#0F2755] shadow-[0_0_25px_rgba(244,180,0,0.45)] transition-all duration-300 hover:bg-amber-300 hover:scale-105"
              >
                <span>{primaryButton.text}</span>
                <svg className="size-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
            {secondaryButton && (
              <a
                href={secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-blue-900/40 px-6 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-amber-400/50"
              >
                <svg className="size-4 text-[#F4B400]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{secondaryButton.text}</span>
              </a>
            )}
          </motion.div>
        )}
      </div>

      <div className="relative mx-auto mt-10 sm:mt-14 w-[var(--container)]">
        <motion.div
          data-hero-board
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: introDelay + BOARD_AT }}
          className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-blue-950/80 p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...calm, delay: introDelay + BOARD_AT }}
            className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-xl"
          >
            <MotionMedia
              src={imageSrc}
              alt={imageAlt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ y: imageY, scale: 1.08 }}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755] via-transparent to-transparent opacity-80" />

            {/* Video play badge overlay */}
            <a
              href="#contact-dark-form-card"
              className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/20 transition-all duration-300 hover:bg-blue-950/10 group"
            >
              <div className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-[#F4B400] text-[#0F2755] shadow-[0_0_30px_rgba(244,180,0,0.6)] transition-all duration-300 group-hover:scale-110">
                <svg className="size-8 ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-3 font-['Montserrat'] font-bold text-sm sm:text-base text-white tracking-wide drop-shadow-md">
                Ver video <span className="text-amber-300 font-normal text-xs block text-center">Conozca nuestra historia</span>
              </p>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom 4 Feature Cards Bar matching reference */}
        {features.length > 0 && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: introDelay + 0.6 }}
            className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-amber-400/20 bg-[#1B3A7A]/70 p-4 sm:p-6 backdrop-blur-xl shadow-xl"
          >
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-2 rounded-xl bg-blue-950/40 border border-amber-400/10 transition-all duration-300 hover:border-amber-400/30">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-900/80 border border-amber-400/20">
                  <FeatureIcon name={feat.icon} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-sm text-white">{feat.title}</h3>
                  <p className="font-['Inter'] text-xs text-blue-200/80 mt-0.5 leading-snug">{feat.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroBoardFrame;
