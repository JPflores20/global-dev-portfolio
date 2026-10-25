# Portafolio Profesional — José Luis Flores Carrillo (`portafolio-jlfc`)

Aplicación web de portafolio profesional bilingüe (Inglés / Español) con soporte de tema claro/oscuro, animaciones interactivas en 2D/3D (Framer Motion) e integración con Firebase Firestore para el registro de mensajes de contacto.

---

## Arquitectura Modular y Principios de Diseño

El proyecto sigue una arquitectura **orientada a dominios y características (Feature-Driven & Clean Architecture)** bajo reglas estrictas de calidad de software:

1. **Límite estricto de 200 líneas por archivo:** Ningún archivo del código fuente supera las 200 líneas (incluyendo bloques JSDoc y espacios en blanco).
2. **Estandarización en `snake_case`:** Todos los archivos, funciones, métodos, hooks, variables y propiedades utilizan nomenclatura descriptiva en `snake_case`, evitando nombres genéricos o de una sola letra.
3. **Principios SOLID y DRY:**
   - **Responsabilidad Única (SRP):** Separación estricta entre componentes visuales, catálogos de datos estáticos, diccionarios de traducción, validación (Zod) y persistencia en la nube (Firebase Firestore).
   - **Inversión y Desacoplamiento:** Los componentes de interfaz consumen servicios (`servicio_mensajes_contacto`), contextos (`contexto_idioma`, `contexto_tema`) y utilidades reutilizables sin acoplarse a detalles de infraestructura.
4. **Documentación Integral (JSDoc):** Todos los módulos y funciones incluyen cabeceras y docstrings detallando su propósito, parámetros de entrada y valores de retorno.

---

## Árbol de Directorios Actualizado

