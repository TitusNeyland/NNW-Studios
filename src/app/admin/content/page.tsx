import type { Metadata } from "next";
import { AdminContent } from "@/components/admin/admin-content";

export const metadata: Metadata = { title: "Content Management" };

export default function AdminContentPage() {
  return <AdminContent />;
}
