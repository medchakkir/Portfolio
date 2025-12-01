'use client'

import { Locale } from '@/i18n/config'
import { useLocale } from 'next-intl'

export function LanguageToggle() {
    const locale = useLocale()

    const toggleLang = () => {
        const next: Locale = locale === 'en' ? 'fr' : 'en'

        document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`

        // reload so SSR picks new locale
        window.location.reload()
    }

    return (
        <button
            onClick={toggleLang}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    )
}
