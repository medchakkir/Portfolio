export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'certicarte',
    title: 'CertiCarte',
    description:
      'A dues-tracking and reporting platform built with modern full-stack tooling.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/CertiCarte',
    demo: 'https://certicarte.laravel.cloud',
  },
  {
    slug: 'nassibpay',
    title: 'NassibPay',
    description:
      'A modern payment processing platform with secure transaction handling and real-time analytics.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'ShadCN'],
    github: 'https://github.com/medchakkir/NassibPay',
    demo: 'https://nassibpay.vercel.app',
  },
  {
    slug: 'laragigs',
    title: 'LaraGigs',
    description:
      'A freelance job marketplace connecting clients with talented developers and designers.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/LaraGigs',
    demo: 'https://laragigs.laravel.cloud',
  },
];
