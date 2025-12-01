'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SkillBadge } from '@/components/SkillBadge'
import { skills } from '@/data/skills'
import { getCategoryIcon, getCategoryGradient } from '@/utils/skillIcons'
import { useTranslations } from 'next-intl'

export function SkillsSection() {
    const t = useTranslations('skills')

    return (
        <Section
            id="skills"
            className="bg-pattern-dots relative overflow-hidden bg-white dark:bg-gray-900"
        >
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mb-6 sm:text-5xl lg:text-6xl dark:text-gray-100">
                        {t('title')}
                    </h2>
                </motion.div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((category, categoryIndex) => {
                        const CategoryIcon = getCategoryIcon(category.category)
                        const categoryGradient = getCategoryGradient(
                            category.category
                        )
                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: {
                                        duration: 0.4,
                                        delay: categoryIndex * 0.1,
                                    },
                                    y: {
                                        duration: 0.4,
                                        delay: categoryIndex * 0.1,
                                    },
                                    scale: { duration: 0.2, ease: 'easeOut' },
                                    default: { duration: 0.2, ease: 'easeOut' },
                                }}
                                className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500"
                            >
                                <div className="flex flex-1 flex-col gap-6">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`inline-flex items-center justify-center rounded-full border border-gray-200/70 bg-linear-to-br dark:border-gray-600/70 ${categoryGradient} p-3 text-white shadow-lg`}
                                        >
                                            <CategoryIcon className="h-6 w-6" />
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.4em] text-gray-500 uppercase dark:text-gray-400">
                                                {t('category')}
                                            </p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                {category.category}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill) => (
                                            <SkillBadge
                                                key={skill.name}
                                                skill={skill}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}
