import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your NNW Studios account.",
};

export default function LoginPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Sign In</h1>
        <p className="mt-4 text-text-secondary text-sm">
          Authentication will be implemented in Phase 4 with Firebase Auth.
        </p>
        <div className="mt-8 p-8 rounded-sm border border-border bg-surface text-sm text-text-muted">
          Sign-in form — Phase 4 implementation.
        </div>
      </div>
    </Section>
  );
}
