// tailwind.config.ts
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#353535",
        green: "#1A9C9C",
        black: "#1E1E1E",
        lightGreen: "#95E3E3",
        gray: "#818181",
      },

      screens: {
        xs: "450px",
        sm: "650px",
        md: "900px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
} as const;
