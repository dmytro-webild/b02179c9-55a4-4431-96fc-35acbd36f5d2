import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";

export interface ProgramItem {
  title: string;
  tag: string;
  description: string;
  highlights?: string[];
  href?: string;
  imageSrc: string;
  imageAlt?: string;
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
    title: "Bachillerato General",
    tag: "Nivel Medio Superior",
    description: "Concluya la preparatoria con horarios totalmente adaptables a su jornada de trabajo actual.",
    highlights: ["100% en línea", "Validez oficial SEP"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/graduation-high-school-university-concept_185193-110147.jpg",
    imageAlt: "Graduación de bachillerato"
  },
  {
    title: "Licenciaturas Ejecutivas",
    tag: "Licenciatura",
    description: "Obtenga su título profesional con reconocimiento de validez oficial de estudios (RVOE).",
    highlights: ["RVOE Garantizado", "Clases modulares"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/front-view-floating-books-connected-by-ladders-education-day_23-2149241039.jpg",
    imageAlt: "Licenciaturas ejecutivas"
  },
  {
    title: "Acreditación por Experiencia",
    tag: "Experiencia Profesional",
    description: "Valide formalmente los conocimientos y la experiencia laboral adquiridos en su trayectoria.",
    highlights: ["Certificación ágil", "Acreditación formal"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/businessman-using-digital-tablet-writing-clipboard-with-pen-gray-desk_23-2148052592.jpg",
    imageAlt: "Acreditación por experiencia laboral"
  },
  {
    title: "Maestrías Especializadas",
    tag: "Posgrado",
    description: "Fortalezca sus competencias directivas con programas avanzados orientados al liderazgo corporativo.",
    highlights: ["Enfoque directivo", "Red de valor"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/factory-investors-review-documentation-mockup-notebook_482257-123446.jpg",
    imageAlt: "Maestrías y posgrados"
  },
  {
    title: "Cursos Ejecutivos",
    tag: "Capacitación Continua",
    description: "Adquiera competencias prácticas e inmediatas en áreas clave para la actualización profesional.",
    highlights: ["Aplicación inmediata", "Constancia curricular"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/smiley-people-book-club-side-view_23-2150059042.jpg",
    imageAlt: "Cursos ejecutivos"
  },
  {
    title: "Diplomados con Validez",
    tag: "Especialización",
    description: "Especialización técnica con validez curricular diseñada para impulsar sus metas laborales.",
    highlights: ["Especialización técnica", "Actualización constante"],
    href: "#contact-dark-form-card",
    imageSrc: "https://img.b2bpic.net/free-photo/young-students-studying-table_23-2147850725.jpg",
    imageAlt: "Diplomados ejecutivos"
  }
];

export default function EducationalOfferSection({
  badgeTag = "Oferta Educativa de ENLACES",
  mainTitle = "El mundo está a su alcance.",
  secondaryTitle = "El siguiente paso depende de usted.",
  description = "Descubra nuestros programas académicos con modalidades flexibles diseñados para acelerar su crecimiento profesional con validez oficial.",
  programs = defaultPrograms,
  linkLabel = "Solicitar informes",
  className = ""
}: EducationalOfferSectionProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      aria-label="Oferta educativa de ENLACES"
      className={`relative bg-white py-20 sm:py-28 text-[#0F2755] overflow-hidden ${className}`}
    >
      {/* Background visual details: light subtle gold & blue gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 size-96 rounded-full bg-[#F4B400]/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 size-96 rounded-full bg-[#1B3A7A]/5 blur-3xl" />
      </div>

      <div className="mx-auto w-[var(--container)] px-4">
        {/* Header Block with scroll animations */}
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

          {/* Secondary Title: Montserrat 800, Blue with Gold accents */}
          <p className="mt-4 font-['Montserrat'] font-extrabold text-xl sm:text-3xl text-[#1B3A7A] tracking-tight">
            {secondaryTitle}
          </p>

          {/* Gold Decorative Divider Line */}
          <div className="my-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />

          {description && (
            <p className="max-w-xl font-['Inter'] text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
              {description}
            </p>
          )}
        </motion.div>

        {/* Programs Grid with smooth staggered scroll animation */}
        <div className="mt-12 sm:mt-16">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.li
                key={`${index}-${program.title}`}
                initial={reduce ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index % 3) * 0.12
                }}
                className="flex"
              >
                <a
                  href={program.href || "#contact-dark-form-card"}
                  className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400]/60 hover:shadow-xl hover:shadow-[#1B3A7A]/5"
                >
                  {/* Top gold accent stripe on hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                    <MotionMedia
                      src={program.imageSrc}
                      alt={program.imageAlt || program.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Tag badge */}
                    {program.tag && (
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md border border-[#F4B400]/40 px-3 py-1 text-xs font-extrabold text-[#0F2755] shadow-sm">
                        {program.tag}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-['Montserrat'] font-extrabold text-xl leading-tight text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                      {program.title}
                    </h3>

                    <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-slate-600 flex-grow">
                      {program.description}
                    </p>

                    {/* Highlights chips */}
                    {program.highlights && program.highlights.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {program.highlights.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-md bg-[#1B3A7A]/5 border border-[#1B3A7A]/10 px-2.5 py-1 text-[11px] font-semibold text-[#1B3A7A]"
                          >
                            <svg className="size-3 text-[#F4B400]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer link CTA */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors">
                      <span>{linkLabel}</span>
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#1B3A7A]/5 group-hover:bg-[#F4B400] group-hover:text-[#0F2755] transition-all duration-300">
                        <svg className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
