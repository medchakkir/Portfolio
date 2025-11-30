'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header a[href^="#"]');

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

    // Also check on scroll for hero section (which might be at top)
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
      const allMarkers = document.querySelectorAll('.scroll-marker');
      if (allMarkers.length > 0) {
        allMarkers.forEach((marker) => {
          const markerSectionId = marker.getAttribute('data-section-id');
          if (!markerSectionId && !divider) {
            divider = marker;
          }
        });
        if (!divider && allMarkers[0]) {
          divider = allMarkers[0];
        }
      }
    } else {
      const allMarkers = document.querySelectorAll('.scroll-marker');
      allMarkers.forEach((marker) => {
        const markerSectionId = marker.getAttribute('data-section-id');
        if (markerSectionId === previousSectionId) {
          divider = marker;
        }
      });
    }

    const headerHeight = 64;

    if (divider) {
      const dividerPosition =
        divider.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: dividerPosition - headerHeight,
        behavior: 'smooth',
      });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - headerHeight,
          behavior: 'smooth',
        });
      }
    }

    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
          >
            Mohamed Chakkir
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 sm:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === link.href
                    ? 'text-gray-900 dark:text-gray-100 font-semibold'
                    : 'text-gray-900/70 dark:text-gray-300/70 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 font-semibold border-l-4 border-blue-600 dark:border-blue-400'
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
