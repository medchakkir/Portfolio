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
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="h-full rounded-lg border border-blue-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 dark:border-blue-800 dark:bg-blue-950/90 dark:backdrop-blur-sm dark:hover:shadow-blue-500/30">
        <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
          {title}
        </h3>
        <p className="text-blue-900/70 dark:text-blue-200/70">{description}</p>
      </div>
    </motion.div>
  );
}

