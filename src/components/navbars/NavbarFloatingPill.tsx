"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import useMenuDialog from "@/components/kit/useMenuDialog";

type NavItem = { name: string; href: string };

interface NavbarFloatingPillProps {
  brand: string;
  logoSrc?: string;
  navItems: NavItem[];
  cta?: { text: string; href: string };
  menuText?: string;
  closeText?: string;
  introDelay?: number;
}

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const;
const variantSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

const NavbarFloatingPill = ({ brand, logoSrc, navItems, cta, menuText = "Menu", closeText = "Close", introDelay = 0 }: NavbarFloatingPillProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useMenuDialog(open, panelRef, () => setOpen(false));

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <motion.nav
      aria-label="Main"
      initial={reduce ? false : { opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: introDelay }}
      className="fixed inset-x-0 top-[0.75rem] z-[60]"
    >
      <div
        className={`relative mx-auto w-[var(--container)] rounded-full transition-all duration-500 bg-[#0F2755]/95 text-white backdrop-blur-md ${solid ? "shadow-2xl border border-amber-400/30" : "shadow-xl border border-amber-400/20"}`}
      >
        <div className="flex h-[3.5rem] items-center justify-between gap-[var(--gap)] pl-[1rem] pr-[0.375rem] lg:pl-[1.25rem] lg:pr-[0.625rem]">
          <a href="#" aria-label={brand} className="flex min-h-[44px] min-w-0 items-center py-1">
            {logoSrc ? (
              <img src={logoSrc} alt={brand} loading="eager" decoding="async" className="h-[2.25rem] sm:h-[2.5rem] w-auto max-w-[220px] object-contain" />
            ) : (
              <div className="flex items-center gap-2">
                <span className="font-['Montserrat'] font-extrabold text-lg tracking-tight text-white">ENLACES</span>
                <span className="text-xs text-[#F4B400] font-medium hidden sm:inline">Educación en línea</span>
              </div>
            )}
          </a>

          <div className="hidden min-w-0 items-center gap-[clamp(0.75rem,2vw,1.75rem)] lg:flex">
            {navItems.map((item, i) => (
              <a
                key={`${i}-${item.name}`}
                href={item.href}
                className="whitespace-nowrap text-xs xl:text-sm font-semibold text-white/90 transition-all duration-300 hover:text-[#F4B400] hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-[0.5rem]">
            {cta && (
              <a
                href={cta.href}
                className="hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F4B400] px-5 py-2 text-xs font-extrabold text-[#0F2755] shadow-[0_0_18px_rgba(244,180,0,0.4)] transition-all duration-300 hover:bg-amber-300 hover:scale-105"
              >
                <span>{cta.text}</span>
                <svg className="size-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? closeText : menuText}
              className="relative flex size-[44px] items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-md lg:hidden"
            >
              <div aria-hidden="true" className="relative h-[8px] w-[18px]">
                <motion.div
                  initial={false}
                  animate={open ? { top: "50%", y: "-50%", rotate: 45 } : { top: "0%", y: "0%", rotate: 0 }}
                  transition={variantSpring}
                  className="absolute left-0 h-[1.5px] w-full rounded-full bg-current"
                />
                <motion.div
                  initial={false}
                  animate={open ? { top: "50%", y: "-50%", rotate: -45 } : { top: "100%", y: "-100%", rotate: 0 }}
                  transition={variantSpring}
                  className="absolute left-0 h-[1.5px] w-full rounded-full bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={menuText}
              data-lenis-prevent
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={reduce ? { duration: 0 } : variantSpring}
              className="overflow-hidden lg:absolute lg:right-0 lg:top-full lg:mt-[0.5rem] lg:w-[22rem] lg:rounded-[var(--radius-card)] lg:bg-[#1B3A7A] lg:text-white lg:border lg:border-amber-400/20 lg:hidden"
            >
              <div className="flex max-h-[calc(100svh-6rem)] flex-col gap-[1.5rem] overflow-y-auto px-[1rem] pb-[1.25rem] pt-[0.5rem] lg:px-[1.25rem] lg:pt-[1rem]">
                <div className="flex flex-col">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={`${i}-${item.name}`}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={reduce ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...spring, delay: 0.05 + i * 0.05 }}
                      className="py-[0.4rem] font-['Montserrat'] font-bold text-lg leading-[1.25] text-white hover:text-[#F4B400] transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                {cta && (
                  <a
                    href={cta.href}
                    onClick={() => setOpen(false)}
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#F4B400] px-5 py-3 text-sm font-extrabold text-[#0F2755] shadow-lg hover:bg-amber-300 lg:hidden"
                  >
                    {cta.text}
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavbarFloatingPill;
