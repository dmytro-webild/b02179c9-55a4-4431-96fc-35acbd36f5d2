import { motion, useReducedMotion } from "motion/react";
import Icon, { type IconName } from "@/components/kit/Icon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroCounter from "@/components/kit/MakroCounter";
import MakroTitle from "@/components/kit/MakroTitle";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type Metric = {
  value?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: IconName;
};

export type MetricsTrayCountersProps = {
  tag?: { text: string; icon?: IconName } | string;
  title?: string;
  description?: string;
  items?: Metric[];
  ariaLabel?: string;
  className?: string;
};

const SPRING = { type: "spring", bounce: 0.15, duration: 0.8 } as const;

const DEFAULT_ITEMS: Metric[] = [
  {
    prefix: "Más de",
    value: "12,000",
    label: "Egresados",
    description: "Estudiantes que han alcanzado sus metas de titulación con validez oficial.",
    icon: "GraduationCap",
  },
  {
    value: "99%",
    label: "De aprobación",
    description: "Índice de éxito en procesos de evaluación y acreditación institucional.",
    icon: "Award",
  },
  {
    label: "Educación flexible",
    description: "Modelos de estudio adaptados a tu ritmo, horarios y compromisos personales.",
    icon: "Clock",
  },
  {
    label: "Acompañamiento académico",
    description: "Asesoría personalizada y seguimiento docente continuo durante toda tu carrera.",
    icon: "UserCheck",
  },
];

const MetricsTrayCounters = ({
  tag = { text: "Indicadores Institucionales", icon: "Award" },
  title = "Respaldados por la excelencia y validación oficial",
  description = "Datos institucionales autorizados que reflejan nuestro compromiso con la educación de calidad.",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: MetricsTrayCountersProps) => {
  const reduce = useReducedMotion();
  const tagObj = typeof tag === "string" ? { text: tag, icon: "Award" as IconName } : tag;
  const activeItems = items && items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <section
      aria-label={ariaLabel ?? title ?? "Indicadores institucionales"}
      className={cn("relative bg-white py-20 sm:py-28 text-slate-900 overflow-hidden", className)}
    >
      {/* Subtle background glow decorative element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-br from-amber-100/30 via-blue-50/20 to-transparent blur-3xl opacity-60"
      />

      <div className="relative mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8 flex-col gap-12 sm:gap-16">
        {(tagObj || title || description) && (
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
            {tagObj && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={SPRING}
                className="inline-flex items-center gap-2 rounded-full bg-amber-50/90 border border-[#D4AF37]/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#B8860B] shadow-2xs"
              >
                <Icon name={tagObj.icon ?? "Award"} aria-hidden="true" className="size-4 shrink-0 text-[#D4AF37]" strokeWidth={2} />
                <span className="whitespace-nowrap">{tagObj.text}</span>
              </motion.div>
            )}

            {title && (
              <MakroTitle
                text={title}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B3A7A] font-heading leading-tight"
              />
            )}

            {description && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ ...SPRING, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {activeItems.map((item, index) => {
            const hasNumericValue = Boolean(item.value && /\d/.test(item.value));

            return (
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ ...SPRING, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                {/* Gold Top Accent Line */}
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header Row with Gold Icon Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-[#B8860B] border border-amber-200/70 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon name={item.icon ?? (hasNumericValue ? "Award" : "CheckCircle2")} className="size-5 text-[#B8860B]" strokeWidth={2} />
                    </div>
                    <span className="inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#B8860B] bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60">
                      Institucional
                    </span>
                  </div>

                  {/* Number or Feature Title */}
                  {hasNumericValue ? (
                    <div className="flex flex-col mb-2">
                      {item.prefix && (
                        <span className="text-xs sm:text-sm font-bold text-[#1B3A7A]/80 tracking-wide uppercase mb-1">
                          {item.prefix}
                        </span>
                      )}
                      <div className="flex items-baseline text-[#1B3A7A]">
                        <MakroCounter
                          value={item.value}
                          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1B3A7A] font-heading tabular-nums"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mt-2 leading-snug">
                        {item.label}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex flex-col mb-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B3A7A] font-heading leading-tight">
                        {item.label}
                      </h3>
                    </div>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsTrayCounters;
