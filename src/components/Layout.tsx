import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";
import WhatsAppButton from "@/components/WhatsAppButton";

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
              name: "ENLACES 360",
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
      <main className="flex-grow pt-16 sm:pt-20 lg:pt-24" data-button="chip" data-card="tray" data-pattern="none">
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
                  href: "/oferta-educativa/bachillerato"
                },
                {
                  text: "Licenciaturas Ejecutivas",
                  href: "/oferta-educativa/licenciaturas"
                },
                {
                  text: "Titulación por Experiencia",
                  href: "/oferta-educativa/titulacion-por-experiencia-laboral"
                },
                {
                  text: "Maestrías Especializadas",
                  href: "/oferta-educativa/maestrias"
                },
                {
                  text: "Diplomados con Validez",
                  href: "/oferta-educativa/diplomados"
                },
                {
                  text: "Programa de Inglés",
                  href: "/oferta-educativa/ingles"
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
                  text: "ENLACES 360",
                  href: "/sistema-operativo-enlaces"
                }
              ]
            },
            {
              title: "Contacto",
              links: [
                {
                  text: "WhatsApp: 56 1864 2699",
                  href: "https://wa.me/525618642699"
                },
                {
                  text: "Tel: 56 4004 5860",
                  href: "tel:5640045860"
                },
                {
                  text: "Tel: 56 3365 6122",
                  href: "tel:5633656122"
                },
                {
                  text: "Página de contacto",
                  href: "/contacto"
                }
              ]
            },
            {
              title: "Oficinas centrales",
              links: [
                {
                  text: "Av. Paseo de la Reforma 342, piso 26, Col. Juárez, Alc. Cuauhtémoc, C.P. 06500, CDMX",
                  href: "https://www.google.com/maps/search/?api=1&query=Av.+Paseo+de+la+Reforma+342,+piso+26,+colonia+Ju%C3%A1rez,+Alcald%C3%ADa+Cuauht%C3%A9moc,+C.+P.+06500,+Ciudad+de+M%C3%A9xico"
                },
                {
                  text: "Cómo llegar (Google Maps)",
                  href: "https://www.google.com/maps/search/?api=1&query=Av.+Paseo+de+la+Reforma+342,+piso+26,+colonia+Ju%C3%A1rez,+Alcald%C3%ADa+Cuauht%C3%A9moc,+C.+P.+06500,+Ciudad+de+M%C3%A9xico"
                }
              ]
            }
          ]}
          copyright="© 2026 ENLACES Educación. Todos los derechos reservados."
          topText="Volver arriba"
        />
      </footer>
      <WhatsAppButton />
    </div>
  );
}
