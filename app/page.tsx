'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SkillBadge } from '@/components/SkillBadge';
import { ProjectCard } from '@/components/ProjectCard';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { getCategoryIcon } from '@/utils/skillIcons';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';
import { AnimatedShapes } from '@/components/AnimatedShapes';
import { BackToTopButton } from '@/components/BackToTopButton';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Section isHero={true} className="relative overflow-hidden">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          </div>

          {/* Animated Shapes */}
          <AnimatedShapes />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  <span className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                    👋 Hi, I&apos;m
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
                >
                  Mohamed
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
                >
                  Chakkir
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full-Stack Developer & AI Enthusiast
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-600 dark:text-gray-400 max-w-2xl"
                >
                  Full-stack developer with a growing focus on AI and Data
                  Science. I design efficient interfaces, reliable backend
                  systems, and explore machine-learning techniques to push
                  digital products forward.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white dark:text-gray-900 transition-all hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50 hover:scale-105"
                  >
                    <FaDownload className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                    <span>Download Resume</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                    className="group inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 dark:border-gray-100 bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 hover:scale-105"
                  >
                    <span>Get In Touch</span>
                    <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Side - Animated Shapes (visible on larger screens) */}
              <div className="hidden lg:block relative h-[600px]">
                {/* Additional shapes for right side */}
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section
          id="about"
          className="bg-white dark:bg-gray-900 bg-pattern-dots"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
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

        {/* Skills Section */}
        <Section
          id="skills"
          className="bg-white dark:bg-gray-900 bg-pattern-dots"
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

        {/* Contact Section */}
        <Section
          id="contact"
          className="bg-white dark:bg-gray-900"
          showDivider={false}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Email
                  </h3>
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
      <BackToTopButton />
    </div>
  );
}
