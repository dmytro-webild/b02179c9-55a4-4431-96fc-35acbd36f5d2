import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";

export interface ProgramItem {
  categoryKey?: "bachillerato" | "licenciaturas" | "titulacion" | "maestrias" | "diplomados" | "ingles";
  title: string;
  tag: string;
  description: string;
  highlights?: string[];
  href?: string;
  imageSrc: string;
  imageAlt?: string;
  isFeatured?: boolean;
  highlightLabel?: string;
}

interface EducationalOfferSectionProps {
  badgeTag?: string;
  mainTitle?: string;
  secondaryTitle?: string;
  description?: string;
  programs?: ProgramItem[];
  linkLabel?: string;
  className?: string;
}

const defaultPrograms: ProgramItem[] = [
  {
    categoryKey: "titulacion",
    title: "Titulación por Experiencia Laboral",
    tag: "Acreditación Ágil",
    highlightLabel: "Destacado • Experiencia Profesional",
    description: "Acredita formalmente tus conocimientos y trayectoria profesional acumulada mediante evaluación directa de competencias laborales.",
    href: "/oferta/titulacion-por-experiencia-laboral",
    imageSrc: "https://img.b2bpic.net/free-photo/businessman-using-digital-tablet-writing-clipboard-with-pen-gray-desk_23-2148052592.jpg?_wi=1",
    imageAlt: "Titulación y acreditación por experiencia laboral",
    isFeatured: true
  },
  {
    categoryKey: "bachillerato",
    title: "Bachillerato en 4 meses",
    tag: "Acreditación Acelerada",
    highlightLabel: "Validez Oficial SEP",
    description: "Concluye tu preparatoria de forma intensiva en tan solo 4 meses con acompañamiento personalizado y certificado oficial.",
    href: "/oferta/bachillerato-4-meses",
    imageSrc: "https://img.b2bpic.net/free-photo/graduation-high-school-university-concept_185193-110147.jpg?_wi=1",
    imageAlt: "Estudiantes de Bachillerato en 4 meses",
    isFeatured: true
  },
  {
    categoryKey: "bachillerato",
    title: "Bachillerato en 18 meses",
    tag: "Modalidad Flexible",
    highlightLabel: "Validez Oficial SEP",
    description: "Programa flexible de preparatoria en 18 meses, diseñado para estudiar a tu propio ritmo sin descuidar tu empleo.",
    href: "/oferta/bachillerato-18-meses",
    imageSrc: "https://img.b2bpic.net/free-photo/young-students-studying-table_23-2147850725.jpg?_wi=1",
    imageAlt: "Estudiantes de Bachillerato en 18 meses",
    isFeatured: true
  },
  {
    categoryKey: "licenciaturas",
    title: "Licenciaturas Ejecutivas",
    tag: "Licenciatura",
    highlightLabel: "RVOE Garantizado",
    description: "Obtén tu título profesional universitario con clases modulares y flexibilidad horaria adaptada para adultos en activo.",
    href: "/oferta-educativa/licenciaturas",
    imageSrc: "https://img.b2bpic.net/free-photo/front-view-floating-books-connected-by-ladders-education-day_23-2149241039.jpg?_wi=1",
    imageAlt: "Licenciaturas ejecutivas con reconocimiento oficial"
  },
  {
    categoryKey: "maestrias",
    title: "Maestrías Especializadas",
    tag: "Posgrado Directivo",
    highlightLabel: "Liderazgo Corporativo",
    description: "Desarrolla competencias estratégicas de alta dirección orientadas a la gestión estratégica de negocios y proyectos.",
    href: "/oferta-educativa/maestrias",
    imageSrc: "https://img.b2bpic.net/free-photo/factory-investors-review-documentation-mockup-notebook_482257-123446.jpg?_wi=1",
    imageAlt: "Maestrías y posgrados de alta dirección"
  },
  {
    categoryKey: "diplomados",
    title: "Diplomados con Validez",
    tag: "Especialización",
    highlightLabel: "Actualización Continua",
    description: "Especialización técnica intensiva con validez curricular diseñada para impulsar de inmediato tus metas profesionales.",
    href: "/oferta-educativa/diplomados",
    imageSrc: "https://img.b2bpic.net/free-photo/young-students-studying-table_23-2147850725.jpg?_wi=2",
    imageAlt: "Diplomados y cursos de actualización profesional"
  },
  {
    categoryKey: "ingles",
    title: "Programa de Inglés",
    tag: "Idioma Global",
    highlightLabel: "Dominio Profesional",
    description: "Desarrolla fluidez conversacional e inglés corporativo de alto nivel con un plan enfocado al mundo laboral actual.",
    href: "/oferta-educativa/ingles",
    imageSrc: "https://img.b2bpic.net/free-photo/smiley-people-book-club-side-view_23-2150059042.jpg?_wi=1",
    imageAlt: "Programa de inglés profesional y corporativo"
  }
];

