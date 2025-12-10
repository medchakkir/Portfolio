'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('nav');
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(`#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');

    const sectionToDividerMap: Record<string, string | null> = {
      about: null,
      projects: 'about',
      skills: 'projects',
      contact: 'skills',
    };

    const previousSectionId = sectionToDividerMap[sectionId];
    let divider: Element | null = null;

    if (previousSectionId === null) {
      const section = document.querySelector(href);
      if (section) {
        (section as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      divider = document.querySelector(`#divider-${previousSectionId}`);
      if (divider) {
        (divider as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        const section = document.querySelector(href);
        if (section) {
          (section as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }

    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer text-lg font-bold text-gray-900 transition-colors hover:text-gray-700 sm:text-xl dark:text-gray-100 dark:hover:text-gray-300"
          >
            Mohamed Chakkir
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden items-center gap-6 sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'font-semibold text-gray-900 dark:text-gray-100'
                    : 'text-gray-900/70 hover:text-gray-900 dark:text-gray-300/70 dark:hover:text-gray-100'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-gray-200 bg-white sm:hidden dark:border-gray-800 dark:bg-gray-900"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex flex-col py-4"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    className={`px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === link.href
                        ? 'border-l-4 border-blue-600 bg-gray-100 font-semibold text-gray-900 dark:border-blue-400 dark:bg-gray-800 dark:text-gray-100'
                        : 'text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
