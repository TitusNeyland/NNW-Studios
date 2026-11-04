"use client";

import { FolderOpen } from "lucide-react";

export function ProjectsList() {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight uppercase mb-6">
        Projects
      </h2>

      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <FolderOpen className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No projects yet
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Project deliverables, updates, and files from your NNW collaborations
          will appear here. Projects are assigned by the NNW team.
        </p>
      </div>
    </div>
  );
}
