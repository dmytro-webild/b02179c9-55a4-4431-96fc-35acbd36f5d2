import { Link } from "react-router-dom";
import { motion } from "motion/react";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Institución Educativa
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Sobre nosotros
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              La educación debe adaptarse a tu vida, no al revés. En ENLACES Educación te acompañamos a alcanzar tus metas académicas mediante esquemas flexibles y respaldo oficial.
            </p>
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
