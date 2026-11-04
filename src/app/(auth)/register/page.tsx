import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your NNW Studios account.",
};

export default function RegisterPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Join NNW Studios to manage bookings and access member features.
          </p>
        </div>
        <RegisterForm />
      </div>
    </Section>
  );
}
