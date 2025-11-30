import { IconType } from 'react-icons';
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaCode,
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
  SiJira,
  SiPostman,
  SiDrizzle,
} from 'react-icons/si';

export interface SkillInfo {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillInfo[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: FaJs, color: 'text-amber-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-sky-500' },
      { name: 'React', icon: FaReact, color: 'text-cyan-500' },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: 'text-slate-800 dark:text-white',
      },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: FaNode, color: 'text-emerald-500' },
      { name: 'Express', icon: SiExpress, color: 'text-orange-600' },
      { name: 'Laravel', icon: FaLaravel, color: 'text-rose-500' },
      { name: 'PHP', icon: SiPhp, color: 'text-violet-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-700' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      { name: 'Prisma', icon: SiPrisma, color: 'text-cyan-400' },
      { name: 'Drizzle', icon: SiDrizzle, color: 'text-lime-400' },
    ],
  },
  {
    category: 'Dev Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      {
        name: 'GitHub',
        icon: FaGithub,
        color: 'text-gray-800 dark:text-white',
      },
      { name: 'Docker', icon: FaDocker, color: 'text-sky-500' },
      { name: 'Linux', icon: FaLinux, color: 'text-slate-500' },
      { name: 'Agile (Jira)', icon: SiJira, color: 'text-blue-700' },
      { name: 'REST APIs', icon: FaCode, color: 'text-violet-500' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    ],
  },
];
