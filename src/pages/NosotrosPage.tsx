import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { GraduationCap, ShieldCheck, Lightbulb, Users } from "lucide-react";
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

      {/* Editorial Section: Quiénes Somos */}
      <section className="bg-white py-20 sm:py-28 lg:py-32 border-b border-slate-100">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Label / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#1B3A7A]">
              QUIÉNES SOMOS
            </div>

            {/* Centered Title */}
            <h2 className="mt-6 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-tight max-w-4xl text-center">
              <span className="block text-[#1B3A7A]">
                Educación para cada etapa de tu vida.
              </span>
              <span className="block text-[#F4B400] mt-1 sm:mt-2">
                Innovación para cada desafío.
              </span>
            </h2>

            {/* Introductory 3 Paragraphs (Max Width 900px, Centered) */}
            <div className="mt-10 max-w-[900px] mx-auto space-y-6 font-['Inter'] text-slate-600 text-base sm:text-lg leading-relaxed text-center font-normal">
              <p>
                En Grupo ENLACES concebimos la educación como un proceso continuo de transformación y superación personal. Desde nuestros inicios, hemos asumido el compromiso de ofrecer alternativas formativas de excelencia que se adapten a las necesidades cambiantes de la sociedad contemporánea y a la realidad de cada uno de nuestros estudiantes.
              </p>
              <p>
                Creemos firmemente que el aprendizaje no tiene límites de edad ni restricciones de horario. Por ello, desarrollamos un ecosistema académico flexible e innovador que integra tecnología de vanguardia, acompañamiento docente cercano y planes de estudio con validez oficial RVOE, permitiendo a jóvenes y adultos alcanzar sus metas profesionales sin comprometer sus responsabilidades diarias.
              </p>
              <p>
                Nuestra misión es impulsar el talento, fortalecer la confianza de nuestra comunidad y brindar herramientas prácticas para afrontar con éxito los retos del mundo laboral. En ENLACES, cada etapa educativa es una oportunidad para evolucionar, trascender y construir un futuro lleno de posibilidades.
              </p>
            </div>
          </motion.div>

          {/* 4 Editorial Blocks in 2 Columns (Discrete linear icons, no cards/borders/shadows) */}
          <div className="mt-16 sm:mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16">
            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 text-[#1B3A7A]">
                <GraduationCap className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Modelo Educativo Flexible
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Diseñamos rutas de aprendizaje dinámicas que se ajustan al tiempo y metas de cada alumno, combinando metodologías presenciales y digitales para maximizar la efectividad académica.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 text-[#1B3A7A]">
                <ShieldCheck className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Calidad y Certeza RVOE
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Todos nuestros programas cuentan con el debido reconocimiento oficial, garantizando validez legal, certeza profesional y respaldo institucional en cada certificación y titulación.
              </p>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 text-[#1B3A7A]">
                <Lightbulb className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Innovación Pedagógica
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Incorporamos metodologías activas y herramientas tecnológicas avanzadas que promueven un aprendizaje interactivo, reflexivo y directamente aplicable al entorno laboral.
              </p>
            </motion.div>

            {/* Block 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 text-[#1B3A7A]">
                <Users className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Acompañamiento Integral
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Un equipo docente calificado y tutores comprometidos te acompañan de manera cercana durante toda tu trayectoria, guiándote hacia el cumplimiento de tus propósitos.
              </p>
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
