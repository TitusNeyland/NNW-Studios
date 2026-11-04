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
      <ol className="hidden md:flex items-center gap-0">
        {displaySteps.map((step, i) => {
          const isActive = step.key === currentStep;
          const isCompleted = i < completedIndex;

          return (
            <li
              key={step.key}
              className="flex items-center flex-1 last:flex-0"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 transition-colors duration-300",
                    isCompleted
                      ? "bg-silver text-bg-primary"
                      : isActive
                        ? "bg-text-primary text-bg-primary"
                        : "bg-surface border border-border text-text-muted"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300",
                    isActive
                      ? "text-text-primary"
                      : isCompleted
                        ? "text-silver"
                        : "text-text-muted"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {i < displaySteps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px mx-3 transition-colors duration-300",
                    isCompleted ? "bg-silver/50" : "bg-border"
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile: compact indicator */}
      <div className="md:hidden flex items-center justify-between">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-primary">
          {displaySteps.find((s) => s.key === currentStep)?.label}
        </p>
        <p className="text-xs text-text-muted">
          Step {completedIndex + 1} of {displaySteps.length}
        </p>
      </div>

      {/* Mobile progress bar */}
      <div className="md:hidden mt-3 h-1 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-silver transition-all duration-500 rounded-full"
          style={{
            width: `${((completedIndex + 1) / displaySteps.length) * 100}%`,
          }}
        />
      </div>
    </nav>
  );
}
