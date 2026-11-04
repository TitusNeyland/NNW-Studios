"use client";

import { useState } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type {
  BookingFormData,
  BookableService,
  Engineer,
  StudioRoom,
} from "@/features/booking/types";
import {
  formatCurrency,
  formatDuration,
  STUDIO_TIMEZONE,
} from "@/features/booking/mock-data";

interface StepReviewProps {
  formData: BookingFormData;
  service: BookableService;
  engineer: Engineer | null;
  room: StudioRoom | null;
  onBack: () => void;
  onConfirm: () => Promise<void>;
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

export function StepReview({
  formData,
  service,
  engineer,
  room,
  onBack,
  onConfirm,
}: StepReviewProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleConfirm = async () => {
    setSubmitting(true);
    try {
      await onConfirm();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
        Review Your Booking
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Please review all details before confirming your reservation.
      </p>

      <div className="mt-8 rounded-sm border border-border bg-surface overflow-hidden">
        {/* Session details */}
        <div className="p-6 space-y-4">
          <ReviewRow label="Service" value={service.name} />
          <ReviewRow
            label="Duration"
            value={formatDuration(service.durationMinutes)}
          />
          <ReviewRow
            label="Engineer"
            value={
              formData.engineerPreference === "first-available"
                ? "First Available"
                : engineer?.name ?? "—"
            }
          />
          <ReviewRow
            label="Room"
            value={room?.name ?? "Assigned at check-in"}
          />
        </div>

        <Separator />

        {/* Date & time */}
        <div className="p-6 space-y-4">
          <ReviewRow
            label="Date"
            value={formData.date ? formatDateFull(formData.date) : "—"}
          />
          <ReviewRow
            label="Time"
            value={
              formData.timeSlot
                ? `${formData.timeSlot.start} – ${formData.timeSlot.end}`
                : "—"
            }
          />
          <ReviewRow
            label="Timezone"
            value={STUDIO_TIMEZONE.replace("_", " ")}
          />
        </div>

        <Separator />

        {/* Customer */}
        <div className="p-6 space-y-4">
          <ReviewRow label="Name" value={formData.customerName} />
          <ReviewRow label="Email" value={formData.customerEmail} />
          {formData.customerPhone && (
            <ReviewRow label="Phone" value={formData.customerPhone} />
          )}
          {formData.artistName && (
            <ReviewRow label="Artist / Project" value={formData.artistName} />
          )}
          {formData.projectNotes && (
            <ReviewRow label="Notes" value={formData.projectNotes} />
          )}
        </div>

        <Separator />

        {/* Pricing */}
        <div className="p-6 space-y-4 bg-surface-elevated">
          <ReviewRow
            label="Session Total"
            value={formatCurrency(service.priceMinorUnits)}
            bold
          />
          <ReviewRow
            label="Deposit Required"
            value={formatCurrency(service.depositMinorUnits)}
          />
          <p className="text-[10px] text-text-muted">
            Payment integration deferred — no charge will be processed in this
            demo. In production, deposits are collected via Stripe before
            confirmation.
          </p>
        </div>
      </div>

      {/* Cancellation note */}
      <div className="mt-4 p-4 rounded-sm border border-border bg-surface flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-medium text-text-secondary">
            Cancellation & Rescheduling
          </p>
          <p className="text-[10px] text-text-muted mt-1 leading-relaxed">
            Policies are configured by NNW administration and will be enforced
            upon booking confirmation. A calendar selection is not a confirmed
            reservation until validated server-side.
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" size="md" onClick={onBack} disabled={submitting}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handleConfirm}
          disabled={submitting}
        >
          {submitting ? "Confirming..." : "Confirm Booking"}
        </Button>
      </div>

      <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
        Demo confirmation — server-side validation, atomic holds, and payment
        processing implemented in Phase 4.
      </p>
    </div>
  );
}

function ReviewRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs font-medium tracking-[0.1em] uppercase text-text-muted shrink-0">
        {label}
      </span>
      <span
        className={`text-sm text-right ${bold ? "font-bold text-text-primary" : "text-text-secondary"}`}
      >
        {value}
      </span>
    </div>
  );
}
