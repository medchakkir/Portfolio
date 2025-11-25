'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';

interface AchievementCardProps {
  title: string;
  description: string;
  date?: string;
  verificationUrl?: string;
  icon?: string;
  index?: number;
}

const iconMap: Record<string, typeof FaGraduationCap> = {
  graduation: FaGraduationCap,
  certificate: FaCertificate,
  briefcase: FaBriefcase,
};

export function AchievementCard({
  title,
  description,
  date,
  verificationUrl,
  icon,
  index = 0,
}: AchievementCardProps) {
  const IconComponent = icon ? iconMap[icon] || FaCertificate : FaCertificate;
  const CardContent = (
    <>
      <div className="mb-4 flex items-center gap-3">
        <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        {date && (
          <span className="rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
            {date}
          </span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      {verificationUrl && (
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
          View Certificate →
        </span>
      )}
    </>
  );

  const cardClasses =
    'h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:shadow-gray-500/20 dark:hover:shadow-gray-700/20 transition-all duration-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {verificationUrl ? (
        <Link
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClasses} block cursor-pointer`}
        >
          {CardContent}
        </Link>
      ) : (
        <div className={cardClasses}>{CardContent}</div>
      )}
    </motion.div>
  );
}
