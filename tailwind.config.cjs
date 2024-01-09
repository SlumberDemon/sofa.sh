const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        rampart: ["RampartOne"],
        libre: ["LibreBarcode39Text"],
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-glow-red": {
          "text-shadow": "0 0 10px rgba(225, 30, 72, 0.7)",
        },
      });
    }),
  ],
};
