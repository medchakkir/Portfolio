export interface TimelineItem {
    key: string
    year: string
    type: 'education' | 'experience' | 'learning'
}

// Add your internships, freelance work and certifications here, then add
// matching entries under "timeline.items.<key>" in messages/en.json and fr.json.
export const timeline: TimelineItem[] = [
    { key: 'school', year: 'High school', type: 'learning' },
    { key: 'degree', year: '2025', type: 'education' },
    { key: 'ai', year: 'Now', type: 'learning' },
]
