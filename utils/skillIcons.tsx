import { IconType } from 'react-icons';
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaBookOpen,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaLaravel,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPhp,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJira,
} from 'react-icons/si';
import { VscGlobe } from 'react-icons/vsc';
import { GiBrain } from 'react-icons/gi';

// Category icons mapping
export const categoryIcons: Record<string, IconType> = {
  'Web Development': VscGlobe,
  'Backend & Databases': FaDatabase,
  'AI & Data Science Tools': GiBrain,
  'Dev Tools': FaTools,
  'Currently Learning': FaBookOpen,
};

// Skill icons mapping
export const skillIcons: Record<string, IconType> = {
  // Web Development
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  'Next.js': SiNextdotjs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Tailwind: SiTailwindcss,
  'Node.js': FaNode,
  Express: SiExpress,

  // Backend & Databases
  Laravel: FaLaravel,
  PHP: SiPhp,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,

  // AI & Data Science
  Python: FaPython,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  'Scikit-Learn': SiScikitlearn,

  // Dev Tools
  Git: FaGitAlt,
  GitHub: FaGithub,
  Docker: FaDocker,
  Linux: FaLinux,
  'Agile (Jira)': SiJira,
  'REST APIs': FaCode,

  // Currently Learning
  'Machine Learning': GiBrain,
  'Data Science foundations': GiBrain,
  Spanish: FaBookOpen,
};

// Get icon for a skill, or return a default icon
export const getSkillIcon = (skill: string): IconType => {
  return skillIcons[skill] || FaCode;
};

// Get icon for a category
export const getCategoryIcon = (category: string): IconType => {
  return categoryIcons[category] || FaCode;
};
