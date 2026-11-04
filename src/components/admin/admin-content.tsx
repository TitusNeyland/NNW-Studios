"use client";

import { Newspaper, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AdminContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Content
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Create and manage editorial articles, media, and Culture page
            content.
          </p>
        </div>
        <Button variant="primary" size="md">
          <Plus className="w-4 h-4" />
          New Article
        </Button>
      </div>

      {/* Status tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {["All", "Published", "Draft", "Archived"].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase rounded-sm transition-colors whitespace-nowrap ${
              i === 0
                ? "bg-surface-elevated text-text-primary border border-border"
                : "text-text-muted hover:text-text-primary hover:bg-surface"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <Newspaper className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No articles
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Create articles with the editor. Published content appears on the
          Culture page. Supports featured images, categories, tags, and SEO
          metadata.
        </p>
        <Badge variant="default" size="md" className="mt-4">
          Rich editor + Firestore + Storage
        </Badge>
      </div>
    </div>
  );
}
