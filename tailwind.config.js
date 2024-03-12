/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          secondary: {
            DEFAULT: colors.neutral[200],
            hover: colors.neutral[300],
            border: colors.neutral[400],
            dark: colors.neutral[500],
            ["dark-hover"]: colors.neutral[900],
          },
        },
      },
    },
  },
  plugins: [],
};
