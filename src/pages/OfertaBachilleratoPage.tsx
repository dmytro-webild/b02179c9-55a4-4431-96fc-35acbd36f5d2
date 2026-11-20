import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  BookOpen,
  Award,
  ShieldCheck,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  UserCheck
} from "lucide-react";

export default function OfertaBachilleratoPage() {
  const otherCategories = [
    { title: "Bachillerato en 18 meses", href: "/oferta/bachillerato-18-meses", tag: "Nivel Medio Superior" },
    { title: "Licenciaturas Ejecutivas", href: "/oferta-educativa/licenciaturas", tag: "Nivel Superior" },
    { title: "Titulación por Experiencia", href: "/oferta-educativa/titulacion-por-experiencia-laboral", tag: "Acreditación Ágil" },
    { title: "Maestrías Especializadas", href: "/oferta-educativa/maestrias", tag: "Posgrados" },
    { title: "Diplomados con Validez", href: "/oferta-educativa/diplomados", tag: "Especialización" },
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

              {/* Secuencia de 4 etapas */}
              <div className="mt-8 w-full max-w-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-2">
                  {/* Etapa 1: Inscríbete */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Inscríbete
                    </span>
                  </div>

                  {/* Etapa 2: Prepárate */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Prepárate
                    </span>
                  </div>

                  {/* Etapa 3: Aplica tu examen */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F4B400] z-0" />
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Aplica tu examen
                    </span>
                  </div>

                  {/* Etapa 4: Recibe tu certificado */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF4D1] flex items-center justify-center shrink-0 z-10">
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B3A7A]" />
                      </div>
                    </div>
                    <span className="mt-2.5 font-['Montserrat'] font-semibold text-xs sm:text-sm text-[#1B3A7A] leading-tight px-1">
                      Recibe tu certificado
                    </span>
                  </div>
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

          {/* Grid de 5 Bloques Informativos en 2 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Bloque 1: Metodología */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <BookOpen className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
                    Metodología ENLACES
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Una preparación que se adapta a tu vida
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Nuestro programa se desarrolla en línea mediante la Metodología ENLACES, con sesiones académicas en vivo que también quedan grabadas para que puedas consultarlas posteriormente. Así puedes prepararte sin descuidar tus responsabilidades personales y laborales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/experiencia-enlaces"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/30 bg-[#1B3A7A]/5 px-5 py-2.5 font-['Montserrat'] font-bold text-xs sm:text-sm text-[#1B3A7A] hover:bg-[#1B3A7A] hover:text-white transition-all shadow-2xs group"
                >
                  <span>Conoce la Experiencia ENLACES</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B400] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bloque 2: Ritmo de Estudio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <Clock className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
                    Flexibilidad Académica
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Avanza a tu propio ritmo
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  El periodo de preparación y presentación del examen puede ser de 1 a 4 meses. Puedes solicitar tu evaluación cuando te sientas preparado, de acuerdo con las fechas de aplicación disponibles y los requisitos del proceso.
                </p>
              </div>
            </motion.div>

            {/* Bloque 3: El Examen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <Target className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
                    Evaluación Unificada
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Un examen, tres oportunidades
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  La acreditación se realiza mediante un examen único. Cuentas con hasta tres oportunidades para presentarlo, conforme a las condiciones y convocatorias aplicables. Durante tu preparación recibirás orientación académica para llegar con mayor seguridad.
                </p>
              </div>
            </motion.div>

            {/* Bloque 4: Certificado Oficial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <Award className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
                    Validez SEP
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Tu esfuerzo, respaldado por un certificado oficial
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed">
                  Al acreditar tu examen obtendrás tu Certificado Oficial de Bachillerato expedido con validez oficial ante la SEP, reconocido en todo el país y aceptado para continuar tus estudios universitarios o impulsar tu desarrollo laboral.
                </p>
              </div>
            </motion.div>

            {/* Bloque 5: Acompañamiento Académico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs hover:border-[#F4B400]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D1] text-[#1B3A7A] flex items-center justify-center shrink-0 border border-[#F4B400]/40">
                    <UserCheck className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
                    Tutoría Continua
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#1B3A7A]">
                  Acompañamiento académico en todo momento
                </h3>
                <p className="mt-3 font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
                  Durante todo tu proceso contarás con el respaldo de tutores y asesores educativos que te guiarán paso a paso, resolviendo tus dudas y brindándote el seguimiento constante que necesitas para alcanzar tu meta con éxito.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Franja Institucional: Validez Oficial SEP - Acuerdo 286 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8 md:p-10 shadow-2xs relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2755] text-[#F4B400] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F4B400] bg-[#0F2755] px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Validez Oficial SEP
                  </span>
                  <h3 className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl text-[#0F2755]">
                    Acreditación Oficial mediante el Acuerdo 286 de la SEP
                  </h3>
                </div>
              </div>
              <span className="self-start md:self-auto text-xs font-bold text-[#1B3A7A] bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-2xs">
                Validez Nacional
              </span>
            </div>

            <p className="font-['Inter'] text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
              Nuestro programa se encuentra estructurado con total apego a los lineamientos institucionales, garantizando claridad y certeza legal en cada una de las fases de tu proceso educativo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold text-[#F4B400] bg-[#0F2755] px-2.5 py-0.5 rounded-full">
                      Etapa 1
                    </span>
                    <BookOpen className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Preparación Académica
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Formación y asesoría continua en línea a cargo de ENLACES para garantizar tu aprendizaje y preparación idónea para la evaluación.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold text-[#F4B400] bg-[#0F2755] px-2.5 py-0.5 rounded-full">
                      Etapa 2
                    </span>
                    <Target className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Evaluación Global
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Presentación del examen único conforme a los términos y convocatorias de la instancia de evaluación correspondiente.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold text-[#F4B400] bg-[#0F2755] px-2.5 py-0.5 rounded-full">
                      Etapa 3
                    </span>
                    <Award className="w-5 h-5 text-[#1B3A7A]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base text-[#0F2755]">
                    Expedición del Certificado
                  </h4>
                  <p className="mt-2 font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Trámite y expedición del Certificado Oficial de Bachillerato por parte de la Secretaría de Educación Pública con validez en todo el país.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
