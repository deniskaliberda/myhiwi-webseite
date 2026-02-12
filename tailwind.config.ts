import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#0f172a',
        },
        secondary: {
          DEFAULT: '#f8fafc',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        cta: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        cyan: {
          DEFAULT: '#06b6d4',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
