import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Building,
  Target
} from "lucide-react";

export interface GoalOption {
  id: string;
  label: string;
  icon: typeof GraduationCap;
  programTitle: string;
  categoryTag: string;
  description: string;
  keyBenefits: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  durationBadge: string;
  modalityBadge: string;
}

const goalOptions: GoalOption[] = [
  {
    id: "bachillerato",
    label: "Terminar mi bachillerato",
    icon: GraduationCap,
    programTitle: "Bachillerato General en Línea",
    categoryTag: "Nivel Medio Superior",
    description:
      "Concluye tus estudios de preparatoria con un programa flexible diseñado para adultos y personas trabajadoras. Estudia desde cualquier dispositivo, a tu propio ritmo y con el respaldo continuo de asesores académicos.",
    keyBenefits: [
      "Certificación Oficial con validez nacional",
      "Plataforma accesible las 24 horas",
      "Sin horarios forzados ni traslados",
      "Acompañamiento docente durante todo el plan"
    ],
    ctaText: "Conocer Bachillerato",
    ctaHref: "/contacto",
    imageSrc:
      "https://img.b2bpic.net/free-photo/graduation-high-school-university-concept_185193-110147.jpg?_wi=2",
    imageAlt: "Estudiantes de Bachillerato General con certificado",
    durationBadge: "Plan Acelerado",
    modalityBadge: "100% en Línea"
  },
  {
    id: "licenciatura",
    label: "Estudiar una licenciatura",
    icon: BookOpen,
    programTitle: "Licenciaturas Ejecutivas",
    categoryTag: "Formación Universitaria",
    description:
      "Obtén tu título universitario con programas estructurados para adaptarse a tus responsabilidades. Plan de estudios modular enfocado en la práctica profesional, liderazgo gerencial y herramientas actuales de negocios.",
    keyBenefits: [
      "Reconocimiento de Validez Oficial de Estudios (RVOE)",
      "Horarios ejecutivos que no interfieren con tu trabajo",
      "Cuerpo docente activo en el sector empresarial",
      "Evaluaciones por proyectos y casos reales"
    ],
    ctaText: "Conocer Licenciaturas",
    ctaHref: "/contacto",
    imageSrc:
      "https://img.b2bpic.net/free-photo/front-view-floating-books-connected-by-ladders-education-day_23-2149241039.jpg?_wi=2",
    imageAlt: "Formación universitaria e impulso académico",
    durationBadge: "Modalidad Flexible",
    modalityBadge: "RVOE Garantizado"
  },
  {
    id: "experiencia",
    label: "Obtener un título por mi experiencia",
    icon: Briefcase,
    programTitle: "Titulación por Experiencia Laboral",
    categoryTag: "Acreditación de Saberes",
    description:
      "Transforma tus años de trabajo en un título universitario oficial. Evaluamos tus competencias laborales previas para que obtengas la titulación académica que te corresponde por tu trayectoria profesional.",
    keyBenefits: [
      "Sin necesidad de cursar materias tradicionales completas",
      "Proceso ágil de acreditación por conocimientos previos",
      "Título universitario con plena validez oficial",
      "Ideal para lograr ascensos y mejoras salariales"
    ],
    ctaText: "Conocer Titulación por Experiencia",
    ctaHref: "/contacto",
    imageSrc:
      "https://img.b2bpic.net/free-photo/businessman-using-digital-tablet-writing-clipboard-with-pen-gray-desk_23-2148052592.jpg?_wi=2",
    imageAlt: "Acreditación profesional por experiencia laboral",
    durationBadge: "Acreditación Ágil",
    modalityBadge: "Validez Oficial"
  },
  {
    id: "especializacion",
    label: "Especializarme profesionalmente",
    icon: Award,
    programTitle: "Maestrías y Posgrados de Alta Dirección",
    categoryTag: "Especialización y Posgrados",
    description:
      "Alcanza posiciones de alta dirección y liderazgo estratégico. Programas de posgrado y diplomados de especialización diseñados para fortalecer tus decisiones directivas en un entorno global cambiante.",
    keyBenefits: [
      "Enfoque en alta dirección, finanzas y estrategia corporativa",
      "Networking estratégico con profesionales de diversos sectores",
      "Grado de Maestría o certificación directiva con RVOE",
      "Metodología práctica orientada a la toma de decisiones"
    ],
    ctaText: "Conocer Posgrados",
    ctaHref: "/contacto",
    imageSrc:
      "https://img.b2bpic.net/free-photo/factory-investors-review-documentation-mockup-notebook_482257-123446.jpg?_wi=2",
    imageAlt: "Posgrados y especializaciones de liderazgo",
    durationBadge: "Perfil Directivo",
    modalityBadge: "100% en Línea"
  },
  {
    id: "ingles",
    label: "Aprender inglés",
    icon: Globe,
    programTitle: "Programa de Inglés Profesional y Corporativo",
    categoryTag: "Capacitación en Idiomas",
    description:
      "Domina el idioma inglés con enfoque en comunicación profesional, presentaciones ejecutivas y vocabulario de negocios. Avanza a tu ritmo con clases interactivas y dinámicas enfocadas en fluidez real.",
    keyBenefits: [
      "Aulas virtuales interactivas con profesores calificados",
      "Enfoque en conversación y comunicación de negocios",
      "Evaluación inicial para ubicar tu nivel exacto",
      "Horarios convenientes para personas ocupadas"
    ],
    ctaText: "Conocer Programa de Inglés",
    ctaHref: "/contacto",
    imageSrc:
      "https://img.b2bpic.net/free-photo/smiley-people-book-club-side-view_23-2150059042.jpg?_wi=2",
    imageAlt: "Clases interactivas de inglés profesional",
    durationBadge: "Niveles A1 a C1",
    modalityBadge: "Clases En Vivo"
  }
];

