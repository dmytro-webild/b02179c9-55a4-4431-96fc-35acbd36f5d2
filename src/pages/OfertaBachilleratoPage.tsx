import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  BookOpen,
  Sparkles,
  Calendar,
  Globe,
  Award,
  ShieldCheck,
  ClipboardList,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  FileText,
  UserCheck
} from "lucide-react";

export default function OfertaBachilleratoPage() {
  const pasosPortada = [
    { titulo: "Inscríbete", icon: UserCheck },
    { titulo: "Prepárate", icon: BookOpen },
    { titulo: "Aplica tu examen", icon: FileText },
    { titulo: "Recibe tu certificado", icon: Award },
  ];

  const otherCategories = [
    { title: "Bachillerato en 18 meses", href: "/oferta/bachillerato-18-meses", tag: "Nivel Medio Superior" },
    { title: "Licenciaturas Ejecutivas", href: "/oferta-educativa/licenciaturas", tag: "Nivel Superior" },
    { title: "Titulación por Experiencia", href: "/oferta-educativa/titulacion-por-experiencia-laboral", tag: "Acreditación Ágil" },
    { title: "Maestrías Especializadas", href: "/oferta-educativa/maestrias", tag: "Posgrados" },
    { title: "Diplomados con Validez", href: "/oferta-educativa/diplomados", tag: "Especialización" },
  ];

  const pasosProceso = [
    {
      num: "01",
      titulo: "1. Inscripción y Registro",
      desc: "Completa tu solicitud de ingreso, entrega tu documentación básica y recibe tus accesos inmediatos a la plataforma educativa.",
    },
    {
      num: "02",
      titulo: "2. Inducción y Plataforma",
      desc: "Familiarízate con el aula virtual y conoce a tu tutor académico, quien te acompañará paso a paso en tu proceso de aprendizaje.",
    },
    {
      num: "03",
      titulo: "3. Desarrollo Modular (4 Meses)",
      desc: "Avanza en tus contenidos mediante clases en vivo o grabadas, lecturas digitales y ejercicios prácticos adaptados a tu tiempo.",
    },
    {
      num: "04",
      titulo: "4. Evaluación y Certificación",
      desc: "Acredita tus materias y tramita tu Certificado Oficial de Bachillerato reconocido por la SEP para continuar tus metas.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* SECCIÓN 1 — PORTADA */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-5 sm:pt-9 pb-14 sm:pb-20 border-b border-slate-200/60 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[#F4B400]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-[#1B3A7A]/5 blur-2xl" />

        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#1B3A7A] transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/oferta-educativa" className="hover:text-[#1B3A7A] transition-colors">Oferta educativa</Link>
            <span>/</span>
            <span className="text-[#1B3A7A] font-bold">Bachillerato en 4 meses</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Columna Izquierda: Mensaje Principal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-[#F4B400]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F2755]">
                <span className="size-2 rounded-full bg-[#F4B400]" />
                Bachillerato Intensivo • Validez Oficial SEP
              </span>

              <h1 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight text-left">
                <span className="block text-[#1B3A7A]">TU PREPA EN 4 MESES,</span>
                <span className="block text-[#F4B400]">EN 4 PASOS.</span>
              </h1>

              <p className="mt-5 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Prepárate en línea durante 4 meses con un modelo flexible, clases y acompañamiento académico para dar el siguiente paso hacia tu certificado de bachillerato.
              </p>

              {/* Secuencia visual de 4 pasos */}
              <div className="mt-7 w-full max-w-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-0">
                  {pasosPortada.map((step, idx) => {
                    const IconComp = step.icon;
                    const showLine = idx !== 3;
                    const lineClass =
                      idx === 3
                        ? "hidden"
                        : idx === 1
                        ? "hidden sm:block"
                        : "block";

                    return (
                      <div
                        key={step.titulo}
                        className="flex flex-col items-center text-center relative"
                      >
                        {/* Circle & Connecting Line Container */}
                        <div className="relative flex items-center justify-center w-full">
                          {/* Connecting Line */}
                          {showLine && (
                            <div
                              className={`absolute left-1/2 top-1/2 -translate-y-1/2 h-[2.5px] bg-[#F4B400] z-0 pointer-events-none w-[calc(100%+0.75rem)] sm:w-[calc(100%+1.5rem)] ${lineClass}`}
                            />
                          )}

                          {/* Icon Circle */}
                          <div className="relative z-10 flex shrink-0 items-center justify-center size-12 sm:size-14 rounded-full bg-[#FFF4D1] text-[#1B3A7A]">
                            <IconComp className="size-6 sm:size-7" />
                          </div>
                        </div>

                        {/* Step Title */}
                        <span className="mt-2.5 sm:mt-3 font-['Montserrat'] font-semibold text-[13px] sm:text-[14px] text-[#1B3A7A] leading-tight text-center">
                          {step.titulo}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contacto"
                  className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-md hover:bg-amber-300 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Solicitar informes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Contenedor del video oficial */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-2 border-[#F4B400]/40 bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-3xl"
                  src="https://res.cloudinary.com/r58dzn6z/video/upload/v1795211234/PREPA_INFORMATIVO_8.9MB.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — TESTIMONIO EMOTIVO */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Izquierda: Video del egresado */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200 bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-3xl"
                  src="https://res.cloudinary.com/r58dzn6z/video/upload/v1795211729/CerveceriaDelBarrio_Felipe_Optimizado.mp4"
                />
              </div>
            </div>

            {/* Derecha: Mensaje emocional */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] mb-4">
                Historias que inspiran
              </span>

              <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-[#0F2755] leading-tight">
                <span className="text-[#1B3A7A]">Tu historia</span> todavía tiene <span className="text-[#F4B400]">mucho por contar.</span>
              </h2>

              <div className="mt-5 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed space-y-4">
                <p>
                  No importa cuánto tiempo haya pasado ni cuántas veces hayas tenido que dejar tus estudios para después.
                </p>
                <p>
                  Solo tú sabes cuánto ha significado no haber terminado tus estudios. Las oportunidades que dejaste pasar, las puertas que no se abrieron o las veces que sentiste que te faltaba algo para seguir adelante. Nadie conoce mejor que tú el valor de esa meta pendiente.
                </p>
                <p>
                  Lo importante es que hoy puedes dar ese paso que quedó pendiente. Porque terminar una etapa también significa abrir la puerta a nuevos sueños, continuar preparándote y descubrir hasta dónde puedes llegar.
                </p>
                <p>
                  Nunca es tarde para comenzar de nuevo. <span className="font-bold text-[#0F2755]">Y este puede ser el primer paso hacia todo lo que quieres lograr.</span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 w-full flex items-center gap-3 text-xs font-bold text-[#1B3A7A]">
                <UserCheck className="w-5 h-5 text-[#F4B400]" />
                <span>Acompañamiento cercano y humano en cada paso de tu trayectoria.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — INFORMACIÓN ACADÉMICA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Estructura del Programa
            </span>
            <h2 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0F2755]">
              Información Académica
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1B3A7A] via-[#F4B400] to-[#1B3A7A]" />
            <p className="font-['Inter'] text-slate-600 text-base leading-relaxed">
              Consulta los aspectos clave y la organización modular del Bachillerato en 4 meses.
            </p>
          </div>

          {/* Grid Modular de la Información Académica */}
          <div className="space-y-12">
            {/* Bloque 1: ¿Qué es? y ¿Cómo funciona? */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  ¿Qué es?
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Es un programa intensivo de nivel Medio Superior diseñado para que concluyas tu bachillerato de forma rápida, flexible y con validez oficial, ideal para quienes buscan superarse profesionalmente o continuar sus estudios superiores adaptados a su ritmo de vida.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  ¿Cómo funciona?
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Mediante un modelo educativo 100% en línea organizado en módulos mensuales. Accedes a nuestra plataforma de aprendizaje las 24 horas del día, donde revisas contenidos, realizas actividades prácticas y cuentas con el respaldo constante de asesores académicos.
                </p>
              </motion.div>
            </div>

            {/* Bloque 2: ¿Cuándo? y ¿Dónde? */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  ¿Cuándo?
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Inicios de ciclo continuos cada mes con inscripciones abiertas durante todo el año. Tú decides tus horarios de estudio día a día para equilibrar tus estudios con tus responsabilidades laborales y personales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  ¿Dónde?
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Modalidad 100% en línea accesible desde cualquier lugar. Solo necesitas una computadora, tablet o smartphone con conexión a Internet para ingresar a tus aulas virtuales.
                </p>
              </motion.div>
            </div>

            {/* Bloque 3: ¿Por qué estudiar este programa? y Validez oficial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  ¿Por qué estudiar este programa?
                </h3>
                <ul className="mt-4 space-y-2.5 font-['Inter'] text-slate-600 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
                    <span>Conclusión acelerada en tan solo 4 meses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
                    <span>Flexibilidad de horarios adaptada a tu vida diaria.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
                    <span>Acompañamiento docente y tutorías personalizadas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
                    <span>Plataforma disponible las 24 horas del día.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-[#F4B400]/40 bg-gradient-to-br from-[#0F2755]/5 to-amber-500/5 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  Validez oficial
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Certificado oficial otorgado con Validez Oficial SEP (RVOE), reconocido en toda la República Mexicana. Te permite ingresar a cualquier universidad pública o privada y abre nuevas oportunidades laborales.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F2755] px-4 py-1.5 text-xs font-bold text-[#F4B400]">
                  <FileText className="w-4 h-4" />
                  <span>Certificación SEP 100% Oficial</span>
                </div>
              </motion.div>
            </div>

            {/* Bloque 4: Requisitos y Evaluación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  Requisitos
                </h3>
                <ul className="mt-4 space-y-2 font-['Inter'] text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1B3A7A]" />
                    <span>Acta de nacimiento (copia digital legible).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1B3A7A]" />
                    <span>Certificado de secundaria concluida.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1B3A7A]" />
                    <span>Clave Única de Registro de Población (CURP).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1B3A7A]" />
                    <span>Identificación oficial vigente (INE o pasaporte).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1B3A7A]" />
                    <span>Comprobante de domicilio reciente.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="size-12 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#0F2755]">
                  Evaluación
                </h3>
                <p className="mt-4 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Modelo de evaluación continua mediante entrega de actividades modulares en plataforma y evaluaciones objetivas periódicas, asegurando un aprendizaje efectivo y continuo sin cargas excesivas.
                </p>
              </motion.div>
            </div>

            {/* Bloque 5: Tiempos y pasos del proceso */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B3A7A] mb-2">
                    <Clock className="w-4 h-4 text-[#F4B400]" />
                    <span>Ruta de Aprendizaje</span>
                  </div>
                  <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl text-[#0F2755]">
                    Tiempos y pasos del proceso
                  </h3>
                </div>
                <span className="self-start md:self-auto rounded-full bg-[#0F2755] px-4 py-2 font-['Montserrat'] font-bold text-xs text-[#F4B400]">
                  Duración Total: 4 Meses
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pasosProceso.map((paso, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="font-['Montserrat'] font-extrabold text-2xl text-[#F4B400]">
                        {paso.num}
                      </span>
                      <h4 className="mt-2 font-['Montserrat'] font-bold text-base text-[#0F2755]">
                        {paso.titulo}
                      </h4>
                      <p className="mt-2 font-['Inter'] text-xs text-slate-600 leading-relaxed">
                        {paso.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explorar Otras Categorías */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <h3 className="font-['Montserrat'] font-extrabold text-xl text-[#0F2755] mb-6">
            Explora otras opciones de nuestra Oferta Educativa
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
                  Ver opción →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="py-16 bg-[#0F2755] text-white">
        <div className="mx-auto w-[var(--container)] px-4 text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            ¿Listo para iniciar tu Bachillerato en 4 meses?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Nuestros asesores educativos te orientarán en cada paso para tu inscripción y resolverán todas tus dudas.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] shadow-lg hover:bg-amber-300 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Contactar a un asesor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
