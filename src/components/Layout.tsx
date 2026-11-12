import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  const logoUrl = "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794452037801-2036zpmm.png";
  const headerLogoUrl = "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794456362100-5zorubz4.png";

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="ENLACES Educación"
          logoSrc={headerLogoUrl}
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
              name: "Oferta educativa",
              href: "#oferta-educativa"
            },
            {
              name: "Empresas y convenios",
              href: "#empresas-convenios"
            },
            {
              name: "Experiencia ENLACES",
              href: "#experiencia-enlaces"
            },
            {
              name: "Contacto",
              href: "#contact-dark-form-card"
            }
          ]}
          cta={{
            text: "Solicitar información",
            href: "#contact-dark-form-card"
          }}
          introDelay={0.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="ENLACES Educación"
          logoSrc={logoUrl}
          wordmark="ENLACES EDUCACIÓN"
          columns={[
            {
              title: "Oferta educativa",
              links: [
                {
                  text: "Bachillerato General",
                  href: "#oferta-educativa"
                },
                {
                  text: "Licenciaturas Ejecutivas",
                  href: "#oferta-educativa"
                },
                {
                  text: "Titulación por Experiencia",
                  href: "#oferta-educativa"
                },
                {
                  text: "Maestrías Especializadas",
                  href: "#oferta-educativa"
                },
                {
                  text: "Diplomados con Validez",
                  href: "#oferta-educativa"
                },
                {
                  text: "Programa de Inglés",
                  href: "#oferta-educativa"
                }
              ]
            },
            {
              title: "Institución",
              links: [
                {
                  text: "Sobre nosotros",
                  href: "#about"
                },
                {
                  text: "Empresas y convenios",
                  href: "#empresas-convenios"
                },
                {
                  text: "Experiencia ENLACES",
                  href: "#experiencia-enlaces"
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
                  text: "Solicitar información",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "Atención a aspirantes",
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
