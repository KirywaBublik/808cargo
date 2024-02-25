/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "rgba(236, 70, 33)",
        btnHover: "rgba(190, 70, 33)",
        borderInput: "rgb(92, 108, 123)",
        bgInput: "rgb(9, 14, 35)",
        bgInputHover: "rgb(9, 14, 25)",
      },
    },
  },
  plugins: [],
};
