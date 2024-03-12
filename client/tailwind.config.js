/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "rgba(236, 70, 33)",
        btnHover: "rgba(190, 70, 33)",
        borderInput: "rgb(92, 108, 123)",
        grayBorder: "rgb(237, 240, 243)",
        bgInput: "rgb(9, 14, 35)",
        bgInputHover: "rgb(9, 14, 25)",
        bg: "rgb(18, 29, 80)",
        about: "rgb(14, 51, 203)",
        blueVideo: "rgb(31, 69, 228)",
        bgReviews: "rgb(237, 240, 243)",
        testBg: "rgb(29, 73, 138)",
      },
    },
  },
  plugins: [],
};
