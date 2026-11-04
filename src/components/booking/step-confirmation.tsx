"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Clock,
  User,
  MapPin,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { BookingConfirmation } from "@/features/booking/types";

interface StepConfirmationProps {
  confirmation: BookingConfirmation;
}

export function StepConfirmation({ confirmation }: StepConfirmationProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(confirmation.referenceId).catch(() => {});
  };

  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border border-silver/30 mb-6">
        <CheckCircle2 className="w-8 h-8 text-silver" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
        Booking Submitted
      </h2>
      <p className="mt-3 text-text-secondary max-w-md mx-auto">
        Your session request has been received. You&rsquo;ll receive a
        confirmation once your booking is reviewed.
      </p>

      {/* Reference */}
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-surface border border-border">
        <span className="text-xs font-medium tracking-[0.1em] uppercase text-text-muted">
          Reference:
        </span>
        <span className="text-sm font-bold text-text-primary tracking-wider">
          {confirmation.referenceId}
        </span>
        <button
          onClick={handleCopy}
          className="text-text-muted hover:text-text-primary transition-colors"
          aria-label="Copy reference ID"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>

      <Badge
        variant="silver"
        size="md"
        className="mt-4 mx-auto flex w-fit"
      >
        {confirmation.status === "pending" ? "Pending Review" : confirmation.status}
      </Badge>

      {/* Details card */}
      <div className="mt-8 max-w-md mx-auto text-left rounded-sm border border-border bg-surface overflow-hidden">
        <div className="p-6 space-y-4">
          <DetailRow
            icon={Calendar}
            label="Date"
            value={formatDateFull(confirmation.date)}
          />
          <DetailRow
            icon={Clock}
            label="Time"
            value={`${confirmation.startTime} – ${confirmation.endTime} (${confirmation.timezone.replace("_", " ")})`}
          />
          <DetailRow icon={User} label="Engineer" value={confirmation.engineer} />
          <DetailRow icon={MapPin} label="Room" value={confirmation.room} />

          <Separator />

          <div className="flex items-start justify-between">
            <span className="text-xs text-text-muted">Service</span>
            <span className="text-sm font-medium text-text-primary">
              {confirmation.service}
            </span>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-xs text-text-muted">Total</span>
            <span className="text-sm font-bold text-text-primary">
              {confirmation.totalFormatted}
            </span>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-xs text-text-muted">Deposit</span>
            <span className="text-sm text-text-secondary">
              {confirmation.depositFormatted}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 bg-surface-elevated">
          <p className="text-xs text-text-muted leading-relaxed">
            Payment is not processed in this demo. In production, your deposit
            will be collected via a secure checkout before final confirmation.
          </p>
        </div>
      </div>

      {/* Next steps */}
      <div className="mt-8 max-w-md mx-auto text-left p-5 rounded-sm border border-border bg-surface">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-3">
          What happens next
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>• Your booking will be reviewed by the NNW team</li>
          <li>• You&rsquo;ll receive a confirmation email when approved</li>
          <li>• Deposit details will be provided before your session</li>
          <li>• Arrive 15 minutes before your session start time</li>
        </ul>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/studio">
          <Button variant="secondary" size="lg">
            Back to Studio
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" size="lg">
            Go Home
          </Button>
        </Link>
      </div>

      <p className="mt-8 text-[10px] text-text-muted/50 tracking-wide">
        Demo booking — no real reservation was created. Server-side booking
        creation, notifications, and dashboard tracking in Phase 4–5.
      </p>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
      <div>
        <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-text-muted">
          {label}
        </p>
        <p className="text-sm text-text-primary mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function formatDateFull(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
