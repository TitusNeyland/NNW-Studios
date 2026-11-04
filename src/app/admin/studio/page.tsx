import type { Metadata } from "next";
import { AdminStudio } from "@/components/admin/admin-studio";

export const metadata: Metadata = { title: "Studio Management" };

export default function AdminStudioPage() {
  return <AdminStudio />;
}
