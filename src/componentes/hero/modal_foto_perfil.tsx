/**
 * @file modal_foto_perfil.tsx
 * @description Lightbox modal a pantalla completa para visualizar la fotografía de perfil ampliada.
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Propiedades del componente ModalFotoPerfil.
 */
interface PropiedadesModalFotoPerfil {
  esta_abierto: boolean;
  al_cerrar_modal: () => void;
}

/**
 * Muestra una superposición oscura con la imagen de perfil en alta resolución cuando el usuario hace clic en el avatar.
 *
 * @param {PropiedadesModalFotoPerfil} propiedades_modal - Estado de visibilidad y función para cerrar el visor.
 * @returns {JSX.Element} Modal animado con AnimatePresence.
 */
export function ModalFotoPerfil({
  esta_abierto,
  al_cerrar_modal,
}: PropiedadesModalFotoPerfil): JSX.Element {
  return (
    <AnimatePresence>
      {esta_abierto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={al_cerrar_modal}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <button
            onClick={al_cerrar_modal}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
            aria-label="Cerrar imagen ampliada"
          >
            <X className="h-8 w-8" />
          </button>
          <motion.img
            src="/perfil.jpg"
            alt="Profile Full"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(evento_clic_imagen) => evento_clic_imagen.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
