/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Include all component and page files
    "./public/**/*.html" // Optional: Static HTML files in the public folder
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
