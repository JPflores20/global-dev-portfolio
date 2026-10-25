/**
 * @file modal_tarjeta_tecnologia_3d.tsx
 * @description Superposición modal con efecto de giro tridimensional (Flip 3D) para mostrar la descripción de una tecnología.
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ElementoStackTecnologico } from "@/componentes/stack_tecnologico/catalogo_stack_tecnologico";

/**
 * Propiedades del componente ModalTarjetaTecnologia3d.
 */
interface PropiedadesModalTarjetaTecnologia3d {
  tecnologia_seleccionada: ElementoStackTecnologico | undefined;
  descripcion_tecnologia: string;
  al_cerrar_tarjeta: () => void;
}

/**
 * Renderiza una tarjeta flotante en perspectiva 3D que gira 180 grados para revelar la descripción de la tecnología elegida.
 *
 * @param {PropiedadesModalTarjetaTecnologia3d} propiedades_modal - Objeto de tecnología activa, su descripción traducida y manejador de cierre.
 * @returns {JSX.Element} Overlay animado con tarjeta 3D.
 */
export function ModalTarjetaTecnologia3d({
  tecnologia_seleccionada,
  descripcion_tecnologia,
  al_cerrar_tarjeta,
}: PropiedadesModalTarjetaTecnologia3d): JSX.Element {
  return (
    <AnimatePresence>
      {tecnologia_seleccionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Fondo oscuro desenfocado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={al_cerrar_tarjeta}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Contenedor con perspectiva 3D */}
          <div
            className="perspective-1000 w-full max-w-sm h-80 cursor-pointer"
            onClick={al_cerrar_tarjeta}
          >
            <motion.div
              layoutId={`card-${tecnologia_seleccionada.nombre_tecnologia}`}
              className="w-full h-full relative preserve-3d"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              exit={{ rotateY: 0, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Cara frontal */}
              <div
                className="absolute inset-0 backface-hidden bg-background border border-primary/20 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
                style={{ transform: "rotateY(0deg)" }}
              >
                <div
                  className={`p-6 rounded-full bg-secondary/50 mb-4 ${tecnologia_seleccionada.clase_color_icono}`}
                >
                  <tecnologia_seleccionada.componente_icono className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold">
                  {tecnologia_seleccionada.nombre_tecnologia}
                </h3>
              </div>

              {/* Cara trasera con descripción */}
              <div
                className="absolute inset-0 backface-hidden bg-background/95 border border-primary/50 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                style={{ transform: "rotateY(180deg)" }}
              >
                <button
                  onClick={(evento_clic_cierre) => {
                    evento_clic_cierre.stopPropagation();
                    al_cerrar_tarjeta();
                  }}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                  aria-label="Cerrar detalle de tecnología"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className={`mb-4 ${tecnologia_seleccionada.clase_color_icono}`}>
                  <tecnologia_seleccionada.componente_icono className="w-12 h-12" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {tecnologia_seleccionada.nombre_tecnologia}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {descripcion_tecnologia}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
