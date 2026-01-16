import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// --- IMPORTAMOS LA CONEXIÓN A FIREBASE ---
import { db } from "@/firebase"; 
import { collection, addDoc } from "firebase/firestore";
// -----------------------------------------

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

export function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // --- AQUÍ OCURRE LA MAGIA: ENVÍO REAL A FIREBASE ---
      await addDoc(collection(db, "mensajes"), {
        nombre: formData.name,
        email: formData.email,
        mensaje: formData.message,
        fecha: new Date().toISOString() // Guardamos la fecha exacta
      });

      toast({
        title: "¡Mensaje Enviado!", // Mensaje de éxito real
        description: "He recibido tu mensaje correctamente.",
      });
      
      setFormData({ name: "", email: "", message: "" }); // Limpiamos el formulario

    } catch (error) {
      console.error("Error enviando a Firebase:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta contactarme por WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.name}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.email}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.message}
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.form.send}
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* WhatsApp */}
            <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="p-4 rounded-xl gradient-bg text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.info.phone}</p>
                <a
                  href="https://wa.me/524921954970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  +52 492-195-4970
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="p-4 rounded-xl gradient-bg text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.info.email}</p>
                <a
                  href="mailto:pepe.jlfc.16@gmail.com"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  pepe.jlfc.16@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="p-4 rounded-xl gradient-bg text-white">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.info.linkedin}</p>
                <a
                  href="https://www.linkedin.com/in/jlfc2302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/jlfc2302
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="p-4 rounded-xl gradient-bg text-white">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.info.github}</p>
                <a
                  href="https://github.com/JPflores20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  github.com/JPflores20
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}