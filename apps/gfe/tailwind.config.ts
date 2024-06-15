import type { Config } from "tailwindcss";
import { COLORS, COLOR_MAP } from "./types/color";

const colorSafeList = Object.values(COLOR_MAP).map(value => {
  return value
})

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: colorSafeList,
  plugins: [],
};
export default config;
