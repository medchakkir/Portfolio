export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  problem: string;
  whatIBuilt: string[];
  whatMakesItInteresting: string;
  whatILearned: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "certicarte",
    title: "CertiCarte",
    description:
      "A dues-tracking and reporting platform built with modern full-stack tooling.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Node.js"],
    problem:
      "Organizations need a simple way to manage multi-year membership dues and generate accurate financial reports.",
    whatIBuilt: [
      "A database model tracking dues across years",
      "PDF generation (browser automation)",
      "UI for dues, payments, member history",
      "Admin dashboard with charts",
    ],
    whatMakesItInteresting:
      "Advanced logic for dues history, edge-case handling, serverless constraints.",
    whatILearned:
      "PDF generation limits, schema design tradeoffs, optimizing Prisma queries.",
    featured: true,
  },
  {
    slug: "ai-study-assistant",
    title: "AI-Powered Study Assistant",
    description:
      "A lightweight tool using ML models for note classification and summarization.",
    tech: ["Python", "Scikit-Learn", "React"],
    problem:
      "Students need an efficient way to organize and summarize their study notes using AI capabilities.",
    whatIBuilt: [
      "ML model for note classification",
      "Text summarization pipeline",
      "React frontend for note input and results",
      "Integration between Python backend and React frontend",
    ],
    whatMakesItInteresting:
      "Practical application of machine learning for educational purposes, combining ML with modern web development.",
    whatILearned:
      "Scikit-Learn model training, text preprocessing, API design for ML services, React state management for async operations.",
    featured: true,
  },
  {
    slug: "roomtech",
    title: "RoomTech — Service Website",
    description:
      "Landing + services website for a fictional IT services startup.",
    tech: ["Next.js", "Tailwind"],
    problem:
      "A startup needs a professional, modern website to showcase their IT services and attract clients.",
    whatIBuilt: [
      "Responsive landing page with hero section",
      "Services showcase section",
      "Contact form integration",
      "Modern UI with Tailwind CSS",
    ],
    whatMakesItInteresting:
      "Team collaboration project demonstrating modern web design principles and Next.js best practices.",
    whatILearned:
      "Team coordination, responsive design patterns, Next.js routing, component composition.",
    featured: true,
  },
  {
    slug: "portfolio-generator",
    title: "Portfolio Generator Script",
    description: "CLI tool for generating customizable portfolio sections.",
    tech: ["Node.js"],
    problem:
      "Developers need a quick way to generate portfolio sections without manual HTML/CSS writing.",
    whatIBuilt: [
      "CLI interface for user input",
      "Template system for portfolio sections",
      "File generation with customizable content",
      "Support for multiple output formats",
    ],
    whatMakesItInteresting:
      "Developer tool that automates repetitive portfolio creation tasks, demonstrating CLI development skills.",
    whatILearned:
      "Node.js CLI development, file system operations, template engines, command-line argument parsing.",
    featured: true,
  },
];

