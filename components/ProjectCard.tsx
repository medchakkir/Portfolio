'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaProjectDiagram } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import { useTranslations } from 'next-intl'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    github: string
    demo?: string
    image?: string
    index?: number
}

export function ProjectCard({
    title,
    description,
    tags,
    github,
    demo,
    image,
    index = 0,
}: ProjectCardProps) {
    const t = useTranslations('projects')
    const hasImage = Boolean(image)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.1,
            }}
            className="h-full"
        >
            <motion.div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800/90 dark:hover:border-gray-600">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-50 dark:bg-gray-700">
                    {hasImage ? (
                        <>
                            <div className="relative h-full w-full">
                                <Image
                                    src={image!}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                        </>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <FaProjectDiagram className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                        </div>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 dark:text-gray-100">
                        {title}
                    </h3>

                    <p className="mb-4 line-clamp-3 flex-1 text-gray-700 dark:text-gray-300">
                        {description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((item) => (
                            <motion.span
                                key={item}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 dark:bg-gray-700 dark:text-gray-300"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 sm:w-auto dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 dark:hover:shadow-gray-100/50"
                        >
                            <FaGithub className="h-5 w-5 transition-transform duration-300" />
                            <span>{t('viewCode')}</span>
                        </Link>
                        {demo && (
                            <Link
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-900 bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white sm:w-auto dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                            >
                                <VscGlobe className="h-5 w-5 transition-transform duration-300" />
                                <span>{t('liveDemo')}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
