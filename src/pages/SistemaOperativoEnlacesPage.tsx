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
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Tecnología e Innovación Educativa
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Sistema Operativo ENLACES
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              El motor tecnológico y pedagógico que potencia tu aprendizaje. Un modelo de estudio en línea diseñado para darte flexibilidad, validez oficial y acompañamiento integral en todo momento.
            </p>
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
