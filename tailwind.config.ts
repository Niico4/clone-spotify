import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      textColor: {
        primary: '#ffffff',
        secondary: '#b3b3b3',
      },

      backgroundColor: {
        primary: '#121212',
        secondary: '#1f1f1f',
        overlay: 'hsla(0, 0%, 100%, 0.1)',
      },

      colors: {
        brand: { green: '#1ed760' },
      },
    },
  },
  plugins: [],
} satisfies Config;
