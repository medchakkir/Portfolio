import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'
import { Container } from './Container'

export function Section({
    id,
    children,
    className = '',
    rule = true,
}: {
    id?: string
    children: ReactNode
    className?: string
    rule?: boolean
}) {
    return (
        <section id={id} className={cn('py-16 sm:py-24', className)}>
            <Container>
                {rule && <div className="border-rule mb-10 border-t" />}
                {children}
            </Container>
        </section>
    )
}

export function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <p className="text-accent-text text-sm font-medium tracking-[0.12em] uppercase">
            {children}
        </p>
    )
}

export function MetaStrip({
    items,
    marker = false,
}: {
    items: { label: string; value: ReactNode }[]
    marker?: boolean
}) {
    return (
        <dl className="border-rule grid grid-cols-2 border-y lg:grid-cols-4">
            {items.map((item, i) => (
                <div
                    key={item.label + i}
                    className="border-rule px-0 py-5 not-last:border-b odd:border-r even:pl-5 lg:border-r lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:border-r-0"
                >
                    {marker && (
                        <span
                            className="bg-accent mb-3 block size-2"
                            aria-hidden
                        />
                    )}
                    <dt className="text-muted text-xs tracking-[0.12em] uppercase">
                        {item.label}
                    </dt>
                    <dd className="mt-2 text-lg leading-snug font-bold">
                        {item.value}
                    </dd>
                </div>
            ))}
        </dl>
    )
}

export function ArrowRight({ className = 'size-4' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={className}
            aria-hidden
        >
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

export function ArrowUpRight({ className = 'size-4' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={className}
            aria-hidden
        >
            <path d="M7 17 17 7M8 7h9v9" />
        </svg>
    )
}
