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
  for (let i = 1; i <= n; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
}

function formatDateLabel(dateStr: string): {
  day: string;
  date: string;
  month: string;
} {
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
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Select Date &amp; Time
        </h2>
        <p className="mt-2 text-base text-text-secondary/80">
          Find an available slot for your session.
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted/40">
          <Clock className="w-3.5 h-3.5" />
          All times in {STUDIO_TIMEZONE.replace("_", " ")}
        </div>
      </div>

      {/* Date picker */}
      <div>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted/40 mb-3">
          Date
        </p>
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-none">
          {dates.map((dateStr) => {
            const { day, date, month } = formatDateLabel(dateStr);
            const active = dateStr === selectedDate;
            return (
              <button
                key={dateStr}
                onClick={() => onDateChange(dateStr)}
                className={cn(
                  "shrink-0 flex flex-col items-center justify-center w-[76px] h-[92px] rounded-xl border transition-all duration-500",
                  active
                    ? "bg-white border-white shadow-lg shadow-white/10"
                    : "bg-white/90 border-white/60 hover:bg-white hover:shadow-md hover:shadow-white/5"
                )}
                aria-pressed={active}
              >
                <span
                  className={cn(
                    "text-xs font-medium tracking-widest uppercase transition-colors duration-500",
                    active ? "text-neutral-500" : "text-neutral-400"
                  )}
                >
                  {day}
                </span>
                <span
                  className={cn(
                    "text-2xl font-semibold leading-tight mt-0.5 transition-colors duration-500",
                    active ? "text-black" : "text-neutral-600"
                  )}
                >
                  {date}
                </span>
                <span
                  className={cn(
                    "text-xs uppercase transition-colors duration-500",
                    active ? "text-neutral-400" : "text-neutral-400"
                  )}
                >
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
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted/40">
              Available Times
            </p>
            <p className="text-xs text-text-muted/30">
              {formatDateFull(selectedDate)}
            </p>
          </div>

          {slots.length === 0 ? (
            <div className="p-10 rounded-xl bg-white/90 border border-white/60 text-center">
              <AlertCircle className="w-5 h-5 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-neutral-500">
                No availability on this date.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
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
                      "py-3 px-2 rounded-lg border text-center transition-all duration-500",
                      isSelected
                        ? "bg-white border-white shadow-lg shadow-white/10"
                        : slot.available
                          ? "bg-white/90 border-white/60 hover:bg-white hover:shadow-md hover:shadow-white/5"
                          : "bg-white/20 border-white/10 opacity-40 cursor-not-allowed"
                    )}
                    aria-pressed={isSelected}
                    aria-disabled={!slot.available}
                  >
                    <span
                      className={cn(
                        "text-sm font-medium tabular-nums",
                        isSelected
                          ? "text-black"
                          : slot.available
                            ? "text-neutral-600"
                            : "text-neutral-500 line-through"
                      )}
                    >
                      {slot.start}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between">
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
