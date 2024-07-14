import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }: PluginAPI) {
  addUtilities({
    ".my-rotate-y-180": { transform: "rotateY(180deg)" },
    ".transition-transform": { transition: "transform 0.6s" },
    ".preserve-3d": { transformStyle: "preserve-3d" },
    ".perspective": { perspective: "1000px" },
    ".backface-hidden": { backfaceVisibility: "hidden" },
  });
});
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-cream-100": "#dae6e4",
        "custom-cream-200": "#f7ddb9ec",
        "custom-cream-300": "#ffcab0",
        "custom-pink": "#ead6ee",
        "custom-purple": "#9fa5d5",
        "custom-blue": "#c5e8fb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-b-custom":
          "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-strong":
          "4px 4px 15px rgba(0, 0, 0, 0.3), 6px 6px 30px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [Myclass],
};
export default config;
