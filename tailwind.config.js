/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 150ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        slideDown: {
          from: { height: 0, opacity: 0 },
          to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
          to: { height: 0, opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
