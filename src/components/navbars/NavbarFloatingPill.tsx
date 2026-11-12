"use client";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

const NavbarFloatingPill = ({
  brand,
  logoSrc,
  navItems,
  cta,
  menuText = "Menú",
  closeText = "Cerrar",
  introDelay = 0,
}: NavbarFloatingPillProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useMenuDialog(open, panelRef, () => setOpen(false));

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      setScrolled(window.scrollY > 15);
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

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={reduce ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: introDelay }}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,39,85,0.06)] py-2.5 sm:py-3"
          : "border-b border-slate-200/60 py-3.5 sm:py-4"
      }`}
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4 xl:gap-8">
          
          {/* Logo oficial a color */}
          <Link
            to="/"
            aria-label={brand}
            className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={brand}
                loading="eager"
                decoding="async"
                className="h-[2.85rem] sm:h-[3.25rem] xl:h-[3.5rem] w-auto max-w-[220px] sm:max-w-[280px] xl:max-w-[320px] object-contain"
              />
            ) : (
              <div className="flex flex-col justify-center leading-none">
                <span className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0F2755]">
                  ENLACES
                </span>
                <span className="text-[10px] sm:text-xs text-[#0F2755] font-bold tracking-wider uppercase mt-0.5">
                  Educación en línea
                </span>
              </div>
            )}
          </Link>

          {/* Menú horizontal en azul oscuro para escritorio */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:gap-5 2xl:gap-7 xl:flex px-2">
            {navItems.map((item, i) => {
              if (item.href.startsWith("/")) {
                return (
                  <NavLink
                    key={`${i}-${item.name}`}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      `relative group shrink-0 whitespace-nowrap py-1 font-['Montserrat'] text-[14px] 2xl:text-[15px] font-semibold transition-colors duration-200 ${
                        isActive ? "text-[#1B3A7A]" : "text-[#0F2755] hover:text-[#1B3A7A]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>
                        <span
                          className={`absolute inset-x-0 -bottom-0.5 h-[2.5px] bg-[#F4B400] transition-transform duration-300 ease-out rounded-full ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              }
              return (
                <a
                  key={`${i}-${item.name}`}
                  href={item.href}
                  className="relative group shrink-0 whitespace-nowrap py-1 font-['Montserrat'] text-[14px] 2xl:text-[15px] font-semibold text-[#0F2755] transition-colors duration-200 hover:text-[#1B3A7A]"
                >
                  <span>{item.name}</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-[2.5px] scale-x-0 bg-[#F4B400] transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full" />
                </a>
              );
            })}
          </div>

          {/* Botón dorado y menú hamburguesa en móvil */}
          <div className="flex shrink-0 items-center gap-3 xl:gap-4">
            {cta && (
              cta.href.startsWith("/") ? (
                <Link
                  to={cta.href}
                  className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-5 py-2.5 sm:px-6 sm:py-3 font-['Montserrat'] font-bold text-xs sm:text-sm text-[#0F2755] shadow-[0_4px_14px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-[#e0a400] hover:scale-105 hover:shadow-[0_6px_20px_rgba(244,180,0,0.45)] whitespace-nowrap"
                >
                  <span>{cta.text}</span>
                  <svg className="size-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ) : (
                <a
                  href={cta.href}
                  className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-5 py-2.5 sm:px-6 sm:py-3 font-['Montserrat'] font-bold text-xs sm:text-sm text-[#0F2755] shadow-[0_4px_14px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-[#e0a400] hover:scale-105 hover:shadow-[0_6px_20px_rgba(244,180,0,0.45)] whitespace-nowrap"
                >
                  <span>{cta.text}</span>
                  <svg className="size-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )
            )}

            {/* Menú hamburguesa para móvil */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? closeText : menuText}
              className="relative flex size-[42px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0F2755] transition-colors hover:bg-slate-100 xl:hidden"
            >
              <div aria-hidden="true" className="relative h-[10px] w-[20px]">
                <motion.div
                  initial={false}
                  animate={open ? { top: "50%", y: "-50%", rotate: 45 } : { top: "0%", y: "0%", rotate: 0 }}
                  transition={variantSpring}
                  className="absolute left-0 h-[2px] w-full rounded-full bg-[#0F2755]"
                />
                <motion.div
                  initial={false}
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[50%] -translate-y-1/2 h-[2px] w-full rounded-full bg-[#0F2755]"
                />
                <motion.div
                  initial={false}
                  animate={open ? { top: "50%", y: "-50%", rotate: -45 } : { top: "100%", y: "-100%", rotate: 0 }}
                  transition={variantSpring}
                  className="absolute left-0 h-[2px] w-full rounded-full bg-[#0F2755]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móvil */}
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
            className="overflow-hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl xl:hidden shadow-xl"
          >
            <div className="mx-auto flex max-h-[calc(100svh-5rem)] flex-col gap-4 overflow-y-auto px-6 py-6 w-full max-w-[1536px]">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, i) => {
                  if (item.href.startsWith("/")) {
                    return (
                      <NavLink
                        key={`${i}-${item.name}`}
                        to={item.href}
                        end={item.href === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-xl px-4 py-3 font-['Montserrat'] font-semibold text-base transition-colors ${
                            isActive ? "bg-slate-100 text-[#1B3A7A] font-bold" : "text-[#0F2755] hover:bg-slate-50 hover:text-[#1B3A7A]"
                          }`
                        }
                      >
                        <span>{item.name}</span>
                        <svg className="size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </NavLink>
                    );
                  }
                  return (
                    <motion.a
                      key={`${i}-${item.name}`}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...spring, delay: 0.04 + i * 0.04 }}
                      className="flex items-center justify-between rounded-xl px-4 py-3 font-['Montserrat'] font-semibold text-base text-[#0F2755] hover:bg-slate-50 hover:text-[#1B3A7A] transition-colors"
                    >
                      <span>{item.name}</span>
                      <svg className="size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </motion.a>
                  );
                })}
              </div>

              {cta && (
                <div className="pt-2 sm:hidden">
                  {cta.href.startsWith("/") ? (
                    <Link
                      to={cta.href}
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-6 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] shadow-md hover:bg-[#e0a400] transition-colors"
                    >
                      <span>{cta.text}</span>
                      <svg className="size-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={cta.href}
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-6 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] shadow-md hover:bg-[#e0a400] transition-colors"
                    >
                      <span>{cta.text}</span>
                      <svg className="size-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarFloatingPill;
