'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { AnimatedShapes } from '@/components/AnimatedShapes'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export function HeroSection() {
    const t = useTranslations('hero')

    return (
        <Section className="bg-pattern-grid relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20">
            {/* Animated Shapes */}
            <AnimatedShapes />

            <Container className="relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="text-2xl text-gray-700 sm:text-3xl dark:text-gray-300">
                                {t('greeting')}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-gray-100"
                        >
                            Mohamed
                        </motion.h1>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-6 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:from-blue-400 dark:to-cyan-400"
                        >
                            Chakkir
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mb-4 text-xl font-semibold text-gray-700 sm:mb-6 sm:text-2xl md:text-3xl dark:text-gray-300"
                        >
                            {t('title')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mb-8 max-w-2xl text-base leading-7 text-gray-600 sm:mb-12 sm:text-lg sm:leading-8 lg:text-xl dark:text-gray-400"
                        >
                            {t('description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/50 sm:px-8 sm:py-4 sm:text-lg dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:hover:shadow-gray-100/50"
                            >
                                <FaDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                                <span>{t('downloadResume')}</span>
                            </motion.a>
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const element =
                                        document.querySelector('#contact')
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="group inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 bg-transparent px-6 py-3 text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white sm:px-8 sm:py-4 sm:text-lg dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                            >
                                <span>{t('getInTouch')}</span>
                                <FaArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Shapes (visible on larger screens) */}
                    <div className="relative hidden h-[600px] lg:block">
                        {/* Additional shapes for right side */}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
