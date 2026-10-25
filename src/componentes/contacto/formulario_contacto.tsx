/**
 * @file formulario_contacto.tsx
 * @description Componente visual del formulario de contacto que consume el hook use_formulario_contacto.
 */

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { use_idioma } from "@/contextos/contexto_idioma";
import { Button } from "@/componentes/ui/boton";
import { Input } from "@/componentes/ui/campo_texto";
import { Textarea } from "@/componentes/ui/area_texto";
import { Label } from "@/componentes/ui/etiqueta";
import { use_formulario_contacto } from "@/componentes/contacto/use_formulario_contacto";

/**
 * Renderiza los campos del formulario de contacto y el botón de envío con estado de carga.
 *
 * @param {{ esta_en_vista: boolean }} propiedades_formulario - Indica si la sección es visible para animar la entrada.
 * @returns {JSX.Element} Tarjeta animada con el formulario de contacto.
 */
export function FormularioContacto({
  esta_en_vista,
}: {
  esta_en_vista: boolean;
}): JSX.Element {
  const { textos_traducidos } = use_idioma();
  const {
    valores_formulario,
    envio_en_progreso,
    errores_validacion,
    manejar_cambio_campo,
    manejar_envio_formulario,
  } = use_formulario_contacto();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={esta_en_vista ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <form onSubmit={manejar_envio_formulario} className="glass-card p-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nombre_remitente">{textos_traducidos.contact.form.name}</Label>
          <Input
            id="nombre_remitente"
            name="nombre_remitente"
            value={valores_formulario.nombre_remitente}
            onChange={manejar_cambio_campo}
            placeholder={textos_traducidos.contact.form.name}
            className={errores_validacion.nombre_remitente ? "border-destructive" : ""}
          />
          {errores_validacion.nombre_remitente && (
            <p className="text-sm text-destructive">
              {errores_validacion.nombre_remitente}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="correo_remitente">{textos_traducidos.contact.form.email}</Label>
          <Input
            id="correo_remitente"
            name="correo_remitente"
            type="email"
            value={valores_formulario.correo_remitente}
            onChange={manejar_cambio_campo}
            placeholder={textos_traducidos.contact.form.email}
            className={errores_validacion.correo_remitente ? "border-destructive" : ""}
          />
          {errores_validacion.correo_remitente && (
            <p className="text-sm text-destructive">
              {errores_validacion.correo_remitente}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje_consulta">
            {textos_traducidos.contact.form.message}
          </Label>
          <Textarea
            id="mensaje_consulta"
            name="mensaje_consulta"
            value={valores_formulario.mensaje_consulta}
            onChange={manejar_cambio_campo}
            placeholder={textos_traducidos.contact.form.message}
            rows={5}
            className={errores_validacion.mensaje_consulta ? "border-destructive" : ""}
          />
          {errores_validacion.mensaje_consulta && (
            <p className="text-sm text-destructive">
              {errores_validacion.mensaje_consulta}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={envio_en_progreso}
          className="w-full gradient-bg text-white gap-2"
        >
          {envio_en_progreso ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
              />
              {textos_traducidos.contact.form.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {textos_traducidos.contact.form.send}
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
