"use client";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

const ofertaCategories = [
  {
    title: "Bachillerato en 4 meses",
    href: "/oferta/bachillerato-4-meses",
    tag: "Medio Superior",
    description: "Acredita tu preparatoria de forma intensiva en 4 meses con validez oficial SEP.",
    badgeGold: "Acelerado SEP",
  },
  {
    title: "Bachillerato en 18 meses",
    href: "/oferta/bachillerato-18-meses",
    tag: "Medio Superior",
    description: "Programa flexible de preparatoria diseñado para estudiar a tu propio ritmo.",
    badgeGold: "Validez Oficial SEP",
  },
  {
    title: "Licenciaturas",
    href: "/oferta-educativa/licenciaturas",
    tag: "Nivel Superior",
    description: "Carreras ejecutivas universitarias diseñadas para adultos en activo.",
    badgeGold: "RVOE Garantizado",
  },
  {
    title: "Titulación por Experiencia Laboral",
    href: "/oferta/titulacion-por-experiencia-laboral",
    tag: "Acreditación Ágil",
    description: "Valida tu trayectoria profesional acumulada con título formal.",
    badgeGold: "Acreditación Directa",
  },
  {
    title: "Maestrías",
    href: "/oferta-educativa/maestrias",
    tag: "Posgrados",
    description: "Desarrolla visión estratégica de alta dirección y liderazgo gerencial.",
    badgeGold: "Posgrado Directivo",
  },
  {
    title: "Diplomados",
    href: "/oferta-educativa/diplomados",
    tag: "Especialización",
    description: "Actualización técnica intensiva de corta duración con validez curricular.",
    badgeGold: "Validez Curricular",
  },
  {
    title: "Inglés",
    href: "/oferta-educativa/ingles",
    tag: "Idioma Global",
    description: "Programa de idioma conversacional y corporativo para profesionales.",
    badgeGold: "Dominio Profesional",
  },
];

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
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileOfertaExpanded, setMobileOfertaExpanded] = useState(false);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useMenuDialog(open, panelRef, () => setOpen(false));

  // Close megamenu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setOpen(false);
  }, [location.pathname]);

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

  const handleMouseEnterMega = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  // Divide navigation items into 2 rows for desktop layout
  // Fila 1: Nosotros, Oferta educativa, Empresas y convenios, Experiencia ENLACES
  // Fila 2: Testimonios y egresados, ENLACES 360, Contacto
  const row1Items = navItems.filter((item) =>
    ["nosotros", "oferta educativa", "empresas y convenios", "experiencia enlaces"].includes(
      item.name.trim().toLowerCase()
    )
  );
  const row2Items = navItems.filter((item) =>
    ["testimonios y egresados", "sistema operativo enlaces", "enlaces 360", "contacto"].includes(
      item.name.trim().toLowerCase()
    )
  );

  const finalRow1 = row1Items.length > 0 ? row1Items : navItems.slice(0, 4);
  const finalRow2 = row2Items.length > 0 ? row2Items : navItems.slice(4);

  const renderDesktopNavItem = (item: NavItem, keyPrefix: string) => {
    const isOferta = item.name.toLowerCase().includes("oferta");

    if (isOferta) {
      const isOfertaActive = location.pathname.startsWith("/oferta-educativa");
      return (
        <div
          key={`${keyPrefix}-${item.name}`}
          className="relative group shrink-0"
          onMouseEnter={handleMouseEnterMega}
          onMouseLeave={handleMouseLeaveMega}
        >
          <NavLink
            to={item.href}
            className={`relative inline-flex items-center gap-1 whitespace-nowrap py-0.5 font-['Montserrat'] text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] font-semibold transition-colors duration-200 ${
              isOfertaActive || megaMenuOpen ? "text-[#1B3A7A]" : "text-[#0F2755] hover:text-[#1B3A7A]"
            }`}
          >
            <span>{item.name}</span>
            <svg
              className={`size-3 text-[#0F2755] transition-transform duration-200 ${megaMenuOpen ? "rotate-180 text-[#F4B400]" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <span
              className={`absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F4B400] transition-transform duration-300 ease-out rounded-full ${
                isOfertaActive || megaMenuOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </NavLink>
        </div>
      );
    }

    if (item.href.startsWith("/")) {
      return (
        <NavLink
          key={`${keyPrefix}-${item.name}`}
          to={item.href}
          end={item.href === "/"}
          className={({ isActive }) =>
            `relative group shrink-0 whitespace-nowrap py-0.5 font-['Montserrat'] text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] font-semibold transition-colors duration-200 ${
              isActive ? "text-[#1B3A7A]" : "text-[#0F2755] hover:text-[#1B3A7A]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{item.name}</span>
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F4B400] transition-transform duration-300 ease-out rounded-full ${
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
        key={`${keyPrefix}-${item.name}`}
        href={item.href}
        className="relative group shrink-0 whitespace-nowrap py-0.5 font-['Montserrat'] text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] font-semibold text-[#0F2755] transition-colors duration-200 hover:text-[#1B3A7A]"
      >
        <span>{item.name}</span>
        <span className="absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-[#F4B400] transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full" />
      </a>
    );
  };

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={reduce ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: introDelay }}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,39,85,0.06)] py-2 sm:py-2.5"
          : "border-b border-slate-200/60 py-2.5 sm:py-3"
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-5 xl:px-6 2xl:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
          
          {/* Logotipo ENLACES - Aumentado un 40% en pantallas grandes (lg/xl) y centrado verticalmente */}
          <Link
            to="/"
            aria-label={brand}
            className="flex shrink-0 items-center transition-opacity hover:opacity-90 my-auto"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={brand}
                loading="eager"
                decoding="async"
                className="h-[2.5rem] sm:h-[2.85rem] lg:h-[3.9rem] xl:h-[4.34rem] w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[310px] xl:max-w-[364px] object-contain transition-all duration-300"
              />
            ) : (
              <div className="flex flex-col justify-center leading-none">
                <span className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl lg:text-[1.95rem] xl:text-[2.25rem] tracking-tight text-[#0F2755]">
                  ENLACES
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] text-[#0F2755] font-bold tracking-wider uppercase mt-0.5">
                  Educación en línea
                </span>
              </div>
            )}
          </Link>

          {/* Menú principal exclusivamente para escritorio distribuido en 2 filas */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-1 xl:gap-1.5 px-2 min-w-0 flex-1 my-auto">
            {/* Fila 1: Nosotros, Oferta educativa, Empresas y convenios, Experiencia ENLACES */}
            <div className="flex items-center justify-center gap-3.5 xl:gap-5 2xl:gap-6">
              {finalRow1.map((item) => renderDesktopNavItem(item, "r1"))}
            </div>

            {/* Fila 2: Testimonios y egresados, Sistema Operativo ENLACES, Contacto */}
            <div className="flex items-center justify-center gap-3.5 xl:gap-5 2xl:gap-6">
              {finalRow2.map((item) => renderDesktopNavItem(item, "r2"))}
            </div>
          </div>

          {/* Botón dorado centrado verticalmente (visible en tabletas y escritorio) + Menú hamburguesa (visible en tabletas y móviles) */}
          <div className="flex shrink-0 items-center gap-2 xl:gap-3 my-auto">
            {cta && (
              cta.href.startsWith("/") ? (
                <Link
                  to={cta.href}
                  className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-4 py-2 sm:px-5 sm:py-2.5 font-['Montserrat'] font-bold text-xs xl:text-sm text-[#0F2755] shadow-[0_4px_14px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-[#e0a400] hover:scale-105 hover:shadow-[0_6px_20px_rgba(244,180,0,0.45)] whitespace-nowrap"
                >
                  <span>{cta.text}</span>
                  <svg className="size-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ) : (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-4 py-2 sm:px-5 sm:py-2.5 font-['Montserrat'] font-bold text-xs xl:text-sm text-[#0F2755] shadow-[0_4px_14px_rgba(244,180,0,0.35)] transition-all duration-300 hover:bg-[#e0a400] hover:scale-105 hover:shadow-[0_6px_20px_rgba(244,180,0,0.45)] whitespace-nowrap"
                >
                  <span>{cta.text}</span>
                  <svg className="size-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )
            )}

            {/* Menú hamburguesa para tabletas y móviles */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? closeText : menuText}
              className="relative flex size-[40px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0F2755] transition-colors hover:bg-slate-100 lg:hidden"
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

      {/* MEGAMENÚ DESPLEGABLE ELEGANTE PARA ESCRITORIO */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseEnter={handleMouseEnterMega}
            onMouseLeave={handleMouseLeaveMega}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[880px] 2xl:w-[980px] rounded-3xl bg-white shadow-[0_25px_60px_rgba(15,39,85,0.18)] border border-slate-200/90 overflow-hidden z-50 hidden lg:block"
          >
            {/* Gold Accent Top Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />

            <div className="p-6 xl:p-7">
              {/* Megamenu Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#1B3A7A] bg-[#1B3A7A]/5 px-3 py-0.5 rounded-full border border-[#1B3A7A]/15">
                    <span className="size-1.5 rounded-full bg-[#F4B400]" />
                    Oferta Académica ENLACES
                  </span>
                  <h3 className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755] mt-1">
                    Categorías y Áreas de Estudio
                  </h3>
                </div>
                <Link
                  to="/oferta-educativa"
                  onClick={() => setMegaMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] px-4 py-2 text-xs font-extrabold text-[#0F2755] shadow-sm hover:bg-amber-300 transition-all hover:scale-105"
                >
                  <span>Ver portal general</span>
                  <svg className="size-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* 7 Grid Categories */}
              <div className="grid grid-cols-3 gap-3.5">
                {ofertaCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={cat.href}
                    onClick={() => setMegaMenuOpen(false)}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-slate-50/40 p-4 transition-all duration-300 hover:border-[#F4B400] hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F2755] bg-[#F4B400] px-2 py-0.5 rounded-full shadow-2xs">
                          {cat.badgeGold}
                        </span>
                        <svg
                          className="size-4 text-slate-300 group-hover:text-[#F4B400] transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                      <h4 className="mt-3 font-['Montserrat'] font-extrabold text-base text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors leading-snug">
                        {cat.title}
                      </h4>
                      <p className="mt-1.5 font-['Inter'] text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-bold text-[#1B3A7A] group-hover:text-[#F4B400]">
                      <span>Estructura de programas</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Megamenu Bottom Banner */}
              <div className="mt-5 p-3.5 rounded-2xl bg-[#0F2755] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#F4B400] text-[#0F2755] font-bold text-sm">
                    ✓
                  </div>
                  <p className="font-['Inter'] text-xs text-blue-100">
                    <strong className="text-white">Validez Oficial RVOE.</strong> Estructura adaptada para la futura incorporación de carreras y especializaciones.
                  </p>
                </div>
                <Link
                  to="/contacto"
                  onClick={() => setMegaMenuOpen(false)}
                  className="shrink-0 text-xs font-bold text-[#F4B400] hover:underline px-3 py-1"
                >
                  Solicitar asesoría →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menú desplegable para móvil y tabletas con navegación jerárquica */}
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
            className="overflow-hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl lg:hidden shadow-xl"
          >
            <div className="mx-auto flex max-h-[calc(100svh-5rem)] flex-col gap-4 overflow-y-auto px-6 py-6 w-full max-w-[1600px]">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, i) => {
                  const isOferta = item.name.toLowerCase().includes("oferta");

                  if (isOferta) {
                    return (
                      <div key={`${i}-${item.name}`} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setMobileOfertaExpanded((prev) => !prev)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 font-['Montserrat'] font-semibold text-base transition-colors ${
                            mobileOfertaExpanded ? "bg-slate-100 text-[#1B3A7A] font-bold" : "text-[#0F2755] hover:bg-slate-50 hover:text-[#1B3A7A]"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{item.name}</span>
                            <span className="text-[10px] bg-[#F4B400] text-[#0F2755] font-extrabold px-2 py-0.5 rounded-full uppercase">
                              7 Áreas
                            </span>
                          </span>
                          <svg
                            className={`size-4 text-slate-500 transition-transform duration-200 ${mobileOfertaExpanded ? "rotate-180 text-[#F4B400]" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {mobileOfertaExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-4 my-1 border-l-2 border-[#F4B400] space-y-1 ml-4"
                            >
                              <NavLink
                                to="/oferta-educativa"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center justify-between rounded-lg px-3 py-2 text-xs font-['Montserrat'] font-bold uppercase tracking-wider ${
                                    isActive ? "text-[#1B3A7A] bg-amber-50" : "text-[#0F2755] hover:bg-slate-50"
                                  }`
                                }
                              >
                                <span>Ver portal general de oferta →</span>
                              </NavLink>

                              {ofertaCategories.map((cat, catIdx) => (
                                <NavLink
                                  key={catIdx}
                                  to={cat.href}
                                  onClick={() => setOpen(false)}
                                  className={({ isActive }) =>
                                    `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-['Montserrat'] font-semibold transition-colors ${
                                      isActive ? "bg-slate-100 text-[#1B3A7A] font-bold" : "text-[#0F2755] hover:bg-slate-50 hover:text-[#1B3A7A]"
                                    }`
                                  }
                                >
                                  <span>{cat.title}</span>
                                  <span className="text-[10px] text-[#0F2755] font-extrabold bg-[#F4B400]/20 border border-[#F4B400]/40 px-2 py-0.5 rounded-md">
                                    {cat.tag}
                                  </span>
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

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
                      target="_blank"
                      rel="noopener noreferrer"
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
