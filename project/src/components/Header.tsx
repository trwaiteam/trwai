import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm font-mono">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate('/')}
            className="text-terminal-green text-xl tracking-wider font-bold cursor-pointer"
          >
            &gt;_TRW.AI
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/blog"
              className="text-terminal-green hover:text-terminal-green/80 transition-colors tracking-wider text-sm font-bold"
            >
              &gt;_BLOG
            </Link>
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate('/start')}
              className="bg-terminal-green text-black px-6 py-2 hover:bg-terminal-green/90 transition-colors font-bold tracking-wider"
            >
              &gt;_START
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
}