'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

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
        className="group h-full flex flex-col overflow-hidden rounded-xl border border-blue-200 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300 ease-out hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/30 dark:border-blue-800 dark:bg-blue-950/90 dark:backdrop-blur-sm dark:hover:border-blue-600 dark:hover:shadow-blue-500/40"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {image && (
          <div className="relative aspect-video w-full overflow-hidden bg-blue-50 dark:bg-blue-900">
            <div className="relative h-full w-full">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-blue-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-blue-100 dark:group-hover:text-blue-400">
            {title}
          </h3>

          <p className="mb-4 flex-1 text-blue-900/70 dark:text-blue-200/70 line-clamp-3">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((item) => (
              <motion.span
                key={item}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 dark:group-hover:bg-blue-800/50 dark:group-hover:text-blue-200"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 dark:bg-blue-500 dark:hover:bg-blue-400 dark:hover:shadow-blue-400/50"
          >
            <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>View Code</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
