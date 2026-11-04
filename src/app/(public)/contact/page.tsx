import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NNW Studios for bookings, inquiries, and collaborations.",
  openGraph: {
    title: "Contact — NNW Studios",
    description:
      "Whether you're looking to book the studio, hire a DJ, or explore a creative partnership — we'd love to hear from you.",
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.footer.contact.email,
    description: "For general inquiries and project discussions.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.footer.contact.phone,
    description: "For urgent or time-sensitive conversations.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.footer.contact.location,
    description: "Studio visits by appointment only.",
  },
];

const quickLinks = [
  {
    title: "Book a Studio Session",
    description: "Reserve recording time directly through our booking system.",
    href: "/studio/book",
  },
  {
    title: "DJ & Event Inquiry",
    description:
      "Looking for a DJ or event production? Submit a detailed inquiry.",
    href: "/experiences#inquire",
  },
  {
    title: "Consulting Inquiry",
    description:
      "Interested in creative strategy or business consulting services.",
    href: "/strategy#inquire",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl">
          <Badge variant="silver" size="md">
            Contact
          </Badge>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
            Let&rsquo;s
            <br />
            <span className="text-chrome-gradient">talk.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            Whether you&rsquo;re looking to book the studio, hire a DJ, or
            explore a creative partnership — we&rsquo;d love to hear from you.
          </p>
        </div>
      </Section>

      {/* ── Contact Methods ── */}
      <Section className="pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.label}
                className="bg-surface p-8 flex flex-col gap-3"
              >
                <Icon className="w-5 h-5 text-silver" strokeWidth={1.5} />
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted">
                  {method.label}
                </p>
                <p className="text-base font-semibold text-text-primary">
                  {method.value}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-[10px] text-text-muted/50 tracking-wide">
          Contact details are placeholders — update through admin CMS.
        </p>
      </Section>

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── Form + Quick Links ── */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form */}
          <div>
            <SectionHeader
              eyebrow="General Inquiry"
              title="Send a message."
              description="Fill out the form below and our team will get back to you within 48 hours."
              className="mb-10"
            />
            <ContactForm />
          </div>

          {/* Quick links */}
          <div>
            <SectionHeader
              eyebrow="Looking for something specific?"
              title="Quick links."
              className="mb-10"
            />
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group block p-6 rounded-sm border border-border bg-surface hover:bg-surface-elevated hover:border-border/80 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide uppercase group-hover:text-chrome transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-silver transition-colors duration-300 shrink-0 mt-0.5" />
                  </div>
                </Link>
              ))}
            </div>

            <Separator className="my-10" />

            {/* Social links */}
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                Follow NNW
              </h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(siteConfig.social).map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase rounded-sm border border-border text-text-muted hover:text-text-primary hover:border-silver/50 transition-colors duration-300"
                  >
                    {name}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-[10px] text-text-muted/50 tracking-wide">
                Social links are placeholders — update through admin CMS.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
