/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", '@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: ["dracula", "cymk"],
  },
};
