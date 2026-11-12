import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import CinematicVideoSection from "@/components/sections/video/CinematicVideoSection";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

const portalSections = [
  {
    title: "Nosotros",
    tag: "Institución",
    description: "Conoce nuestra visión educativa flexible, compromiso pedagógico y respaldo oficial.",
    href: "/nosotros",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Oferta Educativa",
    tag: "Programas",
    description: "Bachillerato, Licenciaturas Ejecutivas, Posgrados y Titulación por Experiencia.",
    href: "/oferta-educativa",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Empresas y Convenios",
    tag: "Alianzas",
    description: "Planes corporativos, becas para personal y desarrollo de talento laboral.",
    href: "/empresas-y-convenios",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Experiencia ENLACES",
    tag: "Comunidad",
    description: "Indicadores de calidad, trayectoria educativa y excelencia docente.",
    href: "/experiencia-enlaces",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Testimonios y Egresados",
    tag: "Casos de Éxito",
    description: "Descubre las experiencias reales de graduados que impulsaron su carrera con nosotros.",
    href: "/testimonios-y-egresados",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Sistema Operativo ENLACES",
    tag: "Tecnología",
    description: "Nuestro campus virtual 24/7, metodología asincrónica y acompañamiento continuo.",
    href: "/sistema-operativo-enlaces",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Contacto",
    tag: "Atención",
    description: "Resuelve tus dudas sobre admisión, requisitos y atención a aspirantes.",
    href: "/contacto",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />

      <LoaderChipFill label="ENLACES Educación" />

      {/* Portada actual y rueda institucional intactas */}
      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-white"
          tag="EDUCACIÓN EN LÍNEA"
          title="La educación es el camino"
          highlightText="no el destino."
          description="Concluye tus estudios, transforma tu experiencia y construye nuevas oportunidades sin detener tu vida."
          primaryButton={{
            text: "Explora nuestros programas",
            href: "/oferta-educativa"
          }}
          secondaryButton={{
            text: "Conoce ENLACES",
            href: "/nosotros"
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

      {/* Video cinematográfico intacto */}
      <div id="video-cinematografico" data-webild-section="CinematicVideoSection" data-webild-section-id="CinematicVideoSection-1" data-section="video-cinematografico">
        <CinematicVideoSection videoSrc="https://res.cloudinary.com/r58dzn6z/video/upload/v1794457523/gemini_generated_video_ab0b3b50.mp4" />
      </div>

      {/* Portal Institucional - Accesos directos a las páginas independientes */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Portal Educativo Institucional
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Explora nuestro ecosistema académico
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600">
              Navega libremente por nuestros módulos independientes para conocer a detalle cada área de ENLACES Educación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portalSections.map((sec, idx) => (
              <motion.div
                key={sec.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  to={sec.href}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B3A7A]/40 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] transition-transform duration-300 group-hover:scale-110">
                        {sec.icon}
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#1B3A7A] bg-[#1B3A7A]/10 px-3 py-1 rounded-full">
                        {sec.tag}
                      </span>
                    </div>
                    <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                      {sec.title}
                    </h3>
                    <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center font-['Montserrat'] text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                    <span>Ingresar a {sec.title}</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-lg hover:bg-amber-300 hover:scale-105 transition-all duration-300"
            >
              <span>¿Tienes dudas? Contacta a un asesor académico</span>
              <svg className="size-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
