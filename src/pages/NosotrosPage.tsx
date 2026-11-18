import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Editorial Portada / Hero Section */}
      <section className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-[#1B3A7A]/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 size-96 rounded-full bg-[#F4B400]/10 blur-3xl" />

        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
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
              <p className="mt-6 font-['Inter'] text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl border-l-2 border-[#F4B400] pl-4 sm:pl-5 py-0.5">
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
                  className="rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] hover:bg-slate-100 transition-all"
                >
                  Conoce nuestros programas
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Attached Photography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group mx-auto max-w-md lg:max-w-none">
                {/* Decorative border accent */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#1B3A7A]/15 via-[#F4B400]/20 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <MotionMedia
                    src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794963104796-efo7w95q.jpg"
                    alt="Fotografía institucional real de ENLACES"
                    className="size-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating info badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="size-2 rounded-full bg-[#F4B400]" />
                      <span className="font-['Montserrat'] font-extrabold text-xs uppercase tracking-wider text-[#1B3A7A]">
                        Comunidad ENLACES
                      </span>
                    </div>
                    <p className="font-['Inter'] text-xs font-semibold text-slate-700">
                      Fotografía institucional real de nuestra comunidad de estudiantes.
                    </p>
                  </div>
                </div>
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
