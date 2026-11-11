import { Section, Eyebrow } from '@/components/Section'
import { skills } from '@/data/skills'

export function SkillsSection() {
    return (
        <Section id="skills" rule={false} className="pt-0">
            <Eyebrow>Skills &amp; Technologies</Eyebrow>
            <div className="border-rule mt-6 grid gap-x-12 gap-y-12 border-t pt-8 md:grid-cols-2">
                {skills.map((c) => (
                    <div key={c.category}>
                        <h3 className="text-2xl font-extrabold tracking-tight">
                            {c.category}
                        </h3>
                        <ul className="mt-5">
                            {c.skills.map((s) => (
                                <li
                                    key={s}
                                    className="border-rule/60 border-b py-3"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}
