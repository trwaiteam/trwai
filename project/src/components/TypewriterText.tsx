import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

export function TypewriterText({ text, delay = 0, className = '', speed = 50 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [inView, text, delay, speed]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayedText}
      {inView && displayedText.length < text.length && (
        <span className="animate-blink">_</span>
      )}
    </motion.span>
  );
}