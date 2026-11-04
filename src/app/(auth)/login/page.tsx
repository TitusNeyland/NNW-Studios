import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your NNW Studios account.",
};

export default function LoginPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            Sign In
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Access your bookings, projects, and account.
          </p>
        </div>
        <LoginForm />
      </div>
    </Section>
  );
}
