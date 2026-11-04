"use client";

import Link from "next/link";
import { CalendarDays, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingsList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight uppercase">
          My Bookings
        </h2>
        <Link href="/studio/book">
          <Button variant="primary" size="sm">
            New Booking
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {["Upcoming", "Pending", "Past", "Cancelled"].map((tab, i) => (
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

      {/* Empty state */}
      <div className="rounded-sm border border-border bg-surface p-12 text-center">
        <CalendarDays className="w-10 h-10 text-border mx-auto mb-4" />
        <h3 className="text-lg font-bold tracking-tight uppercase mb-2">
          No bookings yet
        </h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto mb-6">
          Your studio sessions will appear here once you book. Sessions are
          loaded from your Firestore booking records.
        </p>
        <Link href="/studio/book">
          <Button variant="primary" size="md">
            Book Your First Session
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>

        <div className="mt-8 p-4 rounded-sm bg-bg-secondary border border-border/50 max-w-md mx-auto">
          <p className="text-[10px] text-text-muted tracking-wide">
            <Clock className="w-3 h-3 inline mr-1" />
            Booking data will be populated from Firestore when Firebase is
            configured and bookings are created through the booking system.
          </p>
        </div>
      </div>
    </div>
  );
}
