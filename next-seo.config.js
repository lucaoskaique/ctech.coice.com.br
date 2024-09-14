/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: "%s | DevTech",
  defaultTitle: "Innovative Software Solutions | DevTech",
  description:
    "DevTech is a leading company in developing innovative software solutions for various industries.",
  canonical: "https://devtech.com/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devtech.com",
    siteName: "DevTech",
    title: "Innovative Software Solutions",
    description:
      "DevTech is a leading company in developing innovative software solutions for various industries.",
    images: [
      {
        url: "https://devtech.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevTech | Innovative Software Solutions",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    handle: "@devtech",
    site: "@devtech",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "theme-color",
      content: "#000000"
    }
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    },
    {
      rel: "manifest",
      href: "/manifest.json"
    },
    {
      rel: "privacy-policy",
      href: "/privacy-policy"
    }
  ]
}
