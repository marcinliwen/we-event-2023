module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        blue: "#006aac",
        green: "#9dc017",
        greenhover: "#c8d42a",
        pink: "#DC368A",
        gray: "#899093",
        bgblue: "#d7e7f4",
        bggray: "#f7f7f7",
        bluelight: "#D8E9F2",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
    container: {
      maxWidth: {
        xl: "1024px",
      },
      maxWidth: {
        xxl: "1024px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1024px",
          },
        },
      });
    },
  ],
};
