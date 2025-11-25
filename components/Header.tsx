'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    
    // Map section to the divider that precedes it
    // Divider's data-section-id indicates which section it follows
    const sectionToDividerMap: Record<string, string | null> = {
      'about': null, // Divider after Hero (no id) precedes About
      'projects': 'about', // Divider after About precedes Projects
      'skills': 'projects', // Divider after Projects precedes Skills
      'contact': 'skills', // Divider after Skills precedes Contact
    };
    
    const previousSectionId = sectionToDividerMap[sectionId];
    let divider: Element | null = null;
    
    if (previousSectionId === null) {
      // Find the first divider (after Hero section)
      const allMarkers = document.querySelectorAll('.scroll-marker');
      if (allMarkers.length > 0) {
        // Find the one with no data-section-id or empty data-section-id
        allMarkers.forEach((marker) => {
          const markerSectionId = marker.getAttribute('data-section-id');
          if (!markerSectionId && !divider) {
            divider = marker;
          }
        });
        // If no divider found with no id, use the first one
        if (!divider && allMarkers[0]) {
          divider = allMarkers[0];
        }
      }
    } else {
      // Find divider with data-section-id matching the previous section
      const allMarkers = document.querySelectorAll('.scroll-marker');
      allMarkers.forEach((marker) => {
        const markerSectionId = marker.getAttribute('data-section-id');
        if (markerSectionId === previousSectionId) {
          divider = marker;
        }
      });
    }
    
    const headerHeight = 64; // h-16 = 64px
    
    if (divider) {
      // Scroll to the divider (section separator) accounting for header height
      const dividerPosition = divider.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: dividerPosition - headerHeight,
        behavior: 'smooth',
      });
    } else {
      // Fallback: scroll to the section itself
      const section = document.querySelector(href);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
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
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-gray-600 dark:text-gray-400'
                    : 'text-gray-900/70 dark:text-gray-300/70 hover:text-gray-600 dark:hover:text-gray-400'
                }`}
              >
                {link.label}
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
                      ? 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300'
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
