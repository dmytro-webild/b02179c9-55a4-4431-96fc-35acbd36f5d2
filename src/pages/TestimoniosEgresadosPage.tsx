import { motion } from "motion/react";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import { Link } from "react-router-dom";

export default function TestimoniosEgresadosPage() {
  const testimonials = [
    {
      company: "Egresada de Licenciatura",
      name: "María Fernanda Ramos",
      role: "Licenciatura Ejecutiva en Administración",
      quote: "Gracias a la flexibilidad de ENLACES logré terminar mi licenciatura mientras trabajaba a tiempo completo. El acompañamiento de los tutores fue fundamental para no rendirme.",
      imageSrc: "https://images.pexels.com/photos/9492811/pexels-photo-9492811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageAlt: "María Fernanda Ramos",
      stats: [
        { label: "Tiempo de graduación", value: "3 años" },
        { label: "Modalidad", value: "100% En línea" }
      ]
    },
    {
      company: "Egresado de Bachillerato",
      name: "Carlos Alberto Gómez",
      role: "Bachillerato General en Línea",
      quote: "Concluir mi bachillerato me abrió las puertas a un ascenso laboral inmediato. El campus virtual me permitió estudiar en mis horarios libres sin descuidar a mi familia.",
      imageSrc: "https://images.pexels.com/photos/19052075/pexels-photo-19052075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageAlt: "Carlos Alberto Gómez",
      stats: [
        { label: "Promoción laboral", value: "Obtenida" },
        { label: "Validez", value: "RVOE Oficial" }
      ]
    },
    {
      company: "Egresada de Titulación por Experiencia",
      name: "Valeria Mendoza",
      role: "Titulación por Experiencia Laboral",
      quote: "Acredité mis años de trayectoria profesional y obtuve mi título universitario oficial. El proceso fue transparente, ágil y con un respaldo humano extraordinario.",
      imageSrc: "https://images.pexels.com/photos/5761190/pexels-photo-5761190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageAlt: "Valeria Mendoza",
      stats: [
        { label: "Acreditación", value: "Trayectoria" },
        { label: "Cédula", value: "Profesional" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Comunidad y Casos de Éxito
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Testimonios y egresados
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Conoce las experiencias de nuestros egresados. Miles de estudiantes han transformado su trayectoria profesional concluyendo sus estudios con el respaldo de ENLACES Educación.
            </p>
          </div>
        </div>
      </section>

      {/* Indicadores de satisfacción e impacto */}
      <section className="py-12 bg-white">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <div className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#1B3A7A]">+15,000</div>
              <p className="mt-2 font-['Inter'] text-sm font-semibold text-slate-600">Egresados Titulados</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <div className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#1B3A7A]">98%</div>
              <p className="mt-2 font-['Inter'] text-sm font-semibold text-slate-600">Satisfacción Estudiantil</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <div className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#1B3A7A]">100%</div>
              <p className="mt-2 font-['Inter'] text-sm font-semibold text-slate-600">Validez Oficial RVOE</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <div className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#1B3A7A]">+120</div>
              <p className="mt-2 font-['Inter'] text-sm font-semibold text-slate-600">Convenios Corporativos</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <div id="testimonios-carrusel" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="testimonios-carrusel">
        <TestimonialSpotlightCarousel
          tag="Historias Reales"
          title="Lo que dicen quienes ya estudiaron con nosotros"
          description="Descubre cómo nuestro modelo flexible se adaptó a sus vidas y les permitió obtener su certificado y título profesional."
          items={testimonials}
        />
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
            ¿Listo para escribir tu propia historia de éxito?
          </h2>
          <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed">
            Solicita información sobre nuestros planes de estudio y da el paso definitivo hacia tu crecimiento académico y laboral.
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
