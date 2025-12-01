import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
    // Disable locale prefixes - always use root path
    locales,
    defaultLocale,
    localePrefix: 'never',
})

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing)
