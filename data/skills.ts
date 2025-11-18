export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Web Development',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind',
      'Node.js',
      'Express',
    ],
  },
  {
    category: 'Backend & Databases',
    skills: ['Laravel', 'PHP', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'AI & Data Science Tools',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
  },
  {
    category: 'Dev Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Agile (Jira)', 'REST APIs'],
  },
  {
    category: 'Currently Learning',
    skills: ['Machine Learning', 'Data Science foundations', 'Spanish'],
  },
];
