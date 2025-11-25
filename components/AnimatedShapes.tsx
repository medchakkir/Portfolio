'use client';

import { motion } from 'framer-motion';

export function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border-2 border-blue-400/30 dark:border-blue-500/30 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 right-24 w-16 h-16 border-2 border-purple-400/30 dark:border-purple-500/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-60 right-60 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-600/30 rotate-12"
        animate={{
          rotate: [12, 372, 12],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
}

