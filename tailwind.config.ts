import type { Config } from "tailwindcss";

/**
 * JST Construction design tokens.
 * Palette derived from the official JST logo:
 *   - Slate  #33414F  (logo road / building)
 *   - Gold   #E3A92B  (logo bridge arch / ring)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: {
          950: "#0D1318",
          900: "#141C23",
          800: "#1C2731",
          700: "#26333F",
          600: "#33414F", // logo slate
          500: "#4A5866",
        },
        gold: {
          300: "#F2CE7A",
          400: "#EBBB4E",
          500: "#E3A92B", // logo gold
          600: "#C48D17",
          700: "#9A6E12",
        },
        concrete: {
          50: "#FAF9F6",
          100: "#F4F2EE",
          200: "#E8E4DD",
          300: "#D6D0C6",
          400: "#A8A39A",
          500: "#7C7870",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5.2vw + 0.6rem, 4.75rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3vw + 0.8rem, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 1.4vw + 1rem, 2.125rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        site: "80rem",
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
