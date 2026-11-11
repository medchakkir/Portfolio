export interface Project {
    slug: string
    name: string
    subtitle: string
    category: string
    description: string
    tags: string[]
    github: string
    demo?: string
    image?: string
    imageCaption?: string
    role: string
    problem: string
    approach: string
    outcome: string
}

// NOTE: role/problem/approach/outcome are drafted from each project's
// description and stack. Edit them with your own details.
export const projects: Project[] = [
    {
        slug: 'certicarte',
        name: 'CertiCarte',
        subtitle: 'Certification management system',
        category: 'Certification management',
        description:
            'A Certification Management System that facilitates and automates the generation of student ID cards, student certificates, and class attendance lists.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        github: 'https://github.com/medchakkir/CertiCarte',
        image: '/certicarte.jpg',
        imageCaption: 'CertiCarte — main interface.',
        role: 'Full-stack developer',
        problem:
            'Schools produce student ID cards, certificates and attendance lists in large batches, and doing it by hand is slow, repetitive and error-prone.',
        approach:
            'A Laravel application backed by MySQL stores students and classes once and generates every document from that single source of truth, with a Tailwind interface for administrators.',
        outcome:
            'ID cards, certificates and class attendance lists are generated from one place, replacing manual document preparation.',
    },
    {
        slug: 'nassibpay',
        name: 'NassibPay',
        subtitle: 'Dues management system',
        category: 'Dues management',
        description:
            'A Dues Management System that streamlines member management, payment tracking, financial reporting, and administrative oversight through an intuitive web interface.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
        github: 'https://github.com/medchakkir/NassibPay',
        role: 'Full-stack developer',
        problem:
            'Organisations that collect membership dues often track members and payments in scattered spreadsheets, which makes reporting and oversight difficult.',
        approach:
            'A Next.js and TypeScript application on PostgreSQL centralises member records and payments, and turns them into financial reports for administrators.',
        outcome:
            'Member management, payment tracking and reporting live in one web interface with clear administrative oversight.',
    },
    {
        slug: 'laragigs',
        name: 'LaraGigs',
        subtitle: 'Job listing platform',
        category: 'Job listing platform',
        description:
            'A Job Listing Platform that connects talent with opportunities through an intuitive interface, offering advanced search, and seamless communication.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        github: 'https://github.com/medchakkir/LaraGigs',
        role: 'Full-stack developer',
        problem:
            'Job seekers and employers need a simple place to find each other without noisy listings or hard-to-use search.',
        approach:
            'A Laravel and MySQL platform with advanced search and built-in communication between talent and employers, styled with Tailwind.',
        outcome:
            'A working job board where listings can be searched and candidates and employers can get in touch directly.',
    },
]
