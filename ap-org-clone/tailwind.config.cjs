const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(), "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        orange: "#d14015",
        navy: "#0f172a",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
