/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    " ./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#16FF00",
        "custom-yellow": "#FFD371",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
