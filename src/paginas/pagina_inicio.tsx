/**
 * @file pagina_inicio.tsx
 * @description Página principal del portafolio que ensambla las secciones principales con carga diferida (Code Splitting).
 */

import { lazy, Suspense } from "react";
import { BarraNavegacion } from "@/componentes/navegacion/barra_navegacion";
import { SeccionHero } from "@/componentes/hero/seccion_hero";
import { SeccionSobreMi } from "@/componentes/sobre_mi/seccion_sobre_mi";

const SeccionStackTecnologico = lazy(() =>
  import("@/componentes/stack_tecnologico/seccion_stack_tecnologico").then(
    (modulo_stack) => ({ default: modulo_stack.SeccionStackTecnologico })
  )
);

const SeccionExperiencia = lazy(() =>
  import("@/componentes/experiencia/seccion_experiencia").then(
    (modulo_experiencia) => ({ default: modulo_experiencia.SeccionExperiencia })
  )
);

const SeccionProyectos = lazy(() =>
  import("@/componentes/proyectos/seccion_proyectos").then(
    (modulo_proyectos) => ({ default: modulo_proyectos.SeccionProyectos })
  )
);

const SeccionContacto = lazy(() =>
  import("@/componentes/contacto/seccion_contacto").then(
    (modulo_contacto) => ({ default: modulo_contacto.SeccionContacto })
  )
);

const PiePagina = lazy(() =>
  import("@/componentes/navegacion/pie_pagina").then((modulo_pie) => ({
    default: modulo_pie.PiePagina,
  }))
);

/**
 * Renderiza la vista completa de aterrizaje (Landing Page) del portafolio profesional.
 *
 * @returns {JSX.Element} Contenedor principal con todas las secciones de negocio.
 */
export function PaginaInicio(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BarraNavegacion />
      <SeccionHero />
      <SeccionSobreMi />
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground" />}>
        <SeccionStackTecnologico />
        <SeccionExperiencia />
        <SeccionProyectos />
        <SeccionContacto />
        <PiePagina />
      </Suspense>
    </div>
  );
}

export default PaginaInicio;
