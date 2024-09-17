/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "var(--soft-red)",
        yellow: "var(--yellow)",
        white: "var(--white)",
        cyan:{
          100: "var(--dark-desaturated-cyan-graphic-design-text)",
          200: "var(--dark-moderate-cyan-footer)",
          300: "var(--dark-blue-photography-text)",
        },
        gray:{
          100: "var(--very-dark-desaturated-blue)",
          200: "var(--very-dark-grayish-blue)",
          300: "var(--dark-grayish-blue)",
          400: "var(--grayish-blue)",
        }
      },
    },
  },
  plugins: [],
};
