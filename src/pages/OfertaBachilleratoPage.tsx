import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MotionMedia } from "@/components/kit/Media";

export default function OfertaBachilleratoPage() {
  const otherCategories = [
    { title: "Licenciaturas", href: "/oferta-educativa/licenciaturas", tag: "Nivel Superior" },
    { title: "Titulación por Experiencia Laboral", href: "/oferta-educativa/titulacion-por-experiencia-laboral", tag: "Acreditación Ágil" },
    { title: "Maestrías", href: "/oferta-educativa/maestrias", tag: "Posgrados" },
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
            <span className="text-[#1B3A7A] font-bold">Bachillerato</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-[#F4B400]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F2755]">
                <span className="size-2 rounded-full bg-[#F4B400]" />
                Nivel Medio Superior • Validez Oficial SEP
              </span>
              <h1 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-5xl text-[#0F2755] leading-tight">
                Bachillerato General
              </h1>
              <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Concluye tu preparatoria de forma ágil y flexible. Un modelo diseñado especialmente para jóvenes y adultos que requieren adaptar el estudio a sus actividades laborales y personales.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="rounded-full bg-[#F4B400] px-7 py-3.5 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105"
                >
                  Solicitar informes
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
                  src="https://img.b2bpic.net/free-photo/graduation-high-school-university-concept_185193-110147.jpg?_wi=1"
                  alt="Bachillerato General ENLACES"
                  className="size-full object-cover object-[center_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2755]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <p className="font-['Montserrat'] font-bold text-xs text-[#0F2755]">Reconocimiento Oficial RVOE</p>
                  <p className="font-['Inter'] text-[11px] text-slate-600">Certificación oficial para continuar estudios universitarios o impulsar tu empleo.</p>
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
              Estructura Académica de Bachillerato
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Planes de estudio y modalidades
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-base leading-relaxed">
              La categoría de Bachillerato está estructurada para incorporar especializaciones y materias optativas adaptadas a las exigencias académicas actuales.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4B400]/10 rounded-bl-full pointer-events-none" />
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Modalidad Flexible
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Bachillerato en Línea</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Estudia a tu propio ritmo con plataforma abierta las 24 horas y acompañamiento tutorizado constante.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Estructura programática lista</span>
                <span className="text-[#F4B400]">✓ Validez Oficial</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B3A7A]/10 rounded-bl-full pointer-events-none" />
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Acreditación Acelerada
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Bachillerato Intensivo</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Plan enfocado en la acreditación de asignaturas mediante evaluaciones modulares periódicas.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Próxima apertura de grupos</span>
                <span className="text-[#F4B400]">✓ Examen Modular</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4B400]/10 rounded-bl-full pointer-events-none" />
              <span className="inline-block rounded-lg bg-[#0F2755] px-3 py-1 text-xs font-extrabold text-[#F4B400] mb-4">
                Formación Técnica
              </span>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Capacitación Laboral</h3>
              <p className="mt-3 font-['Inter'] text-sm text-slate-600 leading-relaxed">
                Integración de herramientas digitales y administrativas para complementar tu certificado de preparatoria.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1B3A7A]">
                <span>Estructura en desarrollo</span>
                <span className="text-[#F4B400]">✓ Formación Práctica</span>
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
            ¿Tienes dudas sobre el programa de Bachillerato?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Nuestros asesores académicos están listos para brindarte información detallada sobre requisitos de inscripción y equivalencias.
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
