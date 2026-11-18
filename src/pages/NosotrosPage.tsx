import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award, Handshake, ChevronsLeftRight } from "lucide-react";
import { MotionMedia } from "@/components/kit/Media";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";

function BeforeAfterComparator({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel,
}: {
  leftImage: string;
  rightImage: string;
  leftLabel: string;
  rightLabel: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-none select-none border-none shadow-none bg-slate-900 group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Right Image (Actualidad) - Full Container Background */}
      <MotionMedia
        src={rightImage}
        alt={rightLabel}
        className="absolute inset-0 size-full object-cover rounded-none pointer-events-none"
      />

      {/* Right Label (Actualidad) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#0F2755]/85 backdrop-blur-md text-white font-['Montserrat'] font-bold text-xs sm:text-sm px-4 py-2 rounded-none uppercase tracking-wider shadow-lg pointer-events-none border border-white/20">
        {rightLabel}
      </div>

      {/* Left Image (Nuestros inicios) - Clipped Overlay */}
      <div
        className="absolute inset-0 size-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <MotionMedia
          src={leftImage}
          alt={leftLabel}
          className="absolute inset-0 size-full object-cover rounded-none"
        />
      </div>

      {/* Left Label (Nuestros inicios) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-[#0F2755]/85 backdrop-blur-md text-white font-['Montserrat'] font-bold text-xs sm:text-sm px-4 py-2 rounded-none uppercase tracking-wider shadow-lg pointer-events-none border border-white/20">
        {leftLabel}
      </div>

      {/* Central Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      />

      {/* Central Slider Handle Button */}
      <div
        className="absolute top-1/2 z-20 size-11 sm:size-14 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white text-[#0F2755] shadow-2xl border-2 border-[#1B3A7A] flex items-center justify-center cursor-ew-resize transition-transform group-hover:scale-110 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <ChevronsLeftRight className="size-5 sm:size-6 text-[#1B3A7A]" />
      </div>

      {/* Transparent Input Range overlay for touch drag & accessibility */}
      <input
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(parseFloat(e.target.value))}
        aria-label="Comparador interactivo antes y después"
        className="absolute inset-0 size-full opacity-0 z-30 cursor-ew-resize touch-none"
      />
    </div>
  );
}

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
                Somos una <strong className="font-semibold text-[#0F2755]">institución educativa internacional de origen mexicano</strong>, comprometida con la formación académica, personal y profesional de jóvenes y adultos.
              </p>
              <p>
                En ENLACES creemos que la educación es una herramienta de transformación que debe estar al alcance de todas las personas, sin importar su edad, ubicación geográfica o circunstancias de vida.
              </p>
              <p>
                Integramos innovación, tecnología y vocación educativa para desarrollar programas que respondan a las necesidades de un mundo en constante evolución, formando personas preparadas para afrontar los desafíos del presente y construir las oportunidades del futuro.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Photographic Strip (Editorial gallery: 95% width, 6px gap, sharp corners, subtle hover zoom) */}
        <div className="w-[95%] max-w-[1700px] mx-auto mt-8 sm:mt-12">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-[6px] md:grid md:grid-cols-3 md:overflow-visible">
            {/* Image 1: Left - Joven acompañado de un niño */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-full snap-center overflow-hidden rounded-none h-[320px] sm:h-[400px] lg:h-[460px]"
            >
              <MotionMedia
                src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794964568166-dspbzwe5.jpg"
                alt="Joven acompañado de un niño"
                className="size-full object-cover object-[center_18%] rounded-none"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Image 2: Center - Adulto mayor con su certificado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-full snap-center overflow-hidden rounded-none h-[320px] sm:h-[400px] lg:h-[460px]"
            >
              <MotionMedia
                src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794964568168-3kfwe8mc.jpg"
                alt="Adulto mayor con su certificado"
                className="size-full object-cover object-[center_22%] rounded-none"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Image 3: Right - Fotografía institucional del Estado de México */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-full snap-center overflow-hidden rounded-none h-[320px] sm:h-[400px] lg:h-[460px]"
            >
              <MotionMedia
                src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794964568169-bwteunii.png"
                alt="Fotografía institucional del Estado de México"
                className="size-full object-cover object-[center_25%] rounded-none"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>

        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 lg:px-8">
          {/* 4 Institutional Pillars in 2 Columns (Discrete linear icons, no cards/borders/shadows) */}
          <div className="mt-10 sm:mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16">
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
                Aprender sin límites.
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Desarrollamos modelos educativos flexibles que te permiten iniciar, continuar o complementar tu formación, sin dejar de lado tus responsabilidades y proyectos personales.
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
                <BookOpen className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Mucho más que estudiar.
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Combinamos tecnología, clases en vivo, recursos educativos y acompañamiento humano para brindarte una experiencia de aprendizaje integral.
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
                <Award className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Formación continua.
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Desde el bachillerato hasta el posgrado, ofrecemos alternativas educativas para diferentes momentos, necesidades y objetivos profesionales.
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
                <Handshake className="size-9 stroke-[1.5]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755] tracking-tight">
                Crecemos juntos.
              </h3>
              <p className="mt-3 font-['Inter'] text-slate-600 leading-relaxed text-base">
                Colaboramos con empresas, organizaciones e instituciones públicas y privadas para acercar la educación a más personas.
              </p>
            </motion.div>
          </div>

          {/* Highlighted Closing Phrase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto"
          >
            <p className="font-['Montserrat'] italic font-semibold text-lg sm:text-xl text-[#1B3A7A]">
              Nuestro compromiso no comienza ni termina con tu inscripción. Te acompañamos durante el camino.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Section: NUESTRA HISTORIA */}
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
              NUESTRA HISTORIA
            </div>

            {/* Title */}
            <h2 className="mt-6 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-tight text-[#1B3A7A] text-center max-w-4xl">
              De México al mundo.
            </h2>

            {/* Subtitle */}
            <p className="mt-2 sm:mt-3 font-['Montserrat'] font-semibold text-lg sm:text-xl text-[#F4B400] text-center">
              Una historia de evolución constante.
            </p>

            {/* Main Text */}
            <p className="mt-6 font-['Inter'] text-slate-600 text-base sm:text-lg leading-relaxed text-center font-normal max-w-[850px] mx-auto">
              Lo que comenzó en 2014 como una alternativa educativa en la Ciudad de México se convirtió en un proyecto que ha trascendido fronteras, generaciones y modalidades de aprendizaje.
            </p>
          </motion.div>
        </div>

        {/* Interactive Before & After Comparator (16:9 panoramic ratio, 95% width, no border, sharp corners) */}
        <div className="w-[95%] max-w-[1700px] mx-auto mt-10 sm:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <BeforeAfterComparator
              leftImage="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794965930131-mpzjh9z2.jpg"
              rightImage="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794965930133-xfuo9n4l.png"
              leftLabel="Nuestros inicios"
              rightLabel="Actualidad"
            />
          </motion.div>
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
