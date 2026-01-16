import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© {currentYear} José Luis Flores Carrillo.</span>
            <span>{t.footer.rights}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1 text-muted-foreground"
          >
            {t.footer.madeWith}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 mx-1" />
            <span className="gradient-text font-semibold">React & Tailwind</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/joseluisfc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:scale-110 transition-transform text-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/joseluisfc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:scale-110 transition-transform text-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:pepe.jlfc.16@gmail.com"
              className="p-2 rounded-full glass hover:scale-110 transition-transform text-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
