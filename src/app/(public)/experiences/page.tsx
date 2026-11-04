import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "DJ performances, curated parties, nightlife experiences, and event production by NNW Studios.",
};

export default function ExperiencesPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <SectionHeader
        eyebrow="Experiences"
        title="Moments you remember."
        description="Curated events, DJ performances, and nightlife experiences that set the standard. Event listings and DJ booking inquiries coming soon."
      />
      <div className="mt-12 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
        Events and DJ inquiry system — Phase 2 build.
      </div>
    </Section>
  );
}
