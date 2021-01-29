module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: [
    "./src/components/body.js",
    "./src/components/contact.js",
    "./src/components/footer.js",
    "./src/components/gallery.js",
    "./src/components/header.js",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
