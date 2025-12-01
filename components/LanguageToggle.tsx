'use client'

import { useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { setLocale } from '@/i18n/actions'
import { Locale } from '@/i18n/config'

export function LanguageToggle() {
    const locale = useLocale() as Locale
    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const toggleLang = () => {
        const nextLocale: Locale = locale === 'en' ? 'fr' : 'en'

        startTransition(async () => {
            await setLocale(nextLocale)
            router.replace(pathname) // refresh the same page with the new locale
        })
    }

    return (
        <button
            onClick={toggleLang}
            disabled={isPending}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    )
}
