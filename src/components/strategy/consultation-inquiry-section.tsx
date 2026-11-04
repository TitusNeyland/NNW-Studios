"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { ConsultationForm } from "@/components/forms/consultation-form";

export function ConsultationInquirySection() {
  return (
    <Section id="inquire" className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Get Started"
            title="Start a conversation."
            description="Tell us about your project, goals, and timeline. We'll follow up to explore how we can help."
          />

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-2">
                Our process
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Initial inquiry review within 48 hours</li>
                <li>• Discovery call to understand your needs</li>
                <li>• Custom proposal with scope and timeline</li>
                <li>• Flexible engagement structures</li>
              </ul>
            </div>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </Section>
  );
}
