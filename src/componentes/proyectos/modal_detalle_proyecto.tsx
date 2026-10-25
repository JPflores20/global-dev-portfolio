/**
 * @file modal_detalle_proyecto.tsx
 * @description Diálogo modal que muestra la descripción extendida, stack completo y enlaces de tiendas de un proyecto.
 */

import { ExternalLink, Github, Youtube } from "lucide-react";
import { Button } from "@/componentes/ui/boton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/componentes/ui/dialogo";
import type { ProyectoPortafolio } from "@/traducciones/indice_traducciones";
import {
  IconoGooglePlay,
  IconoAppStore,
} from "@/componentes/proyectos/iconos_tiendas_aplicaciones";

/**
 * Propiedades del componente ModalDetalleProyecto.
 */
interface PropiedadesModalDetalleProyecto {
  proyecto_seleccionado: ProyectoPortafolio | null;
  url_imagen_proyecto: string | null;
  etiqueta_ver_codigo: string;
  etiqueta_sitio_web: string;
  etiqueta_video_demo: string;
  al_cerrar_modal: () => void;
}

/**
 * Renderiza el cuadro de diálogo con todos los detalles técnicos y enlaces de descarga del proyecto activo.
 *
 * @param {PropiedadesModalDetalleProyecto} propiedades_modal - Datos del proyecto seleccionado y textos de botones.
 * @returns {JSX.Element} Diálogo modal de proyecto.
 */
export function ModalDetalleProyecto({
  proyecto_seleccionado,
  url_imagen_proyecto,
  etiqueta_ver_codigo,
  etiqueta_sitio_web,
  etiqueta_video_demo,
  al_cerrar_modal,
}: PropiedadesModalDetalleProyecto): JSX.Element {
  return (
    <Dialog open={proyecto_seleccionado !== null} onOpenChange={al_cerrar_modal}>
      <DialogContent className="max-w-2xl glass max-h-[90vh] overflow-y-auto">
        {proyecto_seleccionado && url_imagen_proyecto && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text">
                {proyecto_seleccionado.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <img
                src={url_imagen_proyecto}
                alt={proyecto_seleccionado.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <p className="text-muted-foreground mb-6">
                {proyecto_seleccionado.full_desc}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {proyecto_seleccionado.tech.map((nombre_tecnologia) => (
                    <span
                      key={nombre_tecnologia}
                      className="px-3 py-1.5 text-sm rounded-full gradient-bg text-white font-medium"
                    >
                      {nombre_tecnologia}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {/* Acciones principales */}
                <div className="flex gap-3 flex-wrap">
                  <Button className="flex-1 gap-2" asChild>
                    <a
                      href={proyecto_seleccionado.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      {etiqueta_ver_codigo}
                    </a>
                  </Button>

                  {proyecto_seleccionado.demo && (
                    <Button variant="outline" className="flex-1 gap-2" asChild>
                      <a
                        href={proyecto_seleccionado.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {etiqueta_sitio_web}
                      </a>
                    </Button>
                  )}

                  {proyecto_seleccionado.youtube && (
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 hover:text-red-600 hover:border-red-600 transition-colors"
                      asChild
                    >
                      <a
                        href={proyecto_seleccionado.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="h-4 w-4" />
                        {etiqueta_video_demo || "Video Demo"}
                      </a>
                    </Button>
                  )}
                </div>

                {/* Enlaces de descarga en tiendas oficiales */}
                {(proyecto_seleccionado.play_store || proyecto_seleccionado.app_store) && (
                  <div className="flex gap-3 pt-2">
                    {proyecto_seleccionado.play_store && (
                      <Button variant="secondary" className="flex-1 gap-2" asChild>
                        <a
                          href={proyecto_seleccionado.play_store}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconoGooglePlay className="h-4 w-4" />
                          Google Play
                        </a>
                      </Button>
                    )}
                    {proyecto_seleccionado.app_store && (
                      <Button variant="secondary" className="flex-1 gap-2" asChild>
                        <a
                          href={proyecto_seleccionado.app_store}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconoAppStore className="h-4 w-4" />
                          App Store
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
