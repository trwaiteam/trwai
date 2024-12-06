import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function ThreeJSRing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[600px] h-[600px] animate-spin-slow">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="absolute inset-2 bg-black rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full transform rotate-45" />
      </div>
    </motion.div>
  );
}