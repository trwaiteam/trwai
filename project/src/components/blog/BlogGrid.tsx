import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from './BlogPost';
import { blogPosts } from '../../data/blogPosts';

interface BlogGridProps {
  searchQuery: string;
  selectedCategory: string | null;
  currentPage: number;
}

export function BlogGrid({ searchQuery, selectedCategory, currentPage }: BlogGridProps) {
  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(post => 
      !selectedCategory || post.categories.includes(selectedCategory)
    );

  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayedPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="animate-float"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <BlogPost post={post} />
        </motion.div>
      ))}
    </div>
  );
}