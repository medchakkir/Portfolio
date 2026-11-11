import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import {
    Eyebrow,
    MetaStrip,
    ArrowRight,
    ArrowUpRight,
} from '@/components/Section'
import { projects } from '@/data/projects'

type Params = { slug: string }

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { slug } = await params
    const p = projects.find((x) => x.slug === slug)
    if (!p) return {}
    return { title: `${p.name} | Mohamed Chakkir`, description: p.description }
}

export default async function CaseStudy({
    params,
}: {
    params: Promise<Params>
}) {
    const { slug } = await params
    const i = projects.findIndex((x) => x.slug === slug)
    if (i < 0) notFound()
    const p = projects[i]
    const next = projects[(i + 1) % projects.length]

    const sections = [
        { key: 'A', title: 'Problem', body: p.problem },
        { key: 'B', title: 'Approach', body: p.approach },
        { key: 'C', title: 'Outcome', body: p.outcome },
    ]

    return (
        <>
            <Header showSkills={false} />
            <main>
                <Container className="pt-12 sm:pt-16">
                    <Link
                        href="/#work"
                        className="hover:text-accent-text inline-flex items-center gap-2"
                    >
                        <ArrowRight className="size-4 rotate-180" /> All work
                    </Link>

                    <div className="mt-14 flex gap-4">
                        <span className="text-accent font-bold">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <Eyebrow>Case study · {p.category}</Eyebrow>
                    </div>
                    <h1 className="mt-6 text-6xl font-black tracking-tighter sm:text-8xl">
                        {p.name}
                    </h1>
                    <p className="mt-10 max-w-2xl text-2xl leading-snug font-bold">
                        {p.description}
                    </p>

                    <div className="mt-14">
                        <MetaStrip
                            items={[
                                { label: 'Role', value: p.role },
                                { label: 'Stack', value: p.tags.join(', ') },
                                {
                                    label: 'Source',
                                    value: (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent-text inline-flex items-center gap-1.5 hover:underline"
                                        >
                                            View code <ArrowUpRight />
                                        </a>
                                    ),
                                },
                                ...(p.demo
                                    ? [
                                          {
                                              label: 'Live',
                                              value: (
                                                  <a
                                                      href={p.demo}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-accent-text inline-flex items-center gap-1.5 hover:underline"
                                                  >
                                                      Visit site{' '}
                                                      <ArrowUpRight />
                                                  </a>
                                              ),
                                          },
                                      ]
                                    : []),
                            ]}
                        />
                    </div>

                    {p.image && (
                        <figure className="mt-16">
                            <Image
                                src={p.image}
                                alt={`${p.name} interface`}
                                width={1600}
                                height={900}
                                className="aspect-[16/8] w-full object-cover object-center grayscale"
                                priority
                            />
                            {p.imageCaption && (
                                <figcaption className="text-muted mt-4 text-sm">
                                    {p.imageCaption}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    <div className="mt-16 mb-24">
                        {sections.map((s) => (
                            <section
                                key={s.key}
                                className="border-rule grid gap-4 border-t py-10 md:grid-cols-2 md:gap-12"
                            >
                                <h2 className="flex items-baseline gap-3 text-3xl font-extrabold tracking-tight">
                                    <span className="text-accent text-sm">
                                        {s.key}
                                    </span>
                                    {s.title}
                                </h2>
                                <p className="text-muted text-lg leading-relaxed">
                                    {s.body}
                                </p>
                            </section>
                        ))}
                    </div>
                </Container>

                <Link
                    href={`/work/${next.slug}`}
                    className="bg-accent block py-14 text-white hover:brightness-95"
                >
                    <Container className="flex items-end justify-between gap-6">
                        <div>
                            <p className="text-sm font-bold tracking-[0.12em] uppercase">
                                Next project
                            </p>
                            <p className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                                {next.name}
                            </p>
                        </div>
                        <ArrowRight className="size-10" />
                    </Container>
                </Link>
            </main>
            <Footer />
        </>
    )
}
