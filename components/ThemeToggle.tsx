'use client'

import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Fonction pour obtenir le thème initial
        const getInitialTheme = () => {
            if (typeof window === 'undefined') return false

            const stored = localStorage.getItem('theme')
            if (stored === 'dark' || stored === 'light') {
                return stored === 'dark'
            }

            // Si pas de préférence stockée, utiliser la préférence système
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        const initialDark = getInitialTheme()
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(initialDark)
        setMounted(true)

        // Appliquer le thème immédiatement
        const html = document.documentElement
        if (initialDark) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const html = document.documentElement
        const newIsDark = !isDark

        // Add smooth transition class
        html.style.transition = 'background-color 0.3s ease, color 0.3s ease'

        // Mettre à jour l'état
        setIsDark(newIsDark)

        // Appliquer/retirer la classe dark
        if (newIsDark) {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

        // Remove transition class after animation completes
        setTimeout(() => {
            html.style.transition = ''
        }, 300)
    }

    if (!mounted) {
        // Rendu initial pour éviter le flash
        return (
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors">
                <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform" />
            </div>
        )
    }

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            role="switch"
            aria-checked={isDark}
        >
            {/* Track */}
            <span
                className={`inline-block h-full w-full rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
            />

            {/* Thumb with icon */}
            <span
                className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                    isDark ? 'translate-x-6' : 'translate-x-0.5'
                }`}
            >
                {isDark ? (
                    <FaMoon className="h-3 w-3 text-blue-600" />
                ) : (
                    <FaSun className="h-3 w-3 text-amber-500" />
                )}
            </span>
        </button>
    )
}
