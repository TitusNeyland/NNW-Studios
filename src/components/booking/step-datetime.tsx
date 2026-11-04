"use client";

import { useMemo } from "react";
import { ArrowLeft, ArrowRight, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { BookableService, TimeSlot } from "@/features/booking/types";
import {
  generateMockSlots,
  STUDIO_TIMEZONE,
} from "@/features/booking/mock-data";

interface StepDatetimeProps {
  service: BookableService;
  engineerId: string | null;
  selectedDate: string;
  selectedSlot: TimeSlot | null;
  onDateChange: (d: string) => void;
  onSlotSelect: (s: TimeSlot) => void;
  onBack: () => void;
  onNext: () => void;
}

function getNextNDays(n: number): string[] {
  const days: string[] = [];
  const now = new Date();
  // Start from tomorrow (minimum notice)
  for (let i = 1; i <= n; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
}

function formatDateLabel(dateStr: string): { day: string; date: string; month: string } {
  const d = new Date(dateStr + "T12:00:00");
  return {
    day: d.toLocaleDateString("en-US", { weekday: "short" }),
    date: d.getDate().toString(),
    month: d.toLocaleDateString("en-US", { month: "short" }),
  };
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

export function StepDatetime({
  service,
  engineerId,
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotSelect,
  onBack,
  onNext,
}: StepDatetimeProps) {
  const dates = useMemo(() => getNextNDays(14), []);

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    return generateMockSlots(
      `${selectedDate}-${engineerId ?? "any"}`,
      service.durationMinutes
    );
  }, [selectedDate, engineerId, service.durationMinutes]);

  const canContinue = selectedDate && selectedSlot;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
        Select Date & Time
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Choose an available date and time for your session.
      </p>

      <div className="mt-2 flex items-center gap-1.5 text-xs text-text-muted">
        <Clock className="w-3.5 h-3.5" />
        All times shown in {STUDIO_TIMEZONE.replace("_", " ")}
      </div>

      {/* Date picker — horizontal scroll */}
      <div className="mt-8">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-3">
          Date
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
          {dates.map((dateStr) => {
            const { day, date, month } = formatDateLabel(dateStr);
            const active = dateStr === selectedDate;
            return (
              <button
                key={dateStr}
                onClick={() => onDateChange(dateStr)}
                className={cn(
                  "shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-sm border transition-all duration-300",
                  active
                    ? "border-silver bg-surface-elevated ring-1 ring-silver/30"
                    : "border-border bg-surface hover:border-border/80"
                )}
                aria-pressed={active}
              >
                <span className="text-[10px] font-medium tracking-wider uppercase text-text-muted">
                  {day}
                </span>
                <span
                  className={cn(
                    "text-lg font-bold",
                    active ? "text-text-primary" : "text-text-secondary"
                  )}
                >
                  {date}
                </span>
                <span className="text-[10px] text-text-muted uppercase">
                  {month}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="mt-8">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-1">
            Available Times — {formatDateFull(selectedDate)}
          </p>
          <p className="text-[10px] text-text-muted/60 mb-4">
            {service.durationMinutes / 60}-hour sessions
          </p>

          {slots.length === 0 ? (
            <div className="p-8 rounded-sm border border-border bg-surface text-center">
              <AlertCircle className="w-6 h-6 text-text-muted mx-auto mb-2" />
              <p className="text-sm text-text-muted">
                No availability on this date. Please select another day.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {slots.map((slot) => {
                const isSelected =
                  selectedSlot?.start === slot.start &&
                  selectedSlot?.end === slot.end;
                return (
                  <button
                    key={slot.start}
                    onClick={() => slot.available && onSlotSelect(slot)}
                    disabled={!slot.available}
                    className={cn(
                      "py-3 px-4 rounded-sm border text-center text-sm font-medium transition-all duration-300",
                      isSelected
                        ? "border-silver bg-surface-elevated ring-1 ring-silver/30 text-text-primary"
                        : slot.available
                          ? "border-border bg-surface text-text-secondary hover:border-border/80 hover:bg-surface-elevated"
                          : "border-border/50 bg-bg-secondary text-text-muted/40 cursor-not-allowed line-through"
                    )}
                    aria-pressed={isSelected}
                    aria-disabled={!slot.available}
                  >
                    {slot.start}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <p className="mt-4 text-[10px] text-text-muted/50 tracking-wide">
        Mock availability shown — real availability computed from engineer
        schedules, room bookings, buffers, and blackout dates in Phase 4.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" size="md" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          variant="primary"
          size="lg"
          disabled={!canContinue}
          onClick={onNext}
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
