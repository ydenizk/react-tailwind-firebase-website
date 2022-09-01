/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        288: "72rem,",
        364: "91rem",
        420: "105rem",
        440: "110rem",
        480: "120rem",
        560: "140rem",
        592: "148rem",
        760: "190rem",
        552: "138rem",
        720: "180rem",
        580: "145rem",
        896: "224rem",
        1152: "288rem",
      },
      height: {
        444: "111rem",
        448: "112rem",
        492: "123rem",
        496: "124rem",
        212: "53rem",
        216: "54rem",
        288: "72rem",
        332: "83rem",
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
        noto: ["Noto Serif HK", "serif"],
        bodoni: ['Libre Bodoni', "serif"]
      },
    },
  },
  plugins: [],
};
