'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useTranslations } from 'next-intl'

export function Header() {
    const t = useTranslations('nav')
    const [activeSection, setActiveSection] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id')
                    if (id) {
                        setActiveSection(`#${id}`)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        // Also check on scroll for hero section (which might be at top)
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition < 100) {
                setActiveSection('')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault()
        const sectionId = href.replace('#', '')

        const sectionToDividerMap: Record<string, string | null> = {
            about: null,
            projects: 'about',
            skills: 'projects',
            contact: 'skills',
        }

        const previousSectionId = sectionToDividerMap[sectionId]
        let divider: Element | null = null

        if (previousSectionId === null) {
            const allMarkers = document.querySelectorAll('.scroll-marker')
            if (allMarkers.length > 0) {
                allMarkers.forEach((marker) => {
                    const markerSectionId =
                        marker.getAttribute('data-section-id')
                    if (!markerSectionId && !divider) {
                        divider = marker
                    }
                })
                if (!divider && allMarkers[0]) {
                    divider = allMarkers[0]
                }
            }
        } else {
            const allMarkers = document.querySelectorAll('.scroll-marker')
            allMarkers.forEach((marker) => {
                const markerSectionId = marker.getAttribute('data-section-id')
                if (markerSectionId === previousSectionId) {
                    divider = marker
                }
            })
        }

        const headerHeight = 64

        if (divider) {
            const dividerPosition =
                divider.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
                top: dividerPosition - headerHeight,
                behavior: 'smooth',
            })
        } else {
            const section = document.querySelector(href)
            if (section) {
                const sectionPosition =
                    section.getBoundingClientRect().top + window.scrollY
                window.scrollTo({
                    top: sectionPosition - headerHeight,
                    behavior: 'smooth',
                })
            }
        }

        setActiveSection(href)
        setMobileMenuOpen(false)
    }

    const navLinks = [
        { href: '#about', label: t('about') },
        { href: '#projects', label: t('projects') },
        { href: '#skills', label: t('skills') },
        { href: '#contact', label: t('contact') },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="flex h-16 items-center justify-between">
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setMobileMenuOpen(false)
                        }}
                        className="cursor-pointer text-lg font-bold text-gray-900 transition-colors hover:text-gray-700 sm:text-xl dark:text-gray-100 dark:hover:text-gray-300"
                    >
                        Mohamed Chakkir
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 sm:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`relative text-sm font-medium transition-colors ${
                                    activeSection === link.href
                                        ? 'font-semibold text-gray-900 dark:text-gray-100'
                                        : 'text-gray-900/70 hover:text-gray-900 dark:text-gray-300/70 dark:hover:text-gray-100'
                                }`}
                            >
                                {link.label}
                                {activeSection === link.href && (
                                    <span className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                )}
                            </a>
                        ))}
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 sm:hidden">
                        <LanguageToggle />
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-gray-200 bg-white sm:hidden dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex flex-col py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className={`px-4 py-3 text-base font-medium transition-colors ${
                                        activeSection === link.href
                                            ? 'border-l-4 border-blue-600 bg-gray-100 font-semibold text-gray-900 dark:border-blue-400 dark:bg-gray-800 dark:text-gray-100'
                                            : 'text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
