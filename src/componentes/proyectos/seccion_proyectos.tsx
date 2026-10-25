/**
 * @file seccion_proyectos.tsx
 * @description Sección de galería de proyectos destacados con filtrado por categoría, paginación expandible y modal de detalle.
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { TarjetaProyecto } from "@/componentes/proyectos/tarjeta_proyecto";
import { ModalDetalleProyecto } from "@/componentes/proyectos/modal_detalle_proyecto";

type FiltroCategoriaProyecto = "todos" | "grupo_modelo" | "otros_proyectos";

const CANTIDAD_PROYECTOS_GRUPO_MODELO = 9;
const LIMITE_INICIAL_VISTA_TODOS = 6;

/**
 * Arreglo ordenado de rutas de imágenes representativas para los 13 proyectos del portafolio.
 */
const IMAGENES_PORTADA_PROYECTOS: string[] = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", // 0: Brew Insights AI
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop", // 1: Gestión Cervecera VPO
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop", // 2: PML Clean Pro
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop", // 3: Levadura CCZ
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop", // 4: PRP One View Safety Map
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", // 5: Farol de KPIs
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop", // 6: MAZ HUB
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop", // 7: Dashboard de Autonomía
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop", // 8: Agenda de Cocimientos
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=500&fit=crop", // 9: App Móvil Taxaf
  "/LogoGolden.jpg", // 10: Web Golden English Zac
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop", // 11: Sistema REDECO
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop", // 12: Modelo ML Cáncer de Pulmón
];

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
  const [mostrar_todos_en_vista_general, establecer_mostrar_todos] =
    useState<boolean>(false);
  const [indice_proyecto_seleccionado, establecer_indice_proyecto_seleccionado] =
    useState<number | null>(null);

  const lista_completa_proyectos = textos_traducidos.projects.lista_proyectos;

  const proyectos_con_indice_original = lista_completa_proyectos
    .map((proyecto_item, indice_real) => ({
      proyecto_item,
      indice_real,
    }))
    .filter(({ indice_real }) => {
      if (filtro_activo === "grupo_modelo") {
        return indice_real < CANTIDAD_PROYECTOS_GRUPO_MODELO;
      }
      if (filtro_activo === "otros_proyectos") {
        return indice_real >= CANTIDAD_PROYECTOS_GRUPO_MODELO;
      }
      return true;
    });

  const requiere_boton_ver_mas =
    filtro_activo === "todos" &&
    proyectos_con_indice_original.length > LIMITE_INICIAL_VISTA_TODOS;

  const proyectos_mostrados =
    requiere_boton_ver_mas && !mostrar_todos_en_vista_general
      ? proyectos_con_indice_original.slice(0, LIMITE_INICIAL_VISTA_TODOS)
      : proyectos_con_indice_original;

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
      id_filtro: "grupo_modelo",
      etiqueta:
        idioma_actual === "es"
          ? `Grupo Modelo • AB InBev (${CANTIDAD_PROYECTOS_GRUPO_MODELO})`
          : `Grupo Modelo • AB InBev (${CANTIDAD_PROYECTOS_GRUPO_MODELO})`,
    },
    {
      id_filtro: "otros_proyectos",
      etiqueta:
        idioma_actual === "es" ? "Móvil, Web & IA (4)" : "Mobile, Web & AI (4)",
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

        {requiere_boton_ver_mas && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                establecer_mostrar_todos(!mostrar_todos_en_vista_general)
              }
              className="px-6 py-3 rounded-full text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all flex items-center gap-2"
            >
              <span>
                {idioma_actual === "es"
                  ? mostrar_todos_en_vista_general
                    ? "Mostrar menos proyectos"
                    : `Ver los ${lista_completa_proyectos.length} proyectos (+${
                        lista_completa_proyectos.length - LIMITE_INICIAL_VISTA_TODOS
                      } más)`
                  : mostrar_todos_en_vista_general
                    ? "Show fewer projects"
                    : `View all ${lista_completa_proyectos.length} projects (+${
                        lista_completa_proyectos.length - LIMITE_INICIAL_VISTA_TODOS
                      } more)`}
              </span>
              {mostrar_todos_en_vista_general ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}

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
