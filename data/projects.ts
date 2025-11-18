export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'certicarte',
    title: 'CertiCarte',
    description:
      'A dues-tracking and reporting platform built with modern full-stack tooling.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'Node.js'],
    github: 'https://github.com/medchakkir/CertiCarte',
    image: '/certicarte.jpg',
    featured: true,
  },
  {
    slug: 'nassibpay',
    title: 'NassibPay',
    description:
      'A modern payment processing platform with secure transaction handling and real-time analytics.',
    tags: ['Next.js', 'TypeScript', 'Stripe API', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/medchakkir/CertiCarte',
    image: '/certicarte.jpg',
    featured: true,
  },
  {
    slug: 'laragigs',
    title: 'LaraGigs',
    description:
      'A freelance job marketplace connecting clients with talented developers and designers.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Tailwind'],
    github: 'https://github.com/medchakkir/CertiCarte',
    image: '/certicarte.jpg',
    featured: true,
  },
];
