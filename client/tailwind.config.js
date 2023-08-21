/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#f0f3f5",
        textColor: "#414549",
        darkHover: "#bdc1c6",
        borderDark: "#bdc1c6",
        subtitleText: "#80868b",
      },
    },
  },
  plugins: [],
};
