/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1s .2s linear infinite",
        "bounce-medium": "bounce 1s .4s linear infinite",
        "bounce-fast": "bounce 1s .6s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
