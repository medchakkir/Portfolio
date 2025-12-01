'use client'

import { useState, useRef, useEffect } from 'react'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'
import { Locale } from '@/i18n/config'
import { useLocale } from 'next-intl'

const languages: { code: Locale; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
]

export function LanguageToggle() {
    const locale = useLocale()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const changeLanguage = (newLocale: Locale) => {
        if (newLocale === locale) {
            setIsOpen(false)
            return
        }

        document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`

        // reload so SSR picks new locale
        window.location.reload()
    }

    const currentLanguage = languages.find((lang) => lang.code === locale)

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Change language"
                aria-expanded={isOpen}
            >
                <FaGlobe className="h-4 w-4" />
                <span className="hidden sm:inline">
                    {currentLanguage?.nativeName || currentLanguage?.name}
                </span>
                <FaChevronDown
                    className={`h-3 w-3 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                                    locale === language.code
                                        ? 'bg-blue-50 font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{language.nativeName}</span>
                                    {locale === language.code && (
                                        <span className="text-blue-600 dark:text-blue-400">
                                            ✓
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
