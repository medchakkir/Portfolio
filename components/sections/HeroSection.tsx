import { Container } from '@/components/Container'
import { MetaStrip, ArrowRight } from '@/components/Section'
import { hero, profile } from '@/data/content'

function DownloadIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-4"
            aria-hidden
        >
            <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
        </svg>
    )
}

export function HeroSection() {
    return (
        <section className="pt-16 pb-16 sm:pt-24">
            <Container>
                <h1 className="text-6xl leading-[0.95] font-black tracking-tighter sm:text-8xl">
                    Mohamed
                    <br />
                    <span className="text-accent">Chakkir</span>
                </h1>
                <p className="mt-12 max-w-xl text-2xl leading-snug font-bold sm:text-3xl">
                    {hero.title}
                </p>
                <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
                    {hero.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href={profile.resume}
                        download
                        className="bg-accent inline-flex items-center gap-2 px-6 py-3.5 font-bold text-white hover:brightness-90"
                    >
                        Download resume <DownloadIcon />
                    </a>
                    <a
                        href="#work"
                        className="border-rule hover:bg-chip inline-flex items-center gap-2 border px-6 py-3.5 font-bold"
                    >
                        See selected work <ArrowRight />
                    </a>
                </div>
                <div className="mt-16">
                    <MetaStrip items={hero.facts} />
                </div>
            </Container>
        </section>
    )
}
