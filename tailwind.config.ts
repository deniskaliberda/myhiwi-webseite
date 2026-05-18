import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // shadcn/ui CSS variable colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Legacy MyHiwi colors (kept untouched for existing pages)
        navy: {
          950: "#0a0f1a",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        cyan: {
          500: "#06b6d4",
        },
        // ============================================
        // MyHiwi Redesign 2026 — DESIGN.md tokens
        // Namespaced under `mh` to avoid collisions
        // with the legacy palette above. Semantic
        // tokens (mh.accent, mh.bg, …) read CSS vars
        // defined in app/globals.css so we can theme-
        // switch atlantik ↔ calm via data-theme.
        // ============================================
        mh: {
          // raw palette (theme-independent)
          ink: {
            950: "#0F172A",
            900: "#0F172A",
            800: "#1E293B",
            700: "#334155",
          },
          blue: {
            400: "#3B82F6",
            500: "#2563EB",
            600: "#1E40AF",
          },
          cyan: {
            500: "#06B6D4",
          },
          paper: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#475569",
          warn: "#F59E0B",
          success: "#10B981",
          // calm scheme raw values (FeWo voicing)
          calm: {
            paper: "#F6F2EA",
            subtle: "#EDE7DA",
            ink: "#1F2A2A",
            muted: "#5A5E55",
            border: "rgba(31,42,42,0.12)",
            "portrait-warm-1": "#F5EDE0",
            "portrait-warm-2": "#D4B896",
          },
          // ============================================
          // Semantic role tokens — theme-switchable via
          // CSS channel-triplet variables. The `<alpha-value>`
          // pattern makes `bg-mh-accent/10` etc. work.
          // ============================================
          bg: "rgb(var(--mh-bg-c) / <alpha-value>)",
          surface: "rgb(var(--mh-surface-c) / <alpha-value>)",
          "surface-card": "rgb(var(--mh-card-c) / <alpha-value>)",
          text: {
            DEFAULT: "rgb(var(--mh-text-primary-c) / <alpha-value>)",
            primary: "rgb(var(--mh-text-primary-c) / <alpha-value>)",
            secondary: "rgb(var(--mh-text-secondary-c) / <alpha-value>)",
            "on-dark": "rgb(var(--mh-text-on-dark-c) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "rgb(var(--mh-accent-c) / <alpha-value>)",
            hover: "rgb(var(--mh-accent-hover-c) / <alpha-value>)",
          },
          "accent-soft": "var(--mh-accent-soft)",
          glow: "rgb(var(--mh-glow-c) / <alpha-value>)",
          divider: "var(--mh-divider)",
          danger: "rgb(var(--mh-danger-c) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // MyHiwi Redesign 2026
        "mh-sm": "4px",
        "mh-md": "8px",
        "mh-lg": "12px",
        "mh-xl": "16px",
        "mh-pill": "9999px",
      },
      fontFamily: {
        // Legacy fonts (kept for existing pages)
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        // MyHiwi Redesign 2026 — DESIGN.md typography
        "mh-display": [
          "var(--font-bricolage)",
          "system-ui",
          "sans-serif",
        ],
        "mh-body": [
          "var(--font-inter-tight)",
          "system-ui",
          "sans-serif",
        ],
        "mh-mono": [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "monospace",
        ],
        "mh-serif": [
          "var(--font-instrument-serif)",
          "Georgia",
          "serif",
        ],
      },
      spacing: {
        // MyHiwi Redesign 2026 — DESIGN.md spacing scale
        // (additive; default Tailwind spacing remains usable)
        "mh-1": "4px",
        "mh-2": "8px",
        "mh-3": "12px",
        "mh-4": "16px",
        "mh-5": "22px",
        "mh-6": "32px",
        "mh-7": "48px",
        "mh-8": "64px",
        "mh-9": "100px",
        "mh-10": "120px",
        "mh-11": "140px",
        "mh-section-sm-m": "56px",
        "mh-section-lg-m": "64px",
      },
      maxWidth: {
        "mh-container": "1240px",
        "mh-text": "64ch",
      },
      boxShadow: {
        // MyHiwi Redesign 2026
        "mh-card": "0 1px 0 rgba(15,23,42,0.04)",
        "mh-hover": "0 12px 28px -10px rgba(37,99,235,0.30)",
        "mh-cta": "0 14px 30px -14px rgba(37,99,235,0.66)",
        "mh-hero": "0 30px 80px -30px rgba(15,23,42,0.30)",
      },
      transitionTimingFunction: {
        "mh-default": "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      transitionDuration: {
        "mh-fast": "200ms",
        "mh-medium": "350ms",
        "mh-slow": "900ms",
      },
      letterSpacing: {
        "mh-display-tight": "-0.035em",
        "mh-display": "-0.025em",
        "mh-mono": "0.18em",
        "mh-mono-sm": "0.14em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
