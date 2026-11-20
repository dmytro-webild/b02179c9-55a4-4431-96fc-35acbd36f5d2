import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

const portalSections = [
  {
    title: "Nosotros",
    tag: "Institución",
    description: "Conoce nuestra visión educativa flexible, nuestro compromiso contigo y el respaldo oficial que impulsa tu futuro.",
    href: "/nosotros",
    actionText: "Conoce nuestra institución",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Oferta Educativa",
    tag: "Programas",
    description: "Descubre el programa ideal para ti: Bachillerato, Licenciaturas, Titulación por Experiencia, Maestrías, Diplomados e Inglés.",
    href: "/oferta-educativa",
    actionText: "Explora la oferta educativa",
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
    description: "Impulsa tu desarrollo laboral o beneficia a tu equipo de trabajo mediante nuestros convenios estratégicos y becas corporativas.",
    href: "/empresas-y-convenios",
    actionText: "Descubre convenios y alianzas",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Experiencia ENLACES",
    tag: "Excelencia",
    description: "Conoce los estándares de calidad, la trayectoria académica y el acompañamiento docente que garantizan tu éxito.",
    href: "/experiencia-enlaces",
    actionText: "Descubre la experiencia",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Testimonios y Egresados",
    tag: "Historias de Éxito",
    description: "Inspírate con testimonios reales de estudiantes y egresados que ya lograron transformar su futuro profesional.",
    href: "/testimonios-y-egresados",
    actionText: "Ver testimonios de egresados",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "ENLACES 360",
    tag: "Campus Virtual",
    description: "Explora la plataforma virtual 24/7 y la tecnología flexible diseñada para adaptarse a tu ritmo de vida.",
    href: "/sistema-operativo-enlaces",
    actionText: "Conoce el campus virtual",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Contacto",
    tag: "Atención Personalizada",
    description: "Resuelve tus dudas en tiempo real y recibe orientación personalizada para dar tu siguiente paso hoy mismo.",
    href: "/contacto",
    actionText: "Contacta a un asesor",
    icon: (
      <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const institutionalBenefits = [
  {
    title: "Educación en línea",
    subtitle: "Estudia desde donde estés.",
    icon: (
      <svg className="size-6 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Programas flexibles",
    subtitle: "Con horarios que se adaptan a ti.",
    icon: (
      <svg className="size-6 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Validez oficial",
    subtitle: "En los programas correspondientes.",
    icon: (
      <svg className="size-6 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento académico",
    subtitle: "Durante todo tu proceso.",
    icon: (
      <svg className="size-6 text-[#1B3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />

      <LoaderChipFill label="ENLACES Educación" />

      {/* Portada actual con mensaje principal a la izquierda y video vertical de la presentadora a la derecha */}
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
          videoSrc="https://res.cloudinary.com/r58dzn6z/video/upload/v1794975513/VENTAJAS_EDUCACION_EN_LINEA_COMPRIMIDO_16MB.mp4"
          introDelay={0.1}
        />
      </div>

      {/* Secciones de texto secundario y rueda institucional centrada */}
      <section id="educacion-flexible" data-webild-section="EducacionFlexible" data-section="educacion-flexible" className="bg-white py-8 sm:py-12 overflow-hidden border-0 shadow-none">
        <div className="mx-auto w-[var(--container)] flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/15 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] mb-4">
              <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
              Educación Flexible y Humana
            </div>

            <h2 className="font-['Montserrat'] font-extrabold text-[#0F2755] text-3xl sm:text-4xl lg:text-4xl leading-[1.15] tracking-tight mb-4">
              Tu futuro está a un clic de distancia.
            </h2>

            <p className="font-['Inter'] text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl mb-0">
              Estudia desde donde estés, con horarios que se adaptan a tu vida, tecnología educativa y acompañamiento humano durante todo tu proceso.
            </p>
          </motion.div>

          {/* Rueda original ENLACES centrada, azul tenue y tamaño elegante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex items-center justify-center"
          >
            <img
              src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794456185254-3zlenx22.png"
              alt="Rueda institucional ENLACES"
              className="w-[260px] sm:w-[330px] md:w-[390px] lg:w-[430px] h-auto aspect-square object-contain mix-blend-multiply opacity-[0.20]"
            />
          </motion.div>
        </div>
      </section>

      {/* Los cuatro beneficios institucionales */}
      <section id="beneficios-institucionales" data-webild-section="InstitutionalBenefits" data-section="beneficios-institucionales" className="bg-white pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-20 border-0 shadow-none">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {institutionalBenefits.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-0 bg-transparent border-0 shadow-none"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1B3A7A]/10 text-[#1B3A7A]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Institucional - Accesos directos a las 7 áreas principales */}
      <section id="portal-secciones" data-webild-section="PortalSections" data-section="portal-secciones" className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto w-[var(--container)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Explora nuestro portal institucional
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600 leading-relaxed">
              Selecciona cualquiera de nuestras siete áreas principales para conocer en detalle lo que tenemos preparado para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portalSections.map((sec, idx) => {
              const isLast = idx === portalSections.length - 1;
              return (
                <motion.div
                  key={sec.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className={isLast ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <Link
                    to={sec.href}
                    className={`group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F4B400]/50 hover:shadow-xl ${
                      isLast ? "lg:flex-row lg:items-center lg:gap-8 bg-gradient-to-r from-white via-white to-amber-50/40" : ""
                    }`}
                  >
                    <div className={isLast ? "lg:flex-1" : ""}>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1B3A7A]">
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
                    <div className={`mt-6 flex items-center font-['Montserrat'] text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-2 ${
                      isLast ? "lg:mt-0 lg:shrink-0" : ""
                    }`}>
                      <span>{sec.actionText}</span>
                      <svg className="size-4 stroke-[3] group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}