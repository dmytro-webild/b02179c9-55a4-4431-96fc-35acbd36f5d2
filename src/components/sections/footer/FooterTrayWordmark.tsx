import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href: string };

type FooterColumn = { title: string; links: FooterLink[] };

type FooterTrayWordmarkProps = {
  brand: string;
  logoSrc?: string;
  wordmark?: string;
  columns?: FooterColumn[];
  copyright?: string;
  topText?: string;
  ariaLabel?: string;
  className?: string;
};

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const;

const FooterTrayWordmark = ({ brand, logoSrc, wordmark, columns = [], copyright, topText = "Volver arriba", ariaLabel, className }: FooterTrayWordmarkProps) => {
  const reduce = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);
  const [scale, setScale] = useState(1);
  const mark = wordmark ?? brand;

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = measureRef.current;
    if (!box || !text) return;
    const fit = () => {
      const width = text.scrollWidth;
      if (width > 0) setScale(box.clientWidth / width);
    };
    fit();
    document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, [mark]);

  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { ...spring, delay } };

  const shown = columns.slice(0, 4);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer aria-label={ariaLabel ?? `${brand} footer`} className={cn("relative bg-background pt-[calc(var(--section-space)/2)] text-foreground", className)}>
      <div className="relative isolate mx-[var(--panel-inset)] mb-[var(--panel-inset)] overflow-hidden rounded-[var(--radius-card)] bg-[#0F2755] pt-[clamp(2.5rem,5vw,4.5rem)] text-white shadow-2xl border border-amber-400/20">
        <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-x-[var(--gap)] gap-y-[clamp(2.5rem,5vw,3.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Link to="/" aria-label={brand} className="flex w-fit min-w-0 items-start">
            {logoSrc ? (
              <Media src={logoSrc} alt={brand} loading="lazy" decoding="async" className="h-[clamp(2rem,3vw,2.5rem)] w-auto max-w-[60vw] object-contain" />
            ) : (
              <p className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] leading-[1.2] tracking-[var(--heading-tracking)] [overflow-wrap:anywhere]">{brand}</p>
            )}
          </Link>

          {shown.length > 0 && (
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-[var(--gap)] gap-y-[2.5rem] sm:grid-cols-4">
              {shown.map((column, i) => (
                <motion.div key={`${i}-${column.title}`} {...rise(0.1 + i * 0.08)} className="flex min-w-0 flex-col gap-[1rem]">
                  <h3 className="text-[length:var(--text-label)] leading-[1.5] text-[#F4B400] font-bold uppercase tracking-wider [overflow-wrap:anywhere]">{column.title}</h3>
                  <div className="flex flex-col gap-[0.5rem]">
                    {column.links.slice(0, 8).map((link, j) => {
                      if (link.href.startsWith("/")) {
                        return (
                          <Link
                            key={`${j}-${link.text}`}
                            to={link.href}
                            className="w-fit text-[length:var(--text-body)] leading-[1.5] text-blue-100/90 [overflow-wrap:anywhere] transition-all duration-300 hover:text-[#F4B400] hover:translate-x-0.5"
                          >
                            {link.text}
                          </Link>
                        );
                      }
                      return (
                        <a
                          key={`${j}-${link.text}`}
                          href={link.href}
                          className="w-fit text-[length:var(--text-body)] leading-[1.5] text-blue-100/90 [overflow-wrap:anywhere] transition-all duration-300 hover:text-[#F4B400] hover:translate-x-0.5"
                        >
                          {link.text}
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </nav>
          )}
        </div>

        <div className="mx-auto mt-[clamp(3rem,6vw,5rem)] flex w-[var(--container)] flex-wrap items-center justify-between gap-x-[var(--gap)] gap-y-[0.75rem] border-t border-blue-900/60 pt-[1.25rem]">
          {copyright && <p className="text-[length:var(--text-small)] leading-[1.5] text-blue-200/80">{copyright}</p>}
          <button onClick={scrollToTop} className="group flex items-center gap-[0.625rem] text-[length:var(--text-small)] leading-[1.5] text-blue-200 hover:text-[#F4B400] cursor-pointer">
            {topText}
            <div className="flex size-[2rem] items-center justify-center rounded-[0.625rem] bg-blue-900/60 text-[#F4B400] transition-colors duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0F2755]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[1rem]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V4M5 11l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div ref={boxRef} aria-hidden="true" className="relative mx-auto mt-[clamp(1.5rem,4vw,3rem)] w-[var(--container)] min-w-0">
          <p ref={measureRef} className="invisible absolute left-0 top-0 w-max whitespace-pre font-[family-name:var(--font-heading)] text-[length:var(--text-display)] font-semibold leading-none tracking-[-0.07em]">
            {mark}
          </p>
          <div style={{ fontSize: `calc(var(--text-display) * ${scale})` }} className="h-[0.78em] overflow-hidden">
            <motion.p
              initial={reduce ? false : { y: "0.3em" }}
              whileInView={{ y: "0em" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={spring}
              className="whitespace-pre bg-linear-to-b from-foreground to-foreground/35 bg-clip-text font-[family-name:var(--font-heading)] font-semibold leading-none tracking-[-0.07em] text-transparent"
            >
              {mark}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTrayWordmark;
