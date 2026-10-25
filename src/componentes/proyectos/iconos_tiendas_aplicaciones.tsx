/**
 * @file iconos_tiendas_aplicaciones.tsx
 * @description Iconos vectoriales SVG personalizados para Google Play Store, Apple App Store y WhatsApp.
 */

/**
 * Renderiza el logotipo vectorial de Google Play Store.
 *
 * @param {{ className?: string }} propiedades_icono - Clases CSS opcionales para dimensionar o colorear el SVG.
 * @returns {JSX.Element} Elemento SVG de Google Play.
 */
export function IconoGooglePlay({
  className: clase_personalizada,
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={clase_personalizada}>
      <path d="M5,3V21L19,12L5,3Z" />
    </svg>
  );
}

/**
 * Renderiza el logotipo vectorial de Apple App Store.
 *
 * @param {{ className?: string }} propiedades_icono - Clases CSS opcionales para dimensionar o colorear el SVG.
 * @returns {JSX.Element} Elemento SVG de App Store.
 */
export function IconoAppStore({
  className: clase_personalizada,
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={clase_personalizada}>
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
    </svg>
  );
}

/**
 * Renderiza el icono vectorial de mensajería de WhatsApp.
 *
 * @param {{ className?: string }} propiedades_icono - Clases CSS opcionales para dimensionar o colorear el SVG.
 * @returns {JSX.Element} Elemento SVG de WhatsApp.
 */
export function IconoWhatsApp({
  className: clase_personalizada,
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clase_personalizada}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  );
}
