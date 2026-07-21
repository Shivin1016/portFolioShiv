/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#050816',
        bgCard: 'rgba(255, 255, 255, 0.05)',
        accentPurple: '#6C63FF',
        accentCyan: '#00E5FF',
        accentPink: '#FF4D9E',
        accentYellow: '#FFB703',
        accentViolet: '#8A2BE2',
        accentGreen: '#00FFB3',
        accentGold: '#FFD166',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
        'hero-gradient': 'linear-gradient(135deg, #6C63FF 0%, #00E5FF 50%, #FF4D9E 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'glowing': 'glowing 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowing: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(108, 99, 255, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(0, 229, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
