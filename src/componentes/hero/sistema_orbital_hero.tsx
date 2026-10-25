/**
 * @file sistema_orbital_hero.tsx
 * @description Sistema atómico de tres órbitas tecnológicas alrededor del avatar interactivo de perfil.
 */

import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiFlutter,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/componentes/ui/avatar";
import { OrbitaEliptica } from "@/componentes/hero/orbita_eliptica";

/**
 * Propiedades del componente SistemaOrbitalHero.
 */
interface PropiedadesSistemaOrbitalHero {
  al_abrir_foto_perfil: () => void;
}

/**
 * Renderiza el átomo tecnológico con tres anillos elípticos y la fotografía central del desarrollador.
 *
 * @param {PropiedadesSistemaOrbitalHero} propiedades_sistema - Callback ejecutado al hacer clic sobre el avatar.
 * @returns {JSX.Element} Estructura visual del átomo y avatar central.
 */
export function SistemaOrbitalHero({
  al_abrir_foto_perfil,
}: PropiedadesSistemaOrbitalHero): JSX.Element {
  return (
    <div className="relative flex justify-center items-center w-80 h-80 mb-8 mt-12 md:mt-0 mx-auto">
      {/* Órbita 1: React y Java */}
      <OrbitaEliptica
        angulo_inclinacion_grados={0}
        duracion_orbita="12s"
        clase_rotacion_directa="animate-spin-slower"
        clase_rotacion_inversa="animate-spin-reverse-slower"
        lista_iconos_orbita={[
          { componente_icono: SiReact, clase_color_icono: "text-cyan-400", retraso_animacion: "0s" },
          { componente_icono: FaJava, clase_color_icono: "text-red-500", retraso_animacion: "-6s" },
        ]}
      />

      {/* Órbita 2: Python y HTML5 */}
      <OrbitaEliptica
        angulo_inclinacion_grados={60}
        duracion_orbita="15s"
        clase_rotacion_directa="animate-spin-reverse-slow"
        clase_rotacion_inversa="animate-spin-slow"
        lista_iconos_orbita={[
          {
            componente_icono: SiPython,
            clase_color_icono: "text-yellow-400",
            retraso_animacion: "-2s",
          },
          {
            componente_icono: SiHtml5,
            clase_color_icono: "text-orange-500",
            retraso_animacion: "-9.5s",
          },
        ]}
      />

      {/* Órbita 3: Flutter y JavaScript */}
      <OrbitaEliptica
        angulo_inclinacion_grados={-60}
        duracion_orbita="18s"
        clase_rotacion_directa="animate-spin-slower"
        clase_rotacion_inversa="animate-spin-reverse-slower"
        lista_iconos_orbita={[
          {
            componente_icono: SiFlutter,
            clase_color_icono: "text-blue-400",
            retraso_animacion: "-5s",
          },
          {
            componente_icono: SiJavascript,
            clase_color_icono: "text-yellow-300",
            retraso_animacion: "-14s",
          },
        ]}
      />

      {/* Fotografía central de perfil */}
      <motion.div
        className="relative z-30 cursor-zoom-in group"
        onClick={al_abrir_foto_perfil}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl relative">
          <AvatarImage src="/perfil.jpg" className="object-cover" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </motion.div>
    </div>
  );
}
