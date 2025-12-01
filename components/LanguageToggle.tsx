'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { type Locale } from '@/i18n/config'

export function LanguageToggle() {
    const locale = useLocale() as Locale
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Set mounted state after hydration to avoid SSR mismatch
        // This is necessary to prevent hydration mismatches with client-only features
        // Using setTimeout to defer state update and avoid cascading renders
        const timer = setTimeout(() => {
            setMounted(true)
        }, 0)
        return () => clearTimeout(timer)
    }, [])

    const toggleLanguage = () => {
        const nextLocale: Locale = locale === 'en' ? 'fr' : 'en'

        // Set cookie
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`

        // Refresh the page to apply new locale
        router.refresh()
    }

    if (!mounted) {
        return (
            <button
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Toggle language"
            >
                EN
            </button>
        )
    }

    return (
        <button
            onClick={toggleLanguage}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label={`Switch to ${locale === 'en' ? 'French' : 'English'}`}
        >
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    )
}
