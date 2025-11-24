export interface Achievement {
  title: string;
  description: string;
  date?: string;
  verificationUrl?: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Machine Learning — Coursera',
    description:
      'Built ML foundations: regression, classification, regularization, optimization, model evaluation.',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/',
    icon: 'graduation',
  },
  {
    title: 'Agile with Atlassian Jira — Coursera',
    description:
      'Practical experience with Scrum, sprint planning, backlog management, velocity tracking.',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/',
    icon: 'certificate',
  },
  {
    title: 'Full Web Development Bootcamp — Udemy',
    description: 'Mastery of frontend, backend, and full-stack app delivery.',
    date: '2023',
    verificationUrl: 'https://www.udemy.com/certificate/',
    icon: 'certificate',
  },
  {
    title: 'Independent Projects & Freelance Work',
    description:
      'Designed and implemented custom web solutions with real deployment pipelines.',
    date: '2023-2024',
    icon: 'briefcase',
  },
];
