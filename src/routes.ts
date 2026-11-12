export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Inicio', pageFile: 'HomePage' },
  { path: '/nosotros', label: 'Nosotros', pageFile: 'NosotrosPage' },
  { path: '/oferta-educativa', label: 'Oferta educativa', pageFile: 'OfertaEducativaPage' },
  { path: '/empresas-y-convenios', label: 'Empresas y convenios', pageFile: 'EmpresasConveniosPage' },
  { path: '/experiencia-enlaces', label: 'Experiencia ENLACES', pageFile: 'ExperienciaEnlacesPage' },
  { path: '/servicios-al-alumno', label: 'Servicios al alumno', pageFile: 'ServiciosAlumnoPage' },
  { path: '/grupo-enlaces', label: 'Grupo ENLACES', pageFile: 'GrupoEnlacesPage' },
  { path: '/contacto', label: 'Contacto', pageFile: 'ContactoPage' },
];
