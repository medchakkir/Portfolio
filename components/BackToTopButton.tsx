'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-all hover:scale-110 hover:bg-gray-800 hover:shadow-xl dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    aria-label="Back to top"
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <FaArrowUp className="h-5 w-5" />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
