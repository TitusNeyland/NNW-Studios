import type { Metadata } from "next";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your NNW Studios client dashboard.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
