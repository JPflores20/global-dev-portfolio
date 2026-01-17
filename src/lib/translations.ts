export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
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
      description: "I'm a passionate Software Engineering Student and Digital Systems Technician with 3+ years of experience in mobile and web development. My core focus is on frontend design, combining technical expertise with a vision for creating intuitive, functional, and high-impact interfaces.",
      highlights: [
        "Generative AI Leader Certified (Google)",
        "Mobile app developer with Flutter expertise",
        "Full-stack developer (Django, React, SQL)",
        "Thesis researcher in AI/ML applications",
      ],
      educationTitle: "Education",
      education: [
        {
          degree: "Software Engineering",
          school: "Universidad Autónoma de Zacatecas",
          period: "2021 - 2025"
        },
        {
          degree: "Digital Systems Technician",
          school: "CECYT 18 \"Zacatecas\"",
          period: "2018 - 2021",
          license: "Professional License: 14051792"
        }
      ],
      certificationsTitle: "Certifications",
      certifications: [
        "Generative AI Leader (Google)"
      ],
      languagesTitle: "Languages",
      languages: [
        "Spanish (Native)",
        "English (B2 - Intermediate/Advanced)"
      ]
    },
    experience: {
      title: "Experience",
      positions: [
        {
          role: "Project Lead & Software Developer",
          company: "REDECO",
          period: "Jul 2025 - Dec 2025",
          description: "Led the development of a financial complaint system for the REDECO website. Managed the project lifecycle and implemented web solutions.",
        },
        {
          role: "Thesis Researcher (Machine Learning)",
          company: "Universidad Autónoma de Zacatecas",
          period: "Aug 2025 - Present",
          description: "Developing a predictive model for lung cancer identification using Machine Learning algorithms to analyze clinical data and medical patterns.",
        },
        {
          role: "Mobile Developer",
          company: "Taxaf",
          period: "Jan 2020 - Dec 2023",
          description: "Mobile Developer responsible for interface design, frontend/backend development, and database management. Created the Taxaf mobile application.",
        },
        {
          role: "Operational Programming & Automation",
          company: "XL Textile creativity",
          period: "Dec 2019 - Jan 2021",
          description: "Development and maintenance of specialized scripts and software for textile machinery control.",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        tools: "Tools & Technologies",
      },
    },
    techStack: {
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
        Tools: "Design & Tools"
      },
      // --- NUEVAS DESCRIPCIONES ---
      techDescriptions: {
        "React": "A JavaScript library for building user interfaces.",
        "TypeScript": "JavaScript with syntax for types.",
        "Tailwind CSS": "A utility-first CSS framework for rapid UI development.",
        "JavaScript": "The programming language of the Web.",
        "HTML5": "The standard markup language for documents designed to be displayed in a web browser.",
        "Python": "A programming language that lets you work quickly and integrate systems more effectively.",
        "Django": "A high-level Python web framework that encourages rapid development.",
        "Java": "A high-level, class-based, object-oriented programming language.",
        "Node.js": "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        "Flutter": "Google's UI toolkit for building natively compiled applications from a single codebase.",
        "Dart": "A client-optimized language for fast apps on any platform.",
        "PostgreSQL": "A powerful, open source object-relational database system.",
        "MySQL": "The world's most popular open source database.",
        "Firebase": "Google's mobile platform that helps you quickly develop high-quality apps.",
        "MongoDB": "The most popular database for modern apps.",
        "Machine Learning": "The study of computer algorithms that improve automatically through experience.",
        "TensorFlow": "An end-to-end open source platform for machine learning.",
        "Pandas": "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool.",
        "Git": "A free and open source distributed version control system.",
        "Docker": "A platform for developing, shipping, and running applications.",
        "Linux": "A family of open-source Unix-like operating systems.",
        "Figma": "The collaborative interface design tool.",
        "Postman": "An API platform for building and using APIs.",
        "VS Code": "Code editing. Redefined."
      }
    },
    projects: {
      title: "Projects",
      viewDetails: "View Details",
      viewCode: "View Code",
      liveDemo: "Website",
      videoDemo: "Video Demo",
      items: [
        {
          title: "Lung Cancer ML Model",
          shortDesc: "Deep learning model for lung cancer detection from medical imaging",
          fullDesc: "A comprehensive machine learning solution for detecting lung cancer from CT scans using convolutional neural networks. The model achieves high accuracy in identifying malignant nodules.",
          tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
          github: "https://github.com/joseluisfc", 
          demo: null,
          playStore: null,
          appStore: null,
          youtube: null,
        },
        {
          title: "Taxaf Mobile App",
          shortDesc: "Comprehensive tax management application",
          fullDesc: "A feature-rich mobile application built with Flutter that simplifies tax calculations. Includes interface design, frontend/backend development and database management.",
          tech: ["Flutter", "Dart", "Firebase", "SQL"],
          github: "https://github.com/JPflores20",
          demo: null,
          playStore: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
          appStore: "https://apps.apple.com/mx/app/taxaf/id6748660857",
          youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
        },
        {
          title: "REDECO Complaint System",
          shortDesc: "Financial complaint system for web",
          fullDesc: "A web-based system designed to handle financial complaints for REDECO. Built with modern web technologies to ensure efficiency and user accessibility.",
          tech: ["Django", "React", "PostgreSQL", "Git"],
          github: "https://github.com/JPflores20/api_redeco_reune",
          demo: null,
          playStore: null,
          appStore: null,
          youtube: null,
        },
        {
          title: "Golden English Zac Landing",
          shortDesc: "Official landing page for English School",
          fullDesc: "A modern, responsive landing page for Golden English, the #1 English school in Zacatecas. Features scroll animations, dynamic counters for stats, and contact forms. Hosted on Firebase.",
          tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
          github: "https://github.com/JPflores20/golden-english-zac-landing",
          demo: "https://goldenenglishzac.web.app/",
          playStore: null,
          appStore: null,
          youtube: null,
        },
      ],
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
      madeWith: "Made with",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      greeting: "Hola, soy",
      name: "José Luis Flores Carrillo",
      role: "Ingeniero de Software",
      tagline: "Especializado en Machine Learning, Desarrollo Móvil y Soluciones Web",
      cta: "Contáctame",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un Ingeniero de Software en formación y Técnico en Sistemas Digitales con más de 3 años de experiencia en desarrollo móvil y web. Mi enfoque principal está en el diseño frontend, combinando experiencia técnica con una visión para crear interfaces intuitivas, funcionales y de alto impacto.",
      highlights: [
        "Certificación Generative AI Leader (Google)",
        "Desarrollador móvil experto en Flutter",
        "Desarrollador full-stack (Django, React, SQL)",
        "Investigador de tesis en aplicaciones de IA/ML",
      ],
      educationTitle: "Formación Académica",
      education: [
        {
          degree: "Ingeniería de Software",
          school: "Universidad Autónoma de Zacatecas",
          period: "2021 - 2025"
        },
        {
          degree: "Técnico en Sistemas Digitales",
          school: "CECYT 18 \"Zacatecas\"",
          period: "2018 - 2021",
          license: "Cédula Profesional: 14051792"
        }
      ],
      certificationsTitle: "Certificaciones",
      certifications: [
        "Generative AI Leader (Google)"
      ],
      languagesTitle: "Idiomas",
      languages: [
        "Español (Nativo)",
        "Inglés (B2 - Intermedio/Avanzado)"
      ]
    },
    experience: {
      title: "Experiencia",
      positions: [
        {
          role: "Líder de Proyecto y Desarrollador",
          company: "REDECO",
          period: "Jul 2025 - Dic 2025",
          description: "Lideré la creación de un sistema de quejas financiero para la página web de REDECO en la ciudad de Zacatecas.",
        },
        {
          role: "Investigador de Tesis (Machine Learning)",
          company: "Universidad Autónoma de Zacatecas",
          period: "Ago 2025 - Presente",
          description: "Desarrollo de un modelo predictivo para la identificación de cáncer de pulmón en el sector salud, mediante algoritmos de Aprendizaje Automático.",
        },
        {
          role: "Desarrollador Móvil",
          company: "Taxaf",
          period: "Ene 2020 - Dic 2023",
          description: "Desarrollador móvil del proyecto Taxaf. Responsable del diseño de interfaz, desarrollo frontend y backend, y gestión de bases de datos.",
        },
        {
          role: "Programación y Automatización Operativa",
          company: "XL Textile creativity",
          period: "Dic 2019 - Ene 2021",
          description: "Desarrollo y mantenimiento de scripts y software especializado para el control de maquinaria textil.",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      categories: {
        languages: "Lenguajes",
        frameworks: "Frameworks",
        tools: "Herramientas y Tecnologías",
      },
    },
    techStack: {
      title: "Stack Tecnológico",
      description: "Una lista seleccionada de tecnologías y herramientas que utilizo para crear productos digitales.",
      categories: {
        All: "Todos",
        Frontend: "Frontend",
        Backend: "Backend",
        Mobile: "Móvil",
        Database: "Bases de Datos",
        DevOps: "DevOps",
        AI: "IA Asistida",
        Tools: "Diseño y Herramientas"
      },
      // --- NUEVAS DESCRIPCIONES (ESPAÑOL) ---
      techDescriptions: {
        "React": "Una biblioteca de JavaScript para construir interfaces de usuario.",
        "TypeScript": "JavaScript con sintaxis para tipos.",
        "Tailwind CSS": "Un framework de CSS de utilidad primero para el desarrollo rápido de UI.",
        "JavaScript": "El lenguaje de programación de la Web.",
        "HTML5": "El lenguaje de marcado estándar para documentos diseñados para ser mostrados en un navegador web.",
        "Python": "Un lenguaje de programación que te permite trabajar rápidamente e integrar sistemas de manera más efectiva.",
        "Django": "Un framework web de Python de alto nivel que fomenta el desarrollo rápido.",
        "Java": "Un lenguaje de programación orientado a objetos, basado en clases y de alto nivel.",
        "Node.js": "Entorno de ejecución de JavaScript construido sobre el motor de JavaScript V8 de Chrome.",
        "Flutter": "El kit de herramientas de interfaz de usuario de Google para crear aplicaciones compiladas de forma nativa.",
        "Dart": "Un lenguaje optimizado para clientes para aplicaciones rápidas en cualquier plataforma.",
        "PostgreSQL": "Un potente sistema de base de datos relacional de objetos de código abierto.",
        "MySQL": "La base de datos de código abierto más popular del mundo.",
        "Firebase": "La plataforma móvil de Google que te ayuda a desarrollar rápidamente aplicaciones de alta calidad.",
        "MongoDB": "La base de datos más popular para aplicaciones modernas.",
        "Machine Learning": "El estudio de algoritmos informáticos que mejoran automáticamente a través de la experiencia.",
        "TensorFlow": "Una plataforma de código abierto de extremo a extremo para el aprendizaje automático.",
        "Pandas": "Una herramienta de análisis y manipulación de datos de código abierto rápida, potente, flexible y fácil de usar.",
        "Git": "Un sistema de control de versiones distribuido gratuito y de código abierto.",
        "Docker": "Una plataforma para desarrollar, enviar y ejecutar aplicaciones.",
        "Linux": "Una familia de sistemas operativos tipo Unix de código abierto.",
        "Figma": "La herramienta de diseño de interfaz colaborativa.",
        "Postman": "Una plataforma API para construir y usar API.",
        "VS Code": "Edición de código. Redefinida."
      }
    },
    projects: {
      title: "Proyectos",
      viewDetails: "Ver Detalles",
      viewCode: "Ver Código",
      liveDemo: "Website",
      videoDemo: "Video Demo",
      items: [
        {
          title: "Modelo ML Cáncer de Pulmón",
          shortDesc: "Modelo de deep learning para detección de cáncer de pulmón",
          fullDesc: "Una solución integral de machine learning para detectar cáncer de pulmón a partir de tomografías usando redes neuronales convolucionales.",
          tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
          github: "https://github.com/joseluisfc",
          demo: null,
          playStore: null,
          appStore: null,
          youtube: null,
        },
        {
          title: "App Móvil Taxaf",
          shortDesc: "Aplicación integral de gestión fiscal",
          fullDesc: "Aplicación móvil desarrollada en Flutter para gestión fiscal. Incluye diseño de interfaz, autenticación y sincronización de datos.",
          tech: ["Flutter", "Dart", "Firebase", "SQL"],
          github: "https://github.com/JPflores20",
          demo: null,
          playStore: "https://play.google.com/store/apps/details?id=com.taxaf.user&pcampaignid=web_share",
          appStore: "https://apps.apple.com/mx/app/taxaf/id6748660857",
          youtube: "https://youtu.be/TKlX189a_J4?si=AoLnTHjgEfsv9lVS",
        },
        {
          title: "Sistema de Quejas REDECO",
          shortDesc: "Sistema web para gestión de quejas financieras",
          fullDesc: "Liderazgo y desarrollo de un sistema web para optimizar la gestión de quejas financieras en REDECO, Zacatecas.",
          tech: ["Django", "React", "PostgreSQL", "Git"],
          github: "https://github.com/JPflores20/api_redeco_reune",
          demo: null,
          playStore: null,
          appStore: null,
          youtube: null,
        },
        {
          title: "Web Golden English Zac",
          shortDesc: "Sitio web oficial para escuela de inglés",
          fullDesc: "Landing page moderna para Golden English Zacatecas. Incluye animaciones al hacer scroll, contadores dinámicos de estadísticas y formularios de contacto. Desarrollada con React, TypeScript y Tailwind CSS.",
          tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
          github: "https://github.com/JPflores20/golden-english-zac-landing",
          demo: "https://goldenenglishzac.web.app/",
          playStore: null,
          appStore: null,
          youtube: null,
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
      },
      info: {
        phone: "WhatsApp",
        email: "Correo",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
    },
  },
};

export type Language = "en" | "es";
export type Translations = typeof translations.en;