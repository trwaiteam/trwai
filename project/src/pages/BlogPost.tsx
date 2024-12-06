import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Header } from '../components/Header';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-terminal-green mb-4">404: Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-terminal-green hover:text-terminal-green/80 transition-colors"
          >
            &lt; Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Remove the title from the content since we're displaying it in the header
  const contentWithoutTitle = post.content.replace(/^#\s.*$/m, '').trim();

  return (
    <div className="min-h-screen bg-black font-mono">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-terminal-green hover:text-terminal-green/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Post Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map(category => (
                <span
                  key={category}
                  className="text-sm text-terminal-green bg-terminal-green/10 px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-terminal-green mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), 'MMM d, yyyy')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-terminal-green prose-p:text-white prose-strong:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white prose-a:text-terminal-green hover:prose-a:text-terminal-green/80">
            <ReactMarkdown>{contentWithoutTitle}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-sm text-white/80 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}