```text
global-dev-portfolio/
├── public/                                       # Activos estáticos (CV PDF, fotografía de perfil, iconos)
├── src/
│   ├── main.tsx                                  # Punto de entrada principal que monta React en el DOM
│   ├── app.tsx                                   # Proveedores globales (Query, Tema, Idioma, Toasts) y enrutador
│   ├── app.css                                   # Estilos base del contenedor raíz
│   ├── index.css                                 # Variables CSS de tema, utilidades Tailwind y keyframes orbitales
│   ├── vite_env.d.ts                             # Declaraciones de tipos de entorno de Vite
│   ├── configuracion/
│   │   └── cliente_firebase.ts                   # Inicialización de Firebase App, Analytics y Cloud Firestore
│   ├── contextos/
│   │   ├── contexto_idioma.tsx                   # Proveedor y hook (use_idioma) para internacionalización (EN/ES)
│   │   └── contexto_tema.tsx                     # Proveedor y hook (use_tema) para tema claro/oscuro persistente
│   ├── traducciones/
│   │   ├── tipos_traducciones.ts                 # Tipos e interfaces del contrato de internacionalización
│   │   ├── traducciones_en.ts                    # Textos del portafolio en inglés
│   │   ├── experiencia_en.ts                     # Historial de experiencia y proyectos de Grupo Modelo en inglés
│   │   ├── proyectos_en.ts                       # Catálogo consolidado de proyectos en inglés (13 proyectos)
│   │   ├── proyectos_industriales_en.ts          # Catálogo de los 9 sistemas de Grupo Modelo en inglés
│   │   ├── descripciones_tecnologias_en.ts       # Descripciones técnicas del stack en inglés
│   │   ├── traducciones_es.ts                    # Textos del portafolio en español
│   │   ├── experiencia_es.ts                     # Historial de experiencia y proyectos de Grupo Modelo en español
│   │   ├── proyectos_es.ts                       # Catálogo consolidado de proyectos en español (13 proyectos)
│   │   ├── proyectos_industriales_es.ts          # Catálogo de los 9 sistemas de Grupo Modelo en español
│   │   ├── descripciones_tecnologias_es.ts       # Descripciones técnicas del stack en español
│   │   └── indice_traducciones.ts                # Punto de acceso centralizado al catálogo bilingüe
│   ├── servicios/
│   │   └── servicio_mensajes_contacto.ts         # Persistencia desacoplada de mensajes en Firebase Firestore
│   ├── utilidades/
│   │   ├── combinar_clases_css.ts                # Fusión segura de clases Tailwind CSS (clsx + tailwind-merge)
│   │   ├── desplazamiento_suave.ts               # Navegación smooth scroll hacia selectores del DOM
│   │   └── validacion_contacto.ts                # Esquema Zod, validador de contacto y generador de URL WhatsApp
│   ├── hooks/
│   │   ├── use_es_movil.tsx                      # Detección reactiva de pantallas móviles (<768px)
│   │   ├── use_seccion_activa.ts                 # Scroll Spy reactivo para resaltar la sección activa en navegación
│   │   ├── gestor_estado_notificaciones.ts       # Reducer, cola de remoción y estado en memoria de notificaciones
│   │   └── use_notificaciones.ts                 # Hook personalizado para disparar y cerrar alertas Toast
│   ├── componentes/
│   │   ├── navegacion/
│   │   │   ├── barra_navegacion.tsx              # Barra superior fija con enlaces de secciones y menú móvil
│   │   │   ├── controles_preferencias.tsx        # Selector ES/EN, botón de tema y botón de descarga de CV
│   │   │   ├── menu_movil_navegacion.tsx         # Menú desplegable animado para dispositivos móviles
│   │   │   ├── enlace_navegacion.tsx             # Envoltorio compatible con NavLink de React Router
│   │   │   └── pie_pagina.tsx                    # Pie de página con derechos reservados y redes sociales
│   │   ├── hero/
│   │   │   ├── seccion_hero.tsx                  # Portada principal con presentación animada y CTA
│   │   │   ├── sistema_orbital_hero.tsx          # Átomo central con avatar y tres órbitas tecnológicas
│   │   │   ├── orbita_eliptica.tsx               # Trayectoria elíptica SVG animada para iconos
│   │   │   ├── texto_animado_palabras.tsx        # Animación secuencial palabra por palabra
│   │   │   └── modal_foto_perfil.tsx             # Lightbox modal para ampliar la fotografía de perfil
│   │   ├── sobre_mi/
│   │   │   ├── seccion_sobre_mi.tsx              # Biografía, educación, certificaciones e idiomas
│   │   │   └── variantes_animacion_sobre_mi.ts   # Configuraciones Framer Motion de aparición escalonada
│   │   ├── stack_tecnologico/
│   │   │   ├── seccion_stack_tecnologico.tsx     # Galería interactiva filtrable del stack tecnológico
│   │   │   ├── catalogo_stack_tecnologico.ts     # Catálogo de categorías, iconos y colores de tecnologías
│   │   │   ├── barra_filtros_categoria.tsx       # Botonera de filtrado con indicador animado
│   │   │   └── modal_tarjeta_tecnologia_3d.tsx   # Modal con giro 3D (Flip Card) y descripción técnica
│   │   ├── habilidades/
│   │   │   ├── seccion_habilidades.tsx           # Barras de progreso de dominio técnico y competencias
│   │   │   └── catalogo_niveles_habilidades.ts   # Porcentajes de dominio en lenguajes, frameworks y herramientas
│   │   ├── experiencia/
│   │   │   ├── seccion_experiencia.tsx           # Línea de tiempo vertical animada de experiencia laboral
│   │   │   ├── tarjeta_puesto_experiencia.tsx    # Tarjeta de puesto laboral con vista colapsable de proyectos
│   │   │   └── modal_proyecto_experiencia.tsx    # Modal interactivo con detalle y stack del sistema industrial
│   │   ├── proyectos/
│   │   │   ├── seccion_proyectos.tsx             # Galería de proyectos destacados y estado del modal
│   │   │   ├── tarjeta_proyecto.tsx              # Tarjeta individual con enlaces a código, demo y tiendas
│   │   │   ├── modal_detalle_proyecto.tsx        # Diálogo modal con información extendida del proyecto
│   │   │   └── iconos_tiendas_aplicaciones.tsx   # Iconos vectoriales SVG (Google Play, App Store, WhatsApp)
│   │   ├── contacto/
│   │   │   ├── seccion_contacto.tsx              # Sección principal de contacto en dos columnas
│   │   │   ├── formulario_contacto.tsx           # Componente visual del formulario de contacto
│   │   │   ├── use_formulario_contacto.ts        # Hook de estado, validación y envío a Firestore
│   │   │   └── tarjetas_informacion_contacto.tsx # Accesos directos a WhatsApp, Correo, LinkedIn y GitHub
│   │   └── ui/
│   │       ├── avatar.tsx                        # Primitivo visual Avatar
│   │       ├── insignia.tsx                      # Primitivo visual Badge / Insignia
│   │       ├── boton.tsx                         # Primitivo visual Button
│   │       ├── dialogo.tsx                       # Primitivo visual Dialog / Modal
│   │       ├── campo_texto.tsx                   # Primitivo visual Input
│   │       ├── etiqueta.tsx                      # Primitivo visual Label
│   │       ├── area_texto.tsx                    # Primitivo visual Textarea
│   │       ├── notificacion_sonner.tsx           # Adaptador de notificaciones Sonner
│   │       ├── notificacion_toast.tsx            # Primitivos visuales Toast (Radix UI)
│   │       ├── contenedor_notificaciones.tsx     # Proveedor y renderizador Toaster
│   │       └── descripcion_emergente.tsx         # Primitivo visual Tooltip
│   ├── paginas/
│   │   ├── pagina_inicio.tsx                     # Vista principal que integra todas las secciones
│   │   └── pagina_no_encontrada.tsx              # Vista 404 para rutas no existentes
│   └── pruebas/
│       ├── configuracion_pruebas.ts              # Inicialización de entorno JSDOM y mocks de matchMedia
│       └── arquitectura_portafolio.test.ts       # Pruebas unitarias de validación, utilidades y traducciones
├── components.json                               # Configuración de alias del sistema de componentes
├── tailwind.config.ts                            # Configuración de tema, colores y animaciones Tailwind CSS
├── tsconfig.json                                 # Configuración base de TypeScript
├── vite.config.ts                                # Configuración del servidor y empaquetador Vite
└── vitest.config.ts                              # Configuración de pruebas unitarias con Vitest
```

