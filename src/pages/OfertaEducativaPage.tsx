import { Link } from "react-router-dom";
import EducationalOfferSection from "@/components/sections/gallery/EducationalOfferSection";
import InteractiveGoalsSection from "@/components/sections/goals/InteractiveGoalsSection";

export default function OfertaEducativaPage() {
  return (
    <div className="bg-white min-h-screen text-[#0F2755]">
      {/* Banner Header */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="rounded-full border border-[#1B3A7A]/20 bg-[#1B3A7A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3A7A]">
              Programas Académicos con Validez Oficial
            </span>
            <h1 className="mt-4 font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0F2755] leading-tight">
              Oferta educativa
            </h1>
            <p className="mt-4 font-['Inter'] text-lg text-slate-600 leading-relaxed">
              Descubre nuestros programas académicos con modalidades flexibles diseñados para acelerar tu crecimiento profesional con validez oficial RVOE.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Offer Section Component */}
      <div id="oferta-educativa" data-webild-section="EducationalOfferSection" data-webild-section-id="EducationalOfferSection-1" data-section="oferta-educativa">
        <EducationalOfferSection
          badgeTag="Oferta Educativa de ENLACES"
          mainTitle="El mundo está a tu alcance"
          secondaryTitle="El siguiente paso depende de ti"
          description="Descubre nuestros programas académicos con modalidades flexibles diseñados para acelerar tu crecimiento profesional con validez oficial."
          linkLabel="Solicita información"
        />
      </div>

      {/* Interactive Goals Section Component */}
      <div id="siguiente-meta" data-webild-section="InteractiveGoalsSection" data-webild-section-id="InteractiveGoalsSection-1" data-section="siguiente-meta">
        <InteractiveGoalsSection />
      </div>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#0F2755] text-white border-t border-slate-200/20">
        <div className="mx-auto w-[var(--container)] text-center max-w-3xl">
          <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white">
            ¿Requieres orientación para elegir tu programa?
          </h2>
          <p className="mt-4 font-['Inter'] text-base text-blue-100">
            Nuestros asesores académicos resolverán todas tus preguntas sobre planes de estudio, costos y procesos de titulación.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="rounded-full bg-[#F4B400] px-8 py-4 font-['Montserrat'] font-extrabold text-sm text-[#0F2755] hover:bg-amber-300 transition-all shadow-lg hover:scale-105"
            >
              Contactar a un asesor académico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
