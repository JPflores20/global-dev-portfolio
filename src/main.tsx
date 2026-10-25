/**
 * @file main.tsx
 * @description Punto de entrada principal que monta la aplicación React en el nodo raíz del DOM.
 */

import { createRoot } from "react-dom/client";
import AplicacionPrincipal from "./app.tsx";
import "./index.css";

const elemento_raiz_dom = document.getElementById("root");
if (elemento_raiz_dom) {
  createRoot(elemento_raiz_dom).render(<AplicacionPrincipal />);
}
