import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0A12',
        textRegular: '#8283a5',
        textHighlight: '#B3B6CD',
        sample: '#282844',
        sampleBorder: '#3F3755',
        input: '#b9b9d0',
    },
    fontFamily: {
      font: ['Inria-Serif'],
    },
    },
  },
  plugins: [],
};
export default config;
