"use client";

import { Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function AdminClients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Clients
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Authorized client lookup, booking histories, project assignments,
          membership status, and internal notes.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <Input placeholder="Search clients by name or email..." className="pl-9" />
      </div>

      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <Users className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No clients
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Client records are created when users register or complete bookings.
          View booking history, projects, membership status, and add internal
          notes.
        </p>
        <Badge variant="default" size="md" className="mt-4">
          User records from Firebase Auth + Firestore
        </Badge>
      </div>
    </div>
  );
}
