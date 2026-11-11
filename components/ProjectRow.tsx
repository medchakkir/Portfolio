import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ArrowRight } from './Section'

export function ProjectRow({
    project,
    index,
}: {
    project: Project
    index: number
}) {
    return (
        <article className="border-rule grid gap-6 border-t py-10 md:grid-cols-2 md:gap-12">
            <div className="flex gap-5">
                <span className="text-accent-text pt-2 text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                    <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        {project.name}
                    </h3>
                    <p className="text-muted mt-2">{project.subtitle}</p>
                </div>
            </div>
            <div>
                <p className="text-muted text-lg leading-relaxed">
                    {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <li key={t} className="bg-chip px-2.5 py-1 text-xs">
                            {t}
                        </li>
                    ))}
                </ul>
                <Link
                    href={`/work/${project.slug}`}
                    className="text-accent-text mt-6 inline-flex items-center gap-2 font-bold hover:underline"
                >
                    Read case study <ArrowRight />
                </Link>
            </div>
        </article>
    )
}
