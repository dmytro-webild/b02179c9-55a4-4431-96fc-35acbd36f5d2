import { motion } from "motion/react";
import { Phone, MapPin, ExternalLink, Navigation } from "lucide-react";

const SOCIAL_NETWORKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CEUfXWjBB/?mibextid=wwXIfr",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/enlaceseducacion",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@enlaceseducacion",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.83.12V9.37a6.34 6.34 0 00-5.8 6.22 6.34 6.34 0 0010.83 4.45V11a8.16 8.16 0 004.77 1.52V9.06a4.85 4.85 0 01-3.52-2.37z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@enlaceseducacion",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/enlaceseducacion",
    path: "M13.736 5.853l4.005-4.17 2.325 2.228-4.401 4.582 3.864 4.024-2.325 2.228-3.468-3.612v6.621h-3.472v-6.621l-3.468 3.612-2.325-2.228 3.864-4.024-4.401-4.582 2.325-2.228 4.005 4.17V0h3.472v5.853zm-5.208 13.901h6.944v4.246H8.528v-4.246z",
  },
];

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Paseo+de+la+Reforma+342,+piso+26,+colonia+Ju%C3%A1rez,+Alcald%C3%ADa+Cuauht%C3%A9moc,+C.+P.+06500,+Ciudad+de+M%C3%A9xico";

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755] pb-16">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 via-blue-50/30 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              ENLACES Educación
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F2755] leading-tight">
              Estamos aquí para acompañarte.
            </h1>
            <p className="mt-4 font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed">
              ¿Tienes dudas sobre nuestros programas educativos? Nuestro equipo está listo para orientarte y ayudarte a dar el siguiente paso.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* WhatsApp Card (Contacto Principal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-emerald-200 bg-linear-to-b from-emerald-50/40 via-white to-slate-50/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                    <svg className="size-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1">
                    Contacto principal
                  </span>
                </div>
                <h2 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">WhatsApp</h2>
                <p className="mt-2 font-['Montserrat'] font-extrabold text-2xl tracking-wide text-emerald-700">
                  56 1864 2699
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-['Inter']">
                  Escríbenos directamente para atención rápida sobre programas educativos y admisión.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100">
                <a
                  href="https://wa.me/525618642699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#20ba59] hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Escríbenos por WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Teléfonos Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] shadow-md mb-4">
                  <Phone className="size-7" />
                </div>
                <h2 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Teléfonos</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-['Inter']">
                  Haz clic en cualquiera de nuestras líneas directas para realizar una llamada telefónica:
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href="tel:5640045860"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white text-[#0F2755] hover:border-[#1B3A7A] hover:bg-blue-50/50 hover:text-[#1B3A7A] transition-all duration-300 group"
                  >
                    <span className="font-['Montserrat'] font-extrabold text-lg tracking-wide">
                      56 4004 5860
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#1B3A7A] group-hover:translate-x-0.5 transition-transform">
                      Llamar
                      <Phone className="size-3.5" />
                    </span>
                  </a>

                  <a
                    href="tel:5633656122"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white text-[#0F2755] hover:border-[#1B3A7A] hover:bg-blue-50/50 hover:text-[#1B3A7A] transition-all duration-300 group"
                  >
                    <span className="font-['Montserrat'] font-extrabold text-lg tracking-wide">
                      56 3365 6122
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#1B3A7A] group-hover:translate-x-0.5 transition-transform">
                      Llamar
                      <Phone className="size-3.5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-['Inter']">
                Líneas telefónicas directas de orientación académica.
              </div>
            </motion.div>

            {/* Oficinas Centrales Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#0F2755] text-[#F4B400] shadow-md mb-4">
                  <MapPin className="size-7" />
                </div>
                <h2 className="font-['Montserrat'] font-bold text-xl text-[#0F2755]">Oficinas centrales</h2>
                <p className="mt-3 font-['Inter'] text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Av. Paseo de la Reforma 342, piso 26, colonia Juárez, Alcaldía Cuauhtémoc, <span className="whitespace-nowrap">C.P.&nbsp;06500</span>, Ciudad de México.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2755] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1B3A7A] hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  <Navigation className="size-4" />
                  Cómo llegar
                  <ExternalLink className="size-3.5 opacity-75" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Redes Sociales Section */}
      <section className="py-12 bg-slate-50/60 border-t border-slate-200/60">
        <div className="mx-auto w-[var(--container)] px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B3A7A]">
              Comunidad Digital
            </span>
            <h2 className="mt-2 font-['Montserrat'] font-extrabold text-2xl sm:text-3xl text-[#0F2755]">
              Síguenos en nuestras redes sociales
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-['Inter']">
              Mantente informado y conectado a través de nuestros canales oficiales.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {SOCIAL_NETWORKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0F2755] hover:text-white hover:border-[#0F2755] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-[#0F2755] border border-slate-200 group-hover:bg-[#F4B400] group-hover:border-[#F4B400] group-hover:text-[#0F2755] transition-colors duration-300">
                    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </div>
                  <span className="font-['Montserrat'] font-bold text-sm text-slate-800 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
