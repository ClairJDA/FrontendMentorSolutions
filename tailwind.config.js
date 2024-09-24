/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["var(--font-overpass)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
      },
      colors: {
      },
    },
  },
  plugins: [],
};
