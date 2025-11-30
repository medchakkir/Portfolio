'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsSection() {
    return (
        <Section
            id="projects"
            className="bg-pattern-noise relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20"
        >
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mb-6 sm:text-5xl lg:text-6xl dark:text-gray-100">
                        Featured Projects
                    </h2>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                            demo={project.demo}
                            image={project.image}
                            index={index}
                        />
                    ))}
                </motion.div>
            </Container>
        </Section>
    )
}
