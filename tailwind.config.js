/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        364: "91rem",
        420: "105rem",

        480: "120rem",
        560: "140rem",
        760: "190rem",
        552: "138rem",
        720: "180rem",
        1152: "288rem",
      },
      height: {
        496: "124rem",
        212: "53rem",
        360: "90rem",
        536: "134rem",
        552: "138rem",
        540: "135rem",
        580: "145rem",
        664: "166rem",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        roboto: ["Roboto"],
        dosis: ["Dosis", "sans - serif"],
      },
    },
  },
  plugins: [],
};
