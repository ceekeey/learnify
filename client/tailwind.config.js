/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5", // Indigo Blue
        secondary: "#06B6D4", // Teal / Cyan
        accent: "#A3E635", // Bright Lime Green
        "gray-light": "#F9FAFB", // Light Gray Background
        "gray-dark": "#111827", // Dark Gray Text
        "gray-medium": "#6B7280", // Medium Gray Text
      },
    },
  },
  plugins: [],
};
