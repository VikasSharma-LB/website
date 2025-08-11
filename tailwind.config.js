/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#6D7791",
        primary: "#194EFF",
        secondary: "#00020F",
        blue: "#050A24",
       
      },
       backgroundImage: {
        blueGraient:
          "linear-gradient(335deg,rgba(25, 78, 255, 0.2) 0%, rgba(25, 78, 255, 0.11) 69%, rgba(25, 78, 255, 1) 100%)",
          blueGraient2:"linear-gradient(295deg,rgba(25, 78, 255, 0.5) 0%, rgba(25, 78, 255, 0.1) 69%, rgba(25, 78, 255, 0) 100%)"
      },
   dropShadow: {
    blue: '0 4px 15px #0D37BD',
  },
  animation: {
    rotate: 'rotate 4s linear infinite',
  },
  keyframes: {
    rotate: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  
    },
  },
  plugins: [],
};
