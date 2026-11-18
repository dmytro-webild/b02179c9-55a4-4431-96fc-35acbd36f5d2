import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Editorial Portada / Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-24 border-b border-slate-100 overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-center">
        {/* Subtle background glow accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-[#1B3A7A]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-96 rounded-full bg-[#F4B400]/5 blur-3xl" />

        {/* Right Half Photography - 50% screen width, 100% height, flush to right edge */}
        <div className="w-full lg:w-1/2 lg:absolute lg:inset-y-0 lg:right-0 h-[360px] sm:h-[460px] lg:h-full relative overflow-hidden order-first lg:order-last">
          <MotionMedia
            src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794963104796-efo7w95q.jpg"
            alt="Fotografía institucional real de ENLACES"
            className="size-full object-cover object-[center_top] sm:object-center"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

          {/* Left horizontal soft gradient fade for seamless transition to white background */}
          <div className="absolute inset-y-0 left-0 w-3/4 sm:w-3/5 lg:w-2/3 bg-gradient-to-r from-white via-white/80 via-white/30 to-transparent pointer-events-none" />

          {/* Bottom gradient fade for mobile layout integration */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-[var(--container)] px-4 sm:px-6 py-4 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 xl:col-span-6 flex flex-col items-start max-w-2xl lg:max-w-none"
            >
              {/* Top Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#1B3A7A]">
                <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
                INNOVACIÓN EN EDUCACIÓN
              </div>

              {/* Title: Montserrat 800 Italic */}
              <h1 className="mt-6 font-['Montserrat'] font-extrabold italic text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.12] tracking-tight">
                <span className="block text-[#1B3A7A]">
                  Estudia como si fueras a vivir por siempre.
                </span>
                <span className="block text-[#F4B400] mt-1 sm:mt-2">
                  Vive como si fueras a morir mañana.
                </span>
              </h1>

              {/* Complementary Text */}
              <p className="mt-6 font-['Inter'] text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-xl border-l-2 border-[#F4B400] pl-4 sm:pl-5 py-0.5">
                Una filosofía de vida. Una nueva manera de entender la educación.
              </p>

              {/* Call to Actions */}
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contacto"
                  className="rounded-full bg-[#F4B400] px-7 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105"
                >
                  Solicitar informes
                </Link>
                <Link
                  to="/oferta-educativa"
                  className="rounded-full border border-slate-300 bg-white/90 backdrop-blur-sm px-7 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] hover:bg-slate-50 transition-all shadow-sm"
                >
                  Conoce nuestros programas
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Statement & Icon Row */}
      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about">
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

      {/* Institutional Mission, Vision & Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Misión Institucional</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Brindar soluciones educativas incluyentes, accesibles y de alta calidad técnica y humana que permitan a jóvenes y adultos concluir sus estudios y mejorar sus oportunidades laborales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Visión de Futuro</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Ser la institución líder en modelos educativos flexibles y en línea, reconocida por su excelencia académica, su calidez en el acompañamiento y el éxito demostrado de sus egresados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Compromiso RVOE</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Garantizar la validez y certeza legal en todos nuestros certificados y títulos profesionales expedidos bajo la supervisión de las autoridades educativas correspondientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            ¿Listo para iniciar tu transformación académica?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Conoce nuestra oferta de programas o solicita atención inmediata con un asesor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/oferta-educativa"
              className="rounded-full bg-[#F4B400] px-7 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-md"
            >
              Ver oferta educativa
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border-2 border-white bg-transparent px-7 py-3.5 font-['Montserrat'] font-bold text-sm text-white hover:bg-white hover:text-[#0F2755] transition-all"
            >
              Solicitar informes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
