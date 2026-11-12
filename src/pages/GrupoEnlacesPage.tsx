import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function GrupoEnlacesPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Consolidación e Identidad Institucional
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Grupo ENLACES
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Un grupo educativo institucional dedicado a impulsar la democratización de la enseñanza superior y media superior con innovación tecnológica y calidez humana.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Pillars */}
      <section className="py-20 bg-white">
        <div className="mx-auto w-[var(--container)]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Los pilares de Grupo ENLACES
            </h2>
            <p className="mt-3 font-['Inter'] text-base text-slate-600">
              Fundamentamos nuestra propuesta en cuatro ejes estratégicos que garantizan la calidad de nuestros planes de estudio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovación Tecnológica Aplicada",
                desc: "Desarrollamos entornos virtuales interactivos e intuitivos que permiten a los estudiantes acceder a sus materias desde cualquier dispositivo con total comodidad.",
                num: "01"
              },
              {
                title: "Inclusión y Accesibilidad",
                desc: "Rompemos barreras geográficas y de tiempo, facilitando el acceso a la educación formal a miles de personas que buscan superarse sin interrumpir sus labores.",
                num: "02"
              },
              {
                title: "Rigor y Respaldo Oficial",
                desc: "Todos los programas académicos se construyen bajo estrictos estándares normativos y disponen del respaldo de los reconocimientos RVOE correspondientes.",
                num: "03"
              },
              {
                title: "Formación Orientada al Trabajo",
                desc: "Nuestros planes de estudio se mantienen continuamente actualizados para dar respuesta a las demandas reales del mercado laboral y del entorno profesional.",
                num: "04"
              }
            ].map((plr, idx) => (
              <motion.div
                key={plr.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md transition-all flex gap-6"
              >
                <span className="font-['Montserrat'] font-extrabold text-3xl text-[#F4B400] shrink-0">{plr.num}</span>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">{plr.title}</h3>
                  <p className="mt-2 font-['Inter'] text-sm text-slate-600 leading-relaxed">{plr.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Impact */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)]">
          <div className="bg-[#0F2755] text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <span className="rounded-full bg-[#F4B400] text-[#0F2755] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Presencia Nacional
              </span>
              <h2 className="mt-6 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
                Educación sin fronteras para todo México
              </h2>
              <p className="mt-4 font-['Inter'] text-base text-blue-100 leading-relaxed">
                Grupo ENLACES consolida una red en expansión que atiende a estudiantes en las 32 entidades federativas, ofreciendo acompañamiento personalizado y procesos simplificados de titulación.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/oferta-educativa"
                  className="rounded-full bg-[#F4B400] px-7 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-md"
                >
                  Explorar oferta de programas
                </Link>
                <Link
                  to="/contacto"
                  className="rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-3.5 font-['Montserrat'] font-bold text-sm text-white hover:bg-white hover:text-[#0F2755] transition-all"
                >
                  Contactar al grupo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
