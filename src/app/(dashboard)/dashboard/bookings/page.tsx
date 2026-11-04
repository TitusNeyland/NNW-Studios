import type { Metadata } from "next";
import { BookingsList } from "@/components/dashboard/bookings-list";

export const metadata: Metadata = {
  title: "My Bookings",
  description: "View and manage your NNW Studios bookings.",
};

export default function BookingsPage() {
  return <BookingsList />;
}
