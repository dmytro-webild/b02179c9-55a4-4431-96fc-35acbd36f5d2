import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href: string; isButton?: boolean };

type FooterColumn = { title: string; links: FooterLink[] };

type FooterTrayWordmarkProps = {
  brand: string;
  logoSrc?: string;
  wordmark?: string;
  columns?: FooterColumn[];
  copyright?: string;
  topText?: string;
  ariaLabel?: string;
  className?: string;
};

const SOCIAL_NETWORKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CEUfXWjBB/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/enlaceseducacion",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
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

const spring = { type: "spring", bounce: 0.2, duration: 1 } as const;

const renderLinkContent = (text: string) => {
  if (text.includes("C.P.") || text.includes("C. P.")) {
    const parts = text.split(/(C\.\s*P\.(?:\u00A0|\s)*\d{5})/g);
    return parts.map((part, index) => {
      if (/^C\.\s*P\.(?:\u00A0|\s)*\d{5}$/.test(part)) {
        return (
          <span key={index} className="inline-block whitespace-nowrap">
            C.P.&nbsp;06500
          </span>
        );
      }
      return part;
    });
  }
  return text;
};

const FooterTrayWordmark = ({ brand, columns = [], copyright, topText = "Volver arriba", ariaLabel, className }: FooterTrayWordmarkProps) => {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { ...spring, delay } };

  const shown = columns.slice(0, 4);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer aria-label={ariaLabel ?? `${brand} footer`} className={cn("relative bg-background pt-[calc(var(--section-space)/2)] text-foreground", className)}>
      <div className="relative isolate mx-[var(--panel-inset)] mb-[var(--panel-inset)] overflow-hidden rounded-[var(--radius-card)] bg-[#0F2755] pt-[clamp(2.5rem,5vw,4.5rem)] pb-[clamp(2rem,4vw,3rem)] text-white shadow-2xl border border-amber-400/20">
        
        {/* Rueda oficial como elemento decorativo en la zona inferior izquierda (25% opacidad blanco puro #FFFFFF, sin texto superpuesto, desplazada abajo) */}
        <img
          src="https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794456185254-3zlenx22.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 sm:-bottom-56 md:-bottom-[240px] -left-16 w-72 sm:w-96 md:w-[440px] h-auto opacity-25 select-none object-contain z-0"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <div className="relative z-10 mx-auto grid w-[var(--container)] grid-cols-1 gap-x-[var(--gap)] gap-y-[clamp(2.5rem,5vw,3.5rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2.1fr)]">
          
          {/* Logotipo textual blanco grande + Frase Innovación en educación + Iconos sociales blancos */}
          <div className="flex flex-col gap-5 items-start pr-4">
            <Link to="/" aria-label={brand} className="flex flex-col items-start group">
              <span className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none">
                ENLACES
              </span>
              <span className="font-['Montserrat'] font-extrabold text-xs sm:text-sm tracking-wider text-blue-100/90 uppercase mt-2">
                INNOVACIÓN EN EDUCACIÓN
              </span>
            </Link>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#F4B400]">
                Síguenos en redes sociales
              </span>
              <div className="flex items-center gap-3 pt-1">
                {SOCIAL_NETWORKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#0F2755] hover:border-white hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {shown.length > 0 && (
            <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[var(--gap)] gap-y-[2.5rem]">
              {shown.map((column, i) => (
                <motion.div key={`${i}-${column.title}`} {...rise(0.1 + i * 0.08)} className="flex min-w-0 flex-col gap-[1rem]">
                  <h3 className="text-[length:var(--text-label)] leading-[1.5] text-[#F4B400] font-bold uppercase tracking-wider [overflow-wrap:anywhere]">
                    {column.title}
                  </h3>
                  <div className="flex flex-col gap-[0.6rem]">
                    {column.links.map((link, j) => {
                      if (link.isButton) {
                        return (
                          <a
                            key={`${j}-${link.text}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] px-4 py-2.5 text-xs font-bold text-[#0F2755] shadow-sm hover:bg-amber-300 transition-colors w-fit"
                          >
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {link.text}
                          </a>
                        );
                      }
                      if (link.href.startsWith("/")) {
                        return (
                          <Link
                            key={`${j}-${link.text}`}
                            to={link.href}
                            className="w-fit text-xs sm:text-sm leading-[1.5] text-blue-100/90 [overflow-wrap:anywhere] transition-all duration-300 hover:text-[#F4B400] hover:translate-x-0.5"
                          >
                            {renderLinkContent(link.text)}
                          </Link>
                        );
                      }
                      const isExternal = link.href.startsWith("http") || link.href.startsWith("https") || link.href.startsWith("tel:");
                      return (
                        <a
                          key={`${j}-${link.text}`}
                          href={link.href}
                          target={isExternal && !link.href.startsWith("tel:") ? "_blank" : undefined}
                          rel={isExternal && !link.href.startsWith("tel:") ? "noopener noreferrer" : undefined}
                          className="w-fit text-xs sm:text-sm leading-[1.5] text-blue-100/90 [overflow-wrap:anywhere] transition-all duration-300 hover:text-[#F4B400] hover:translate-x-0.5"
                        >
                          {renderLinkContent(link.text)}
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </nav>
          )}
        </div>

        <div className="relative z-10 mx-auto mt-[clamp(3rem,6vw,5rem)] flex w-[var(--container)] flex-wrap items-center justify-between gap-x-[var(--gap)] gap-y-[0.75rem] border-t border-blue-900/60 pt-[1.25rem]">
          {copyright && <p className="text-[length:var(--text-small)] leading-[1.5] text-blue-200/80">{copyright}</p>}
          <button onClick={scrollToTop} className="group flex items-center gap-[0.625rem] text-[length:var(--text-small)] leading-[1.5] text-blue-200 hover:text-[#F4B400] cursor-pointer">
            {topText}
            <div className="flex size-[2rem] items-center justify-center rounded-[0.625rem] bg-blue-900/60 text-[#F4B400] transition-colors duration-300 group-hover:bg-[#F4B400] group-hover:text-[#0F2755]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[1rem]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V4M5 11l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterTrayWordmark;
