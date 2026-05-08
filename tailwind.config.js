/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './404.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#00d4ff',
        accent2: '#7c3aed',
        accent3: '#10b981',
        accent4: '#f59e0b',
        accent5: '#ef4444',
        ink: { 950: '#05070d', 900: '#0a0e1a', 800: '#111827', 700: '#1f2937' },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse at top, rgba(0,212,255,0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.18), transparent 60%)',
      },
    },
  },
  plugins: [],
};
