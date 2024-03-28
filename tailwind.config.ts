import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        DEFAULT: "100%",
        sm: "960px ",
        lg: "1140px ",
        xl: "1320px ",
        "2xl": "1600px",
      },
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        lg: "10px",
        xl: "10px",
        "2xl": "10px",
      },
    },

    extend: {
      screens: {
        desktop: { max: "1799px" },
        // => @media (max-width: 1799px) { ... }
        laptop: { max: "1200px" },
        // => @media (min-width: 1280px) { ... }
        tab: { max: "991px" },
        // => @media (max-width: 991px) { ... }
        mob: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        smMob: { max: "575px" },
        // => @media (max-width: 575px) { ... }
        xmob: { max: "480px" },
        // => @media (max-width: 480px) { ... }
        xsmob: { max: "425px" },
        // => @media (max-width: 425px) { ... }
        medium: { min: "992px", max: "1240px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
        "4xl": "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      },
    },
  },
  plugins: [],
};
export default config;
