"use client";

import { PartyPopper, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AdminEvents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Events
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Create, edit, and publish events. Manage RSVPs and DJ inquiries.
          </p>
        </div>
        <Button variant="primary" size="md">
          <Plus className="w-4 h-4" />
          New Event
        </Button>
      </div>

      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <PartyPopper className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No events
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Create your first event. Published events will appear on the public
          events page and individual event detail pages.
        </p>
        <Badge variant="default" size="md" className="mt-4">
          CRUD with Firestore + Storage
        </Badge>
      </div>
    </div>
  );
}
