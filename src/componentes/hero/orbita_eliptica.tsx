/**
 * @file orbita_eliptica.tsx
 * @description Componente de trayectoria elíptica SVG animada para hacer girar iconos tecnológicos alrededor del avatar.
 */

import type { ComponentType } from "react";

/**
 * Configuración de un icono tecnológico que orbita sobre la elipse.
 */
export interface ConfiguracionIconoOrbita {
  componente_icono: ComponentType<{ className?: string }>;
  clase_color_icono: string;
  retraso_animacion: string;
}

/**
 * Propiedades del componente OrbitaEliptica.
 */
interface PropiedadesOrbitaEliptica {
  angulo_inclinacion_grados: number;
  lista_iconos_orbita: ConfiguracionIconoOrbita[];
  duracion_orbita?: string;
  clase_rotacion_directa: string;
  clase_rotacion_inversa: string;
}

/**
 * Trazado vectorial SVG que define la elipse de 300x100 píxeles.
 */
const TRAZADO_SVG_ELIPSE = "M 10 50 A 140 40 0 1 1 290 50 A 140 40 0 1 1 10 50";

/**
 * Renderiza un anillo elíptico inclinado con iconos que se desplazan continuamente a lo largo del trazado SVG.
 *
 * @param {PropiedadesOrbitaEliptica} propiedades_orbita - Ángulo, iconos, duración y clases de rotación compensatoria.
 * @returns {JSX.Element} Órbita elíptica animada.
 */
export function OrbitaEliptica({
  angulo_inclinacion_grados,
  lista_iconos_orbita,
  duracion_orbita = "10s",
  clase_rotacion_directa,
  clase_rotacion_inversa,
}: PropiedadesOrbitaEliptica): JSX.Element {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none">
      <div
        className="w-full h-full"
        style={{ transform: `rotate(${angulo_inclinacion_grados}deg)` }}
      >
        <div className={`w-full h-full ${clase_rotacion_directa}`}>
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <path
              d={TRAZADO_SVG_ELIPSE}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20"
            />
          </svg>
          {lista_iconos_orbita.map((configuracion_icono, indice_icono_orbita) => {
            const IconoTecnologia = configuracion_icono.componente_icono;
            return (
              <div
                key={indice_icono_orbita}
                className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-background/90 rounded-full border border-white/10 shadow-sm z-20"
                style={{
                  offsetPath: `path('${TRAZADO_SVG_ELIPSE}')`,
                  offsetRotate: "0deg",
                  animation: `orbit ${duracion_orbita} linear infinite`,
                  animationDelay: configuracion_icono.retraso_animacion || "0s",
                }}
              >
                <div
                  className={`w-full h-full flex items-center justify-center ${clase_rotacion_inversa}`}
                >
                  <div style={{ transform: `rotate(-${angulo_inclinacion_grados}deg)` }}>
                    <IconoTecnologia
                      className={`w-5 h-5 ${configuracion_icono.clase_color_icono}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
