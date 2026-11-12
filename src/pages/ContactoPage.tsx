import { motion } from "motion/react";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Atención a Aspirantes y Alumnos
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Contacto
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Resuelve tus dudas sobre procesos de admisión, oferta de programas, costos, validez oficial o convenios corporativos. Estamos para orientarte.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400]">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">Correo Electrónico</h3>
                  <a href="mailto:informes@enlaces.edu.mx" className="font-['Inter'] text-sm text-[#1B3A7A] hover:underline">
                    informes@enlaces.edu.mx
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400]">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">Horario de Atención</h3>
                  <p className="font-['Inter'] text-sm text-slate-600">
                    Lunes a Viernes: 9:00 - 18:00 hrs
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400]">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">Asesoría Personalizada</h3>
                  <p className="font-['Inter'] text-sm text-slate-600">
                    Respuesta rápida en línea
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
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
    </div>
  );
}
