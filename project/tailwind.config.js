/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scan': 'scan 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse': 'pulse 10s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'flicker': 'flicker 0.5s ease-in-out infinite',
        'rotate-slow': 'rotate 15s linear infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blur-in': 'blur-in 0.5s ease-out forwards',
        'scale-fade': 'scale-fade 0.3s ease-out',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(2px)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 1px)' },
          '66%': { transform: 'translate(2px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 0 rgba(139, 92, 246, 0)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            transform: 'scale(1.02)'
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'blur-in': {
          '0%': { filter: 'blur(5px)', opacity: 0 },
          '100%': { filter: 'blur(0)', opacity: 1 },
        },
        'scale-fade': {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        terminal: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          green: '#8B5CF6',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            h1: {
              color: '#8B5CF6',
            },
            h2: {
              color: '#8B5CF6',
            },
            h3: {
              color: '#8B5CF6',
            },
            h4: {
              color: '#8B5CF6',
            },
            strong: {
              color: 'white',
            },
            blockquote: {
              color: 'white',
              borderLeftColor: '#8B5CF6',
            },
            code: {
              color: '#8B5CF6',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            a: {
              color: '#8B5CF6',
              '&:hover': {
                color: '#7C3AED',
              },
            },
            li: {
              color: 'white',
            },
            'ul > li::marker': {
              color: '#8B5CF6',
            },
            'ol > li::marker': {
              color: '#8B5CF6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};