export default function EducationalOfferSection({
  badgeTag = "Oferta Educativa de ENLACES",
  mainTitle = "El mundo está a tu alcance",
  secondaryTitle = "El siguiente paso depende de ti",
  description = "Descubre nuestros programas académicos con modalidades flexibles diseñados para acelerar tu crecimiento profesional con validez oficial.",
  programs = defaultPrograms,
  linkLabel = "Solicita información",
  className = ""
}: EducationalOfferSectionProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Helper to resolve card composition and layout
  const getCardStyle = (program: ProgramItem) => {
    const key = program.categoryKey;
    const titleLower = program.title.toLowerCase();

    const isTitulacion =
      key === "titulacion" ||
      titleLower.includes("titulación") ||
      titleLower.includes("experiencia");

    const isBachillerato =
      key === "bachillerato" ||
      titleLower.includes("bachillerato") ||
      titleLower.includes("preparatoria");

    if (isTitulacion) {
      return {
        variant: "titulacion",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-12",
      };
    }

    if (isBachillerato) {
      return {
        variant: "bachillerato",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-6",
      };
    }

    return {
      variant: "standard",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-3",
    };
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Oferta educativa de ENLACES"
      className={`relative bg-white py-20 sm:py-28 text-[#0F2755] overflow-hidden ${className}`}
    >
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 size-[500px] rounded-full bg-[#F4B400]/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 size-[500px] rounded-full bg-[#1B3A7A]/5 blur-3xl" />
      </div>

      <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
        {/* Header Block with animations */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {badgeTag && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
              <span>{badgeTag}</span>
            </div>
          )}

          {/* Main Title: Montserrat 800, Institutional Blue */}
          <h2 className="mt-5 font-['Montserrat'] font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#0F2755] text-balance">
            {mainTitle}
            <span className="text-[#F4B400]">.</span>
          </h2>

          {/* Secondary Title */}
          <p className="mt-3 font-['Montserrat'] font-extrabold text-xl sm:text-3xl text-[#1B3A7A] tracking-tight">
            {secondaryTitle}
          </p>

          {/* Gold Decorative Line */}
          <div className="my-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />

          {description && (
            <p className="max-w-xl font-['Inter'] text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
              {description}
            </p>
          )}
        </motion.div>

        {/* Editorial Modern Bento Grid of 6 Categories */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {programs.map((program, index) => {
              const { variant, colSpan } = getCardStyle(program);

              return (
                <motion.div
                  key={`${index}-${program.title}`}
                  initial={reduce ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (index % 4) * 0.1
                  }}
                  className={`${colSpan} flex`}
                >
                  {/* VARIANT 1: DESTACADO - Titulación por Experiencia Laboral */}
                  {variant === "titulacion" ? (
                    <Link
                      to={program.href || "/contacto"}
                      className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#0F2755] p-6 sm:p-8 md:p-10 text-white shadow-xl border border-slate-200/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0F2755]/25 hover:border-[#F4B400]"
                    >
                      {/* Full-bleed background photo with rich gradient overlay */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <MotionMedia
                          src={program.imageSrc}
                          alt={program.imageAlt || program.title}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover opacity-45 transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755] via-[#0F2755]/80 to-[#0F2755]/30" />
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
                      </div>

                      {/* Card Header Tag Row */}
                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4B400] px-3.5 py-1 text-xs font-extrabold text-[#0F2755] shadow-md uppercase tracking-wider">
                          <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {program.highlightLabel || "Destacado"}
                        </span>
                        <span className="rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 text-xs font-bold text-white">
                          {program.tag}
                        </span>
                      </div>

                      {/* Card Content Footer */}
                      <div className="relative z-10 mt-20 sm:mt-24 flex flex-col justify-end">
                        <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug group-hover:text-[#F4B400] transition-colors duration-300">
                          {program.title}
                        </h3>

                        <p className="mt-3 font-['Inter'] text-sm sm:text-base leading-relaxed text-slate-200 max-w-xl">
                          {program.description}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-[#F4B400]">
                            {linkLabel}
                          </span>
                          <div className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-[#F4B400] text-[#0F2755] shadow-lg transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                            <svg
                              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : variant === "bachillerato" ? (
                    /* VARIANT 2: DESTACADO - Bachillerato General */
                    <Link
                      to={program.href || "/contacto"}
                      className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-white border-2 border-[#F4B400]/60 p-2.5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F4B400] hover:shadow-2xl hover:shadow-[#1B3A7A]/10"
                    >
                      {/* Top photo hero container */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                        <MotionMedia
                          src={program.imageSrc}
                          alt={program.imageAlt || program.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/80 via-[#0F2755]/20 to-transparent" />

                        {/* Badges on image */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#1B3A7A] border border-[#F4B400]/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
                            {program.tag}
                          </span>
                        </div>
                        {program.highlightLabel && (
                          <span className="absolute bottom-3 left-3 rounded-full bg-[#F4B400] px-3 py-1 text-xs font-extrabold text-[#0F2755] shadow-md">
                            {program.highlightLabel}
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                        <div>
                          <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl text-[#0F2755] leading-snug group-hover:text-[#1B3A7A] transition-colors duration-300">
                            {program.title}
                          </h3>

                          <p className="mt-2.5 font-['Inter'] text-sm leading-relaxed text-slate-600">
                            {program.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors">
                            {linkLabel}
                          </span>
                          <div className="flex size-10 items-center justify-center rounded-full bg-[#1B3A7A] text-white shadow-md transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0F2755] group-hover:scale-110">
                            <svg
                              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* VARIANT 3: STANDARD EDITORIAL CATEGORY CARDS (Licenciaturas, Maestrías, Diplomados, Inglés) */
                    <Link
                      to={program.href || "/contacto"}
                      className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2.5 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F4B400]/60 hover:shadow-xl hover:shadow-[#1B3A7A]/10"
                    >
                      {/* Top gold line accent on hover */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      <div>
                        {/* Image protagonist container */}
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-100">
                          <MotionMedia
                            src={program.imageSrc}
                            alt={program.imageAlt || program.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                          {/* Category Tag Badge */}
                          {program.tag && (
                            <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 px-3 py-1 text-xs font-extrabold text-[#0F2755] shadow-sm">
                              {program.tag}
                            </span>
                          )}
                        </div>

                        {/* Content text */}
                        <div className="p-4 sm:p-5">
                          <h3 className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl text-[#0F2755] leading-snug group-hover:text-[#1B3A7A] transition-colors duration-300">
                            {program.title}
                          </h3>

                          <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-slate-600 line-clamp-3">
                            {program.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer with Navigation Arrow */}
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors">
                          {linkLabel}
                        </span>
                        <div className="flex size-9 items-center justify-center rounded-full bg-[#1B3A7A]/10 text-[#1B3A7A] transition-all duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0F2755] group-hover:scale-105">
                          <svg
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
