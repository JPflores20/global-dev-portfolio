/**
 * @file tipos_traducciones.ts
 * @description Definiciones de tipos e interfaces para el sistema de internacionalización (i18n) del portafolio.
 */

/**
 * Códigos de idioma soportados por la aplicación.
 */
export type CodigoIdioma = "en" | "es";

/**
 * Claves de categorías disponibles en la sección de Stack Tecnológico.
 */
export type ClaveCategoriaTecnologia =
  | "All"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "DevOps"
  | "AI"
  | "Tools";

/**
 * Estructura de un registro académico en la sección Sobre Mí.
 */
export interface RegistroEducacion {
  degree: string;
  school: string;
  period: string;
  license?: string;
}

/**
 * Estructura de un proyecto desarrollado dentro de un puesto de experiencia profesional.
 */
export interface ProyectoDestacadoExperiencia {
  nombre_proyecto: string;
  descripcion_proyecto: string;
  tecnologias_utilizadas: string[];
}

/**
 * Estructura de un puesto laboral en la línea de tiempo de Experiencia.
 */
export interface PuestoExperiencia {
  role: string;
  company: string;
  period: string;
  description: string;
  proyectos_destacados?: ProyectoDestacadoExperiencia[];
}

/**
 * Estructura de un proyecto destacado del portafolio.
 */
export interface ProyectoPortafolio {
  title: string;
  short_desc: string;
  full_desc: string;
  tech: string[];
  github: string;
  demo: string | null;
  play_store: string | null;
  app_store: string | null;
  youtube: string | null;
}

/**
 * Contrato completo de textos traducidos para un idioma específico.
 */
export interface EstructuraTraducciones {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    download_cv: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    highlights: string[];
    education_title: string;
    education: RegistroEducacion[];
    certifications_title: string;
    certifications: string[];
    languages_title: string;
    languages: string[];
  };
  experience: {
    title: string;
    positions: PuestoExperiencia[];
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      frameworks: string;
      tools: string;
    };
  };
  tech_stack: {
    title: string;
    description: string;
    categories: Record<ClaveCategoriaTecnologia, string>;
    tech_descriptions: Record<string, string>;
  };
  projects: {
    title: string;
    view_details: string;
    view_code: string;
    live_demo: string;
    video_demo: string;
    lista_proyectos: ProyectoPortafolio[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    info: {
      phone: "WhatsApp" | string;
      email: string;
      linkedin: string;
      github: string;
    };
  };
  footer: {
    rights: string;
    made_with: string;
  };
}
