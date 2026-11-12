import { Link } from "react-router-dom";
import MetricsTrayCounters from "@/components/sections/metrics/MetricsTrayCounters";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";

export default function ExperienciaEnlacesPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Comunidad y Excelencia Educativa
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Experiencia ENLACES
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Descubre los logros de nuestra comunidad escolar y la satisfacción demostrada por miles de alumnos que han transformado su futuro con nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <div id="metrics-tray-counters" data-webild-section="MetricsTrayCounters" data-webild-section-id="MetricsTrayCounters-1" data-section="metrics-tray-counters">
        <MetricsTrayCounters
          tag={{
            text: "Indicadores Institucionales",
            icon: "Award"
          }}
          title="Respaldados por la excelencia y validación oficial"
          description="Información institucional verificada que refleja el compromiso de ENLACES con tus metas educativas."
          items={[
            {
              prefix: "Más de",
              value: "12,000",
              label: "Egresados",
              description: "Estudiantes que han alcanzado sus metas de titulación con validez oficial.",
              icon: "GraduationCap"
            },
            {
              value: "99%",
              label: "De aprobación",
              description: "Índice de éxito en procesos de evaluación y acreditación institucional.",
              icon: "Award"
            },
            {
              label: "Educación flexible",
              description: "Modelos de estudio adaptados a tu ritmo, horarios y compromisos personales.",
              icon: "Clock"
            },
            {
              label: "Acompañamiento académico",
              description: "Asesoría personalizada y seguimiento docente continuo durante toda tu carrera.",
              icon: "UserCheck"
            }
          ]}
        />
      </div>

      {/* Testimonials Spotlight Carousel */}
      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Testimonios"
          title="Historias de éxito de nuestros egresados"
          items={[
            {
              company: "Bachillerato General",
              quote: "ENLACES me permitió concluir mi bachillerato mientras mantenía mi empleo a tiempo completo. La atención de los asesores y la flexibilidad me ayudaron a cumplir este compromiso.",
              name: "María González",
              role: "Egresada de Bachillerato",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-business-woman-smiling-camera-after-drinking-cup-coffee-sitting-desk-business-office-late-night_482257-5183.jpg",
              stats: [
                {
                  label: "Índice de aprobación",
                  value: "99%"
                },
                {
                  label: "Egresados",
                  value: "12,000+"
                }
              ]
            },
            {
              company: "Licenciatura Ejecutiva",
              quote: "Acreditar mis conocimientos laborales me dio el impulso necesario para obtener el ascenso que buscaba. El acompañamiento docente fue excepcional durante todo el programa.",
              name: "Roberto Silva",
              role: "Egresado de Licenciatura",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-businessman-speaking-phone_23-2147787724.jpg",
              stats: [
                {
                  label: "Egresados",
                  value: "12,000+"
                },
                {
                  label: "Modalidad",
                  value: "Flexible"
                }
              ]
            },
            {
              company: "Posgrado y Maestría",
              quote: "La modalidad flexible me permitió estudiar una maestría sin desatender a mi familia. Recomiendo ENLACES a cualquier profesional que busque seguir superándose.",
              name: "Carmen Delgado",
              role: "Egresada de Posgrado",
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-female-executive-studying-report-black-folder_1098-20730.jpg",
              stats: [
                {
                  label: "Acompañamiento",
                  value: "Docente"
                },
                {
                  label: "Validez oficial",
                  value: "Garantizada"
                }
              ]
            }
          ]}
        />
      </div>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            Escribe tu propia historia de éxito con ENLACES
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Únete a nuestra comunidad de más de 12,000 egresados y abre nuevas oportunidades en tu vida laboral.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-lg hover:scale-105"
            >
              Comenzar mi inscripción
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
