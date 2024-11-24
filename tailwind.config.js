module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}" // Adjust to your file structure
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#374151", // Set default text colour
            a: {
              color: "#1d4ed8", // Link colour
              textDecoration: "none",
              "&:hover": {
                color: "#9333ea" // Hover colour for links
              }
            },
            h1: { color: "#1f2937" }, // Heading colours
            h2: { color: "#374151" },
            h3: { color: "#4b5563" }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
