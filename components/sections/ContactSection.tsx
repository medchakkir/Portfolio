import { Container } from '@/components/Container'
import { ArrowUpRight } from '@/components/Section'
import { contact, profile } from '@/data/content'

const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: profile.githubHandle, href: profile.github },
    {
        label: 'LinkedIn',
        value: profile.linkedinHandle,
        href: profile.linkedin,
    },
]

export function ContactSection() {
    return (
        <section id="contact" className="bg-accent py-16 text-white sm:py-20">
            <Container>
                <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
                    {contact.title}
                </h2>
                <p className="mt-6 max-w-xl text-2xl leading-snug font-bold">
                    {contact.description}
                </p>
                <ul className="mt-12 grid border-t-2 border-white sm:grid-cols-3">
                    {links.map((l) => (
                        <li key={l.label} className="sm:pr-6">
                            <a
                                href={l.href}
                                {...(l.label !== 'Email' && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                })}
                                className="group block border-b-2 border-white py-5 sm:mr-0"
                            >
                                <span className="flex items-center justify-between text-sm font-bold tracking-[0.12em] uppercase">
                                    {l.label}
                                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                                <span className="mt-2 block text-xl font-bold break-all">
                                    {l.value}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
