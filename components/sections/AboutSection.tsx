import { Section, Eyebrow, MetaStrip } from '@/components/Section'
import { about } from '@/data/content'

export function AboutSection() {
    return (
        <Section id="about">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                    <Eyebrow>About</Eyebrow>
                    <h2 className="mt-5 max-w-sm text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                        {about.heading}
                    </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed">
                    {about.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </div>
            <div className="mt-16">
                <MetaStrip
                    marker
                    items={about.focus.map((f) => ({
                        label: 'Current focus',
                        value: f,
                    }))}
                />
            </div>
        </Section>
    )
}
