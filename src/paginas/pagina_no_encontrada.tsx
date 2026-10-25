/**
 * @file pagina_no_encontrada.tsx
 * @description Vista de error 404 mostrada cuando el usuario intenta acceder a una ruta inexistente.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Registra en consola el intento de acceso a la ruta no válida y muestra un enlace de retorno al inicio.
 *
 * @returns {JSX.Element} Pantalla de error 404.
 */
export function PaginaNoEncontrada(): JSX.Element {
  const ubicacion_actual = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      ubicacion_actual.pathname
    );
  }, [ubicacion_actual.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
}

export default PaginaNoEncontrada;
