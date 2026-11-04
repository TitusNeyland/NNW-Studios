import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { BookingWizard } from "@/components/booking/booking-wizard";

export const metadata: Metadata = {
  title: "Book Studio",
  description:
    "Reserve a recording session at NNW Studios. Select your service, choose an engineer, and find an available time.",
  openGraph: {
    title: "Book a Session — NNW Studios",
    description:
      "Reserve studio time for recording, production, mixing, mastering, or creative sessions.",
  },
};

export default function BookStudioPage() {
  return (
    <Section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <BookingWizard />
    </Section>
  );
}
