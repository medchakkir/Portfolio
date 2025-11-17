"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { AchievementCard } from "@/components/AchievementCard";
import { ProjectCard } from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100"
              >
                I build smart, scalable web experiences.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400"
              >
                Full-stack developer with a growing focus on AI and Data Science.
                I design efficient interfaces, reliable backend systems, and
                explore machine-learning techniques to push digital products
                forward.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <Link
                  href="/projects"
                  className="rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Skills Section */}
        <Section>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                Skills & Technologies
              </h2>
            </motion.div>
            <div className="space-y-12">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Achievements Section */}
        <Section className="bg-gray-50 dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                Achievements & Certifications
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  title={achievement.title}
                  description={achievement.description}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Projects Preview Section */}
        <Section>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex items-center justify-between"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="text-base font-semibold text-gray-900 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
              >
                View All →
              </Link>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  slug={project.slug}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
