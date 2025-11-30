'use client';

import { motion } from 'framer-motion';
import type { SkillInfo } from '@/data/skills';

interface SkillBadgeProps {
  skill: SkillInfo;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = skill.icon;
  const iconColor = skill.color;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600">
        {IconComponent && (
          <IconComponent className={`text-base shrink-0 ${iconColor}`} />
        )}
        <span>{skill.name}</span>
      </div>
    </motion.div>
  );
}
