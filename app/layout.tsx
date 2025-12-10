import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { defaultLocale, type Locale } from '@/i18n/config';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { StructuredData } from '@/components/StructuredData';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
export const metadata: Metadata = {
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: baseUrl,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale: Locale;
  try {
    locale = (await getLocale()) as Locale;
  } catch {
    locale = defaultLocale;
  }

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
