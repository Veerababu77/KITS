/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KITS Brand Palette
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#E8EDF4",
          100: "#C5D1E5",
          200: "#9AAECE",
          300: "#6F8BB7",
          400: "#4D6FA1",
          500: "#2B538B",
          600: "#1A3D6E",
          700: "#0B1F3A",
          800: "#081629",
          900: "#040C18",
        },
        royal: {
          DEFAULT: "#174EA6",
          50: "#EBF0FB",
          100: "#C4D3F4",
          200: "#9DB6ED",
          300: "#7699E6",
          400: "#4F7CDF",
          500: "#2860D8",
          600: "#174EA6",
          700: "#123D82",
          800: "#0D2D5F",
          900: "#071C3B",
        },
        gold: {
          DEFAULT: "#D6A84F",
          50: "#FBF5E8",
          100: "#F4E5C3",
          200: "#EDD49E",
          300: "#E6C479",
          400: "#DFB354",
          500: "#D6A84F",
          600: "#C4923A",
          700: "#A87C2F",
          800: "#8C6624",
          900: "#705019",
        },
        background: "#FAFAF7",
        "light-blue": "#F1F5FA",
        "primary-text": "#172033",
        "secondary-text": "#64748B",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        nav: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "hero-md": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-xl": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-lg": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        premium: "0 4px 24px -4px rgba(11,31,58,0.12), 0 2px 8px -2px rgba(11,31,58,0.08)",
        "premium-lg": "0 8px 40px -8px rgba(11,31,58,0.18), 0 4px 16px -4px rgba(11,31,58,0.1)",
        gold: "0 4px 24px -4px rgba(214,168,79,0.3)",
        "card-hover": "0 12px 48px -8px rgba(11,31,58,0.2)",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0B1F3A 0%, #174EA6 100%)",
        "gradient-gold": "linear-gradient(135deg, #D6A84F 0%, #C4923A 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(11,31,58,0.7) 0%, rgba(11,31,58,0.3) 50%, rgba(11,31,58,0.6) 100%)",
      },
      borderColor: {
        gold: "#D6A84F",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "premium-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
