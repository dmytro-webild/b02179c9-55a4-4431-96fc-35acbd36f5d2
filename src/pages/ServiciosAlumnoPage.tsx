import { Link } from "react-router-dom";
import { motion } from "motion/react";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";

export default function ServiciosAlumnoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Atención y Soporte Académico
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Servicios al alumno
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Ponemos a tu disposición recursos educativos, asesoría continua y orientación en trámites para acompañarte en cada etapa de tu formación escolar.
            </p>
          </div>
        </div>
      </section>

      {/* Student Services Highlights Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Asesoría Docente",
                desc: "Profesores asignados que resuelven tus dudas y evalúan tus actividades con retroalimentación personalizada.",
                icon: (
                  <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Plataforma 24/7",
                desc: "Acceso ininterrumpido a aulas digitales, bibliotecas virtuales y recursos multimedia estructurados a tu ritmo.",
                icon: (
                  <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Gestión de Trámites",
                desc: "Atención centralizada para constancias, expedición de certificados y seguimiento de procesos RVOE.",
                icon: (
                  <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "Soporte Técnico",
                desc: "Equipo especializado listo para brindarte asistencia técnica durante la entrega de tareas o navegación en la plataforma.",
                icon: (
                  <svg className="size-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="size-12 rounded-xl bg-[#0F2755] flex items-center justify-center mb-5">
                    {srv.icon}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755]">{srv.title}</h3>
                  <p className="mt-2 font-['Inter'] text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Component */}
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
              href: "/contacto"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/smiling-secretary-writing-note_1098-3618.jpg",
            imageAlt: "Smiling secretary writing a note"
          }}
        />
      </div>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            ¿Necesitas ayuda adicional con tus trámites?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Envíanos tus comentarios o dudas directamente al área de atención escolar.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-lg hover:scale-105"
            >
              Ir a la página de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
