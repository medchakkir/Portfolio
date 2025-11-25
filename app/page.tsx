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
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/10 dark:bg-gray-700/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200/10 dark:bg-gray-700/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/5 dark:bg-gray-700/5 rounded-full blur-3xl"></div>
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
                className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 px-4"
              >
                👋 Hi, I&apos;m <br />
                <span className="text-gray-900 dark:text-gray-100">Mohamed Chakkir!</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 sm:mb-8 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
              >
                Full-Stack Developer & AI Enthusiast
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4"
              >
                Full-stack developer with a growing focus on AI and Data
                Science. I design efficient interfaces, reliable backend
                systems, and explore machine-learning techniques to push digital
                products forward.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <a
                  href="https://github.com/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 transition-all hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
                <a
                  href="https://linkedin.com/in/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 transition-all hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
                <a
                  href="mailto:medchakkir@gmail.com"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 transition-all hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* About Section */}
        <Section id="about" className="bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                About Me
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Full-stack developer with a growing focus on AI and Data
                Science. I design efficient interfaces, reliable backend
                systems, and explore machine-learning techniques to push digital
                products forward.
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="bg-gray-50 dark:bg-gray-800">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
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

        {/* Skills Section */}
        <Section id="skills" className="bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Skills & Technologies
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
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/20 dark:hover:shadow-gray-700/20"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <CategoryIcon className="text-2xl text-gray-600 dark:text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
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
        <Section className="bg-gray-50 dark:bg-gray-800">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Achievements & Certifications
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
                  date={achievement.date}
                  verificationUrl={achievement.verificationUrl}
                  icon={achievement.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Let&apos;s stay in touch!
              </h2>
              <p className="mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <motion.a
                  href="https://github.com/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-900 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <FaGithub className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    GitHub
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Check out my code
                  </p>
                </motion.a>
                <motion.a
                  href="mailto:medchakkir@gmail.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <FaEnvelope className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Send me a message
                  </p>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/medchakkir"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <FaLinkedin className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Connect professionally
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
