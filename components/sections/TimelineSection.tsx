'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaGraduationCap, FaBriefcase, FaLightbulb } from 'react-icons/fa'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { timeline } from '@/data/timeline'

const icons = {
    education: FaGraduationCap,
    experience: FaBriefcase,
    learning: FaLightbulb,
}

export function TimelineSection() {
    const t = useTranslations('timeline')

    return (
        <Section id="journey">
            <Container>
                <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                    {t('title')}
                </h2>
                <ol className="relative mx-auto max-w-2xl border-s-2 border-indigo-200 ps-8 dark:border-indigo-500/30">
                    {timeline.map((item, i) => {
                        const Icon = icons[item.type]
                        return (
                            <motion.li
                                key={item.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative mb-10 last:mb-0"
                            >
                                <span className="absolute -start-[3.1rem] flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white dark:ring-gray-900">
                                    <Icon className="h-4 w-4" />
                                </span>
                                <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-300">
                                    {t(`items.${item.key}.period`)}
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {t(`items.${item.key}.title`)}
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    {t(`items.${item.key}.description`)}
                                </p>
                            </motion.li>
                        )
                    })}
                </ol>
            </Container>
        </Section>
    )
}
