import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from NNW Studios.",
};

export default function EventsPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <SectionHeader
        eyebrow="Events"
        title="What's happening."
        description="Upcoming and past events. Event listings, RSVP, and ticket links will be managed through the NNW CMS."
      />
      <div className="mt-12 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
        Event listing and detail pages — Phase 2 build.
      </div>
    </Section>
  );
}
