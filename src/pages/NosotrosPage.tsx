import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award, Handshake, X, ZoomIn, RefreshCw, Lightbulb, Heart, TrendingUp } from "lucide-react";
import { MotionMedia } from "@/components/kit/Media";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";

export default function NosotrosPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const mainHistoricalImage = {
    src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794968305968-uuaos5p0.jpg",
    alt: "Inauguración del plantel Metepec — Fotografía principal",
  };

  const galleryHistoricalImages = [
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794968305970-diqvhl75.jpg",
      alt: "Plantel Metepec — Archivo histórico 1",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794968305970-gl4b6ryc.jpg",
      alt: "Plantel Metepec — Archivo histórico 2",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973760037-vpokf6ew.jpg",
      alt: "Plantel Metepec — Archivo histórico 3",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794968305971-zpfnhyrv.jpg",
      alt: "Plantel Metepec — Archivo histórico 4",
    },
  ];

  const main2014Image = {
    src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794972429120-ksf6w7ip.png",
    alt: "NUESTROS INICIOS 2014 — Fotografía principal",
  };

  const gallery2014Images = [
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794972429123-3ga3uko7.png",
      alt: "NUESTROS INICIOS 2014 — Archivo histórico 1",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794972429124-gk0qmakr.jpg",
      alt: "NUESTROS INICIOS 2014 — Archivo histórico 2",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794972429125-ihr4c4u4.jpg",
      alt: "NUESTROS INICIOS 2014 — Archivo histórico 3",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794972887340-nrxwo85z.jpg",
      alt: "NUESTROS INICIOS 2014 — Archivo histórico 4",
    },
  ];

  const main2016Image = {
    src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973036104-zwutrzz6.jpg",
    alt: "CRECIENDO POR TODO MÉXICO 2016–2018 — Fotografía principal",
  };

  const gallery2016Images = [
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973036106-10odwqoq.png",
      alt: "CRECIENDO POR TODO MÉXICO 2016–2018 — Fotografía 1",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973036107-wsala713.jpg",
      alt: "CRECIENDO POR TODO MÉXICO 2016–2018 — Fotografía 2",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973036108-iwvncb3x.jpg",
      alt: "CRECIENDO POR TODO MÉXICO 2016–2018 — Fotografía 3",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794973036108-5vfx4jnt.png",
      alt: "CRECIENDO POR TODO MÉXICO 2016–2018 — Fotografía 4",
    },
  ];

  const main2021Image = {
    src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794974303169-rmb7tof9.png",
    alt: "DE MÉXICO AL MUNDO 2021 — Fotografía principal",
  };

  const mainFilosofiaImage = {
    src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794976613798-3syvce30.png",
    alt: "NUESTRA FILOSOFÍA — Fotografía principal",
  };

  const filosofiaPrincipios = [
    {
      icon: RefreshCw,
      title: "RESILIENCIA",
      description: "Siempre existe una oportunidad para volver a empezar.",
    },
    {
      icon: Lightbulb,
      title: "INNOVACIÓN",
      description: "Cuestionamos lo establecido para encontrar mejores formas de enseñar.",
    },
    {
      icon: Heart,
      title: "HUMANIDAD",
      description: "Detrás de cada alumno existe una persona, una historia y un sueño.",
    },
    {
      icon: TrendingUp,
      title: "EVOLUCIÓN",
      description: "Aprender es un compromiso para toda la vida.",
    },
  ];

  const gallery2021Images = [
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794974303173-6o60lm5z.png",
      alt: "DE MÉXICO AL MUNDO 2021 — Fotografía 1",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794974303177-f337ck6j.png",
      alt: "DE MÉXICO AL MUNDO 2021 — Fotografía 2",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794974916292-cm8m2xdt.jpg",
      alt: "DE MÉXICO AL MUNDO 2021 — Fotografía 3",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794975419848-kpw878wc.png",
      alt: "DE MÉXICO AL MUNDO 2021 — Fotografía 4",
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794974303178-llvh7pl6.png",
      alt: "DE MÉXICO AL MUNDO 2021 — Fotografía 5",
    },
  ];
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

        {/* Panoramic Photography Stack (16:9 ratio, 95% width, 6px separation, no borders or shadows) */}
        <div className="w-[95%] max-w-[1700px] mx-auto mt-10 sm:mt-14 flex flex-col gap-[6px]">
          {/* Top Photo: Nuestros inicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-none shadow-none border-none bg-slate-900"
          >
            <MotionMedia
              src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794965930131-mpzjh9z2.jpg"
              alt="Nuestros inicios"
              className="size-full object-cover rounded-none"
            />
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 bg-[#1B3A7A] text-white font-['Montserrat'] font-bold text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-none shadow-none border-none uppercase tracking-wider pointer-events-none">
              Nuestros inicios
            </div>
          </motion.div>

          {/* Bottom Photo: Nuestra evolución */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-none shadow-none border-none bg-slate-900"
          >
            <MotionMedia
              src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794965930133-xfuo9n4l.png"
              alt="Nuestra evolución"
              className="size-full object-cover rounded-none"
            />
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 bg-[#1B3A7A] text-white font-['Montserrat'] font-bold text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-none shadow-none border-none uppercase tracking-wider pointer-events-none">
              Nuestra evolución
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Section: CADA PASO CUENTA (LÍNEA DEL TIEMPO) */}
      <section className="bg-[#F4F6F9] pt-20 sm:pt-28 pb-10 sm:pb-14 border-b border-slate-200/60 overflow-hidden">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-14 sm:mb-20"
          >
            {/* Label / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#1B3A7A]">
              LÍNEA DEL TIEMPO
            </div>

            {/* Title */}
            <h2 className="mt-6 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-tight text-[#1B3A7A]">
              Cada paso cuenta.
            </h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Central Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F4B400] via-[#1B3A7A]/40 to-[#1B3A7A]/10 rounded-full" />

            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-4 top-4 bottom-4 w-[2.5px] -translate-x-1/2 bg-gradient-to-b from-[#F4B400] via-[#1B3A7A]/40 to-[#1B3A7A]/10 rounded-full" />

            <div className="space-y-12 sm:space-y-16">
              {/* Event 1: 2014 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative -mx-2 sm:-mx-6 lg:-mx-12 md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] md:-ml-6 lg:-ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start pl-10 md:pl-0"
              >
                {/* Mobile Marker Dot */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 size-3.5 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Desktop Center Marker Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 size-4 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Content Left Column (Desktop & Mobile: Year, Title, Text) */}
                <div className="md:text-right md:pr-6 lg:pr-8 flex flex-col items-start md:items-end">
                  <span className="inline-block font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] text-[#1B3A7A] leading-none tracking-tight">
                    2014
                  </span>
                  <h3 className="mt-2 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755]">
                    Aquí comienza nuestra historia.
                  </h3>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-xl md:ml-auto">
                    Nacemos en la Ciudad de México, preparando a jóvenes y adultos para acreditar el bachillerato mediante las evaluaciones de COLBACH y CENEVAL. Descubrimos el enorme impacto social de brindar nuevas oportunidades educativas.
                  </p>
                </div>

                {/* Photographic Gallery Right Column (Desktop & Mobile) */}
                <div className="md:pl-6 lg:pl-8 mt-6 md:mt-0 w-full">
                  <div className="flex flex-col gap-[6px]">
                    <div className="inline-block bg-[#1B3A7A]/10 text-[#1B3A7A] text-[11px] sm:text-xs font-['Montserrat'] font-bold uppercase tracking-wider px-3 py-1 rounded-none border-none shadow-none self-start">
                      NUESTROS INICIOS
                    </div>

                    {/* Main Large Format Image (Photo 1) */}
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                      onClick={() => setLightboxImage(main2014Image)}
                    >
                      <img
                        src={main2014Image.src}
                        alt={main2014Image.alt}
                        className="w-full h-auto object-contain rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs font-['Montserrat'] font-semibold px-3 py-1.5 rounded-none shadow-none border-none flex items-center gap-1.5">
                          <ZoomIn className="size-3.5" /> Ampliar imagen
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Editorial Mosaic Gallery with Independent Columns (4 Remaining Images) */}
                    <div className="grid grid-cols-2 gap-[6px] items-start">
                      {/* Column 1 */}
                      <div className="flex flex-col gap-[6px]">
                        {gallery2014Images
                          .filter((_, idx) => idx % 2 === 0)
                          .map((img, idx) => (
                            <div
                              key={`col1-${idx}`}
                              className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                              onClick={() => setLightboxImage(img)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                                  <ZoomIn className="size-3" /> Ampliar
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-[6px]">
                        {gallery2014Images
                          .filter((_, idx) => idx % 2 === 1)
                          .map((img, idx) => (
                            <div
                              key={`col2-${idx}`}
                              className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                              onClick={() => setLightboxImage(img)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                                  <ZoomIn className="size-3" /> Ampliar
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Event 2: 2016–2018 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative -mx-2 sm:-mx-6 lg:-mx-12 md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] md:-ml-6 lg:-ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start pl-10 md:pl-0"
              >
                {/* Mobile Marker Dot */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 size-3.5 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Desktop Center Marker Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 size-4 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Photographic Gallery Left Column (Desktop) / Order 2 (Mobile) */}
                <div className="md:pr-6 lg:pr-8 order-2 md:order-1 w-full mt-6 md:mt-0">
                  <div className="flex flex-col gap-[6px]">
                    <div className="inline-block bg-[#1B3A7A]/10 text-[#1B3A7A] text-[11px] sm:text-xs font-['Montserrat'] font-bold uppercase tracking-wider px-3 py-1 rounded-none border-none shadow-none self-start">
                      CRECIENDO POR TODO MÉXICO
                    </div>

                    {/* Main Large Format Image (Photo 1) */}
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                      onClick={() => setLightboxImage(main2016Image)}
                    >
                      <img
                        src={main2016Image.src}
                        alt={main2016Image.alt}
                        className="w-full h-auto object-contain rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs font-['Montserrat'] font-semibold px-3 py-1.5 rounded-none shadow-none border-none flex items-center gap-1.5">
                          <ZoomIn className="size-3.5" /> Ampliar imagen
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Editorial Gallery (4 Remaining Images) */}
                    <div className="grid grid-cols-2 gap-[6px]">
                      {gallery2016Images.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                          onClick={() => setLightboxImage(img)}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto object-contain rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                              <ZoomIn className="size-3" /> Ampliar
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Right Column (Desktop) / Order 1 (Mobile) */}
                <div className="md:text-left md:pl-6 lg:pl-8 flex flex-col items-start order-1 md:order-2">
                  <span className="inline-block font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] text-[#1B3A7A] leading-none tracking-tight">
                    2016–2018
                  </span>
                  <h3 className="mt-2 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755]">
                    Crecemos contigo.
                  </h3>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-lg">
                    Expandimos nuestra presencia a Tijuana, Chihuahua, Estado de México, Nayarit, San Luis Potosí, Guerrero, Quintana Roo, Guadalajara, Monterrey y Coahuila, fortaleciendo nuestras alianzas y nuestra oferta educativa.
                  </p>
                </div>
              </motion.div>

              {/* Event 3: 2018 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative -mx-2 sm:-mx-6 lg:-mx-12 md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] md:-ml-6 lg:-ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start pl-10 md:pl-0"
              >
                {/* Mobile Marker Dot */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 size-3.5 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Desktop Center Marker Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 size-4 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Content Left Column (Desktop & Mobile: Year, Title, Text, 16:9 Video) */}
                <div className="md:text-right md:pr-6 lg:pr-8 flex flex-col items-start md:items-end">
                  <span className="inline-block font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] text-[#1B3A7A] leading-none tracking-tight">
                    2018
                  </span>
                  <h3 className="mt-2 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755]">
                    Un sueño que se convirtió en realidad.
                  </h3>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-xl md:ml-auto">
                    En 2018 inauguramos nuestro primer plantel escolarizado en Metepec, Estado de México, bajo el nombre de Claustro Latinoamericano ENLACES, ampliando nuestra oferta hacia la educación básica, media y media superior presencial.
                  </p>

                  {/* 16:9 Historical Video Space */}
                  <div className="mt-5 w-full max-w-xl md:ml-auto">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none shadow-none border-none bg-slate-900 group">
                      <video
                        controls
                        preload="none"
                        playsInline
                        poster="https://res.cloudinary.com/r58dzn6z/video/upload/so_1/v1794969416/ENLACES_PLANTEL_METEPEC.jpg"
                        className="size-full object-contain rounded-none shadow-none border-none"
                      >
                        <source
                          src="https://res.cloudinary.com/r58dzn6z/video/upload/v1794969416/ENLACES_PLANTEL_METEPEC.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://res.cloudinary.com/r58dzn6z/video/upload/v1794969416/ENLACES_PLANTEL_METEPEC.mov"
                          type="video/quicktime"
                        />
                      </video>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[#1B3A7A] text-white font-['Montserrat'] font-bold text-[11px] sm:text-xs px-3 py-1 rounded-none shadow-none border-none uppercase tracking-wider pointer-events-none">
                        Video histórico del plantel
                      </div>
                    </div>
                    <p className="mt-2.5 font-['Inter'] text-xs sm:text-sm font-medium italic text-slate-600 text-left md:text-right leading-normal">
                      «Así se vivía la experiencia ENLACES en nuestro plantel de Metepec»
                    </p>
                  </div>
                </div>

                {/* Photographic Gallery Right Column (Desktop & Mobile) */}
                <div className="md:pl-6 lg:pl-8 mt-6 md:mt-0 w-full">
                  <div className="flex flex-col gap-[6px]">
                    <div className="inline-block bg-[#1B3A7A]/10 text-[#1B3A7A] text-[11px] sm:text-xs font-['Montserrat'] font-bold uppercase tracking-wider px-3 py-1 rounded-none border-none shadow-none self-start">
                      Archivo histórico del plantel Metepec
                    </div>

                    {/* Main Large Format Image (Photo 1) */}
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                      onClick={() => setLightboxImage(mainHistoricalImage)}
                    >
                      <img
                        src={mainHistoricalImage.src}
                        alt={mainHistoricalImage.alt}
                        className="w-full h-auto object-contain rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs font-['Montserrat'] font-semibold px-3 py-1.5 rounded-none shadow-none border-none flex items-center gap-1.5">
                          <ZoomIn className="size-3.5" /> Ampliar imagen
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Editorial Mosaic Gallery with Independent Columns (4 Remaining Images) */}
                    <div className="grid grid-cols-2 gap-[6px] items-start">
                      {/* Column 1 */}
                      <div className="flex flex-col gap-[6px]">
                        {galleryHistoricalImages
                          .filter((_, idx) => idx % 2 === 0)
                          .map((img, idx) => (
                            <div
                              key={`col1-${idx}`}
                              className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                              onClick={() => setLightboxImage(img)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                                  <ZoomIn className="size-3" /> Ampliar
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-[6px]">
                        {galleryHistoricalImages
                          .filter((_, idx) => idx % 2 === 1)
                          .map((img, idx) => (
                            <div
                              key={`col2-${idx}`}
                              className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                              onClick={() => setLightboxImage(img)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                                  <ZoomIn className="size-3" /> Ampliar
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Event 4: 2021 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative -mx-2 sm:-mx-6 lg:-mx-12 md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] md:-ml-6 lg:-ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start pl-10 md:pl-0"
              >
                {/* Mobile Marker Dot */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 size-3.5 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Desktop Center Marker Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 size-4 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Photographic Gallery Left Column (Desktop) / Order 2 (Mobile) */}
                <div className="md:pr-6 lg:pr-8 order-2 md:order-1 w-full mt-6 md:mt-0">
                  <div className="flex flex-col gap-[6px]">
                    <div className="inline-block bg-[#1B3A7A]/10 text-[#1B3A7A] text-[11px] sm:text-xs font-['Montserrat'] font-bold uppercase tracking-wider px-3 py-1 rounded-none border-none shadow-none self-start">
                      DE MÉXICO AL MUNDO
                    </div>

                    {/* Main Large Format Image (Photo 1) */}
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                      onClick={() => setLightboxImage(main2021Image)}
                    >
                      <img
                        src={main2021Image.src}
                        alt={main2021Image.alt}
                        className="w-full h-auto object-contain rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs font-['Montserrat'] font-semibold px-3 py-1.5 rounded-none shadow-none border-none flex items-center gap-1.5">
                          <ZoomIn className="size-3.5" /> Ampliar imagen
                        </div>
                      </div>
                    </div>

                    {/* Editorial Mosaic Gallery with 3 Graduate Photos (2 Columns aligned to same height) */}
                    <div className="grid grid-cols-2 gap-[6px]">
                      {/* Egresado 1: Full width row */}
                      <div
                        className="col-span-2 relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100"
                        onClick={() => setLightboxImage(gallery2021Images[0])}
                      >
                        <img
                          src={gallery2021Images[0].src}
                          alt={gallery2021Images[0].alt}
                          className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                            <ZoomIn className="size-3" /> Ampliar
                          </div>
                        </div>
                      </div>

                      {/* Egresada 2: Left column */}
                      <div
                        className="col-span-1 relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100 flex flex-col"
                        onClick={() => setLightboxImage(gallery2021Images[1])}
                      >
                        <img
                          src={gallery2021Images[1].src}
                          alt={gallery2021Images[1].alt}
                          className="w-full h-full object-cover block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                            <ZoomIn className="size-3" /> Ampliar
                          </div>
                        </div>
                      </div>

                      {/* Right column: Egresada 3 (señora con carpeta) + Nueva fotografía */}
                      <div className="col-span-1 flex flex-col gap-[6px]">
                        {/* Egresada 3: Señora carpeta */}
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100 flex-1"
                          onClick={() => setLightboxImage(gallery2021Images[2])}
                        >
                          <img
                            src={gallery2021Images[2].src}
                            alt={gallery2021Images[2].alt}
                            className="w-full h-full object-cover block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                              <ZoomIn className="size-3" /> Ampliar
                            </div>
                          </div>
                        </div>

                        {/* Nueva fotografía: Inmediatamente debajo de la señora con la carpeta */}
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100 flex-1"
                          onClick={() => setLightboxImage(gallery2021Images[3])}
                        >
                          <img
                            src={gallery2021Images[3].src}
                            alt={gallery2021Images[3].alt}
                            className="w-full h-full object-cover block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                              <ZoomIn className="size-3" /> Ampliar
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Logotipo Enlaces Sin Fronteras y Banderas — Centrado debajo de la galería con mayor tamaño */}
                    <div className="w-full flex justify-center mt-[6px]">
                      <div
                        className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none bg-slate-100 w-full max-w-[460px] sm:max-w-[520px]"
                        onClick={() => setLightboxImage(gallery2021Images[4])}
                      >
                        <img
                          src={gallery2021Images[4].src}
                          alt={gallery2021Images[4].alt}
                          className="w-full h-auto block rounded-none shadow-none border-none transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-['Montserrat'] font-semibold px-2.5 py-1 rounded-none shadow-none border-none flex items-center gap-1">
                            <ZoomIn className="size-3" /> Ampliar
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Right Column (Desktop) / Order 1 (Mobile) */}
                <div className="md:text-left md:pl-6 lg:pl-8 flex flex-col items-start order-1 md:order-2">
                  <span className="inline-block font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] text-[#1B3A7A] leading-none tracking-tight">
                    2021
                  </span>
                  <h3 className="mt-2 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755]">
                    La educación no tiene fronteras.
                  </h3>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-lg">
                    En 2021 cruzamos fronteras e iniciamos operaciones en San Diego, California, Estados Unidos, bajo el nombre de ENLACES Sin Fronteras. Con el compromiso de acercar nuevas oportunidades educativas a nuestros compatriotas, comenzamos a transformar la vida de mexicanos que, lejos de su país, deseaban continuar su formación académica y profesional.
                  </p>
                </div>
              </motion.div>

              {/* Event 5: 2023 – Actualidad */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative -mx-2 sm:-mx-6 lg:-mx-12 md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] md:-ml-6 lg:-ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start pl-10 md:pl-0"
              >
                {/* Mobile Marker Dot */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 size-3.5 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Desktop Center Marker Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 size-4 bg-[#F4B400] z-10 rounded-none border-none shadow-none" />

                {/* Content Left Column (Desktop & Mobile: Year, Title, Text) */}
                <div className="md:text-right md:pr-6 lg:pr-8 flex flex-col items-start md:items-end">
                  <span className="inline-block font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] text-[#1B3A7A] leading-none tracking-tight">
                    2023 – Actualidad
                  </span>
                  <h3 className="mt-2 font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F2755]">
                    Transformamos nuestra manera de enseñar. Y seguimos avanzando.
                  </h3>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-xl md:ml-auto">
                    En 2023 iniciamos una nueva etapa de transformación digital, integrando tecnología, innovación y nuevos modelos educativos que nos permitieron llevar la educación más allá de las aulas.
                  </p>
                  <p className="mt-3 font-['Inter'] text-slate-600 text-base leading-relaxed font-normal max-w-xl md:ml-auto">
                    Hoy, con más de 10,000 egresados, presencia nacional e internacional y una oferta educativa en constante evolución, seguimos construyendo nuevas formas de aprender, crecer y transformar vidas.
                  </p>
                </div>

                {/* Video Right Column (Desktop & Mobile) */}
                <div className="md:pl-6 lg:pl-8 mt-6 md:mt-0 w-full">
                  <div className="flex flex-col gap-[6px]">
                    <div className="inline-block bg-[#1B3A7A]/10 text-[#1B3A7A] text-[11px] sm:text-xs font-['Montserrat'] font-bold uppercase tracking-wider px-3 py-1 rounded-none border-none shadow-none self-start">
                      Transformación Digital
                    </div>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none shadow-none border-none bg-slate-900">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="size-full object-cover rounded-none shadow-none border-none"
                      >
                        <source
                          src="https://res.cloudinary.com/r58dzn6z/video/upload/v1794457523/gemini_generated_video_ab0b3b50.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p className="mt-2 font-['Inter'] text-xs sm:text-sm font-medium italic text-slate-600 text-left leading-normal">
                      «Representación conceptual de nuestra transformación digital»
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Cierre de la Línea del Tiempo */}
      <section className="bg-white pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 border-b border-slate-100 overflow-hidden">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Texto Principal */}
            <h3 className="font-['Montserrat'] font-extrabold italic text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] tracking-tight">
              <span className="text-[#1B3A7A]">
                Porque el mundo cambia, la educación evoluciona{" "}
              </span>
              <span className="text-[#F4B400] block sm:inline mt-1 sm:mt-0">
                y nosotros avanzamos con ella.
              </span>
            </h3>

            {/* Texto Secundario */}
            <p className="mt-6 sm:mt-8 font-['Montserrat'] font-extrabold italic text-lg sm:text-2xl leading-relaxed">
              <span className="text-[#1B3A7A]">Nuestra historia continúa. </span>
              <span className="text-[#F4B400]">Y queremos que formes parte de ella.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Section: NUESTRA FILOSOFÍA */}
      <section className="bg-[#1B3A7A] py-20 sm:py-28 lg:py-32 border-b border-[#1B3A7A] overflow-hidden text-white">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white mb-6">
                NUESTRA FILOSOFÍA
              </div>

              {/* Title */}
              <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-tight">
                <span className="text-white">Creemos en las personas. </span>
                <span className="text-[#F4B400] block sm:inline mt-1 sm:mt-0">
                  Creemos en su capacidad de transformar el mundo.
                </span>
              </h2>

              {/* Body Paragraphs */}
              <div className="mt-6 sm:mt-8 space-y-5 font-['Inter'] text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  La educación no es únicamente la adquisición de conocimientos. Es una herramienta para descubrir nuestro potencial, superar nuestros propios límites y construir nuevas oportunidades.
                </p>
                <p>
                  En ENLACES creemos que nunca dejamos de aprender. Que cada persona tiene una historia diferente, que el conocimiento no tiene fronteras y que la tecnología debe acercarnos a las oportunidades, no alejarnos de ellas.
                </p>
              </div>
            </motion.div>

            {/* Photo Column (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 w-full"
            >
              <div
                className="relative group cursor-pointer overflow-hidden rounded-none shadow-none border-none w-full"
                onClick={() => setLightboxImage(mainFilosofiaImage)}
              >
                <MotionMedia
                  src={mainFilosofiaImage.src}
                  alt={mainFilosofiaImage.alt}
                  className="w-full h-auto object-cover rounded-none shadow-none border-none transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs font-['Montserrat'] font-semibold px-3 py-1.5 rounded-none shadow-none border-none flex items-center gap-1.5">
                    <ZoomIn className="size-3.5" /> Ampliar imagen
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cuatro Principios */}
          <div className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {filosofiaPrincipios.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-start"
                >
                  <div className="mb-3.5 text-[#F4B400]">
                    <IconComponent className="size-7 sm:size-8 stroke-[1.75]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-white text-base sm:text-lg tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-['Inter'] text-slate-100 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
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

      {/* Lightbox / Image Zoom Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Cerrar vista ampliada"
          >
            <X className="size-6 sm:size-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-none shadow-none border-none"
            />
            <p className="mt-3.5 font-['Inter'] text-xs sm:text-sm text-slate-300 text-center font-medium">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
