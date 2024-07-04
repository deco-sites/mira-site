import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  darkMode: "class",
  theme: {
    colors: {
      "main": "#FFBC4E",
      "sub": "#FF8352",
      "b-200": "#FCF0D0",
      "b-300": "#FFF8E6",
      "black": "#000000",
      "white": "#FFFFFF",
    },
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
};
