import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Book Studio",
  description: "Reserve a recording session at NNW Studios.",
};

export default function BookStudioPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
          Studio Booking
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] uppercase">
          Book a Session
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          The multi-step booking flow will be implemented in Phase 3. Service
          selection, engineer choice, scheduling, and confirmation will appear
          here.
        </p>
        <div className="mt-12 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Booking system coming soon — Phase 3 implementation.
        </div>
      </div>
    </Section>
  );
}
