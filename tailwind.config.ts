import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      xl: "1280px",
      xlf: "1300px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cabin: "var(--font-cabin)",
        outfit: "var(--font-outfit)",
      },
    },
  },
  plugins: [],
} satisfies Config;
