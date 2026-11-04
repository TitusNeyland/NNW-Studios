import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CopyrightYear } from "./copyright-year";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Culture", href: "/culture" },
      { label: "Experiences", href: "/experiences" },
      { label: "Strategy", href: "/strategy" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book Studio", href: "/studio/book" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: siteConfig.social.instagram },
      { label: "Twitter / X", href: siteConfig.social.twitter },
      { label: "YouTube", href: siteConfig.social.youtube },
      { label: "SoundCloud", href: siteConfig.social.soundcloud },
      { label: "Spotify", href: siteConfig.social.spotify },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative bg-bg-secondary border-t border-white/[0.04]"
      role="contentinfo"
    >
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto">
        {/* Main footer content */}
        <div className="py-20 md:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <span className="text-lg font-bold tracking-[0.2em] uppercase text-text-primary group-hover:text-chrome transition-colors duration-500">
                NNW
              </span>
              <span className="block text-[9px] font-medium tracking-[0.35em] uppercase text-text-muted/50 mt-1.5">
                Never Not Working®
              </span>
            </Link>
            <p className="mt-8 text-[13px] text-text-secondary/80 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-8 space-y-2 text-[13px] text-text-muted/70">
              <p>{siteConfig.footer.contact.email}</p>
              <p>{siteConfig.footer.contact.phone}</p>
              <p>{siteConfig.footer.contact.location}</p>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-text-muted/50 mb-7">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-text-secondary/70 hover:text-text-primary transition-colors duration-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-muted/40 tracking-wide">
          <p>
            © <CopyrightYear /> NNW Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-text-muted transition-colors duration-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
