import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BlogSearch } from '../components/blog/BlogSearch';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { BlogPagination } from '../components/blog/BlogPagination';
import { motion } from 'framer-motion';

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black font-mono">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-terminal-green mb-2">_BLOG</h1>
          <p className="text-white/60 mb-8">&gt; Insights on AI Automation and Innovation</p>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <BlogSearch 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
              <BlogGrid 
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                currentPage={currentPage}
              />
              <BlogPagination 
                currentPage={currentPage}
                totalPages={5}
                onPageChange={setCurrentPage}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-80">
              <BlogSidebar 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}