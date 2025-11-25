'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { AnimatedShapes } from '@/components/AnimatedShapes';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

export function HeroSection() {
  return (
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
              Full-stack developer with a growing focus on AI and Data Science.
              I design efficient interfaces, reliable backend systems, and
              explore machine-learning techniques to push digital products
              forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white dark:text-gray-900 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-900/50 dark:hover:shadow-gray-100/50"
              >
                <FaDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                <span>Download Resume</span>
              </motion.a>
              <motion.a
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 dark:border-gray-100 bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Shapes (visible on larger screens) */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Additional shapes for right side */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
