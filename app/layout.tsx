import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { locales, type Locale, defaultLocale } from '@/i18n/config'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Mohamed Chakkir | Full-Stack Developer',
    description:
        'Full-Stack Developer exploring AI & Machine Learning. Building smart, scalable web experiences.',
    openGraph: {
        title: 'Mohamed Chakkir | Full-Stack Developer',
        description:
            'Full-Stack Developer exploring AI & Machine Learning. Building smart, scalable web experiences.',
        type: 'website',
    },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    let locale: string
    try {
        locale = await getLocale()
    } catch {
        // Fallback to default locale if getLocale fails
        locale = defaultLocale
    }

    // Validate locale and fallback to default if invalid
    const validLocale: Locale = locales.includes(locale as Locale)
        ? (locale as Locale)
        : defaultLocale

    const messages = await getMessages()

    return (
        <html lang={validLocale} suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased dark:bg-gray-900`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
