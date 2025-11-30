'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20 bg-pattern-noise"
      showDivider={false}
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Let&apos;s stay in touch!
          </h2>
          <p className="mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.a
              href="https://github.com/medchakkir"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                opacity: { duration: 0.4, delay: 0.1 },
                y: { duration: 0.4, delay: 0.1 },
                scale: { duration: 0.2, ease: 'easeOut' },
                default: { duration: 0.2, ease: 'easeOut' },
              }}
              className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-900 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <FaGithub className="h-8 w-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                GitHub
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Check out my code
              </p>
            </motion.a>
            <motion.a
              href="mailto:demahomali01@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                opacity: { duration: 0.4, delay: 0.2 },
                y: { duration: 0.4, delay: 0.2 },
                scale: { duration: 0.2, ease: 'easeOut' },
                default: { duration: 0.2, ease: 'easeOut' },
              }}
              className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <FaEnvelope className="h-8 w-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-red-600 dark:group-hover:text-red-400" />
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
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                opacity: { duration: 0.4, delay: 0.3 },
                y: { duration: 0.4, delay: 0.3 },
                scale: { duration: 0.2, ease: 'easeOut' },
                default: { duration: 0.2, ease: 'easeOut' },
              }}
              className="group flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <FaLinkedin className="h-8 w-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
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
  );
}
