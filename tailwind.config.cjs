const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        times: ["Times New Roman", "serif"],
      },
      colors: {
        beige: "#FFE5D5",
        terracotta: "#E9A191",
        brown: "#A07350",
        mint: "#C1DBC4",
        tea: "#A8D2D2",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
