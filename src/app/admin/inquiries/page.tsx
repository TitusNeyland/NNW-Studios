import type { Metadata } from "next";
import { AdminInquiries } from "@/components/admin/admin-inquiries";

export const metadata: Metadata = { title: "Inquiries" };

export default function AdminInquiriesPage() {
  return <AdminInquiries />;
}
