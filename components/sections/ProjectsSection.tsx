import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Section'
import { ProjectRow } from '@/components/ProjectRow'
import { projects } from '@/data/projects'

export function ProjectsSection() {
    return (
        <section id="work" className="py-12 sm:py-16">
            <Container>
                <div className="mb-8 flex items-baseline justify-between">
                    <Eyebrow>Selected work</Eyebrow>
                    <span className="text-muted">
                        {String(projects.length).padStart(2, '0')} projects
                    </span>
                </div>
                {projects.map((p, i) => (
                    <ProjectRow key={p.slug} project={p} index={i} />
                ))}
            </Container>
        </section>
    )
}
