'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <Section
      id="about"
      className="bg-pattern-dots relative h-screen bg-white dark:bg-gray-900"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mb-6 sm:text-5xl lg:text-6xl dark:text-gray-100">
            {t('title')}
          </h2>
          <div className="space-y-6 text-left">
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
              {t('paragraph1')}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
              {t('paragraph2')}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
