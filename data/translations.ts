export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      greeting: "👋 Hi, I'm",
      name: "Mohamed Chakkir!",
      role: "Full-Stack Developer & AI Enthusiast",
      description: "Full-stack developer with a growing focus on AI and Data Science. I design efficient interfaces, reliable backend systems, and explore machine-learning techniques to push digital products forward."
    },
    // Projects Section
    projects: {
      title: "Featured Projects",
      description: "A selection of projects showcasing my skills and experience"
    },
    // Skills Section
    skills: {
      title: "Skills & Technologies"
    },
    // Achievements Section
    achievements: {
      title: "Achievements & Certifications"
    },
    // Contact Section
    contact: {
      title: "Let's build something impactful.",
      description: "If you want to collaborate, discuss a project, or explore opportunities, I'm always open to a conversation.",
      email: "medchakkir@gmail.com"
    },
    // Footer
    footer: {
      text: "Made with passion for code and creativity",
      rights: "All rights reserved"
    }
  },
  fr: {
    // Navigation
    nav: {
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      greeting: "👋 Salut, je suis",
      name: "Mohamed Chakkir!",
      role: "Développeur Full-Stack & Passionné d'IA",
      description: "Développeur full-stack avec un intérêt croissant pour l'IA et la science des données. Je conçois des interfaces efficaces, des systèmes backend fiables et explore les techniques d'apprentissage automatique pour faire progresser les produits numériques."
    },
    // Projects Section
    projects: {
      title: "Projets Phares",
      description: "Une sélection de projets présentant mes compétences et mon expérience"
    },
    // Skills Section
    skills: {
      title: "Compétences & Technologies"
    },
    // Achievements Section
    achievements: {
      title: "Réalisations & Certifications"
    },
    // Contact Section
    contact: {
      title: "Construisons quelque chose d'impactant.",
      description: "Si vous souhaitez collaborer, discuter d'un projet ou explorer des opportunités, je suis toujours ouvert à une conversation.",
      email: "medchakkir@gmail.com"
    },
    // Footer
    footer: {
      text: "Fait avec passion pour le code et la créativité",
      rights: "Tous droits réservés"
    }
  }
};

export type TranslationKey = keyof typeof translations.en;

