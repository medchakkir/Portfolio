'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      className="bg-gray-50 dark:bg-gray-800 bg-pattern-grid"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            A selection of projects showcasing my skills and experience
          </p>
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {featuredProjects.map((project, index) => (
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
  );
}
