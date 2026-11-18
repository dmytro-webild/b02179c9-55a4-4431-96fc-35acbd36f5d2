import { motion } from "motion/react";
import { Link } from "react-router-dom";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";

export default function SistemaOperativoEnlacesPage() {
  const pillars = [
    {
      step: "01",
      title: "Campus Virtual 24/7",
      subtitle: "Acceso total a tus materias",
      desc: "Estudia desde cualquier dispositivo en el momento que mejor te convenga. Tu material de clase, lecturas y evaluaciones están siempre disponibles."
    },
    {
      step: "02",
      title: "Metodología Asincrónica",
      subtitle: "Avanza a tu propio ritmo",
      desc: "Nuestros módulos están estructurados para que avances según tus disponibilidades de tiempo, combinando estudio independiente con guías claras."
    },
    {
      step: "03",
      title: "Acompañamiento Tutoral",
      subtitle: "Orientación académica personalizada",
      desc: "No estás solo en tu camino. Un equipo de tutores académicos te asesora en cada materia para resolver tus dudas y dar seguimiento a tu avance."
    },
    {
      step: "04",
      title: "Evaluación Continua",
      subtitle: "Sin exámenes punitivos de una sola fecha",
      desc: "Valida tus conocimientos mediante proyectos prácticos, entregables progresivos y ejercicios interactivos que demuestran tu aprendizaje real."
    }
  ];

  const faqs = [
    {
      title: "¿Cómo funciona el Sistema Operativo ENLACES?",
      description: "Es un ecosistema de aprendizaje integral en línea. Al inscribirte, recibes tu acceso al Campus Virtual con todo el material didáctico, asignación de tutores y un plan calendarizado adaptado a tus actividades."
    },
    {
      title: "¿Necesito estar conectado a horas fijas para mis clases?",
      description: "No. El sistema es 100% flexible. Puedes ingresar a la hora que prefieras, estudiar tus lecciones y realizar tus entregables respetando las fechas límites de cada módulo."
    },
    {
      title: "¿Qué validez tienen los estudios realizados en este sistema?",
      description: "Todos los programas respaldados por el Sistema Operativo ENLACES cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) ante la autoridad educativa correspondiente."
    },
    {
      title: "¿Qué requisitos tecnológicos necesito para ingresar?",
      description: "Solo necesitas un dispositivo (computadora, tablet o smartphone) con conexión a internet y un navegador web actualizado."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header & Identity */}
      <section className="relative bg-linear-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              <span className="size-1.5 rounded-full bg-[#F4B400]" />
              Tu ecosistema educativo
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <span className="text-[#1B3A7A]">ENLACES</span>{" "}
              <span className="text-[#F4B400]">360</span>
            </h1>
            <p className="mt-3 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
              Tu enlace con el mundo
            </p>
            <p className="mt-3 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed">
              El motor tecnológico y pedagógico que potencia tu aprendizaje. Un modelo de estudio en línea diseñado para darte flexibilidad, validez oficial y acompañamiento integral en todo momento.
            </p>
          </div>

          {/* Dos Accesos Diferenciados */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* 1. Portal académico */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-extrabold text-amber-800 shadow-2xs">
                  <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
                  Próximamente
                </span>
              </div>

              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0F2755]/5 text-[#0F2755] mb-5">
                  <svg className="size-6 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  Portal académico
                </h3>
                <p className="mt-1 font-['Inter'] text-sm font-semibold text-[#1B3A7A]">
                  Alumnos y docentes
                </p>
                <p className="mt-3 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Espacio digital dedicado al seguimiento académico, clases, evaluaciones y recursos didácticos para la comunidad estudiantil y docente.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  disabled
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-6 py-3.5 font-['Montserrat'] font-bold text-sm text-slate-400 cursor-not-allowed transition-all"
                >
                  <span>Acceso académico</span>
                  <span className="text-[11px] font-semibold bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full">Próximamente</span>
                </button>
              </div>
            </div>

            {/* 2. Sistema Operativo ENLACES */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#1B3A7A]/20 bg-linear-to-b from-white to-slate-50/80 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#F4B400] transition-all duration-300">
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Acceso activo
                </span>
              </div>

              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F4B400]/20 text-[#0F2755] mb-5">
                  <svg className="size-6 text-[#0F2755]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V10a2 2 0 012-2h2a2 2 0 012 2v11m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  Sistema Operativo ENLACES
                </h3>
                <p className="mt-1 font-['Inter'] text-sm font-semibold text-[#1B3A7A]">
                  Colaboradores y administrativos
                </p>
                <p className="mt-3 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Plataforma de gestión administrativa, servicios institucionales y control operativo para colaboradores de ENLACES.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="https://sistema.enlaces.edu.mx/inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-6 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] shadow-md hover:bg-[#e0a400] hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Acceso administrativo</span>
                  <svg className="size-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Statement & Icon Row */}
      <div id="sistema-operativo-features" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-2" data-section="sistema-operativo-features">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Tu centro de estudio inteligente, accesible y orientado a tu éxito profesional."
          items={[
            {
              icon: "Laptop",
              title: "Plataforma Intuitiva",
              description: "Entorno digital amigable, optimizado para celulares y computadoras."
            },
            {
              icon: "Calendar",
              title: "Avance Flexible",
              description: "Organiza tu tiempo según tu estilo de vida y compromisos laborales."
            },
            {
              icon: "CheckCircle",
              title: "Certificación Oficial",
              description: "Garantía de documentación con reconocimiento legal y validez oficial."
            }
          ]}
        />
      </div>

      {/* Pillars Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Arquitectura del Sistema
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Los 4 pilares de nuestro entorno de aprendizaje
            </h2>
            <p className="mt-3 font-['Inter'] text-slate-600">
              Conoce las bases tecnológicas y metodológicas que hacen posible tu titulación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] font-['Montserrat'] font-extrabold text-lg text-[#F4B400]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">{item.title}</h3>
                    <p className="text-xs font-semibold text-[#1B3A7A] uppercase tracking-wider">{item.subtitle}</p>
                  </div>
                </div>
                <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <div id="sistema-operativo-faq" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-2" data-section="sistema-operativo-faq">
        <FaqTrayAccordion
          tag="Preguntas Frecuentes"
          title="Dudas sobre el Sistema Operativo ENLACES"
          items={faqs}
        />
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
            Experimenta una nueva forma de aprender
          </h2>
          <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed">
            Inicia tu proceso de admisión hoy mismo y accede al Sistema Operativo ENLACES.
          </p>
          <div className="mt-8">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-lg hover:bg-amber-300 hover:scale-105 transition-all duration-300"
            >
              <span>Solicita información ahora</span>
              <svg className="size-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
