import { motion } from "motion/react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import CinematicVideoSection from "@/components/sections/video/CinematicVideoSection";
import EducationalOfferSection from "@/components/sections/gallery/EducationalOfferSection";
import InteractiveGoalsSection from "@/components/sections/goals/InteractiveGoalsSection";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import MetricsTrayCounters from "@/components/sections/metrics/MetricsTrayCounters";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />

      <LoaderChipFill label="ENLACES Educación" />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-white"
          tag="EDUCACIÓN EN LÍNEA"
          title="La educación es el camino"
          highlightText="no el destino."
          description="Concluye tus estudios, transforma tu experiencia y construye nuevas oportunidades sin detener tu vida."
          primaryButton={{
            text: "Explora nuestros programas",
            href: "#oferta-educativa"
          }}
          secondaryButton={{
            text: "Conoce ENLACES",
            href: "#about"
          }}
          introDelay={0.1}
          features={[
            {
              icon: "laptop",
              title: "Educación en línea",
              subtitle: "Estudia desde donde estés."
            },
            {
              icon: "calendar",
              title: "Programas flexibles",
              subtitle: "Con horarios que se adaptan a ti."
            },
            {
              icon: "shield",
              title: "Validez oficial*",
              subtitle: "En los programas correspondientes."
            },
            {
              icon: "users",
              title: "Acompañamiento académico",
              subtitle: "Durante todo tu proceso."
            }
          ]}
        />
      </div>

      <div id="video-cinematografico" data-webild-section="CinematicVideoSection" data-webild-section-id="CinematicVideoSection-1" data-section="video-cinematografico">
        <CinematicVideoSection />
      </div>

      <div id="oferta-educativa" data-webild-section="EducationalOfferSection" data-webild-section-id="EducationalOfferSection-1" data-section="oferta-educativa">
        <EducationalOfferSection
          badgeTag="Oferta Educativa de ENLACES"
          mainTitle="El mundo está a tu alcance"
          secondaryTitle="El siguiente paso depende de ti"
          description="Descubre nuestros programas académicos con modalidades flexibles diseñados para acelerar tu crecimiento profesional con validez oficial."
          linkLabel="Solicita información"
        />
      </div>

      <div id="siguiente-meta" data-webild-section="InteractiveGoalsSection" data-webild-section-id="InteractiveGoalsSection-1" data-section="siguiente-meta">
        <InteractiveGoalsSection />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="La educación debe adaptarse a tu vida, no al revés. Te acompañamos a alcanzar tus metas académicas."
          items={[
            {
              icon: "Clock",
              title: "Horarios adaptables",
              description: "Diseñamos esquemas de estudio que se ajustan a tus jornadas laborales y responsabilidades personales."
            },
            {
              icon: "ShieldCheck",
              title: "Validez oficial RVOE",
              description: "Todos nuestros programas cuentan con el reconocimiento oficial que respalda tu crecimiento profesional."
            },
            {
              icon: "UserCheck",
              title: "Acompañamiento docente",
              description: "Profesorado comprometido que te orienta paso a paso durante toda tu formación académica."
            }
          ]}
        />
      </div>

      {/* Empresas y Convenios Section */}
      <div id="empresas-convenios" className="relative bg-white py-[clamp(4rem,6vw,6rem)] text-[#0F2755] border-t border-slate-200/80 overflow-hidden">
        {/* Soft background ambient accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 size-96 rounded-full bg-[#1B3A7A]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-[#F4B400]/5 blur-3xl" />
        </div>

        <div className="mx-auto w-[var(--container)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Alianzas Institucionales
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-2xl sm:text-4xl text-[#0F2755]">
              Empresas y Convenios
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600 max-w-xl">
              Establecemos alianzas estratégicas con empresas e instituciones para impulsar el desarrollo académico de tus colaboradores con planes preferenciales y acompañamiento personalizado.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">Becas Corporativas</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Descuentos y tarifas preferenciales para el personal corporativo y sus familiares directos en todos nuestros niveles educativos.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Solicitar convenio</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">Acreditación de Talentos</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Procesos ágiles de certificación y titulación para colaboradores con experiencia comprobada en el sector laboral.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Conocer acreditación</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">Flexibilidad Horaria</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Modalidades 100% en línea o híbridas estructuradas para no interferir en la operación ni las metas del equipo de trabajo.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Consultar esquemas</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experiencia ENLACES Section wrapper */}
      <div id="experiencia-enlaces">
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
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Orientación"
          title="Respuestas a tus dudas"
          highlight="del proceso"
          items={[
            {
              title: "¿Los programas cuentan con validez oficial?",
              description: "Sí, nuestros planes educativos disponen de Reconocimiento de Validez Oficial de Estudios (RVOE) expedido por las autoridades educativas correspondientes en México."
            },
            {
              title: "¿En qué modalidad se imparten las clases?",
              description: "Disponemos de modalidades en línea, presenciales y mixtas diseñadas para adaptarse a tus horarios laborales y responsabilidades familiares."
            },
            {
              title: "¿Qué documentación se requiere para la inscripción?",
              description: "Generalmente se solicita acta de nacimiento, CURP, certificado del nivel previo y comprobante de domicilio. Un asesor te asistirá durante todo el trámite."
            },
            {
              title: "¿Cuándo inicia el siguiente periodo escolar?",
              description: "Mantenemos aperturas periódicas a lo largo del año para que puedas comenzar tus estudios en el momento que resulte más conveniente para ti."
            },
            {
              title: "¿Puedo acreditar conocimientos por experiencia laboral?",
              description: "Sí, contamos con esquemas de evaluación y acreditación que reconocen los saberes previos adquiridos a lo largo de tu trayectoria profesional."
            }
          ]}
          help={{
            label: "Asesoría",
            title: "¿Tienes dudas sobre la admisión?",
            description: "Margarita Gómez, Asesora Académica, te orientará de inmediato en todo tu trámite.",
            cta: {
              text: "Contactar asesor",
              href: "#contact-dark-form-card"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/smiling-secretary-writing-note_1098-3618.jpg",
            imageAlt: "Smiling secretary writing a note"
          }}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Solicita atención personalizada para tu plan académico"
          formTitle="Formulario de atención a aspirantes"
          fields={{
            name: "Nombre completo",
            email: "Correo electrónico",
            company: "Programa de interés",
            message: "Mensaje o dudas"
          }}
          placeholders={{
            name: "Escribe tu nombre completo",
            email: "correo@ejemplo.com",
            company: "Ej. Bachillerato o Licenciatura",
            message: "Escribe tus preguntas sobre admisión, costos o validez..."
          }}
          submitText="Enviar consulta"
          successText="Gracias. Un asesor académico te responderá a la brevedad."
          imageSrc="https://img.b2bpic.net/free-photo/animated-erasers-books-still-life_23-2149911070.jpg"
          imageAlt="animated erasers on books like a seesaw"
          ariaLabel="Formulario de contacto institucional para aspirantes"
        />
      </div>
    </>
  );
}
