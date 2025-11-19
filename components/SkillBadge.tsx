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
      <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-blue-100 text-blue-900 border border-blue-300 hover:bg-blue-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
        {renderSkillIcon(skill)}
        <span>{skill}</span>
      </div>
    </motion.div>
  );
}
