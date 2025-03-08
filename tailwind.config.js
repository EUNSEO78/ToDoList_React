/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    md: "960px",
    // => @media (min-width: 960px) { ... }
    extend: {
      colors: {
        myCustomColor: "#282c37",
        myCustomColor1: "#1d1d1f",
        myWidgetBg: "rgba(255, 255, 255, 0.322)",
        myWeatherWidgetBg: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
