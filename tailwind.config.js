/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== Brand ===== */
        brand: "#0ea5a4",
        "brand-strong": "#0b8b89",
        "brand-medium": "#2dd4bf",

        /* ===== Neutral (Backgrounds) ===== */
        "neutral-primary-soft": "#ffffff",
        "neutral-secondary-medium": "#f3f4f6",
        "neutral-tertiary-medium": "#e5e7eb",

        /* ===== Text ===== */
        body: "#374151",      // gray-700
        heading: "#111827",   // gray-900
        "fg-danger": "#dc2626",

        /* ===== Border ===== */
        "border-default": "#e5e7eb",
        "border-default-medium": "#d1d5db",
      },

      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
      },

      borderRadius: {
        base: "0.5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
