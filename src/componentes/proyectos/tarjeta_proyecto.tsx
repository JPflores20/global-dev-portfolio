/**
 * @file tarjeta_proyecto.tsx
 * @description Tarjeta individual de presentación de un proyecto con miniatura, tecnologías y botones de acción rápida.
 */

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Youtube } from "lucide-react";
import { Button } from "@/componentes/ui/boton";
import type { ProyectoPortafolio } from "@/traducciones/indice_traducciones";
import {
  IconoGooglePlay,
  IconoAppStore,
} from "@/componentes/proyectos/iconos_tiendas_aplicaciones";

/**
 * Propiedades del componente TarjetaProyecto.
 */
interface PropiedadesTarjetaProyecto {
  proyecto_portafolio: ProyectoPortafolio;
  indice_proyecto: number;
  url_imagen_proyecto: string;
  esta_en_vista: boolean;
  etiqueta_ver_detalles: string;
  al_seleccionar_proyecto: (indice_proyecto: number) => void;
}

/**
 * Renderiza una tarjeta resumen de proyecto dentro de la galería principal.
 *
 * @param {PropiedadesTarjetaProyecto} propiedades_tarjeta - Datos del proyecto, imagen y manejador de apertura de detalle.
 * @returns {JSX.Element} Tarjeta animada de proyecto.
 */
export function TarjetaProyecto({
  proyecto_portafolio,
  indice_proyecto,
  url_imagen_proyecto,
  esta_en_vista,
  etiqueta_ver_detalles,
  al_seleccionar_proyecto,
}: PropiedadesTarjetaProyecto): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + indice_proyecto * 0.15 }}
      className="group"
    >
      <div className="glass-card overflow-hidden hover:scale-[1.02] transition-transform flex flex-col h-full">
        {/* Imagen de portada del proyecto */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={url_imagen_proyecto}
            alt={proyecto_portafolio.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Contenido descriptivo */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {proyecto_portafolio.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {proyecto_portafolio.short_desc}
          </p>

          {/* Etiquetas de tecnologías utilizadas */}
          <div className="flex flex-wrap gap-2 mb-4">
            {proyecto_portafolio.tech.slice(0, 3).map((nombre_tecnologia) => (
              <span
                key={nombre_tecnologia}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
              >
                {nombre_tecnologia}
              </span>
            ))}
            {proyecto_portafolio.tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                +{proyecto_portafolio.tech.length - 3}
              </span>
            )}
          </div>

          {/* Botones de acción e hipervínculos externos */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-1"
              onClick={() => al_seleccionar_proyecto(indice_proyecto)}
            >
              {etiqueta_ver_detalles}
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex gap-1">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={proyecto_portafolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              {proyecto_portafolio.demo && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={proyecto_portafolio.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}

              {proyecto_portafolio.youtube && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={proyecto_portafolio.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </Button>
              )}

              {proyecto_portafolio.play_store && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={proyecto_portafolio.play_store}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconoGooglePlay className="h-4 w-4" />
                  </a>
                </Button>
              )}

              {proyecto_portafolio.app_store && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={proyecto_portafolio.app_store}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconoAppStore className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
