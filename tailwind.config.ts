import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#EB5E28",
        orangeLight: "#FAE8E0",
        offWhite: "#FFFCF2",
        grayLight: "#CCC5B9",
        grayExtraLight: "#E4E3E2",
        gray: "#403D39",
        dark: "#252422",
      },
    },
  },
  plugins: [],
};
export default config;
