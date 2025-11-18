'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  github,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.1,
      }}
      className="h-full"
    >
      <motion.div
        className="group h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 ease-out hover:border-blue-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-600"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {image && (
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="relative h-full w-full">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {title}
          </h3>

          <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((item) => (
              <motion.span
                key={item}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-blue-600"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View Code</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
