import type { Metadata } from "next";
import { AdminEvents } from "@/components/admin/admin-events";

export const metadata: Metadata = { title: "Events Management" };

export default function AdminEventsPage() {
  return <AdminEvents />;
}
