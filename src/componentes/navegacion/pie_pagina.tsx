/**
 * @file pie_pagina.tsx
 * @description Pie de página del portafolio con aviso de derechos de autor y enlaces a perfiles profesionales.
 */

import { Github, Linkedin, Mail } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";

/**
 * Renderiza el pie de página inferior con el año actual dinámico y accesos rápidos a GitHub, LinkedIn y correo.
 *
 * @returns {JSX.Element} Elemento footer estilizado.
 */
export function PiePagina(): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const anio_actual = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/30 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {anio_actual} {textos_traducidos.hero.name}. {textos_traducidos.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JPflores20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jlfc2302"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ingsoftjoseflores@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
