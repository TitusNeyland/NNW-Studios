import type { Metadata } from "next";
import { AdminClients } from "@/components/admin/admin-clients";

export const metadata: Metadata = { title: "Client Management" };

export default function AdminClientsPage() {
  return <AdminClients />;
}
