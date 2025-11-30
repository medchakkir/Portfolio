'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SkillBadge } from '@/components/SkillBadge';
import { skills } from '@/data/skills';
import { getCategoryIcon, getCategoryGradient } from '@/utils/skillIcons';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden bg-white dark:bg-gray-900 bg-pattern-dots"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Skills & Technologies
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category.category);
            const categoryGradient = getCategoryGradient(category.category);
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.4, delay: categoryIndex * 0.1 },
                  y: { duration: 0.4, delay: categoryIndex * 0.1 },
                  scale: { duration: 0.2, ease: 'easeOut' },
                  default: { duration: 0.2, ease: 'easeOut' },
                }}
                className="group h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500"
              >
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border border-gray-200/70 dark:border-gray-600/70 bg-linear-to-br ${categoryGradient} p-3 text-white shadow-lg`}
                    >
                      <CategoryIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                        Category
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
