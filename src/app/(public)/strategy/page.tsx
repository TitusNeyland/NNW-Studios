import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Strategy",
  description:
    "Creative consulting, brand strategy, artist development, and membership services from NNW Studios.",
};

export default function StrategyPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <SectionHeader
        eyebrow="Strategy"
        title="Ideas need direction."
        description="Creative consulting for artists, brands, and entrepreneurs who are ready to move with intention. Consulting inquiries and membership architecture coming soon."
      />
      <div className="mt-12 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
        Consulting and membership system — Phase 2 build.
      </div>
    </Section>
  );
}
