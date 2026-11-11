'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '@/data/content'

export function Header({ showSkills = true }: { showSkills?: boolean }) {
    const [open, setOpen] = useState(false)
    const links = [
        { href: '/#work', label: 'Work' },
        { href: '/#about', label: 'About' },
        ...(showSkills ? [{ href: '/#skills', label: 'Skills' }] : []),
        { href: '/#contact', label: 'Contact' },
    ]

    return (
        <header className="border-rule bg-paper/95 sticky top-0 z-50 border-b backdrop-blur">
            <Container>
                <nav className="flex h-[68px] items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="text-xl font-extrabold tracking-tight"
                    >
                        {profile.name}
                    </Link>
                    <div className="flex items-center gap-5">
                        <ul className="hidden items-center gap-5 sm:flex">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="hover:text-accent-text"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                        <a
                            href={profile.resume}
                            className="bg-accent hidden px-4 py-2.5 font-bold text-white hover:brightness-90 sm:block"
                        >
                            Resume
                        </a>
                        <button
                            type="button"
                            className="border-rule flex size-9 items-center justify-center border sm:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="size-4"
                                aria-hidden
                            >
                                <path
                                    d={
                                        open
                                            ? 'M6 6l12 12M18 6 6 18'
                                            : 'M4 7h16M4 12h16M4 17h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
                {open && (
                    <ul className="border-rule border-t pb-4 sm:hidden">
                        {[
                            ...links,
                            { href: profile.resume, label: 'Resume' },
                        ].map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="border-rule block border-b py-3 font-medium"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </Container>
        </header>
    )
}
