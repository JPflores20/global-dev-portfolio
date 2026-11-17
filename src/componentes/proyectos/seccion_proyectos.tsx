/**
 * @file seccion_proyectos.tsx
 * @description Sección de galería de proyectos destacados con filtrado por categoría y modal de detalle.
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { use_idioma } from "@/contextos/contexto_idioma";
import { TarjetaProyecto } from "@/componentes/proyectos/tarjeta_proyecto";
import { ModalDetalleProyecto } from "@/componentes/proyectos/modal_detalle_proyecto";
import {
  CANTIDAD_PROYECTOS_COMERCIALES,
  CANTIDAD_PROYECTOS_GRUPO_MODELO,
  IMAGENES_PORTADA_PROYECTOS,
} from "@/componentes/proyectos/catalogo_imagenes_proyectos";

type FiltroCategoriaProyecto = "todos" | "proyectos_comerciales" | "grupo_modelo";

/**
 * Renderiza la cuadrícula filtrable de proyectos y coordina la apertura del diálogo modal de detalles.
 *
 * @returns {JSX.Element} Sección de Proyectos.
 */
export function SeccionProyectos(): JSX.Element {
  const { idioma_actual, textos_traducidos } = use_idioma();
  const referencia_seccion = useRef<HTMLElement | null>(null);
  const esta_en_vista = useInView(referencia_seccion, { once: true, margin: "-100px" });
  const [filtro_activo, establecer_filtro_activo] =
    useState<FiltroCategoriaProyecto>("todos");
  const [indice_proyecto_seleccionado, establecer_indice_proyecto_seleccionado] =
    useState<number | null>(null);

  const lista_completa_proyectos = textos_traducidos.projects.lista_proyectos;

  const proyectos_mostrados = lista_completa_proyectos
    .map((proyecto_item, indice_real) => ({
      proyecto_item,
      indice_real,
    }))
    .filter(({ indice_real }) => {
      if (filtro_activo === "proyectos_comerciales") {
        return indice_real < CANTIDAD_PROYECTOS_COMERCIALES;
      }
      if (filtro_activo === "grupo_modelo") {
        return indice_real >= CANTIDAD_PROYECTOS_COMERCIALES;
      }
      return true;
    });

  const proyecto_activo =
    indice_proyecto_seleccionado !== null
      ? lista_completa_proyectos[indice_proyecto_seleccionado]
      : null;

  const imagen_proyecto_activo =
    indice_proyecto_seleccionado !== null
      ? IMAGENES_PORTADA_PROYECTOS[indice_proyecto_seleccionado]
      : null;

  const opciones_filtro: { id_filtro: FiltroCategoriaProyecto; etiqueta: string }[] = [
    {
      id_filtro: "todos",
      etiqueta:
        idioma_actual === "es"
          ? `Todos (${lista_completa_proyectos.length})`
          : `All (${lista_completa_proyectos.length})`,
    },
    {
      id_filtro: "proyectos_comerciales",
      etiqueta:
        idioma_actual === "es"
          ? `Proyectos Comerciales & IA (${CANTIDAD_PROYECTOS_COMERCIALES})`
          : `Featured Commercial & AI (${CANTIDAD_PROYECTOS_COMERCIALES})`,
    },
    {
      id_filtro: "grupo_modelo",
      etiqueta: `Grupo Modelo • AB InBev (${CANTIDAD_PROYECTOS_GRUPO_MODELO})`,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-secondary/30"
      ref={referencia_seccion}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={esta_en_vista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{textos_traducidos.projects.title}</span>
          </h2>

          {/* Barra de filtrado por origen de proyecto */}
          <div className="flex flex-wrap justify-center gap-2">
            {opciones_filtro.map((opcion_filtro) => {
              const esta_seleccionado = filtro_activo === opcion_filtro.id_filtro;
              return (
                <button
                  key={opcion_filtro.id_filtro}
                  type="button"
                  onClick={() => establecer_filtro_activo(opcion_filtro.id_filtro)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    esta_seleccionado
                      ? "gradient-bg text-white shadow-md"
                      : "bg-background/70 text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  {opcion_filtro.etiqueta}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos_mostrados.map(({ proyecto_item, indice_real }) => (
            <TarjetaProyecto
              key={proyecto_item.title}
              proyecto_portafolio={proyecto_item}
              indice_proyecto={indice_real}
              url_imagen_proyecto={IMAGENES_PORTADA_PROYECTOS[indice_real]}
              esta_en_vista={esta_en_vista}
              etiqueta_ver_detalles={textos_traducidos.projects.view_details}
              al_seleccionar_proyecto={establecer_indice_proyecto_seleccionado}
            />
          ))}
        </div>

        <ModalDetalleProyecto
          proyecto_seleccionado={proyecto_activo}
          url_imagen_proyecto={imagen_proyecto_activo}
          etiqueta_ver_codigo={textos_traducidos.projects.view_code}
          etiqueta_sitio_web={textos_traducidos.projects.live_demo}
          etiqueta_video_demo={textos_traducidos.projects.video_demo}
          al_cerrar_modal={() => establecer_indice_proyecto_seleccionado(null)}
        />
      </div>
    </section>
  );
}
