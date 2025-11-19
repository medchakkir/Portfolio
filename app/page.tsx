'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SkillBadge } from '@/components/SkillBadge';
import { AchievementCard } from '@/components/AchievementCard';
import { ProjectCard } from '@/components/ProjectCard';
import { skills } from '@/data/skills';
import { achievements } from '@/data/achievements';
import { projects } from '@/data/projects';
import { getCategoryIcon } from '@/utils/skillIcons';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-5xl font-bold tracking-tight text-blue-900 sm:text-6xl lg:text-7xl"
              >
                {t.hero.greeting} <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {t.hero.name}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 text-2xl font-semibold text-blue-700"
              >
                {t.hero.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12 text-xl leading-8 text-blue-900/80 max-w-3xl mx-auto"
              >
                {t.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://github.com/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-7 w-7" />
                </a>
                <a
                  href="https://linkedin.com/in/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-7 w-7" />
                </a>
                <a
                  href="mailto:medchakkir@gmail.com"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-7 w-7" />
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* About Section */}
        <Section id="about" className="bg-blue-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                About Me
              </h2>
              <p className="text-xl leading-relaxed text-blue-900/80">
                {t.hero.description}
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                {t.projects.title}
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-blue-900/80">
                {t.projects.description}
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
                  image={project.image}
                  index={index}
                />
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="bg-blue-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                {t.skills.title}
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((category, categoryIndex) => {
                const CategoryIcon = getCategoryIcon(category.category);
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="rounded-xl border border-blue-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <CategoryIcon className="text-2xl text-blue-600" />
                      <h3 className="text-xl font-semibold text-blue-900">
                        {category.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <SkillBadge key={skill} skill={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Achievements Section */}
        <Section className="bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                {t.achievements.title}
              </h2>
            </motion.div>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  title={achievement.title}
                  description={achievement.description}
                  index={index}
                />
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-blue-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-blue-900/80">
                {t.contact.description}
              </p>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <FaEnvelope className="h-5 w-5" />
                  {t.contact.email}
                </a>
                <a
                  href="https://github.com/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-6 py-3 text-base font-semibold text-blue-900 transition-all hover:bg-blue-50 hover:border-blue-400"
                >
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-6 py-3 text-base font-semibold text-blue-900 transition-all hover:bg-blue-50 hover:border-blue-400"
                >
                  <FaLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
