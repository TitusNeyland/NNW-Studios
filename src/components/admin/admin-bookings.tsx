"use client";

import { CalendarDays, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function AdminBookings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Bookings
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Review, approve, reschedule, and manage studio reservations.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <Input placeholder="Search bookings..." className="pl-9" />
        </div>
        <Button variant="secondary" size="md">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Status tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map(
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

      {/* Empty state */}
      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <CalendarDays className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No bookings
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Bookings will appear here when customers submit reservations through
          the booking system.
        </p>
        <Badge variant="default" size="md" className="mt-4">
          Firestore integration required
        </Badge>
      </div>
    </div>
  );
}
