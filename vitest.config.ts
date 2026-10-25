/**
 * @file vitest.config.ts
 * @description Configuración del corredor de pruebas Vitest con soporte para React SWC, JSDOM y alias de rutas.
 */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/pruebas/configuracion_pruebas.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
