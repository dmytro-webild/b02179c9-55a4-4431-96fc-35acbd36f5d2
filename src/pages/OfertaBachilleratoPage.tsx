import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Award,
  ShieldCheck,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  ChevronDown
} from "lucide-react";

export default function OfertaBachilleratoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Puedo terminar mi preparatoria en cuatro meses?",
      answer: "Puedes prepararte y presentar el examen en un periodo de 1 a 4 meses, sujeto a las fechas disponibles. La entrega del certificado tiene un plazo adicional."
    },
    {
      question: "¿El certificado tiene validez oficial?",
      answer: "Sí. La acreditación se realiza conforme al Acuerdo 286 de la SEP y el certificado oficial tiene validez nacional."
    },
    {
      question: "¿Puedo inscribirme si llevo muchos años sin estudiar?",
      answer: "Sí. Recibirás una guía de estudios, sesiones semanales en vivo, clases grabadas y acompañamiento de tutores."
    },
    {
      question: "¿Qué pasa si no apruebo el examen?",
      answer: "Tu programa incluye tres oportunidades de presentación."
    },
    {
      question: "¿Tengo que hacer trámites ante otras instituciones?",
      answer: "No. ENLACES realiza las gestiones correspondientes y te acompaña hasta entregarte tu certificado."
    },
    {
      question: "¿Cuándo recibiré mi certificado?",
      answer: "En un plazo de hasta 120 días hábiles desde que acreditas el examen."
    },
    {
      question: "¿Puedo estudiar si trabajo y tengo poco tiempo?",
      answer: "Sí. Nuestro programa está diseñado para adaptarse a tus responsabilidades. Tendrás acceso a una guía de estudios, sesiones académicas en vivo todas las semanas, clases grabadas y acompañamiento de tutores para preparar tu examen sin descuidar tu trabajo y tu familia."
    },
    {
      question: "¿Cuánto tiempo debo dedicar a estudiar?",
      answer: "Depende de tus conocimientos previos y tu disponibilidad. Puedes organizar tus tiempos utilizando la guía de estudios y las clases grabadas, además de participar en las sesiones semanales en vivo. Nuestros tutores te orientarán durante tu preparación."
    },
    {
      question: "¿Tengo que asistir presencialmente a clases o al examen?",
      answer: "La preparación académica con ENLACES se realiza en línea. La modalidad de presentación del examen, presencial o en línea, dependerá de las condiciones establecidas por el centro evaluador y la convocatoria correspondiente."
    }
  ];

  const otherCategories = [
    { title: "Bachillerato en 18 meses", href: "/oferta/bachillerato-18-meses", tag: "Nivel Medio Superior" },
    { title: "Licenciaturas Ejecutivas", href: "/oferta-educativa/licenciaturas", tag: "Nivel Superior" },
    { title: "Titulación por Experiencia", href: "/oferta-educativa/titulacion-por-experiencia-laboral", tag: "Acreditación Ágil" },
    { title: "Maestrías Especializadas", href: "/oferta-educativa/maestrias", tag: "Posgrados" },
    { title: "Diplomados con Validez", href: "/oferta-educativa/diplomados", tag: "Especialización" },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* SECCIÓN 1 — PORTADA */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-5 sm:pt-9 pb-14 sm:pb-20 border-b border-slate-200/60 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[#F4B400]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-[#1B3A7A]/5 blur-2xl" />

        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#1B3A7A] transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/oferta-educativa" className="hover:text-[#1B3A7A] transition-colors">Oferta educativa</Link>
            <span>/</span>
            <span className="text-[#1B3A7A] font-bold">Bachillerato en 4 meses</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Columna Izquierda: Mensaje Principal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-[#F4B400]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F2755]">
                <span className="size-2 rounded-full bg-[#F4B400]" />
                Bachillerato Intensivo • Validez Oficial SEP
              </span>

              <h1 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight text-left">
                <span className="block text-[#1B3A7A]">TU PREPA EN 4 MESES,</span>
                <span className="block text-[#F4B400]">EN 4 PASOS.</span>
              </h1>

              <div className="mt-6 space-y-3.5 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl text-left">
                <h2 className="font-['Montserrat'] font-bold text-lg sm:text-xl text-[#1B3A7A]">
                  ¿Necesitas terminar tu preparatoria?
                </h2>

                <p className="font-['Montserrat'] font-extrabold text-base sm:text-lg text-[#0F2755] leading-snug">
                  Sí es posible. Y no tienes que poner tu vida en pausa para lograrlo.
                </p>

                <p>
                  Sabemos que muchas veces el trabajo, la familia o las responsabilidades personales nos obligan a dejar nuestros estudios para después. Pero eso no significa que tengas que renunciar a tus metas.
                </p>

                <p>
                  En ENLACES te ofrecemos una alternativa para prepararte y acreditar tu bachillerato mediante un examen único, sin necesidad de cursar nuevamente tres años de preparatoria.
                </p>

                <p>
                  Con nuestro programa de preparación en línea, clases en vivo y grabadas, materiales de estudio y acompañamiento académico, puedes prepararte durante un periodo de hasta cuatro meses, de acuerdo con tus conocimientos y disponibilidad.
                </p>

                <p className="font-bold text-[#1B3A7A] text-base sm:text-lg pt-1">
                  Tu experiencia cuenta, tu tiempo vale y tu futuro merece nuevas oportunidades.
                </p>

                <p className="font-semibold text-[#0F2755]">
                  Hoy puedes dar el primer paso.
                </p>
              </div>

              {/* Secuencia de 4 etapas */}
              <div className="mt-8 w-full max-w-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-2">
                  {/* Etapa 1: Inscríbete */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Inscríbete
                    </span>
                  </div>

                  {/* Etapa 2: Prepárate */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Prepárate
                    </span>
                  </div>

                  {/* Etapa 3: Aplica tu examen */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Aplica tu examen
                    </span>
                  </div>

                  {/* Etapa 4: Recibe tu certificado */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Recibe tu certificado
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contacto"
                  className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Solicitar informes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Contenedor del video oficial */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-2 border-[#F4B400]/40 bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-3xl"
                  src="https://res.cloudinary.com/r58dzn6z/video/upload/v1795211234/PREPA_INFORMATIVO_8.9MB.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — TESTIMONIO EMOTIVO */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Izquierda: Video del egresado */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200 bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-3xl"
                  src="https://res.cloudinary.com/r58dzn6z/video/upload/v1795211729/CerveceriaDelBarrio_Felipe_Optimizado.mp4"
                />
              </div>
            </div>

            {/* Derecha: Mensaje emocional */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] mb-4">
                Historias que inspiran
              </span>

              <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-[#0F2755] leading-tight">
                <span className="text-[#1B3A7A]">Tu historia</span> todavía tiene <span className="text-[#F4B400]">mucho por contar.</span>
              </h2>

              <div className="mt-5 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed space-y-4 text-left sm:text-justify">
                <p>
                  No importa cuánto tiempo haya pasado ni cuántas veces hayas tenido que dejar tus estudios para después.
                </p>
                <p>
                  Solo tú sabes cuánto ha significado no haber terminado tus estudios. Las oportunidades que dejaste pasar, las puertas que no se abrieron o las veces que sentiste que te faltaba algo para seguir adelante. Nadie conoce mejor que tú el valor de esa meta pendiente.
                </p>
                <p>
                  Lo importante es que hoy puedes dar ese paso que quedó pendiente. Porque terminar una etapa también significa abrir la puerta a nuevos sueños, continuar preparándote y descubrir hasta dónde puedes llegar.
                </p>
                <p>
                  Nunca es tarde para comenzar de nuevo. <span className="font-bold text-[#0F2755]">Y este puede ser el primer paso hacia todo lo que quieres lograr.</span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 w-full flex items-center gap-3 text-xs font-bold text-[#1B3A7A]">
                <UserCheck className="w-5 h-5 text-[#F4B400]" />
                <span>Acompañamiento cercano y humano en cada paso de tu trayectoria.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — INFORMACIÓN ACADÉMICA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
              Estructura del Programa
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Información Académica
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-base leading-relaxed text-left sm:text-justify">
              Conoce cómo funciona nuestro programa, cómo te preparamos para el examen y cómo te acompañamos hasta recibir tu certificado oficial.
            </p>
          </div>

          {/* Grid de 5 Bloques Informativos en 2 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Bloque 1: Alternativa Acuerdo 286 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <BookOpen className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Alternativa Acuerdo 286
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Una forma diferente de terminar tu preparatoria
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  No necesitas volver a cursar tres años de escuela para alcanzar esta meta. El Acuerdo 286 de la Secretaría de Educación Pública contempla una alternativa para acreditar los conocimientos correspondientes al bachillerato mediante una evaluación. En lugar de cursar nuevamente todas las materias de una preparatoria tradicional, puedes prepararte para presentar un examen que evalúa tus conocimientos del nivel medio superior. ENLACES te ayuda a prepararte y te acompaña durante todo el proceso.
                </p>
              </div>
            </motion.div>

            {/* Bloque 2: Preparación en Línea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <CheckCircle2 className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Metodología ENLACES
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Te preparamos para lograrlo
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  Desde el momento en que te inscribes, recibes una guía de estudios diseñada específicamente para el Examen Único. Además, cuentas con sesiones académicas en vivo todas las semanas, grabaciones disponibles para repasar los temas y acompañamiento de tutores para resolver tus dudas. Todo mediante una metodología de preparación en línea que te permite continuar con tu trabajo, tu familia y tus actividades habituales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/experiencia-enlaces"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/30 bg-[#1B3A7A]/5 px-5 py-2.5 font-['Montserrat'] font-bold text-xs sm:text-sm text-[#1B3A7A] hover:bg-[#1B3A7A] hover:text-white transition-all shadow-2xs group"
                >
                  <span>Conoce la Experiencia ENLACES</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B400] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bloque 3: Avanza a tu propio ritmo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <Clock className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Flexibilidad de Tiempos
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Avanza a tu propio ritmo
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  Tu preparación puede durar de 1 a 4 meses. Si te sientes preparado antes de concluir los cuatro meses, puedes solicitar tu evaluación, siempre que existan fechas disponibles y cumplas los requisitos del centro evaluador. La modalidad de presentación del examen depende del centro evaluador y de la convocatoria correspondiente.
                </p>
              </div>
            </motion.div>

            {/* Bloque 4: Un examen, tres oportunidades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <Target className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Examen Único
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Un examen, tres oportunidades
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  La acreditación se realiza mediante el Examen Único del Acuerdo 286. El programa incluye tres oportunidades de presentación, para que tengas la posibilidad de volver a intentarlo si no acreditas la evaluación en tu primera ocasión. Durante tu preparación contarás con orientación académica para llegar al examen con mayor seguridad.
                </p>
              </div>
            </motion.div>

            {/* Bloque 5: Tú estudias. Nosotros nos encargamos del proceso. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <UserCheck className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Gestión Integral y Certificación
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Tú estudias. Nosotros nos encargamos del proceso.
                </h3>
                <div className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl space-y-3">
                  <p className="text-left sm:text-justify">
                    En ENLACES no solamente te preparamos para el examen. También te orientamos, acompañamos y realizamos las gestiones necesarias durante el proceso de evaluación y certificación.
                  </p>
                  <p className="text-left sm:text-justify">
                    No necesitas realizar trámites ni pagos directamente ante otras instituciones por el proceso contratado. ENLACES coordina las gestiones correspondientes y te mantiene informado hasta la entrega de tu documentación.
                  </p>
                  <p className="text-left sm:text-justify">
                    Una vez que acreditas el examen, comienza el trámite de tu certificado oficial de bachillerato. El plazo de entrega es de hasta 120 días hábiles contados desde la acreditación del examen.
                  </p>
                  <p className="text-left sm:text-justify">
                    Tu certificado tiene validez oficial y te permite acreditar tus estudios de nivel medio superior para continuar tu formación académica o respaldar tu preparación ante nuevas oportunidades laborales.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Requisitos del Programa - Incorporación Discreta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-7 shadow-2xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                  <Award className="w-5 h-5 text-[#1B3A7A]" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Requisitos de Ingreso
                  </span>
                  <h3 className="font-['Montserrat'] font-bold text-base sm:text-lg text-[#0F2755]">
                    Requisitos del programa
                  </h3>
                </div>
              </div>
              <p className="text-sm font-['Inter'] text-slate-600 leading-relaxed lg:max-w-3xl text-left sm:text-justify">
                Tener al menos 18 años, haber concluido la secundaria y contar con el certificado de secundaria y la documentación requerida para el proceso.
              </p>
            </div>
          </motion.div>

          {/* Franja Institucional: Validez Oficial SEP - Acuerdo 286 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8 md:p-10 shadow-2xs relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider mb-1">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    Validez Oficial SEP
                  </span>
                  <h3 className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl text-[#0F2755]">
                    Validez oficial
                  </h3>
                  <p className="font-['Inter'] text-xs font-medium text-slate-500 mt-1">
                    Acreditación mediante el Acuerdo 286 de la SEP
                  </p>
                </div>
              </div>
              <span className="self-start md:self-auto text-xs font-bold text-[#1B3A7A] bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-2xs">
                Validez internacional
              </span>
            </div>

            <p className="font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl text-left">
              Desde tu inscripción hasta la entrega de tu certificado, ENLACES te acompaña en cada etapa. Conoce cómo funciona el proceso y qué puedes esperar en cada momento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                      Etapa 1
                    </span>
                    <BookOpen className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Preparación Académica
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    Durante 1 a 4 meses te preparas con nuestra guía de estudios, sesiones semanales en vivo, clases grabadas y acompañamiento de tutores. Puedes solicitar tu evaluación cuando estés preparado, sujeto a las fechas disponibles.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                      Etapa 2
                    </span>
                    <Target className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Evaluación
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    Presentas el Examen Único conforme a las condiciones y convocatorias del centro evaluador. Tu programa incluye tres oportunidades para acreditar los conocimientos correspondientes al bachillerato.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                      Etapa 3
                    </span>
                    <Award className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Certificación
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    Una vez que acreditas el examen, ENLACES realiza las gestiones necesarias y te entrega tu certificado oficial de bachillerato en un plazo de hasta 120 días hábiles, contados desde la acreditación.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 4 — PREGUNTAS FRECUENTES */}
      <section className="pt-9 sm:pt-11 pb-12 sm:pb-14 bg-white border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
              Aclara tus dudas
            </span>
            <h2 className="mt-3 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Preguntas frecuentes
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
              Encuentra respuestas a las consultas más habituales sobre nuestro programa de Bachillerato en 4 meses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#F4B400] shadow-sm" : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <h3 className="font-['Montserrat'] font-bold text-base sm:text-lg text-[#0F2755] leading-snug pr-2">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#FFF4D1] text-[#0F2755] flex items-center justify-center shrink-0 border border-[#F4B400]/50 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#F4B400]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 font-['Inter'] text-sm sm:text-base leading-relaxed border-t border-slate-100">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN CIERRE EMOCIONAL */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs text-[#1B3A7A] uppercase tracking-wider mb-3">
              <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
              HISTORIAS QUE INSPIRAN
            </span>
            <h2 className="font-['Montserrat'] font-extrabold text-2xl sm:text-4xl text-[#0F2755] leading-tight">
              Ellos lo lograron. Tú también puedes.
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Cada uno de nuestros egresados tiene una historia diferente, pero todos comparten algo: decidieron dar el siguiente paso. Conoce sus experiencias y descubre lo que también puedes lograr.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                to="/testimonios-y-egresados"
                className="w-full sm:w-auto rounded-full bg-[#F4B400] px-8 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Conoce sus historias
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explorar Otras Categorías */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <h3 className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755] mb-6">
            Explora otras opciones de nuestra Oferta Educativa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.href}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-[#F4B400] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 font-['Montserrat'] font-semibold text-xs uppercase tracking-wider text-[#1B3A7A]">
                    <span className="size-1.5 rounded-full bg-[#F4B400] shrink-0" />
                    {cat.tag}
                  </span>
                  <h4 className="mt-2 font-['Montserrat'] font-bold text-sm text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                    {cat.title}
                  </h4>
                </div>
                <span className="mt-4 text-xs font-bold text-[#1B3A7A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ver opción →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
