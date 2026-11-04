import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your NNW Studios client dashboard.",
};

export default function DashboardPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Dashboard</h1>
        <p className="mt-4 text-text-secondary text-sm">
          Client dashboard will be implemented in Phase 5 — bookings, projects,
          profile management, and membership details.
        </p>
        <div className="mt-8 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Client dashboard — Phase 5 implementation.
        </div>
      </div>
    </Section>
  );
}
