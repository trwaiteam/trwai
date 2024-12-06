import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-mono">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Terminal className="w-16 h-16 mx-auto mb-8 text-terminal-green animate-pulse" />
          
          <h1 className="text-[80px] md:text-[120px] font-bold tracking-tighter text-white mb-8 leading-none animate-glitch">
            <TypewriterText text="TRW.AI" />
            <span className="text-terminal-green animate-blink">_</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-2xl md:text-3xl text-terminal-green font-bold tracking-tight">
              <TypewriterText text="SUPERCHARGE YOUR BUSINESS WITH AI" delay={0.3} />
            </h2>
            
            <p className="text-lg text-white/60 font-mono leading-relaxed">
              <TypewriterText 
                text="&gt; Discover AI automation solutions that accelerate growth," 
                delay={0.6}
              />
              <br />
              <TypewriterText 
                text="&gt; reduce costs, and maximize efficiency." 
                delay={0.9}
              />
            </p>

            <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate('/start')}
                className="bg-terminal-green text-black px-8 py-3 hover:bg-terminal-green/90 transition-colors font-bold tracking-wider"
              >
                &gt;_START
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Blur Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] z-20 bg-gradient-to-b from-transparent via-black/80 to-black/80 backdrop-blur-sm pointer-events-none" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none z-10" />
    </section>
  );
}