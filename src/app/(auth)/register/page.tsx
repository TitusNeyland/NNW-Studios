import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your NNW Studios account.",
};

export default function RegisterPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          Create Account
        </h1>
        <p className="mt-4 text-text-secondary text-sm">
          Registration will be implemented in Phase 4 with Firebase Auth.
        </p>
        <div className="mt-8 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Registration form — Phase 4 implementation.
        </div>
      </div>
    </Section>
  );
}
