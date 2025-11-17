"use client";

import { motion } from "framer-motion";

interface AchievementCardProps {
  title: string;
  description: string;
  index?: number;
}

export function AchievementCard({
  title,
  description,
  index = 0,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

