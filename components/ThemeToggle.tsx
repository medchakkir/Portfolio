'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fonction pour obtenir le thème initial
    const getInitialTheme = () => {
      if (typeof window === 'undefined') return false;

      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        return stored === 'dark';
      }

      // Si pas de préférence stockée, utiliser la préférence système
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const initialDark = getInitialTheme();
    setIsDark(initialDark);
    setMounted(true);

    // Appliquer le thème immédiatement
    const html = document.documentElement;
    if (initialDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;

    // Mettre à jour l'état
    setIsDark(newIsDark);

    // Appliquer/retirer la classe dark
    if (newIsDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    // Rendu initial pour éviter le flash
    return (
      <button
        className="p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <FaMoon className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
    </button>
  );
}
