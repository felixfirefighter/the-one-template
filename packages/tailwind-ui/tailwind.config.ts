import type { Config } from "tailwindcss";
import { COLOR_MAP } from "./src/types/color";

const colorSafeList = Object.values(COLOR_MAP).map(value => {
  return value
})

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: colorSafeList,
  plugins: [],
};
export default config;
