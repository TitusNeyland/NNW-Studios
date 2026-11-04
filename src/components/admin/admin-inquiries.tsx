"use client";

import { MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AdminInquiries() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Inquiries
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Review and manage DJ booking inquiries, consultation requests, and
          general contact submissions.
        </p>
      </div>

      {/* Type tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {["All", "DJ Inquiries", "Consulting", "Contact", "New", "Closed"].map(
          (tab, i) => (
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
          )
        )}
      </div>

      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <MessageSquare className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No inquiries
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Inquiries from the DJ booking form, consultation form, and contact
          form will appear here with status tracking.
        </p>
        <Badge variant="default" size="md" className="mt-4">
          Stored in Firestore collections
        </Badge>
      </div>
    </div>
  );
}
