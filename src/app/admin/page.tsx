import type { Metadata } from "next";
import { AdminOverview } from "@/components/admin/admin-overview";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "NNW Studios administration overview.",
};

export default function AdminPage() {
  return <AdminOverview />;
}
