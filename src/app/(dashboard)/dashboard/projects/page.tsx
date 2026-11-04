import type { Metadata } from "next";
import { ProjectsList } from "@/components/dashboard/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "View your NNW Studios projects and deliverables.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
