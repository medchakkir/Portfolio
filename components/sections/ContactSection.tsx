'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export function ContactSection() {
    const t = useTranslations('contact')

    return (
        <Section
            id="contact"
            className="bg-pattern-noise relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20"
            showDivider={false}
        >
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mb-6 sm:text-5xl lg:text-6xl dark:text-gray-100">
                        {t('title')}
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-700 sm:mb-12 sm:text-xl dark:text-gray-300">
                        {t('description')}
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.a
                            href="https://github.com/medchakkir"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.1 },
                                y: { duration: 0.4, delay: 0.1 },
                                scale: { duration: 0.2, ease: 'easeOut' },
                                default: { duration: 0.2, ease: 'easeOut' },
                            }}
                            className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-900 hover:bg-gray-50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700"
                        >
                            <FaGithub className="h-8 w-8 text-gray-900 transition-colors duration-300 group-hover:text-gray-800 dark:text-gray-100 dark:group-hover:text-gray-200" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t('github.title')}
                            </h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t('github.description')}
                            </p>
                        </motion.a>
                        <motion.a
                            href="mailto:demahomali01@gmail.com"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.2 },
                                y: { duration: 0.4, delay: 0.2 },
                                scale: { duration: 0.2, ease: 'easeOut' },
                                default: { duration: 0.2, ease: 'easeOut' },
                            }}
                            className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-500 hover:bg-red-50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-red-400 dark:hover:bg-red-900/20"
                        >
                            <FaEnvelope className="h-8 w-8 text-gray-900 transition-colors duration-300 group-hover:text-red-600 dark:text-gray-100 dark:group-hover:text-red-400" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t('email.title')}
                            </h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t('email.description')}
                            </p>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/medchakkir"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.3 },
                                y: { duration: 0.4, delay: 0.3 },
                                scale: { duration: 0.2, ease: 'easeOut' },
                                default: { duration: 0.2, ease: 'easeOut' },
                            }}
                            className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400 dark:hover:bg-blue-900/20"
                        >
                            <FaLinkedin className="h-8 w-8 text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t('linkedin.title')}
                            </h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                {t('linkedin.description')}
                            </p>
                        </motion.a>
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}
