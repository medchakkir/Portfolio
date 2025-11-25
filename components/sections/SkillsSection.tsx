'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SkillBadge } from '@/components/SkillBadge';
import { skills } from '@/data/skills';
import { getCategoryIcon } from '@/utils/skillIcons';

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white dark:bg-gray-900 bg-pattern-dots">
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
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  opacity: { duration: 0.4, delay: categoryIndex * 0.1 },
                  y: { duration: 0.4, delay: categoryIndex * 0.1 },
                  scale: { duration: 0.2, ease: 'easeOut' },
                  default: { duration: 0.2, ease: 'easeOut' }
                }}
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
  );
}
