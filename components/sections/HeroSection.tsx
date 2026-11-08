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
        <Section className="bg-pattern-grid relative overflow-hidden bg-linear-to-br from-indigo-50/60 via-white to-cyan-50/40 dark:from-[#0b1020] dark:via-[#0b1020] dark:to-indigo-950/30">
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
                            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                {t('available')}
                            </span>
                            <span className="block text-2xl text-gray-700 sm:text-3xl dark:text-gray-300">
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
                            className="mb-6 text-gradient text-4xl font-extrabold tracking-tight sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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
                                className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 sm:px-8 sm:py-4 sm:text-lg "
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
                                className="group inline-flex items-center gap-2 rounded-lg border-2 border-indigo-600/70 bg-transparent px-6 py-3 text-base font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white sm:px-8 sm:py-4 sm:text-lg dark:border-indigo-400/70 dark:text-indigo-200 dark:hover:bg-indigo-500 dark:hover:text-white"
                            >
                                <span>{t('getInTouch')}</span>
                                <FaArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Shapes (visible on larger screens) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="glass-card mx-auto max-w-md rounded-2xl p-6 font-mono text-sm">
                            <div className="mb-4 flex gap-1.5">
                                <span className="h-3 w-3 rounded-full bg-rose-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-400" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            </div>
                            <pre className="leading-7 text-gray-700 dark:text-gray-300">
{`const developer = {
  name: "Mohamed Chakkir",
  location: "Djibouti",
  stack: ["Next.js", "Laravel"],
  languages: ["FR", "EN", "AR", "SO"],
  learning: ["AI", "Security"],
}`}
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
