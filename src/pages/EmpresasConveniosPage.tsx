import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function EmpresasConveniosPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Alianzas Institucionales y Corporativas
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Empresas y convenios
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Establecemos alianzas estratégicas con empresas e instituciones para impulsar el desarrollo profesional de sus colaboradores mediante planes preferenciales, flexibilidad y acompañamiento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Convenios Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0F2755] text-[#F4B400] mb-6 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                  Becas Corporativas
                </h3>
                <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Descuentos y tarifas preferenciales para el personal corporativo y sus familiares directos en todos nuestros niveles educativos.
                </p>
              </div>
              <Link to="/contacto" className="mt-8 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Solicitar convenio</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0F2755] text-[#F4B400] mb-6 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                  Acreditación de Talentos
                </h3>
                <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Procesos ágiles de certificación y titulación para colaboradores con experiencia comprobada en el sector laboral.
                </p>
              </div>
              <Link to="/contacto" className="mt-8 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Conocer acreditación</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group rounded-2xl border border-[#1B3A7A]/15 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1B3A7A]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0F2755] text-[#F4B400] mb-6 shadow-sm group-hover:bg-[#1B3A7A] group-hover:scale-110 transition-all duration-300">
                  <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                  Flexibilidad Horaria
                </h3>
                <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                  Modalidades 100% en línea o híbridas estructuradas para no interferir en la operación ni las metas del equipo de trabajo.
                </p>
              </div>
              <Link to="/contacto" className="mt-8 inline-flex items-center text-xs font-extrabold text-[#1B3A7A] group-hover:text-[#F4B400] transition-colors gap-1.5">
                <span>Consultar esquemas</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Convenio Works Workflow */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-['Montserrat'] font-extrabold text-3xl text-[#0F2755]">
              Proceso para concretar un convenio
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600">
              Establecemos acuerdos ágiles y sencillos para iniciar el beneficio de tus colaboradores sin complicaciones administrativas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contacto e Inquietud", desc: "La empresa solicita información sobre planes de estudio y esquemas de beca." },
              { step: "02", title: "Propuesta a la Medida", desc: "Diseñamos un tabulador y modelo acorde a la plantilla laboral." },
              { step: "03", title: "Formalización", desc: "Firma de convenio marco sin costo ni compromiso forzoso de consumo." },
              { step: "04", title: "Registro e Inicio", desc: "Inscripción preferencial y acompañamiento directo a los beneficiarios." }
            ].map((st) => (
              <div key={st.step} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-['Montserrat'] font-extrabold text-3xl text-[#F4B400] block mb-2">{st.step}</span>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F2755]">{st.title}</h3>
                  <p className="mt-2 font-['Inter'] text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            Transforma el desarrollo de talento en tu empresa
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Ponte en contacto con nuestro departamento de vinculación institucional y solicita una propuesta sin compromiso.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-lg hover:scale-105"
            >
              Solicitar convenio institucional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
