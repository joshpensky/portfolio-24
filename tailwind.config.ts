import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

const hoverPlugin = plugin(({ addVariant }) => {
  addVariant("supports-hover", "@media (hover: hover)");
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        background: "#F2EDE5",
        foreground: "#373D35",
        action: "#5CA052",
      },

      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [hoverPlugin],
};
export default config;
