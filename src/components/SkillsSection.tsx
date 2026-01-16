import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  languages: [
    { name: "Python", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Java", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 },
    { name: "C++", level: 75 },
    { name: "HTML/CSS", level: 90 },
  ],
  frameworks: [
    { name: "Flutter", level: 90 },
    { name: "React", level: 75 },
    { name: "Django", level: 85 },
    { name: "TensorFlow", level: 80 },
  ],
  tools: [
    { name: "Firebase", level: 85 },
    { name: "Git", level: 90 },
    { name: "MySQL / MariaDB", level: 80 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "SQLite", level: 85 },
  ],
};

export function SkillsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderSkillGroup = (
    title: string,
    skills: { name: string; level: number }[],
    delay: number
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <h3 className="text-xl font-bold mb-6 gradient-text">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: delay + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderSkillGroup(t.skills.categories.languages, skillsData.languages, 0.2)}
          {renderSkillGroup(t.skills.categories.frameworks, skillsData.frameworks, 0.3)}
          {renderSkillGroup(t.skills.categories.tools, skillsData.tools, 0.4)}
        </div>

        {/* Skill Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["Machine Learning", "Deep Learning", "Mobile Development", "REST APIs", "Agile", "Process Leadership"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground hover:gradient-bg hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}