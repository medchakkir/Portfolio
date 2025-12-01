import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { cookies } from 'next/headers'
import { defaultLocale, type Locale } from './config'

export default getRequestConfig(async () => {
    // Get locale from cookie, fallback to default
    const cookieStore = await cookies()
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

    // Validate cookie locale is supported
    const locale: Locale =
        cookieLocale && routing.locales.includes(cookieLocale as Locale)
            ? (cookieLocale as Locale)
            : defaultLocale

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})
