export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Inicio', pageFile: 'HomePage' },
  { path: '/nosotros', label: 'Nosotros', pageFile: 'NosotrosPage' },
  { path: '/oferta-educativa', label: 'Oferta educativa', pageFile: 'OfertaEducativaPage' },
  { path: '/oferta-educativa/bachillerato', label: 'Bachillerato', pageFile: 'OfertaBachilleratoPage' },
  { path: '/oferta-educativa/licenciaturas', label: 'Licenciaturas', pageFile: 'OfertaLicenciaturasPage' },
  { path: '/oferta-educativa/titulacion-por-experiencia-laboral', label: 'Titulación por Experiencia Laboral', pageFile: 'OfertaTitulacionPage' },
  { path: '/oferta-educativa/maestrias', label: 'Maestrías', pageFile: 'OfertaMaestriasPage' },
  { path: '/oferta-educativa/diplomados', label: 'Diplomados', pageFile: 'OfertaDiplomadosPage' },
  { path: '/oferta-educativa/ingles', label: 'Inglés', pageFile: 'OfertaInglesPage' },
  { path: '/empresas-y-convenios', label: 'Empresas y convenios', pageFile: 'EmpresasConveniosPage' },
  { path: '/experiencia-enlaces', label: 'Experiencia ENLACES', pageFile: 'ExperienciaEnlacesPage' },
  { path: '/testimonios-y-egresados', label: 'Testimonios y egresados', pageFile: 'TestimoniosEgresadosPage' },
  { path: '/sistema-operativo-enlaces', label: 'Sistema Operativo ENLACES', pageFile: 'SistemaOperativoEnlacesPage' },
  { path: '/contacto', label: 'Contacto', pageFile: 'ContactoPage' },
];
