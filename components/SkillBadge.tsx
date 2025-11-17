"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        {skill}
      </span>
    </motion.div>
  );
}

