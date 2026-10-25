/**
 * @file modal_proyecto_experiencia.tsx
 * @description Diálogo modal que muestra la ficha técnica detallada de un sistema desarrollado dentro de la experiencia laboral.
 */

import { Briefcase, Cpu, FolderGit2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/componentes/ui/dialogo";
import { Badge } from "@/componentes/ui/insignia";
import type { ProyectoDestacadoExperiencia } from "@/traducciones/indice_traducciones";

/**
 * Propiedades del componente ModalProyectoExperiencia.
 */
interface PropiedadesModalProyectoExperiencia {
  proyecto_seleccionado: ProyectoDestacadoExperiencia | null;
  nombre_empresa: string;
  cargo_ocupado: string;
  periodo_laboral: string;
  al_cerrar_modal: () => void;
}

/**
 * Renderiza un modal con la información extendida del proyecto industrial y su stack tecnológico.
 *
 * @param {PropiedadesModalProyectoExperiencia} propiedades_modal - Proyecto seleccionado, metadatos del puesto y callback de cierre.
 * @returns {JSX.Element} Diálogo accesible con detalles del sistema.
 */
export function ModalProyectoExperiencia({
  proyecto_seleccionado,
  nombre_empresa,
  cargo_ocupado,
  periodo_laboral,
  al_cerrar_modal,
}: PropiedadesModalProyectoExperiencia): JSX.Element {
  return (
    <Dialog
      open={Boolean(proyecto_seleccionado)}
      onOpenChange={(estado_abierto) => {
        if (!estado_abierto) {
          al_cerrar_modal();
        }
      }}
    >
      <DialogContent className="glass max-w-lg border-primary/30">
        {proyecto_seleccionado && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{nombre_empresa}</span>
                <span className="text-muted-foreground">• {periodo_laboral}</span>
              </div>

              <DialogTitle className="text-2xl font-bold flex items-center gap-2.5">
                <span className="p-2 rounded-lg gradient-bg text-white shrink-0">
                  <FolderGit2 className="h-5 w-5" />
                </span>
                <span className="gradient-text">
                  {proyecto_seleccionado.nombre_proyecto}
                </span>
              </DialogTitle>

              <p className="text-xs text-muted-foreground pt-1">{cargo_ocupado}</p>

              <DialogDescription className="text-foreground/90 text-sm leading-relaxed pt-4">
                {proyecto_seleccionado.descripcion_proyecto}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Cpu className="h-4 w-4 text-primary" />
                <span>Stack & Arquitectura</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {proyecto_seleccionado.tecnologias_utilizadas.map(
                  (nombre_tecnologia) => (
                    <Badge
                      key={nombre_tecnologia}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {nombre_tecnologia}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