---

## Descripción de Módulos Principales

- **`src/configuracion/`**: Inicializa la conexión con Firebase utilizando variables de entorno (`VITE_FIREBASE_*`) y expone la instancia de Firestore.
- **`src/contextos/`**: Provee el estado global de idioma (`en`/`es`) y tema visual (`light`/`dark`) con sincronización en `localStorage` y preferencias del sistema operativo.
- **`src/traducciones/`**: Separa los textos estáticos por idioma y por dominio técnico, garantizando mantenibilidad y tipado estricto mediante `EstructuraTraducciones`.
- **`src/servicios/`**: Encapsula las operaciones asíncronas hacia servicios externos (registro de documentos en la colección `mensajes` de Firestore).
- **`src/utilidades/`**: Contiene funciones puras reutilizables para validación de esquemas con Zod, generación de enlaces de WhatsApp, desplazamiento suave en el DOM y combinación de clases CSS.
- **`src/hooks/`**: Abstrae la lógica reactiva de detección de pantalla móvil y la máquina de estados (reducer) del sistema de notificaciones.
- **`src/componentes/`**: Organiza la interfaz en subcarpetas cohesivas por sección de negocio (`navegacion`, `hero`, `sobre_mi`, `stack_tecnologico`, `habilidades`, `experiencia`, `proyectos`, `contacto`) apoyadas en primitivos base (`ui`).
- **`src/paginas/`**: Ensambla las vistas de nivel de ruta gestionadas por `react-router-dom`.
- **`src/pruebas/`**: Verifica mediante Vitest el comportamiento de las utilidades, validaciones y diccionarios de idioma.

---

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:8080`.
- `npm run build`: Compila y empaqueta la aplicación para producción en `dist/`.
- `npm run test`: Ejecuta la suite de pruebas unitarias con Vitest.
- `npm run lint`: Ejecuta el análisis estático de código con ESLint.
