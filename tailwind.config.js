/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#790F22',
          deep: '#4B0918',
          ruby: '#A51D32',
          light: '#8E162B',
        },
        ivory: {
          DEFAULT: '#FFF8ED',
          soft: '#FDF4E3',
          pure: '#FFFCF7',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#DFC082',
          dark: '#9E7B38',
          muted: '#D5B87C',
        },
        champagne: {
          DEFAULT: '#E8D6B5',
          soft: '#F2E5CC',
          deep: '#D8C096',
        },
        emerald: {
          accent: '#315B46',
          deep: '#203F30',
          soft: '#43775D',
        },
        ink: {
          DEFAULT: '#382322',
          muted: '#5E4240',
          light: '#7C5D5B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif Bengali"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', '"Noto Serif Bengali"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
        'bengali-serif': ['"Noto Serif Bengali"', '"Cormorant Garamond"', 'serif'],
        'bengali-sans': ['"Noto Sans Bengali"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 12px 40px -10px rgba(75, 9, 24, 0.12)',
        'royal-lg': '0 20px 50px -12px rgba(75, 9, 24, 0.18)',
        'gold-glow': '0 0 25px rgba(198, 161, 91, 0.25)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

