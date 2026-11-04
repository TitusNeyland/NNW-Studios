"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ArrowRight,
  Mic,
  FolderOpen,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/features/auth/auth-context";

export function DashboardOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          href="/studio/book"
          className="flex items-center gap-3 p-4 rounded-sm border border-border bg-surface hover:bg-surface-elevated transition-colors duration-200 group"
        >
          <Mic className="w-5 h-5 text-silver" />
          <div>
            <p className="text-sm font-semibold tracking-wide uppercase group-hover:text-chrome transition-colors">
              Book a Session
            </p>
            <p className="text-xs text-text-muted">Reserve studio time</p>
          </div>
        </Link>
        <Link
          href="/dashboard/bookings"
          className="flex items-center gap-3 p-4 rounded-sm border border-border bg-surface hover:bg-surface-elevated transition-colors duration-200 group"
        >
          <CalendarDays className="w-5 h-5 text-silver" />
          <div>
            <p className="text-sm font-semibold tracking-wide uppercase group-hover:text-chrome transition-colors">
              My Bookings
            </p>
            <p className="text-xs text-text-muted">View all sessions</p>
          </div>
        </Link>
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 p-4 rounded-sm border border-border bg-surface hover:bg-surface-elevated transition-colors duration-200 group"
        >
          <CreditCard className="w-5 h-5 text-silver" />
          <div>
            <p className="text-sm font-semibold tracking-wide uppercase group-hover:text-chrome transition-colors">
              Account
            </p>
            <p className="text-xs text-text-muted">Manage profile</p>
          </div>
        </Link>
      </div>

      {/* Upcoming session card */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted">
            Next Session
          </h2>
          <Badge variant="default" size="sm">
            No upcoming
          </Badge>
        </div>

        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Clock className="w-8 h-8 text-border mb-3" />
          <p className="text-sm text-text-secondary">
            No upcoming sessions scheduled.
          </p>
          <Link href="/studio/book" className="mt-4">
            <Button variant="primary" size="sm">
              Book a Session
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <p className="text-[10px] text-text-muted/50 text-center mt-4 tracking-wide">
          Session data from Firestore — displayed when bookings exist.
        </p>
      </div>

      {/* Recent activity */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
          Recent Activity
        </h2>
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <FolderOpen className="w-8 h-8 text-border mb-3" />
          <p className="text-sm text-text-secondary">
            No recent activity to display.
          </p>
        </div>
      </div>

      <Separator />

      {/* Account info */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
          Account
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-muted">Email</span>
            <span className="text-text-primary">{user?.email ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Role</span>
            <Badge variant="default" size="sm">
              {user?.role ?? "guest"}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Verified</span>
            <span className="text-text-primary">
              {user?.emailVerified ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
