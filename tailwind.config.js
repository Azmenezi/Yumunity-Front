/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-image": "url('../src/media/homeImg.jpg')",
        "burger-image": "url('../src/media/burger.jpg')",
        "pasta-image": "url('../src/media/pasta.jpg')",
        "pizza-image": "url('../src/media/pizza.jpg')",
      },
    },
  },
  plugins: [],
};
