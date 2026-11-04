export const siteConfig = {
  name: "NNW Studios",
  tagline: "Never Not Working®",
  description:
    "A multidisciplinary creative company operating across music production, entertainment, culture, events, and consulting.",
  url: "https://nnwstudios.com",
  nav: {
    main: [
      { label: "Culture", href: "/culture" },
      { label: "Experiences", href: "/experiences" },
      { label: "Strategy", href: "/strategy" },
      { label: "Studio", href: "/studio" },
    ],
    cta: { label: "Book Studio", href: "/studio/book" },
  },
  social: {
    instagram: "#",
    twitter: "#",
    youtube: "#",
    soundcloud: "#",
    spotify: "#",
  },
  footer: {
    contact: {
      email: "hello@nnwstudios.com",
      phone: "(000) 000-0000",
      location: "City, State",
    },
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;
