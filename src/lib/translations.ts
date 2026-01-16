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
      role: "Software Developer & Data Scientist",
      tagline: "Specializing in Machine Learning, Mobile Development & Full-Stack Solutions",
      cta: "Get in Touch",
    },
    about: {
      title: "About Me",
      description: "I'm a passionate software developer with expertise in machine learning, mobile app development, and full-stack solutions. Currently pursuing my thesis at Universidad Autónoma de Zacatecas, I combine academic research with practical industry experience to build innovative solutions that make a real impact.",
      highlights: [
        "Machine Learning & Data Science enthusiast",
        "Mobile app developer with Flutter expertise",
        "Full-stack developer with Django & React",
        "Thesis researcher in AI/ML applications",
      ],
    },
    experience: {
      title: "Experience",
      positions: [
        {
          role: "Software Developer",
          company: "REDECO",
          period: "2025",
          description: "Developed and maintained software solutions for business process optimization. Implemented efficient algorithms and collaborated with cross-functional teams to deliver high-quality products.",
        },
        {
          role: "Thesis Researcher",
          company: "Universidad Autónoma de Zacatecas",
          period: "2025 - Present",
          description: "Conducting research on machine learning applications for medical imaging. Developing a lung cancer detection model using deep learning techniques and medical image analysis.",
        },
        {
          role: "Mobile App Developer",
          company: "Taxaf",
          period: "2020 - 2023",
          description: "Led the development of a comprehensive tax management mobile application using Flutter. Implemented secure payment processing, user authentication, and real-time data synchronization.",
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
    projects: {
      title: "Projects",
      viewDetails: "View Details",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Lung Cancer ML Model",
          shortDesc: "Deep learning model for lung cancer detection from medical imaging",
          fullDesc: "A comprehensive machine learning solution for detecting lung cancer from CT scans using convolutional neural networks. The model achieves high accuracy in identifying malignant nodules and assists medical professionals in early diagnosis.",
          tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
          github: "https://github.com/joseluisfc",
          demo: null,
        },
        {
          title: "Taxaf Mobile App",
          shortDesc: "Comprehensive tax management application for individuals and businesses",
          fullDesc: "A feature-rich mobile application built with Flutter that simplifies tax calculations, document management, and payment processing. Includes user authentication, cloud synchronization, and intuitive reporting features.",
          tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
          github: "https://github.com/joseluisfc",
          demo: null,
        },
        {
          title: "REDECO Management System",
          shortDesc: "Enterprise resource planning system for business optimization",
          fullDesc: "A full-stack web application designed to streamline business operations including inventory management, customer relations, and financial reporting. Built with modern technologies for scalability and performance.",
          tech: ["Django", "React", "PostgreSQL", "Docker"],
          github: "https://github.com/joseluisfc",
          demo: null,
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
        phone: "Phone",
        email: "Email",
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
      role: "Desarrollador de Software & Científico de Datos",
      tagline: "Especializado en Machine Learning, Desarrollo Móvil & Soluciones Full-Stack",
      cta: "Contáctame",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un desarrollador de software apasionado con experiencia en machine learning, desarrollo de aplicaciones móviles y soluciones full-stack. Actualmente realizando mi tesis en la Universidad Autónoma de Zacatecas, combino la investigación académica con experiencia práctica en la industria para construir soluciones innovadoras que generan un impacto real.",
      highlights: [
        "Entusiasta de Machine Learning y Ciencia de Datos",
        "Desarrollador de aplicaciones móviles con experiencia en Flutter",
        "Desarrollador full-stack con Django y React",
        "Investigador de tesis en aplicaciones de IA/ML",
      ],
    },
    experience: {
      title: "Experiencia",
      positions: [
        {
          role: "Desarrollador de Software",
          company: "REDECO",
          period: "2025",
          description: "Desarrollé y mantuve soluciones de software para la optimización de procesos empresariales. Implementé algoritmos eficientes y colaboré con equipos multifuncionales para entregar productos de alta calidad.",
        },
        {
          role: "Investigador de Tesis",
          company: "Universidad Autónoma de Zacatecas",
          period: "2025 - Presente",
          description: "Realizando investigación sobre aplicaciones de machine learning para imágenes médicas. Desarrollando un modelo de detección de cáncer de pulmón utilizando técnicas de deep learning y análisis de imágenes médicas.",
        },
        {
          role: "Desarrollador de Apps Móviles",
          company: "Taxaf",
          period: "2020 - 2023",
          description: "Lideré el desarrollo de una aplicación móvil integral de gestión fiscal utilizando Flutter. Implementé procesamiento seguro de pagos, autenticación de usuarios y sincronización de datos en tiempo real.",
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
    projects: {
      title: "Proyectos",
      viewDetails: "Ver Detalles",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      items: [
        {
          title: "Modelo ML Cáncer de Pulmón",
          shortDesc: "Modelo de deep learning para detección de cáncer de pulmón en imágenes médicas",
          fullDesc: "Una solución integral de machine learning para detectar cáncer de pulmón a partir de tomografías usando redes neuronales convolucionales. El modelo logra alta precisión en la identificación de nódulos malignos y asiste a profesionales médicos en el diagnóstico temprano.",
          tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
          github: "https://github.com/joseluisfc",
          demo: null,
        },
        {
          title: "App Móvil Taxaf",
          shortDesc: "Aplicación integral de gestión fiscal para individuos y empresas",
          fullDesc: "Una aplicación móvil rica en funciones construida con Flutter que simplifica cálculos fiscales, gestión de documentos y procesamiento de pagos. Incluye autenticación de usuarios, sincronización en la nube y funciones intuitivas de reportes.",
          tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
          github: "https://github.com/joseluisfc",
          demo: null,
        },
        {
          title: "Sistema de Gestión REDECO",
          shortDesc: "Sistema de planificación de recursos empresariales para optimización de negocios",
          fullDesc: "Una aplicación web full-stack diseñada para optimizar operaciones empresariales incluyendo gestión de inventario, relaciones con clientes y reportes financieros. Construida con tecnologías modernas para escalabilidad y rendimiento.",
          tech: ["Django", "React", "PostgreSQL", "Docker"],
          github: "https://github.com/joseluisfc",
          demo: null,
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
        phone: "Teléfono",
        email: "Correo",
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
