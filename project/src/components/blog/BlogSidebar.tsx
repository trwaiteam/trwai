import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { blogCategories } from '../../data/blogPosts';

interface BlogSidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function BlogSidebar({ selectedCategory, onCategorySelect }: BlogSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 border border-terminal-green/20 rounded-lg p-6"
    >
      <div className="mb-8">
        <h3 className="text-lg font-bold text-terminal-green mb-4">_POPULAR_POSTS</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 group cursor-pointer"
            >
              <Flame className="w-5 h-5 text-terminal-green mt-1 group-hover:text-terminal-green/80" />
              <div>
                <h4 className="text-white group-hover:text-terminal-green/90 transition-colors">
                  The Future of AI in Business Automation
                </h4>
                <p className="text-sm text-white/40">2.5K views</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-terminal-green mb-4">_CATEGORIES</h3>
        <div className="space-y-2">
          {blogCategories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCategorySelect(selectedCategory === category ? null : category)}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                selectedCategory === category
                  ? 'bg-terminal-green/20 text-terminal-green'
                  : 'text-white/60 hover:bg-terminal-green/10 hover:text-terminal-green/90'
              }`}
            >
              &gt; {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}