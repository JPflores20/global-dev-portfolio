/**
 * @file arquitectura_portafolio.test.ts
 * @description Pruebas unitarias para verificar la validación de contacto, construcción de enlaces y catálogo de traducciones.
 */

import { describe, it, expect } from "vitest";
import {
  validar_campos_contacto,
  construir_url_whatsapp,
} from "@/utilidades/validacion_contacto";
import { catalogo_traducciones } from "@/traducciones/indice_traducciones";
import { combinar_clases_css } from "@/utilidades/combinar_clases_css";

describe("Pruebas de arquitectura modular del portafolio", () => {
  it("debe validar correctamente un formulario de contacto con datos válidos", () => {
    const resultado_validacion = validar_campos_contacto({
      nombre_remitente: "José Luis",
      correo_remitente: "ingsoftjoseflores@gmail.com",
      mensaje_consulta: "Hola, me interesa colaborar en un proyecto.",
    });

    expect(resultado_validacion.es_valido).toBe(true);
    expect(Object.keys(resultado_validacion.errores_por_campo).length).toBe(0);
  });

  it("debe detectar errores cuando los campos del formulario están vacíos o son inválidos", () => {
    const resultado_invalido = validar_campos_contacto({
      nombre_remitente: "",
      correo_remitente: "correo-invalido",
      mensaje_consulta: "",
    });

    expect(resultado_invalido.es_valido).toBe(false);
    expect(resultado_invalido.errores_por_campo.nombre_remitente).toBeDefined();
    expect(resultado_invalido.errores_por_campo.correo_remitente).toBeDefined();
    expect(resultado_invalido.errores_por_campo.mensaje_consulta).toBeDefined();
  });

  it("debe construir la URL de WhatsApp en inglés y español manteniendo la lógica de negocio", () => {
    const url_ingles = construir_url_whatsapp("en");
    const url_espanol = construir_url_whatsapp("es");

    expect(url_ingles).toContain("https://wa.me/524921954970?text=");
    expect(decodeURIComponent(url_ingles)).toContain("Hello José Luis");
    expect(decodeURIComponent(url_espanol)).toContain("Hola José Luis");
  });

  it("debe disponer de los diccionarios de idioma en inglés y español completos", () => {
    expect(catalogo_traducciones.en.hero.name).toBe("José Luis Flores Carrillo");
    expect(catalogo_traducciones.es.hero.name).toBe("José Luis Flores Carrillo");
    expect(catalogo_traducciones.en.projects.lista_proyectos.length).toBe(13);
    expect(catalogo_traducciones.es.projects.lista_proyectos.length).toBe(13);
    expect(catalogo_traducciones.en.experience.positions.length).toBe(5);
    expect(catalogo_traducciones.es.experience.positions.length).toBe(5);
    expect(
      catalogo_traducciones.en.experience.positions[0].proyectos_destacados?.length,
    ).toBe(9);
    expect(
      catalogo_traducciones.es.experience.positions[0].proyectos_destacados?.length,
    ).toBe(9);
  });

  it("debe fusionar clases de Tailwind CSS sin conflictos", () => {
    const clases_fusionadas = combinar_clases_css("px-2 py-1", "px-4");
    expect(clases_fusionadas).toBe("py-1 px-4");
  });
});
