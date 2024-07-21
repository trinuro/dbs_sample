import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        honeycomb: "url('/honeycomb.png')",
        dunSketch: "url('/footer-img.png')",
      },
      colors: {
          yellow : {
            sarawak : '#FCD106',
            dbsYellow : '#FFCA11'
          },
          red : {
            sarawak : '#CE1126'
          },
          black : {
            sarawak : '#000000'
          }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      fontFamily: {
        hightide: ['var(--font-hightide)'],
        leagueSpartan: ['var(--font-league)'],
        horta: ['var(--font-horta)']
      }
    },
  },
  plugins: [],
};
export default config;
