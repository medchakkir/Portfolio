'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="text-lg sm:text-xl font-bold text-gray-900 transition-colors hover:text-gray-700 cursor-pointer"
          >
            Mohamed Chakkir
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-gray-600'
                    : 'text-gray-900/70 hover:text-gray-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-gray-600 bg-gray-50'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-gray-600'
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
