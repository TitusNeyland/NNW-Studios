"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { DjInquiryForm } from "@/components/forms/dj-inquiry-form";

export function DjInquirySection() {
  return (
    <Section id="inquire" className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Book NNW"
            title="Hire a DJ."
            description="Looking for a DJ or event production partner? Fill out the inquiry form and our team will follow up with availability and details."
          />

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-2">
                What to expect
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• We respond to inquiries within 48 hours</li>
                <li>• Custom quotes based on your event details</li>
                <li>• Flexible performance durations and formats</li>
                <li>• Full production and sound support available</li>
              </ul>
            </div>
          </div>
        </div>

        <DjInquiryForm />
      </div>
    </Section>
  );
}
