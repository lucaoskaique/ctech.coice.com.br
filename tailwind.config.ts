import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px"
        }
      },
      maxWidth: {
        container: "1318px",
        "container-lg": "1338px",
        "container-xl": "1368px"
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"]
      },
      padding: {
        container: "4.5rem",
        section: "6rem"
      },
      colors: {
        primary: "var(--theme-color)",
        secondary: "hsl(var(--secondary))",
        background: "var(--theme-bg-color)",
        "background-secondary": "hsl(var(--background-secondary))",
        highlight: "hsl(var(--highlight))",
        lightColor: "hsl(var(--light))",
        darkColor: "hsl(var(--dark))",
        text: "var(--text-color)",
        heading: "var(--heading-color)",
        btn: "var(--btn-color)",
        "btn-hover": "var(--btn-hover-color)",
        intro: "var(--intro-color)",
        "intro-subtitle": "var(--intro-subtitle-color)",
        "intro-bread": "var(--intro-bread-color)",
        preloader: {
          bg: "var(--preloader-bg-color)",
          figure: "var(--preloader-color)"
        }
      },
      fontSize: {
        base: "var(--text-font-size)",
        h1: "var(--heading-font-size)",
        h2: "var(--heading2-font-size)",
        h3: "var(--heading3-font-size)",
        h4: "var(--heading4-font-size)",
        h5: "var(--heading5-font-size)",
        h6: "var(--heading6-font-size)",
        btn: "var(--btn-font-size)"
      },
      fontWeight: {
        normal: "var(--text-font-weight)",
        heading: "var(--heading-font-weight)",
        heading2: "var(--heading2-font-weight)",
        heading3: "var(--heading3-font-weight)",
        heading4: "var(--heading4-font-weight)",
        heading5: "var(--heading5-font-weight)",
        heading6: "var(--heading6-font-weight)",
        btn: "var(--btn-font-weight)"
      },
      letterSpacing: {
        heading: "var(--heading-letter-spacing)",
        heading2: "var(--heading2-letter-spacing)",
        heading3: "var(--heading3-letter-spacing)",
        heading4: "var(--heading4-letter-spacing)",
        heading5: "var(--heading5-letter-spacing)",
        heading6: "var(--heading6-letter-spacing)",
        text: "var(--text-letter-spacing)",
        btn: "var(--btn-letter-spacing)"
      },
      lineHeight: {
        text: "var(--text-line-height)"
      },
      borderRadius: {
        btn: "var(--btn-border-radius)"
      },
      textTransform: {
        heading: "var(--heading-font-transform)",
        heading2: "var(--heading2-font-transform)",
        heading3: "var(--heading3-font-transform)",
        heading4: "var(--heading4-font-transform)",
        heading5: "var(--heading5-font-transform)",
        heading6: "var(--heading6-font-transform)",
        btn: "var(--btn-font-transform)"
      }
    }
  },
  plugins: []
}

export default config
