import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogSearch({ searchQuery, onSearchChange }: BlogSearchProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-terminal-green/60 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-black/50 border border-terminal-green/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terminal-green/60 transition-colors"
        />
      </div>
    </motion.div>
  );
}