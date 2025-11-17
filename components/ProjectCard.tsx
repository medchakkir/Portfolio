"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  slug,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projects/${slug}`}>
        <div className="group h-full rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-gray-700 dark:text-gray-100 dark:group-hover:text-gray-300">
            {title}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

