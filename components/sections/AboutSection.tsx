'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export function AboutSection() {
  return (
    <Section
      id="about"
      className="h-screen relative bg-white dark:bg-gray-900 bg-pattern-dots"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="space-y-6 text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Based in Djibouti, I&apos;m Mohamed Ali Youssouf, commonly known
              as Mohamed Chakkir. I earned my Computer Science degree in 2025,
              and my passion for web development began long before that, growing
              from early explorations in high school into a focus on modern
              full-stack development with React/Next.js and Express.js or
              Laravel.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I&apos;m currently expanding into AI, machine learning, and
              cybersecurity as I prepare for postgraduate studies, and I bring
              strong multilingual communication skills in French, English,
              Arabic, and Somali as my native language.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
