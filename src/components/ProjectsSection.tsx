import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Icon components for Play Store and App Store
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5,3V21L19,12L5,3Z" />
  </svg>
);

const AppStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
  </svg>
);

export function ProjectsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projectImages = [
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop", // Nueva imagen para Golden English
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:scale-[1.02] transition-transform flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.shortDesc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-1"
                      onClick={() => setSelectedProject(index)}
                    >
                      {t.projects.viewDetails}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      {project.demo && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {project.youtube && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {/* Store Links for Cards (Icon only) */}
                      {project.playStore && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                            <GooglePlayIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.appStore && (
                         <Button variant="ghost" size="icon" asChild>
                           <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                             <AppStoreIcon className="h-4 w-4" />
                           </a>
                         </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl glass max-h-[90vh] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl gradient-text">
                    {t.projects.items[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  <img
                    src={projectImages[selectedProject]}
                    alt={t.projects.items[selectedProject].title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <p className="text-muted-foreground mb-6">
                    {t.projects.items[selectedProject].fullDesc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.projects.items[selectedProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-full gradient-bg text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Primary Actions */}
                    <div className="flex gap-3 flex-wrap">
                        <Button className="flex-1 gap-2" asChild>
                          <a
                              href={t.projects.items[selectedProject].github}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <Github className="h-4 w-4" />
                              {t.projects.viewCode}
                          </a>
                        </Button>
                        
                        {t.projects.items[selectedProject].demo && (
                          <Button variant="outline" className="flex-1 gap-2" asChild>
                              <a
                              href={t.projects.items[selectedProject].demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                              <ExternalLink className="h-4 w-4" />
                              {t.projects.liveDemo}
                              </a>
                          </Button>
                        )}

                        {t.projects.items[selectedProject].youtube && (
                          <Button 
                            variant="outline" 
                            className="flex-1 gap-2 hover:text-red-600 hover:border-red-600 transition-colors" 
                            asChild
                          >
                              <a
                              href={t.projects.items[selectedProject].youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                              <Youtube className="h-4 w-4" />
                              {t.projects.videoDemo || "Video Demo"}
                              </a>
                          </Button>
                        )}
                    </div>

                    {/* Store Downloads */}
                    {(t.projects.items[selectedProject].playStore || t.projects.items[selectedProject].appStore) && (
                        <div className="flex gap-3 pt-2">
                             {t.projects.items[selectedProject].playStore && (
                                <Button variant="secondary" className="flex-1 gap-2" asChild>
                                    <a
                                    href={t.projects.items[selectedProject].playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <GooglePlayIcon className="h-4 w-4" />
                                    Google Play
                                    </a>
                                </Button>
                             )}
                             {t.projects.items[selectedProject].appStore && (
                                <Button variant="secondary" className="flex-1 gap-2" asChild>
                                    <a
                                    href={t.projects.items[selectedProject].appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <AppStoreIcon className="h-4 w-4" />
                                    App Store
                                    </a>
                                </Button>
                             )}
                        </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}