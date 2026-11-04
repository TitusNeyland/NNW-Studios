"use client";

import { cn } from "@/lib/utils";
import { BOOKING_STEPS, type BookingStep } from "@/features/booking/types";
import { Check } from "lucide-react";

interface BookingStepperProps {
  currentStep: BookingStep;
  completedIndex: number;
}

export function BookingStepper({
  currentStep,
  completedIndex,
}: BookingStepperProps) {
  const displaySteps = BOOKING_STEPS.filter((s) => s.key !== "confirmation");

  return (
    <nav aria-label="Booking progress" className="w-full">
      {/* Desktop */}
      <ol className="hidden md:flex items-center">
        {displaySteps.map((step, i) => {
          const isActive = step.key === currentStep;
          const isCompleted = i < completedIndex;

          return (
            <li key={step.key} className="flex items-center flex-1 last:flex-0">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-[11px] font-semibold shrink-0 transition-all duration-500",
                    isCompleted
                      ? "bg-white text-black"
                      : isActive
                        ? "bg-white/10 text-white ring-1 ring-white/20"
                        : "bg-white/[0.03] text-text-muted/50 ring-1 ring-white/[0.06]"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "text-[11px] font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-500",
                    isActive
                      ? "text-text-primary"
                      : isCompleted
                        ? "text-text-secondary"
                        : "text-text-muted/40"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {i < displaySteps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div
                    className={cn(
                      "h-px transition-all duration-700",
                      isCompleted
                        ? "bg-gradient-to-r from-white/30 to-white/10"
                        : "bg-white/[0.06]"
                    )}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] font-semibold tracking-tight text-text-primary">
            {displaySteps.find((s) => s.key === currentStep)?.label}
          </p>
          <p className="text-[11px] text-text-muted/60 tabular-nums">
            {completedIndex + 1} / {displaySteps.length}
          </p>
        </div>
        <div className="h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white/60 to-white/30 transition-all duration-700 ease-out rounded-full"
            style={{
              width: `${((completedIndex + 1) / displaySteps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}