export interface InteractiveGoalsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  options?: GoalOption[];
  className?: string;
}

export default function InteractiveGoalsSection({
  badge = "Guía Interactiva",
  title = "¿Cuál es tu siguiente meta?",
  subtitle = "Selecciona el objetivo académico que deseas alcanzar y descubre la mejor alternativa diseñada para tu crecimiento.",
  options = goalOptions,
  className = ""
}: InteractiveGoalsSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(options[0]?.id || "bachillerato");
  const prefersReducedMotion = useReducedMotion();

  const activeOption = options.find((opt) => opt.id === selectedId) || options[0];

  return (
    <section
      className={`relative bg-white py-20 sm:py-28 text-[#0F2755] overflow-hidden border-t border-slate-100 ${className}`}
      aria-label="¿Cuál es tu siguiente meta?"
    >
      {/* Decorative subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-[var(--container)] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1B3A7A]"
          >
            <Sparkles className="size-3.5 text-[#F4B400]" />
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F2755] tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Option Selector Buttons */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Opciones de metas académicas"
        >
          {options.map((option) => {
            const isSelected = option.id === selectedId;
            const Icon = option.icon;

            return (
              <button
                key={option.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${option.id}`}
                id={`tab-${option.id}`}
                onClick={() => setSelectedId(option.id)}
                className={`group relative inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A7A] ${
                  isSelected
                    ? "bg-[#0F2755] text-white shadow-lg shadow-[#0F2755]/20 scale-[1.02]"
                    : "bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 hover:text-[#0F2755]"
                }`}
              >
                <Icon
                  className={`size-4 transition-colors duration-300 ${
                    isSelected ? "text-[#F4B400]" : "text-slate-500 group-hover:text-[#1B3A7A]"
                  }`}
                />
                <span className="font-['Montserrat'] font-bold text-xs sm:text-sm tracking-wide">
                  {option.label}
                </span>

                {isSelected && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#F4B400]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Display Card */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            {activeOption && (
              <motion.div
                key={activeOption.id}
                id={`panel-${activeOption.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeOption.id}`}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16, scale: 0.99 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Info Column */}
                  <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between space-y-8">
                    <div>
                      {/* Top badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2755]/5 px-3 py-1 text-xs font-bold text-[#1B3A7A] border border-[#1B3A7A]/15">
                          <Target className="size-3.5 text-[#F4B400]" />
                          {activeOption.categoryTag}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200/60">
                          <ShieldCheck className="size-3.5 text-amber-600" />
                          {activeOption.modalityBadge}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          <Clock className="size-3.5 text-slate-500" />
                          {activeOption.durationBadge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl text-[#0F2755] tracking-tight">
                        {activeOption.programTitle}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 font-['Inter'] text-base text-slate-600 leading-relaxed">
                        {activeOption.description}
                      </p>

                      {/* Key benefits list */}
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <h4 className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                          Beneficios del programa
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeOption.keyBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-['Inter']">
                              <CheckCircle2 className="size-4 text-[#F4B400] shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="pt-2">
                      {activeOption.ctaHref.startsWith("/") ? (
                        <Link
                          to={activeOption.ctaHref}
                          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0F2755] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1B3A7A] hover:shadow-xl hover:gap-4 active:scale-95"
                        >
                          <span>{activeOption.ctaText}</span>
                          <ArrowRight className="size-4 text-[#F4B400] transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <a
                          href={activeOption.ctaHref}
                          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0F2755] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1B3A7A] hover:shadow-xl hover:gap-4 active:scale-95"
                        >
                          <span>{activeOption.ctaText}</span>
                          <ArrowRight className="size-4 text-[#F4B400] transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Media Column */}
                  <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full lg:col-span-5 bg-slate-900 overflow-hidden">
                    <MotionMedia
                      src={activeOption.imageSrc}
                      alt={activeOption.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/80 via-[#0F2755]/20 to-transparent" />

                    {/* Floating Info Pill on Image */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl text-[#0F2755]">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400]">
                          <Building className="size-5" />
                        </div>
                        <div>
                          <p className="font-['Montserrat'] font-extrabold text-xs text-[#0F2755]">
                            ENLACES Educación
                          </p>
                          <p className="font-['Inter'] text-xs text-slate-600">
                            Atención y asesoría personalizada sin solicitar datos previos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
