/**
 * @file texto_animado_palabras.tsx
 * @description Componente reutilizable para animar bloques de texto palabra por palabra con efecto de desenfoque y resorte.
 */

import { motion, type Variants } from "framer-motion";

/**
 * Propiedades del componente TextoAnimadoPalabras.
 */
interface PropiedadesTextoAnimadoPalabras {
  texto_completo: string;
  clase_contenedor?: string;
  retraso_inicial_segundos?: number;
  aplicar_gradiente?: boolean;
}

/**
 * Divide una cadena de texto en palabras individuales y las anima secuencialmente al aparecer en pantalla.
 *
 * @param {PropiedadesTextoAnimadoPalabras} propiedades_texto - Texto a animar, clases opcionales, retraso y bandera de gradiente.
 * @returns {JSX.Element} Contenedor animado con cada palabra envuelta en un span de Framer Motion.
 */
export function TextoAnimadoPalabras({
  texto_completo,
  clase_contenedor = "",
  retraso_inicial_segundos = 0,
  aplicar_gradiente = false,
}: PropiedadesTextoAnimadoPalabras): JSX.Element {
  const lista_palabras = texto_completo.split(" ");

  const variantes_contenedor_palabras: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: retraso_inicial_segundos,
      },
    },
  };

  const variantes_palabra_individual: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={variantes_contenedor_palabras}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center gap-x-[0.3em] ${clase_contenedor}`}
    >
      {lista_palabras.map((palabra_actual, indice_palabra) => (
        <motion.span
          key={`${palabra_actual}-${indice_palabra}`}
          variants={variantes_palabra_individual}
          className={aplicar_gradiente ? "gradient-text" : ""}
        >
          {palabra_actual}
        </motion.span>
      ))}
    </motion.div>
  );
}
