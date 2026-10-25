/**
 * @file traducciones_en.ts
 * @description Diccionario completo de textos en inglés para todas las secciones del portafolio.
 */

import type { EstructuraTraducciones } from "@/traducciones/tipos_traducciones";
import { descripciones_tecnologias_en } from "@/traducciones/descripciones_tecnologias_en";
import { lista_proyectos_en } from "@/traducciones/proyectos_en";
import { lista_experiencia_en } from "@/traducciones/experiencia_en";

/**
 * Objeto de traducciones en idioma inglés (en).
 */
export const traducciones_en: EstructuraTraducciones = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    download_cv: "Download CV",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "José Luis Flores Carrillo",
    role: "Software Engineer",
    tagline: "Specializing in Machine Learning, Mobile Development & Full-Stack Solutions",
    cta: "Get in Touch",
  },
  about: {
    title: "About Me",
    description:
      "I'm a Software Engineer and Digital Systems Technician with 3+ years of experience building industrial web platforms, AI-powered solutions, and mobile applications. I have designed and deployed 9 production systems at Grupo Modelo (AB InBev), combining clean architecture, real-time data analytics, and high-impact user interfaces.",
    highlights: [
      "Software Engineer at Grupo Modelo (AB InBev)",
      "Generative AI Leader Certified (Google)",
      "Full-Stack & Mobile Specialist (React, TypeScript, Flutter, Django)",
      "Generative AI Integration (Gemini, OpenAI) & industrial analytics",
    ],
    education_title: "Education",
    education: [
      {
        degree: "Software Engineering",
        school: "Universidad Autónoma de Zacatecas",
        period: "2021 - 2025",
      },
      {
        degree: "Digital Systems Technician",
        school: 'CECYT 18 "Zacatecas"',
        period: "2018 - 2021",
        license: "Professional License: 14051792",
      },
    ],
    certifications_title: "Certifications",
    certifications: ["Generative AI Leader (Google)"],
    languages_title: "Languages",
    languages: ["Spanish (Native)", "English (B2 - Intermediate/Advanced)"],
  },
  experience: {
    title: "Experience",
    positions: lista_experiencia_en,
  },
  skills: {
    title: "Skills",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools & Technologies",
    },
  },
  tech_stack: {
    title: "Tech Stack",
    description: "A curated list of the technologies and tools I use to build digital products.",
    categories: {
      All: "All",
      Frontend: "Frontend",
      Backend: "Backend",
      Mobile: "Mobile",
      Database: "Databases",
      DevOps: "DevOps",
      AI: "AI Assisted",
      Tools: "Design & Tools",
    },
    tech_descriptions: descripciones_tecnologias_en,
  },
  projects: {
    title: "Projects",
    view_details: "View Details",
    view_code: "View Code",
    live_demo: "Website",
    video_demo: "Video Demo",
    lista_proyectos: lista_proyectos_en,
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you!",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    info: {
      phone: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  footer: {
    rights: "All rights reserved.",
    made_with: "Made with",
  },
};
