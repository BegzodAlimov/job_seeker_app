import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      "font-family": ["General Sans", "sans-serif"],
      "second-family": ["Inter", "sans-serif"],
      "third-family": ["Nunito Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "custom-shadow": "32px 64px 64px 0 rgba(158, 150, 150, 0.08)",
      },
      colors: {
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },

        // background: "#f9f9f9",
        "primary-10": "#4864E1",
        "bg-input": "rgba(255, 255, 255, 0.12)",
        secondary: "#021638",
        success: "#00c566",
        error: "#ff4747",
        warning: "#facc15",
        orange: "#ff7d57",
        line: "#e3e7ec",
        gray: "#f9f9fb",
        "grayscale-10": "#f2f2f7",
        "grayscale-20": "#d1d1d6",
        "grayscale-30": "#c7c7cc",
        "grayscale-40": "#aeaeb2",
        "grayscale-50": "#8e8e93",
        "grayscale-60": "#636366",
        "grayscale-70": "#48484a",
        "grayscale-80": "#3a3a3c",
        "grayscale-90": "#2c2c2e",
        "grayscale-100": "#1c1c1e",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
