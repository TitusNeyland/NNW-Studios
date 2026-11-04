import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Admin",
  description: "NNW Studios administration dashboard.",
};

export default function AdminPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          Administration
        </h1>
        <p className="mt-4 text-text-secondary text-sm">
          Admin CMS will be implemented in Phase 6 — studio management, content
          editing, scheduling, inquiries, and client management.
        </p>
        <div className="mt-8 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Admin dashboard — Phase 6 implementation.
        </div>
      </div>
    </Section>
  );
}
