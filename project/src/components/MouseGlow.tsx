import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update grid patterns visibility
      const gridPattern = document.getElementById('grid-pattern');
      const fineGridPattern = document.getElementById('fine-grid-pattern');
      
      if (gridPattern && fineGridPattern) {
        const maskSize = 300; // Size of the reveal area
        const centerX = e.clientX;
        const centerY = e.clientY;
        
        const gradientMask = `
          radial-gradient(
            circle ${maskSize}px at ${centerX}px ${centerY}px,
            rgba(139, 92, 246, 0.8) 0%,
            rgba(139, 92, 246, 0.5) 20%,
            rgba(139, 92, 246, 0.2) 40%,
            transparent 70%
          )
        `;
        
        gridPattern.style.webkitMask = gradientMask;
        gridPattern.style.mask = gradientMask;
        fineGridPattern.style.webkitMask = gradientMask;
        fineGridPattern.style.mask = gradientMask;
        
        gridPattern.style.opacity = '0.4';
        fineGridPattern.style.opacity = '0.3';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const isInteractive = e.target.closest('button, a, input, .interactive');
        setIsHovering(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', () => setIsHovering(false));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', () => setIsHovering(false));
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.6 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-[300px] h-[300px]">
          {/* Primary glow */}
          <div className="absolute inset-0 rounded-full bg-terminal-purple/25 blur-[45px] animate-pulse" />
          
          {/* Secondary glow */}
          <div className="absolute inset-8 rounded-full bg-terminal-blue/20 blur-[35px] animate-pulse" />
          
          {/* Core glow */}
          <div className="absolute inset-16 rounded-full bg-terminal-purple/15 blur-[25px]" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}