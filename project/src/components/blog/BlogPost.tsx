import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article 
      className="group bg-black border border-terminal-green/20 rounded-lg overflow-hidden hover:border-terminal-green/40 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map(category => (
            <span 
              key={category}
              className="text-xs text-terminal-green bg-terminal-green/10 px-2 py-1 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-terminal-green mb-2 group-hover:text-terminal-green/90">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-white/60 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-white/40">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.date), 'MMM d, yyyy')}
            </span>
          </div>
          
          <Link to={`/blog/${post.slug}`}>
            <motion.span
              whileHover={{ x: 5 }}
              className="flex items-center gap-1 text-terminal-green group-hover:text-terminal-green/90"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}