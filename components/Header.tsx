'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Fix: Use a mounted flag to prevent hydration issues
    let isMounted = true;
    if (isMounted) {
      setMounted(true);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const t = translations[language];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href);
    }
  };

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/80 backdrop-blur-md shadow-sm dark:border-blue-800 dark:bg-blue-950/80 dark:shadow-blue-900/50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold text-blue-900 transition-colors hover:text-blue-700 dark:text-blue-100 dark:hover:text-blue-300 cursor-pointer"
          >
            Mohamed Chakkir
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden gap-6 sm:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-blue-900/70 hover:text-blue-600 dark:text-blue-200/70 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {mounted && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <FaMoon className="h-5 w-5" />
                  ) : (
                    <FaSun className="h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                  aria-label="Toggle language"
                >
                  <FaGlobe className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
