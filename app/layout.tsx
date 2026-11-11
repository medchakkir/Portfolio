import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivo = Archivo({
    variable: '--font-archivo',
    subsets: ['latin'],
    axes: ['wdth'],
})

const description =
    'Full-stack developer preparing for postgraduate study in AI, machine learning and cybersecurity.'

export const metadata: Metadata = {
    title: 'Mohamed Chakkir | Full-Stack Developer',
    description,
    openGraph: {
        title: 'Mohamed Chakkir | Full-Stack Developer',
        description,
        type: 'website',
    },
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}}catch(e){}})();`

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body
                className={`${archivo.variable} bg-paper text-ink antialiased`}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
