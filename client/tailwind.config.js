/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#6366F1',
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#3B82F6',
        },
        background: {
          light: '#F8FAFC',
          dark: '#0F172A',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
}
