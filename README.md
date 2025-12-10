# Portfolio - Mohamed Chakkir

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Features internationalization (i18n), dark mode, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Stack**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Internationalization**: Multi-language support (English & French) using next-intl
- **Dark Mode**: System preference detection with manual toggle
- **Animations**: Smooth transitions powered by Framer Motion
- **SEO Optimized**: Structured data, sitemap, robots.txt, and comprehensive metadata
- **Performance**: Optimized images, lazy loading, and Vercel Analytics integration
- **Accessibility**: ARIA labels, skip to main content, semantic HTML
- **PWA Ready**: Web app manifest for installable experience

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/speed-insights)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/medchakkir/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🌐 Internationalization

The portfolio supports multiple languages. Currently available:

- English (en) - Default
- French (fr)

To add a new language:

1. Add the locale to `i18n/config.ts`
2. Create translation files in `messages/[locale].json`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://medchakkir.vercel.app
```

### SEO Configuration

Update metadata in `app/layout.tsx`:

- Site URL
- OpenGraph images
- Twitter handle
- Verification codes
