import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'OPENAI', logo: 'openai' },
  { name: 'AWS', logo: 'aws' },
  { name: 'NVIDIA', logo: 'nvidia' },
  { name: 'MICROSOFT', logo: 'microsoft' },
];

export function Partners() {
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-white/60 text-sm tracking-wider mb-8">
          TRUSTED BY LEADING INNOVATORS
        </h3>
        <div className="grid grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 bg-white/10 rounded-lg" />
              <span className="text-white/60 text-sm tracking-wider">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}