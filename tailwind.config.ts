import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate"; // npm i tailwindcss-animate -D

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        body: ["Outfit", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Custom portfolio colors
        surface: "#1A1A1A",
        primaryAction: "#C4813D",
        secondaryAction: "#D4C4B0",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up-alt": {
          from: { opacity: "0", transform: "translateY(25px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "fade-up-alt": "fade-up-alt 0.7s ease-out forwards",
        "slide-in": "slide-in 0.7s ease forwards",
        "scale-in": "scale-in 0.6s ease forwards",
        "stat-grow": "stat-grow 1.2s ease-out forwards",
        "fade-anim": "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [animatePlugin],
};
