import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { defaultLocale, type Locale } from '@/i18n/config'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'
import './globals.css'


const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    keywords: [
        'Mohamed Chakkir',
        'Full-Stack Developer',
        'Djibouti',
        'Next.js',
        'React',
        'Laravel',
        'Portfolio',
    ],
    authors: [{ name: siteName, url: siteUrl }],
    alternates: { canonical: '/' },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
    },
}

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteName,
    alternateName: 'Mohamed Ali Youssouf',
    url: siteUrl,
    jobTitle: 'Full-Stack Developer',
    address: { '@type': 'PostalAddress', addressCountry: 'DJ' },
    knowsLanguage: ['fr', 'en', 'ar', 'so'],
    sameAs: [
        'https://github.com/medchakkir',
        'https://linkedin.com/in/medchakkir',
    ],
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    let locale: Locale
    try {
        locale = (await getLocale()) as Locale
    } catch {
        locale = defaultLocale
    }

    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
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
