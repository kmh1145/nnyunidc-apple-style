import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066cc",
          focus: "#0071e3",
          "on-dark": "#2997ff",
        },
        ink: {
          DEFAULT: "#1d1d1f",
          "muted-80": "#333333",
          "muted-48": "#7a7a7a",
        },
        body: {
          muted: "#cccccc",
          "on-dark": "#ffffff",
        },
        canvas: {
          DEFAULT: "#ffffff",
          parchment: "#f5f5f7",
        },
        surface: {
          pearl: "#fafafc",
          "tile-1": "#272729",
          "tile-2": "#2a2a2c",
          "tile-3": "#252527",
          black: "#000000",
          "chip-translucent": "#d2d2d7",
        },
        on: {
          primary: "#ffffff",
          dark: "#ffffff",
        },
        divider: {
          soft: "#f0f0f0",
        },
        hairline: "#e0e0e0",
      },
      fontFamily: {
        display: [
          "SF Pro Display",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        text: [
          "SF Pro Text",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      borderRadius: {
        xs: "5px",
        sm: "8px",
        md: "11px",
        lg: "18px",
        pill: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "17px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "80px",
      },
      fontSize: {
        "hero-display": [
          "56px",
          { lineHeight: "1.07", letterSpacing: "-0.28px", fontWeight: "600" },
        ],
        "display-lg": [
          "40px",
          { lineHeight: "1.10", letterSpacing: "0", fontWeight: "600" },
        ],
        "display-md": [
          "34px",
          { lineHeight: "1.47", letterSpacing: "-0.374px", fontWeight: "600" },
        ],
        lead: [
          "28px",
          { lineHeight: "1.14", letterSpacing: "0.196px", fontWeight: "400" },
        ],
        "lead-airy": [
          "24px",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "300" },
        ],
        tagline: [
          "21px",
          { lineHeight: "1.19", letterSpacing: "0.231px", fontWeight: "600" },
        ],
        "body-strong": [
          "17px",
          { lineHeight: "1.24", letterSpacing: "-0.374px", fontWeight: "600" },
        ],
        body: [
          "17px",
          { lineHeight: "1.47", letterSpacing: "-0.374px", fontWeight: "400" },
        ],
        caption: [
          "14px",
          { lineHeight: "1.43", letterSpacing: "-0.224px", fontWeight: "400" },
        ],
        "caption-strong": [
          "14px",
          { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "600" },
        ],
        "button-large": [
          "18px",
          { lineHeight: "1.0", letterSpacing: "0", fontWeight: "300" },
        ],
        "button-utility": [
          "14px",
          { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "400" },
        ],
        "fine-print": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "-0.12px", fontWeight: "400" },
        ],
        "nav-link": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "-0.12px", fontWeight: "400" },
        ],
      },
      boxShadow: {
        product: "0 3px 30px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
