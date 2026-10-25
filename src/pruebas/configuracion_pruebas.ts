/**
 * @file configuracion_pruebas.ts
 * @description Configuración global del entorno de pruebas unitarias con Vitest y Testing Library.
 */

import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (consulta_medios: string) => ({
    matches: false,
    media: consulta_medios,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
