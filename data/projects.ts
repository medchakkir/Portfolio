export interface Project {
  slug: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'certicarte',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/CertiCarte',
    // demo: 'https://certicarte.laravel.cloud',
  },
  {
    slug: 'nassibpay',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/NassibPay',
    // demo: 'https://nassibpay.vercel.app',
  },
  {
    slug: 'laragigs',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/LaraGigs',
    // demo: 'https://laragigs.laravel.cloud',
  },
];
