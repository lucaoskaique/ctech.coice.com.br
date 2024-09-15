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
        section: "6rem",
        "140": "140px"
      },
      transitionDuration: {
        "400": "400ms"
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
        },
        "hover-bg": "var(--btn-hover-color)"
      },
      transitionTimingFunction: {
        "hover-timing": "cubic-bezier(0.3, 0, 0.3, 1)"
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
      },
      keyframes: {
        bubbleOne: {
          "0%": {
            bottom: "-20%",
            right: "-10%",
            opacity: "0",
            transform: "scale(0.3)"
          },
          "50%": {
            bottom: "0",
            right: "0",
            opacity: "1",
            transform: "scale(1.05)"
          },
          "100%": {
            bottom: "0",
            right: "0",
            opacity: "1",
            transform: "scale(1)"
          }
        },
        bubbleTwo: {
          "0%": {
            bottom: "0%",
            left: "-40%",
            opacity: "0",
            transform: "scale(0.25)"
          },
          "50%": {
            bottom: "30%",
            left: "0%",
            opacity: "1",
            transform: "scale(1)"
          },
          "100%": {
            bottom: "30%",
            left: "0%",
            opacity: "1",
            transform: "scale(1)"
          }
        },
        bubbleThree: {
          "0%": {
            bottom: "30%",
            left: "30%",
            opacity: "0",
            transform: "scale(0.35)"
          },
          "50%": {
            bottom: "63%",
            left: "57%",
            opacity: "1",
            transform: "scale(1)"
          },
          "100%": {
            bottom: "63%",
            left: "57%",
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "scale-in": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" }
        },
        "scale-y-in": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" }
        },
        "label-in": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.8)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        rotateText: {
          "0%": {
            transform: "rotate(360deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          }
        }
      },
      animation: {
        "scale-in": "scale-in 0.4s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        "scale-y-in": "scale-y-in 0.4s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        "label-in": "label-in 0.4s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        wave: "play-btn-wave 2s infinite ease-in-out",
        bubbleOne: "bubbleOne 2.5s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        bubbleTwo: "bubbleTwo 1.5s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        bubbleThree: "bubbleThree 2s cubic-bezier(0.3, 0, 0.3, 1) forwards",
        "spin-slow": "rotateText 10s linear infinite"
      },
      opacity: {
        "35": "0.35",
        "31": "0.31",
        "30": "0.30"
      },
      inset: {
        "2.5": "0.625rem"
      }
    }
  },
  variants: {
    extend: {
      scale: ["group-hover", "group-active"],
      animation: ["group-hover", "group-active"]
    }
  },
  plugins: [
    //   function ({ addUtilities }: { addUtilities: any }) {
    //   const newUtilities = {
    //     ".hover-before": {
    //       "&::before": {
    //         content: '""',
    //         position: "absolute",
    //         left: "-1px",
    //         top: "-1px",
    //         width: "calc(100% + 2px)",
    //         height: "calc(100% + 2px)",
    //         borderRadius: "100%",
    //         transition: "all 0.4s cubic-bezier(0.3, 0, 0.3, 1)",
    //         transform: "scale(0)",
    //         background: "#D8FF36",
    //         pointerEvents: "none"
    //       },
    //       "&:hover::before": {
    //         transform: "scale(1)"
    //       }
    //     },
    //   }
    //   addUtilities(newUtilities, ["responsive", "hover"])
    // }
  ]
}

export default config
