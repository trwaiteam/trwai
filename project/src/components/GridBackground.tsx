import React from 'react';

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main grid pattern */}
      <div 
        className="absolute inset-0"
        id="grid-pattern"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.2,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Finer grid pattern */}
      <div 
        className="absolute inset-0"
        id="fine-grid-pattern"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          opacity: 0.15,
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}