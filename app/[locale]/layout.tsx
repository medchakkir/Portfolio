import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { type Locale, locales } from '@/i18n/config';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { StructuredData } from '@/components/StructuredData';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeUrl = `${baseUrl}/${locale}`;
  const ogLocale = locale === 'en' ? 'en_US' : 'fr_FR';
  const alternateLocale = locale === 'en' ? 'fr_FR' : 'en_US';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Mohamed Chakkir | Full-Stack Developer',
      template: '%s | Mohamed Chakkir',
    },
    description:
      'Full-stack developer crafting efficient, reliable, and innovative digital products. Specialized in modern web technologies and building scalable applications.',
    keywords: [
      'Full-Stack Developer',
      'Web Developer',
      'Next.js',
      'React',
      'TypeScript',
      'Laravel',
      'PHP',
      'Portfolio',
    ],
    authors: [{ name: 'Mohamed Chakkir' }],
    creator: 'Mohamed Chakkir',
    alternates: {
      canonical: localeUrl,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url: localeUrl,
      siteName: 'Mohamed Chakkir Portfolio',
      title: 'Mohamed Chakkir | Full-Stack Developer',
      description:
        'Full-stack developer crafting efficient, reliable, and innovative digital products.',
      // Add your OpenGraph image when available
      // images: [
      //   {
      //     url: `${baseUrl}/og-image.jpg`,
      //     width: 1200,
      //     height: 630,
      //     alt: 'Mohamed Chakkir - Full-Stack Developer',
      //   },
      // ],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function () {
        try {
          const savedTheme = localStorage.getItem('theme');
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const useDark = savedTheme ? savedTheme === 'dark' : systemDark;

          document.documentElement.classList.toggle('dark', useDark);
        } catch (_) {}
      })();
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased dark:bg-gray-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <StructuredData />
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

