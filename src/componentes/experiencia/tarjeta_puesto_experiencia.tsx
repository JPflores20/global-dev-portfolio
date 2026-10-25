/**
 * @file tarjeta_puesto_experiencia.tsx
 * @description Tarjeta individual de experiencia laboral dentro de la línea de tiempo, con vista colapsable y modal de proyectos.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp, FolderGit2 } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { ModalProyectoExperiencia } from "@/componentes/experiencia/modal_proyecto_experiencia";
import type {
  ProyectoDestacadoExperiencia,
  PuestoExperiencia,
} from "@/traducciones/indice_traducciones";

const LIMITE_PROYECTOS_VISIBLES_INICIAL = 4;

/**
 * Propiedades del componente TarjetaPuestoExperiencia.
 */
interface PropiedadesTarjetaPuestoExperiencia {
  puesto_experiencia: PuestoExperiencia;
  indice_posicion: number;
  alinear_a_izquierda: boolean;
  esta_en_vista: boolean;
}

/**
 * Renderiza un nodo de la línea de tiempo y su tarjeta de puesto laboral, incluyendo proyectos interactivos.
 *
 * @param {PropiedadesTarjetaPuestoExperiencia} propiedades_tarjeta - Datos del puesto, índice, alineación y visibilidad.
 * @returns {JSX.Element} Fila animada de la línea de tiempo de experiencia.
 */
export function TarjetaPuestoExperiencia({
  puesto_experiencia,
  indice_posicion,
  alinear_a_izquierda,
  esta_en_vista,
}: PropiedadesTarjetaPuestoExperiencia): JSX.Element {
  const { idioma_actual } = use_idioma();
  const [mostrar_todos_los_proyectos, establecer_mostrar_todos] = useState<boolean>(false);
  const [proyecto_modal_activo, establecer_proyecto_modal_activo] =
    useState<ProyectoDestacadoExperiencia | null>(null);

  const lista_proyectos = puesto_experiencia.proyectos_destacados ?? [];
  const total_proyectos = lista_proyectos.length;
  const requiere_colapso = total_proyectos > LIMITE_PROYECTOS_VISIBLES_INICIAL;
  const proyectos_visibles =
    requiere_colapso && !mostrar_todos_los_proyectos
      ? lista_proyectos.slice(0, LIMITE_PROYECTOS_VISIBLES_INICIAL)
      : lista_proyectos;
  const cantidad_restante = total_proyectos - LIMITE_PROYECTOS_VISIBLES_INICIAL;

  const texto_boton_expandir =
    idioma_actual === "es"
      ? mostrar_todos_los_proyectos
        ? "Mostrar menos sistemas"
        : `Ver los ${total_proyectos} sistemas desarrollados (+${cantidad_restante} más)`
      : mostrar_todos_los_proyectos
        ? "Show fewer systems"
        : `View all ${total_proyectos} systems built (+${cantidad_restante} more)`;

  return (
    <div
      className={`relative flex flex-col md:flex-row gap-8 ${
        alinear_a_izquierda ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Nodo central animado */}
      <motion.div
        initial={{ scale: 0 }}
        animate={esta_en_vista ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 + indice_posicion * 0.2 }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-background z-10"
      />

      {/* Contenedor de tarjeta de experiencia */}
      <div
        className={`ml-12 md:ml-0 md:w-1/2 ${
          alinear_a_izquierda ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <motion.div
          className="glass-card p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
          initial={{ opacity: 0, x: alinear_a_izquierda ? -100 : 100 }}
          animate={esta_en_vista ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
            delay: 0.2 + indice_posicion * 0.2,
          }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl gradient-bg text-white shrink-0">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-foreground">
                {puesto_experiencia.role}
              </h3>
              <p className="text-primary font-semibold">
                {puesto_experiencia.company}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {puesto_experiencia.period}
              </p>
              <p className="text-muted-foreground">
                {puesto_experiencia.description}
              </p>

              {/* Lista interactiva de proyectos desarrollados en este puesto */}
              {total_proyectos > 0 && (
                <div className="mt-4 space-y-3 border-t border-border/60 pt-4">
                  {proyectos_visibles.map((proyecto_empresa) => (
                    <button
                      type="button"
                      key={proyecto_empresa.nombre_proyecto}
                      onClick={() => establecer_proyecto_modal_activo(proyecto_empresa)}
                      className="w-full text-left rounded-lg bg-background/60 p-3 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <FolderGit2 className="h-4 w-4 text-primary shrink-0" />
                        <h4 className="text-sm font-semibold text-foreground">
                          {proyecto_empresa.nombre_proyecto}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        {proyecto_empresa.descripcion_proyecto}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {proyecto_empresa.tecnologias_utilizadas.map(
                          (nombre_tecnologia) => (
                            <span
                              key={nombre_tecnologia}
                              className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {nombre_tecnologia}
                            </span>
                          )
                        )}
                      </div>
                    </button>
                  ))}

                  {requiere_colapso && (
                    <button
                      type="button"
                      onClick={() =>
                        establecer_mostrar_todos(!mostrar_todos_los_proyectos)
                      }
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>{texto_boton_expandir}</span>
                      {mostrar_todos_los_proyectos ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Columna espaciadora para alternar el diseño en escritorio */}
      <div className="hidden md:block md:w-1/2" />

      {/* Modal con detalle del proyecto industrial seleccionado */}
      <ModalProyectoExperiencia
        proyecto_seleccionado={proyecto_modal_activo}
        nombre_empresa={puesto_experiencia.company}
        cargo_ocupado={puesto_experiencia.role}
        periodo_laboral={puesto_experiencia.period}
        al_cerrar_modal={() => establecer_proyecto_modal_activo(null)}
      />
    </div>
  );
}
