import type { Metadata } from "next";
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
    <div className="min-h-screen pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 lg:px-20">
      <BookingWizard />
    </div>
  );
}
