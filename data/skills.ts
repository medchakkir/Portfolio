export interface SkillCategory {
    category: string
    skills: string[]
}

export const skills: SkillCategory[] = [
    {
        category: 'Frontend',
        skills: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'HTML',
            'CSS',
            'Tailwind',
        ],
    },
    {
        category: 'Backend & Databases',
        skills: [
            'Node.js',
            'Express',
            'Laravel',
            'PHP',
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'Prisma',
            'Drizzle',
        ],
    },
    {
        category: 'Dev Tools',
        skills: [
            'Git',
            'GitHub',
            'Docker',
            'Linux',
            'Agile (Jira)',
            'REST APIs',
            'Postman',
        ],
    },
]
