const { text } = require('stream/consumers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#f8f8f8",
        xBgColor:"#f4f4f4",
        xBgColorHover:"#ff4b55",
        hashColor:"#3E97ff",
        bgGreenColorButton:"#48b29a",
        dotsColor:"#6b7280",
        dotsHover:"#3E97ff",
        textList:"#1C1C28",
        borderList:"#EAECFO",
        topBorderColor:"#e4e4e4",
        headerBorderColor:"#ecf0f5",
        tableHeaderBg:"#f4f5f7",
        selectBorder:"#efefef",
        selectText:"#333333",
        paginationText:"#7e8299"
      },
      fontFamily: {
        sans: ['Neo Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
}