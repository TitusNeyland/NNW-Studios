import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NNW Studios for bookings, inquiries, and collaborations.",
};

export default function ContactPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk."
            description="Whether you're looking to book the studio, hire a DJ, or explore a creative partnership — we'd love to hear from you."
          />

          <div className="mt-12 space-y-4 text-sm text-text-secondary">
            <p>
              <span className="text-text-muted text-xs tracking-[0.15em] uppercase block mb-1">
                Email
              </span>
              {siteConfig.footer.contact.email}
            </p>
            <p>
              <span className="text-text-muted text-xs tracking-[0.15em] uppercase block mb-1">
                Phone
              </span>
              {siteConfig.footer.contact.phone}
            </p>
            <p>
              <span className="text-text-muted text-xs tracking-[0.15em] uppercase block mb-1">
                Location
              </span>
              {siteConfig.footer.contact.location}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Contact form with validation coming in Phase 2. Fields will include
          name, email, subject, and message — submissions stored in Firestore
          with admin notification.
        </div>
      </div>
    </Section>
  );
}
