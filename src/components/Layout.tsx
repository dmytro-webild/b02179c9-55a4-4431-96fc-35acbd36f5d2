import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const logoUrl = "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794452037801-2036zpmm.png";
  const headerLogoUrl = "https://storage.googleapis.com/webild/users/user_3KviWw22IHbUwhmRoxf95hIHXdW/uploaded-1794456362100-5zorubz4.png";

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <ScrollToTop />
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="ENLACES Educación"
          logoSrc={headerLogoUrl}
          navItems={[
            {
              name: "Nosotros",
              href: "/nosotros"
            },
            {
              name: "Oferta educativa",
              href: "/oferta-educativa"
            },
            {
              name: "Empresas y convenios",
              href: "/empresas-y-convenios"
            },
            {
              name: "Experiencia ENLACES",
              href: "/experiencia-enlaces"
            },
            {
              name: "Testimonios y egresados",
              href: "/testimonios-y-egresados"
            },
            {
              name: "Sistema Operativo ENLACES",
              href: "/sistema-operativo-enlaces"
            },
            {
              name: "Contacto",
              href: "/contacto"
            }
          ]}
          cta={{
            text: "Solicita información",
            href: "/contacto"
          }}
          introDelay={0.2}
        />
      </header>
      <main className="flex-grow pt-16 lg:pt-20" data-button="chip" data-card="tray" data-pattern="none">
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
                  href: "/oferta-educativa"
                },
                {
                  text: "Licenciaturas Ejecutivas",
                  href: "/oferta-educativa"
                },
                {
                  text: "Titulación por Experiencia",
                  href: "/oferta-educativa"
                },
                {
                  text: "Maestrías Especializadas",
                  href: "/oferta-educativa"
                },
                {
                  text: "Diplomados con Validez",
                  href: "/oferta-educativa"
                },
                {
                  text: "Programa de Inglés",
                  href: "/oferta-educativa"
                }
              ]
            },
            {
              title: "Institución",
              links: [
                {
                  text: "Sobre nosotros",
                  href: "/nosotros"
                },
                {
                  text: "Empresas y convenios",
                  href: "/empresas-y-convenios"
                },
                {
                  text: "Experiencia ENLACES",
                  href: "/experiencia-enlaces"
                },
                {
                  text: "Testimonios y egresados",
                  href: "/testimonios-y-egresados"
                },
                {
                  text: "Sistema Operativo ENLACES",
                  href: "/sistema-operativo-enlaces"
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
                  text: "Solicita información",
                  href: "/contacto"
                },
                {
                  text: "Atención a aspirantes",
                  href: "/contacto"
                }
              ]
            },
            {
              title: "Información legal",
              links: [
                {
                  text: "Aviso de privacidad",
                  href: "/contacto"
                },
                {
                  text: "Términos de servicio",
                  href: "/contacto"
                },
                {
                  text: "Validez oficial RVOE",
                  href: "/nosotros"
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
