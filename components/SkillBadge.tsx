'use client';

import { motion } from 'framer-motion';
import { getSkillIcon } from '@/utils/skillIcons';

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

function renderSkillIcon(skill: string) {
  const IconComponent = getSkillIcon(skill);
  return <IconComponent className="text-base flex-shrink-0" />;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-neutral-800 text-gray-200 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-200 shadow-sm hover:shadow-md">
        {renderSkillIcon(skill)}
        <span>{skill}</span>
      </div>
    </motion.div>
  );
}
