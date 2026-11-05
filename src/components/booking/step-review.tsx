"use client";

import { useState } from "react";
import { ArrowLeft, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Review Your Booking
        </h2>
        <p className="mt-2 text-base text-text-secondary/80">
          Please confirm all details before submitting.
        </p>
      </div>

      <div className="rounded-2xl bg-white overflow-hidden shadow-lg shadow-white/5">
        {/* Session */}
        <ReviewSection title="Session">
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
        </ReviewSection>

        <div className="h-px bg-neutral-100 mx-6" />

        {/* Schedule */}
        <ReviewSection title="Schedule">
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
        </ReviewSection>

        <div className="h-px bg-neutral-100 mx-6" />

        {/* Contact */}
        <ReviewSection title="Contact">
          <ReviewRow label="Name" value={formData.customerName} />
          <ReviewRow label="Email" value={formData.customerEmail} />
          {formData.customerPhone && (
            <ReviewRow label="Phone" value={formData.customerPhone} />
          )}
          {formData.artistName && (
            <ReviewRow
              label="Artist / Project"
              value={formData.artistName}
            />
          )}
          {formData.projectNotes && (
            <ReviewRow label="Notes" value={formData.projectNotes} />
          )}
          {formData.sessionFiles && formData.sessionFiles.length > 0 && (
            <div className="pt-1">
              <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400 block mb-2">
                Session Files
              </span>
              <div className="space-y-1">
                {formData.sessionFiles.map((file, i) => (
                  <div
                    key={`${file.name}-${i}`}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <Music className="w-3 h-3 text-neutral-300 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ReviewSection>

        <div className="h-px bg-neutral-100 mx-6" />

        {/* Pricing */}
        <div className="p-6 bg-neutral-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-neutral-500">Session Total</span>
            <span className="text-xl font-bold text-black tabular-nums">
              {formatCurrency(service.priceMinorUnits)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400">
              Deposit Required
            </span>
            <span className="text-sm text-neutral-500 tabular-nums">
              {formatCurrency(service.depositMinorUnits)}
            </span>
          </div>
          <p className="mt-4 text-xs text-neutral-300 leading-relaxed">
            Payment integration deferred — no charge will be processed. In
            production, deposits are collected via Stripe before confirmation.
          </p>
        </div>
      </div>

      {/* Policy note */}
      <div className="mt-4 p-4 rounded-xl bg-white/90 border border-white/60">
        <p className="text-xs text-neutral-400 leading-relaxed">
          <span className="font-semibold text-neutral-500">
            Cancellation &amp; Rescheduling —{" "}
          </span>
          Policies are configured by NNW administration and enforced upon
          booking confirmation.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          size="md"
          onClick={onBack}
          disabled={submitting}
        >
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
    </div>
  );
}

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <span className="text-sm text-neutral-400 shrink-0">{label}</span>
      <span className="text-sm text-black text-right font-medium">
        {value}
      </span>
    </div>
  );
}
