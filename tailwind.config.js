/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(172, 67%, 45%)",
        },
        neutral: {
          "very-dark-cyan": "hsl(183, 100%, 15%)",
          "dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "grayish-cyan": "hsl(184, 14%, 56%)",
          "light-grayish-cyan": "hsl(185, 41%, 84%)",
          "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontSize: {
        input: "24px",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
