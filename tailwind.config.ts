import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(4)",
            opacity: "0",
          },
          "80%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        ripple: "ripple 20s infinite ease-in-out",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        main: "#5e5d5d1a",
      },
    },
  },
  plugins: [],
} satisfies Config;
