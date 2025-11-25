'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export function AboutSection() {
  return (
    <Section id="about" className="bg-white dark:bg-gray-900 bg-pattern-dots">
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
            Full-stack developer with a growing focus on AI and Data Science. I
            design efficient interfaces, reliable backend systems, and explore
            machine-learning techniques to push digital products forward.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
