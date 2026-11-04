import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { CopyrightYear } from "./copyright-year";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Culture", href: "/culture" },
      { label: "Experiences", href: "/experiences" },
      { label: "Strategy", href: "/strategy" },
      { label: "Studio", href: "/studio" },
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
    <footer className="relative bg-bg-secondary border-t border-border" role="contentinfo">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <span className="text-xl font-bold tracking-[0.15em] uppercase text-text-primary group-hover:text-chrome transition-colors duration-300">
                NNW
              </span>
              <span className="block text-[10px] font-medium tracking-[0.3em] uppercase text-text-muted mt-1">
                Never Not Working®
              </span>
            </Link>
            <p className="mt-6 text-sm text-text-secondary leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-text-muted">
              <p>{siteConfig.footer.contact.email}</p>
              <p>{siteConfig.footer.contact.phone}</p>
              <p>{siteConfig.footer.contact.location}</p>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© <CopyrightYear /> NNW Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {siteConfig.footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-text-secondary transition-colors duration-300"
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
