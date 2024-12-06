import React from 'react';
import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Purple gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full"
      >
        <div className="absolute w-[1000px] h-[1000px] bg-terminal-purple/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse opacity-70" />
      </motion.div>

      {/* Blue gradient */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
      >
        <div className="absolute w-[1000px] h-[1000px] bg-terminal-blue/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse opacity-70" />
      </motion.div>

      {/* Center glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[800px] h-[800px] bg-terminal-purple/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse opacity-60" />
      </motion.div>

      {/* Additional ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-terminal-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-terminal-purple/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
    </div>
  );
}