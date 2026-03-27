import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ enables future dark mode

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      /* ───────── FONT SYSTEM ───────── */
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },

      /* ───────── DESIGN TOKENS (CONNECTED TO CSS) ───────── */
      colors: {
        /* BACKGROUND */
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          dark: "var(--bg-dark)",
          card: "var(--bg-card)",
        },

        /* TEXT */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
        },

        /* BORDER */
        border: {
          light: "var(--border-light)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },

        /* ACCENT */
        accent: {
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
        },

        /* OPTIONAL STATIC COLORS (KEEPING YOURS) */
        navy: {
          950: "#030712",
          900: "#0A0F1E",
          800: "#0F172A",
          700: "#1E293B",
        },

        brand: {
          green: "#1f8476",
          light: "#81b5a1",
        },
      },

      /* ───────── SHADOW SYSTEM ───────── */
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      /* ───────── ANIMATIONS ───────── */
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      /* ───────── BORDER RADIUS (CONSISTENCY) ───────── */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};

export default config;