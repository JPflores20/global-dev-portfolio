/**
 * @file app.tsx
 * @description Componente raíz de la aplicación que configura los proveedores globales de consulta, tema, idioma, notificaciones y rutas.
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/componentes/ui/contenedor_notificaciones";
import { Toaster as ProveedorSonner } from "@/componentes/ui/notificacion_sonner";
import { TooltipProvider } from "@/componentes/ui/descripcion_emergente";
import { ProveedorTema } from "@/contextos/contexto_tema";
import { ProveedorIdioma } from "@/contextos/contexto_idioma";
import PaginaInicio from "@/paginas/pagina_inicio";
import PaginaNoEncontrada from "@/paginas/pagina_no_encontrada";

const cliente_consultas_react = new QueryClient();

/**
 * Envuelve toda la aplicación con sus contextos de estado y define el árbol de enrutamiento principal.
 *
 * @returns {JSX.Element} Estructura raíz de la aplicación.
 */
export function AplicacionPrincipal(): JSX.Element {
  return (
    <QueryClientProvider client={cliente_consultas_react}>
      <ProveedorTema>
        <ProveedorIdioma>
          <TooltipProvider>
            <Toaster />
            <ProveedorSonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PaginaInicio />} />
                {/* Agregar todas las rutas personalizadas encima de la ruta comodín "*" */}
                <Route path="*" element={<PaginaNoEncontrada />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProveedorIdioma>
      </ProveedorTema>
    </QueryClientProvider>
  );
}

export default AplicacionPrincipal;
