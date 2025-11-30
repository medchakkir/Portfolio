'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  image,
  index = 0,
}: ProjectCardProps) {
  const hasImage = Boolean(image);
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
        className="group h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md transition-all duration-300 ease-out hover:border-gray-400 dark:hover:border-gray-600"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gray-50 dark:bg-gray-700">
          {hasImage ? (
            <>
              <div className="relative h-full w-full">
                <Image src={image!} alt={title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FaProjectDiagram className="h-12 w-12 text-gray-400 dark:text-gray-500" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
            {title}
          </h3>

          <p className="mb-4 flex-1 text-gray-700 dark:text-gray-300 line-clamp-3">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((item) => (
              <motion.span
                key={item}
                className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col justify-between sm:flex-row gap-3">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 px-4 py-2.5 text-sm font-semibold text-white dark:text-gray-900 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:shadow-gray-100/50 w-full sm:w-auto"
            >
              <FaGithub className="h-5 w-5 transition-transform duration-300" />
              <span>View Code</span>
            </Link>
            {demo && (
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 dark:border-gray-100 bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 w-full sm:w-auto"
              >
                <VscGlobe className="h-5 w-5 transition-transform duration-300" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
