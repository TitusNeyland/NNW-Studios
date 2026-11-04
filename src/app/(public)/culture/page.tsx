import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Stories, creative expression, artist spotlights, and the ideas that drive the work at NNW Studios.",
};

export default function CulturePage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <SectionHeader
        eyebrow="Culture"
        title="Stories worth telling."
        description="Creative expression, artist spotlights, editorial content, and the ideas that drive the work. Content will be managed through the NNW CMS."
      />
      <div className="mt-12 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
        Editorial content system — Phase 2 build.
      </div>
    </Section>
  );
}
