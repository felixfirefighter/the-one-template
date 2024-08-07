import type { Config } from 'tailwindcss'
import { COLOR_MAP } from './src/types/color'

const colorSafeList = Object.values(COLOR_MAP).map((value) => {
  return value
})

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: colorSafeList,
  plugins: [],
  theme: {
    extend: {
      boxShadowColor: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      width: {
        85: '21.25rem', 
        90: '22.5rem', // 360
        98: '24.5rem', // 392
      },
      height: { // /4
        69: '17.25rem',
        75: '18.75rem', // 300
        85: '21.25rem',
        98: '24.5rem',
        100: '25rem',
        145: '36.25rem',
      },
      padding: {
        '4.5': '1.125rem',
      },
    },
  },
}
export default config
