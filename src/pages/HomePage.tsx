import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import CinematicVideoSection from "@/components/sections/video/CinematicVideoSection";
import EducationalOfferSection from "@/components/sections/gallery/EducationalOfferSection";
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
          className="bg-transparent"
          tag="EDUCACIÓN EN LÍNEA"
          title="La educación es el camino"
          highlightText="no el destino."
          description="Concluya sus estudios, transforme su experiencia y construya nuevas oportunidades sin detener su vida."
          primaryButton={{
            text: "Explore nuestros programas",
            href: "#oferta-educativa"
          }}
          secondaryButton={{
            text: "Conozca ENLACES",
            href: "#about"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/medium-shot-young-woman-working-laptop_23-2149258288.jpg"
          imageAlt="Estudiante de ENLACES Educación en línea con computadora portátil"
          introDelay={0.1}
          features={[
            {
              icon: "laptop",
              title: "Educación en línea",
              subtitle: "Estudie desde donde esté."
            },
            {
              icon: "calendar",
              title: "Programas flexibles",
              subtitle: "Con horarios que se adaptan a usted."
            },
            {
              icon: "shield",
              title: "Validez oficial*",
              subtitle: "En los programas correspondientes."
            },
            {
              icon: "users",
              title: "Acompañamiento académico",
              subtitle: "Durante todo su proceso."
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
          mainTitle="El mundo está a su alcance"
          secondaryTitle="El siguiente paso depende de usted"
          description="Descubra nuestros programas académicos con modalidades flexibles diseñados para acelerar su crecimiento profesional con validez oficial."
          linkLabel="Solicitar información"
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="La educación debe adaptarse a su vida, no al revés. Acompañamos a adultos y profesionales a alcanzar sus metas académicas."
          items={[
            {
              icon: "Clock",
              title: "Horarios adaptables",
              description: "Diseñamos esquemas de estudio que se ajustan a sus jornadas laborales y responsabilidades personales."
            },
            {
              icon: "ShieldCheck",
              title: "Validez oficial RVOE",
              description: "Todos nuestros programas cuentan con el reconocimiento oficial que respalda su crecimiento profesional."
            },
            {
              icon: "UserCheck",
              title: "Acompañamiento docente",
              description: "Profesorado comprometido que le orienta paso a paso durante toda su formación académica."
            }
          ]}
        />
      </div>

      {/* Empresas y Convenios Section */}
      <div id="empresas-convenios" className="relative bg-white py-[clamp(4rem,6vw,6rem)] text-[#0F2755] border-t border-slate-200">
        <div className="mx-auto w-[var(--container)]">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Alianzas Institucionales
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-2xl sm:text-4xl text-[#0F2755]">
              Empresas y Convenios
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600 max-w-xl">
              Establecemos alianzas estratégicas con empresas e instituciones para impulsar el desarrollo académico de sus colaboradores con planes preferenciales y acompañamiento personalizado.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-xl hover:border-[#1B3A7A]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755]">Becas Corporativas</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Descuentos y tarifas preferenciales para el personal corporativo y sus familiares directos en todos nuestros niveles educativos.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] hover:text-[#F4B400] transition-colors gap-1">
                <span>Solicitar convenio</span>
                <span>→</span>
              </a>
            </div>

            <div className="rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-xl hover:border-[#1B3A7A]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755]">Acreditación de Talentos</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Procesos ágiles de certificación y titulación para colaboradores con experiencia comprobada en el sector laboral.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] hover:text-[#F4B400] transition-colors gap-1">
                <span>Conocer acreditación</span>
                <span>→</span>
              </a>
            </div>

            <div className="rounded-2xl border border-[#1B3A7A]/15 bg-white p-6 shadow-md hover:shadow-xl hover:border-[#1B3A7A]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] mb-4 shadow-sm">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755]">Flexibilidad Horaria</h3>
                <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Modalidades 100% en línea o híbridas estructuradas para no interferir en la operación ni las metas del equipo de trabajo.
                </p>
              </div>
              <a href="#contact-dark-form-card" className="mt-6 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] hover:text-[#F4B400] transition-colors gap-1">
                <span>Consultar esquemas</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experiencia ENLACES Section wrapper */}
      <div id="experiencia-enlaces">
        <div id="metrics-tray-counters" data-webild-section="MetricsTrayCounters" data-webild-section-id="MetricsTrayCounters-1" data-section="metrics-tray-counters">
          <MetricsTrayCounters
            tag={{
              text: "Experiencia ENLACES",
              icon: "Award"
            }}
            title="Respaldados por resultados y compromiso docente"
            description="Años de acompañamiento formal a estudiantes de todo México para alcanzar sus metas académicas."
            items={[
              {
                value: "10,000+",
                label: "Egresados con validez oficial"
              },
              {
                value: "95%",
                label: "Índice de satisfacción estudiantil"
              },
              {
                value: "20+",
                label: "Años de trayectoria académica"
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
                    label: "Índice de satisfacción",
                    value: "95%"
                  },
                  {
                    label: "Egresados",
                    value: "10,000+"
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
                    label: "Años de trayectoria",
                    value: "20+"
                  },
                  {
                    label: "Modalidad flexible",
                    value: "100%"
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
                    label: "Atención personalizada",
                    value: "Continua"
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
          title="Respuestas a sus dudas"
          highlight="del proceso"
          items={[
            {
              title: "¿Los programas cuentan con validez oficial?",
              description: "Sí, nuestros planes educativos disponen de Reconocimiento de Validez Oficial de Estudios (RVOE) expedido por las autoridades educativas correspondientes en México."
            },
            {
              title: "¿En qué modalidad se imparten las clases?",
              description: "Disponemos de modalidades en línea, presenciales y mixtas diseñadas para adaptarse a sus horarios laborales y responsabilidades familiares."
            },
            {
              title: "¿Qué documentación se requiere para la inscripción?",
              description: "Generalmente se solicita acta de nacimiento, CURP, certificado del nivel previo y comprobante de domicilio. Un asesor le asistirá durante todo el trámite."
            },
            {
              title: "¿Cuándo inicia el siguiente periodo escolar?",
              description: "Mantenemos aperturas periódicas a lo largo del año para que pueda comenzar sus estudios en el momento que resulte más conveniente para usted."
            },
            {
              title: "¿Puedo acreditar conocimientos por experiencia laboral?",
              description: "Sí, contamos con esquemas de evaluación y acreditación que reconocen los saberes previos adquiridos a lo largo de su trayectoria profesional."
            }
          ]}
          help={{
            label: "Asesoría",
            title: "¿Tiene dudas sobre la admisión?",
            description: "Margarita Gómez, Asesora Académica, le orientará de inmediato en todo su trámite.",
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
          title="Solicite atención personalizada para su plan académico"
          formTitle="Formulario de atención a aspirantes"
          fields={{
            name: "Nombre completo",
            email: "Correo electrónico",
            company: "Programa de interés",
            message: "Mensaje o dudas"
          }}
          placeholders={{
            name: "Escriba su nombre completo",
            email: "correo@ejemplo.com",
            company: "Ej. Bachillerato o Licenciatura",
            message: "Escriba sus preguntas sobre admisión, costos o validez..."
          }}
          submitText="Enviar consulta"
          successText="Gracias. Un asesor académico le responderá a la brevedad."
          imageSrc="https://img.b2bpic.net/free-photo/animated-erasers-books-still-life_23-2149911070.jpg"
          imageAlt="animated erasers on books like a seesaw"
          ariaLabel="Formulario de contacto institucional para aspirantes"
        />
      </div>
    </>
  );
}
