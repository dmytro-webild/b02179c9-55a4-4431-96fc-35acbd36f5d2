import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

const SOCIAL_NETWORKS_HOME = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CEUfXWjBB/",
    color: "#1877F2",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/enlaceseducacion",
    color: "#E4405F",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@enlaceseducacion",
    color: "#000000",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.83.12V9.37a6.34 6.34 0 00-5.8 6.22 6.34 6.34 0 0010.83 4.45V11a8.16 8.16 0 004.77 1.52V9.06a4.85 4.85 0 01-3.52-2.37z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@enlaceseducacion",
    color: "#FF0000",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/enlaceseducacion",
    color: "#25D366",
    path: "M13.736 5.853l4.005-4.17 2.325 2.228-4.401 4.582 3.864 4.024-2.325 2.228-3.468-3.612v6.621h-3.472v-6.621l-3.468 3.612-2.325-2.228 3.864-4.024-4.401-4.582 2.325-2.228 4.005 4.17V0h3.472v5.853zm-5.208 13.901h6.944v4.246H8.528v-4.246z",
  },
];

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

      {/* Sección Contacto Home Editorial - Sin bordes ni sombras */}
      <section
        id="contacto"
        data-webild-section="HomeContact"
        data-section="contacto"
        className="py-16 sm:py-24 bg-linear-to-b from-white via-slate-50/60 to-white border-0 shadow-none"
      >
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/15 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] mb-4">
              <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
              Contacto e Informes
            </span>
            <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F2755] tracking-tight leading-tight">
              Estamos aquí para acompañarte.
            </h2>
            <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              ¿Tienes dudas sobre nuestros programas? Nuestro equipo está listo para orientarte.
            </p>
          </motion.div>

          {/* Bloque Editorial sin bordes ni sombras */}
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
            
            {/* 1. WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-emerald-50/70 text-[#0F2755] border-0 shadow-none"
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md">
                  <svg className="size-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Atención inmediata por WhatsApp</span>
                  <p className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl text-emerald-950 tracking-wide mt-0.5">
                    56 1864 2699
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/525618642699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#20ba59] hover:shadow-lg active:scale-95 transition-all duration-300 shrink-0"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </motion.div>

            {/* 2. Teléfonos */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-6 sm:p-8 rounded-3xl bg-blue-50/50 border-0 shadow-none text-[#0F2755]"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A7A]">Líneas Directas</span>
              <h3 className="mt-1 font-['Montserrat'] font-bold text-xl text-[#0F2755]">Teléfonos de atención</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:5640045860"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-100/50 text-[#0F2755] transition-all duration-300 group border-0 shadow-none"
                >
                  <span className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755]">
                    56 4004 5860
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] group-hover:translate-x-1 transition-transform">
                    Llamar
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </a>
                <a
                  href="tel:5633656122"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-100/50 text-[#0F2755] transition-all duration-300 group border-0 shadow-none"
                >
                  <span className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755]">
                    56 3365 6122
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] group-hover:translate-x-1 transition-transform">
                    Llamar
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>

            {/* 3. Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 sm:p-8 rounded-3xl bg-slate-50/80 border-0 shadow-none"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A7A]">Canales Oficiales</span>
              <h3 className="mt-1 font-['Montserrat'] font-bold text-xl text-[#0F2755]">Redes sociales</h3>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {SOCIAL_NETWORKS_HOME.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white hover:bg-[#0F2755] hover:text-white transition-all duration-300 border-0 shadow-none"
                    aria-label={social.name}
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: social.color }}>
                      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                        <path d={social.path} />
                      </svg>
                    </div>
                    <span className="font-['Montserrat'] font-bold text-sm text-[#0F2755] group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* 4. Oficinas Centrales */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-100/70 border-0 shadow-none"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A7A]">Ubicación Física</span>
                <h3 className="mt-1 font-['Montserrat'] font-bold text-xl text-[#0F2755]">Oficinas centrales</h3>
                <p className="mt-2 font-['Inter'] text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                  Av. Paseo de la Reforma 342, piso 26, Col. Juárez, Alcaldía Cuauhtémoc, C. P. 06500, Ciudad de México.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Paseo+de+la+Reforma+342,+piso+26,+colonia+Ju%C3%A1rez,+Alcald%C3%ADa+Cuauht%C3%A9moc,+C.+P.+06500,+Ciudad+de+M%C3%A9xico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2755] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1B3A7A] hover:shadow-lg active:scale-95 transition-all duration-300 shrink-0"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Cómo llegar
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}