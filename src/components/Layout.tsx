import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="ENLACES Educación"
          navItems={[
            {
              name: "Inicio",
              href: "#home"
            },
            {
              name: "Nosotros",
              href: "#about"
            },
            {
              name: "Oferta Académica",
              href: "#gallery-tilt-cards"
            },
            {
              name: "Trayectoria",
              href: "#metrics-tray-counters"
            },
            {
              name: "Preguntas Frecuentes",
              href: "#faq-tray-accordion-1"
            }
          ]}
          cta={{
            text: "Solicitar información",
            href: "#contact-dark-form-card"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="ENLACES Educación"
          wordmark="ENLACES Educación"
          columns={[
            {
              title: "Oferta académica",
              links: [
                {
                  text: "Bachillerato flexible",
                  href: "#gallery-tilt-cards"
                },
                {
                  text: "Licenciaturas",
                  href: "#gallery-tilt-cards"
                },
                {
                  text: "Posgrados",
                  href: "#gallery-tilt-cards"
                },
                {
                  text: "Acreditación de experiencia",
                  href: "#gallery-tilt-cards"
                }
              ]
            },
            {
              title: "Institución",
              links: [
                {
                  text: "Nuestra filosofía",
                  href: "#about"
                },
                {
                  text: "Resultados e indicadores",
                  href: "#metrics-tray-counters"
                },
                {
                  text: "Historias de éxito",
                  href: "#customers"
                },
                {
                  text: "Preguntas frecuentes",
                  href: "#faq-tray-accordion-1"
                }
              ]
            },
            {
              title: "Contacto",
              links: [
                {
                  text: "informes@enlaces.edu.mx",
                  href: "mailto:informes@enlaces.edu.mx"
                },
                {
                  text: "Solicitar asesoría",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "Sede CDMX",
                  href: "#contact-dark-form-card"
                }
              ]
            },
            {
              title: "Información legal",
              links: [
                {
                  text: "Aviso de privacidad",
                  href: "#"
                },
                {
                  text: "Términos de servicio",
                  href: "#"
                },
                {
                  text: "Validez oficial RVOE",
                  href: "#faq-tray-accordion-1"
                }
              ]
            }
          ]}
          copyright="© 2026 ENLACES Educación. Todos los derechos reservados."
          topText="Volver arriba"
        />
      </footer>
    </div>
  );
}
