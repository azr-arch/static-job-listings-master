/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: "870px",
      lg: "1400px",
    },
    fontSize: {
      base: "15px",
      md: "18px",
      md2: "21px",
    },
    extend: {
      colors: {
        primary: {
          "dd-cyan": "hsl(180, 29%, 50%)",
        },
        neutral: {
          "lg-cyan-bg": "hsl(180, 52%, 96%)",
          "lg-cyan-ft": "hsl(180, 31%, 95%)",
          "dg-cyan": "hsl(180, 8%, 52%)",
          "vdg-cyan": "hsl(180, 14%, 20%)",
        },
      },
      backgroundImage: {
        "header-mobile": "url('bg-patterns/bg-header-mobile.svg')",
        "header-desktop": "url('bg-patterns/bg-header-desktop.svg')",
      },
      boxShadow: {
        lt: "0px 0px 4px 1px rgba(0,0,0,0.15)",
      },
    },
  },
  variants: {
    extend: {
      left_border: ["hover"],
    },
  },
  plugins: [],
};
