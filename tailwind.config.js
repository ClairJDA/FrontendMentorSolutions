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
        publicSans: ["var(--ff-pubulic-sans)", "sans-serif"],
      },
      colors: {
        heading: "var(--dark-blue)",
        paragraph: "var(--grayish-blue)",
        limeGreen: "var(--lime-green)",
        brightCyan: "var(--bright-cyan)",
        lightgray: {
          100: "var(--very-light-gray)",
          200: "var(--light-grayish-blue)",
        }
      },
    },
  },
  plugins: [],
};
