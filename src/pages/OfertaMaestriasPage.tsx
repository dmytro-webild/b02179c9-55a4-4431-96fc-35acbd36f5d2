import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";

export default function OfertaMaestriasPage() {
  const otherCategories = [
    { title: "Bachillerato", href: "/oferta-educativa/bachillerato", tag: "Medio Superior" },
    { title: "Licenciaturas", href: "/oferta-educativa/licenciaturas", tag: "Nivel Superior" },
    { title: "Titulación por Experiencia Laboral", href: "/oferta-educativa/titulacion-por-experiencia-laboral", tag: "Acreditación Ágil" },
    { title: "Diplomados", href: "/oferta-educativa/diplomados", tag: "Especialización" },
    { title: "Inglés", href: "/oferta-educativa/ingles", tag: "Idioma Global" },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Header Banner with Breadcrumbs */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20 border-b border-slate-200/60 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[#F4B400]/10 blur-3xl" />
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#1B3A7A] transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/oferta-educativa" className="hover:text-[#1B3A7A] transition-colors">Oferta educativa</Link>
            <span>/</span>
            <span className="text-[#1B3A7A] font-bold">Maestrías</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-[#F4B400]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F2755]">
                <span className="size-2 rounded-full bg-[#F4B400]" />
                Posgrado Directivo • Liderazgo Estratégico
              </span>
              <h1 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-5xl text-[#0F2755] leading-tight">
                Maestrías Especializadas
              </h1>
              <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Desarrolla visión ejecutiva de alta dirección. Programas de posgrado orientados a la toma de decisiones estratégicas, gestión de proyectos y liderazgo organizacional.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="rounded-full bg-[#F4B400] px-7 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105"
                >
                  Solicitar información
                </Link>
                <Link
                  to="/oferta-educativa"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-['Montserrat'] font-bold text-sm text-[#0F2755] hover:bg-slate-50 transition-all"
                >
                  Ver todas las categorías
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F4B400]/40">
                <MotionMedia
                  src="https://img.b2bpic.net/free-photo/factory-investors-review-documentation-mockup-notebook_482257-123446.jpg?_wi=1"
                  alt="Maestrías Especializadas ENLACES"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <p className="font-['Montserrat'] font-bold text-xs text-[#0F2755]">Grado Académico de Posgrado</p>
                  <p className="font-['Inter'] text-[11px] text-slate-600">Reconocimiento oficial con enfoque ejecutivo e innovación directiva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure & Future Programs Placeholder Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Estructura Académica de Posgrados
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Especialidades directivas y futuras maestrías
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-base leading-relaxed">
              Estructura diseñada para integrar programas de maestría orientados a las demandas del entorno gerencial global.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Dirección General
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Alta Dirección de Empresas</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Formación gerencial en estrategia corporativa, innovación empresarial y visión global de negocios.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Estructura de maestría lista</span>
                <span className="text-[#F4B400]">✓ Titulación por Grado</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Gestión de Talento
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Gestión de Capital Humano</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Estrategias avanzadas de desarrollo organizacional, liderazgo inclusivo y transformación cultural.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Estructura preparada</span>
                <span className="text-[#F4B400]">✓ Formato Ejecutivo</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Proyectos e Innovación
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Gestión de Proyectos</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Metodologías ágiles, administración de riesgos y dirección de proyectos de alta complejidad.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Diseño curricular listo</span>
                <span className="text-[#F4B400]">✓ Enfoque Práctico</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Other Categories Banner */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <h3 className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755] mb-6">
            Explora otras categorías de nuestra Oferta Educativa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.href}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-[#F4B400] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4B400] bg-[#0F2755] px-2 py-0.5 rounded-full">
                    {cat.tag}
                  </span>
                  <h4 className="mt-2 font-['Montserrat'] font-bold text-sm text-[#0F2755] group-hover:text-[#1B3A7A] transition-colors">
                    {cat.title}
                  </h4>
                </div>
                <span className="mt-4 text-xs font-bold text-[#1B3A7A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ver categoría →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] px-4 text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            ¿Buscas acelerar tu perfil con una Maestría?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Comunícate con un asesor de posgrados para recibir información sobre planes de estudio y perfil de ingreso.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-lg hover:bg-amber-300 transition-all hover:scale-105"
            >
              Contactar a un asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
