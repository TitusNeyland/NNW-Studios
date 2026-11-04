"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MessageSquare,
  PartyPopper,
  Users,
  ArrowRight,
  Mic,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics = [
  {
    label: "Upcoming Sessions",
    value: "—",
    icon: CalendarDays,
    href: "/admin/bookings",
  },
  {
    label: "Pending Bookings",
    value: "—",
    icon: Clock,
    href: "/admin/bookings",
  },
  {
    label: "Open Inquiries",
    value: "—",
    icon: MessageSquare,
    href: "/admin/inquiries",
  },
  {
    label: "Upcoming Events",
    value: "—",
    icon: PartyPopper,
    href: "/admin/events",
  },
];

const quickActions = [
  { label: "Manage Services", href: "/admin/studio", icon: Mic },
  { label: "View Bookings", href: "/admin/bookings", icon: CalendarDays },
  { label: "Manage Events", href: "/admin/events", icon: PartyPopper },
  { label: "View Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { label: "Manage Clients", href: "/admin/clients", icon: Users },
];

export function AdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Operational overview for NNW Studios.
        </p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.label}
              href={m.href}
              className="p-5 rounded-sm border border-border bg-surface hover:bg-surface-elevated transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-4 h-4 text-text-muted" />
                <ArrowRight className="w-3 h-3 text-text-muted/0 group-hover:text-text-muted transition-colors" />
              </div>
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-text-muted mt-1">
                {m.label}
              </p>
            </Link>
          );
        })}
      </div>

      <p className="text-[10px] text-text-muted/50 tracking-wide">
        Metrics will display real data from Firestore when configured. No
        fabricated analytics.
      </p>

      {/* Quick actions */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-3 rounded-sm hover:bg-surface-elevated transition-colors duration-200 group"
              >
                <Icon className="w-4 h-4 text-silver" />
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                  {action.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent activity placeholder */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
          Recent Activity
        </h2>
        <div className="py-8 text-center">
          <Badge variant="default" size="md">
            No recent activity
          </Badge>
          <p className="mt-3 text-sm text-text-muted">
            Booking changes, inquiries, and content updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
