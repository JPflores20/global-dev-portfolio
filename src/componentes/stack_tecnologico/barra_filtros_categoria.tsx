/**
 * @file barra_filtros_categoria.tsx
 * @description Barra interactiva de botones con indicador animado para filtrar las tecnologías por categoría.
 */

import { motion } from "framer-motion";
import { CONFIGURACION_CATEGORIAS_STACK } from "@/componentes/stack_tecnologico/catalogo_stack_tecnologico";
import type { ClaveCategoriaTecnologia } from "@/traducciones/indice_traducciones";

/**
 * Propiedades del componente BarraFiltrosCategoria.
 */
interface PropiedadesBarraFiltrosCategoria {
  categoria_activa: ClaveCategoriaTecnologia;
  al_seleccionar_categoria: (nueva_categoria: ClaveCategoriaTecnologia) => void;
  etiquetas_categorias: Record<ClaveCategoriaTecnologia, string>;
}

/**
 * Renderiza los botones de filtro de categoría con transición compartida (layoutId) en el botón activo.
 *
 * @param {PropiedadesBarraFiltrosCategoria} propiedades_barra - Categoría seleccionada, callback de cambio y etiquetas traducidas.
 * @returns {JSX.Element} Barra de filtros de categorías tecnológicas.
 */
export function BarraFiltrosCategoria({
  categoria_activa,
  al_seleccionar_categoria,
  etiquetas_categorias,
}: PropiedadesBarraFiltrosCategoria): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {CONFIGURACION_CATEGORIAS_STACK.map((configuracion_categoria) => {
        const IconoCategoria = configuracion_categoria.componente_icono;
        const es_categoria_seleccionada =
          categoria_activa === configuracion_categoria.identificador_categoria;

        return (
          <button
            key={configuracion_categoria.identificador_categoria}
            onClick={() =>
              al_seleccionar_categoria(configuracion_categoria.identificador_categoria)
            }
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              es_categoria_seleccionada
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            {es_categoria_seleccionada && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <IconoCategoria className="w-4 h-4" />
              {etiquetas_categorias[configuracion_categoria.identificador_categoria]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
