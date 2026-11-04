"use client";

import { CheckCircle2, ArrowRight, Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { BookableService } from "@/features/booking/types";
import { formatCurrency, formatDuration } from "@/features/booking/mock-data";

interface StepServiceProps {
  services: BookableService[];
  selectedId: string;
  onSelect: (id: string) => void;
  onNext: () => void;
}

export function StepService({
  services,
  selectedId,
  onSelect,
  onNext,
}: StepServiceProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
        Select a Service
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Choose the session type that best fits your project.
      </p>

      <div className="mt-8 space-y-3">
        {services
          .filter((s) => s.active)
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((service) => {
            const selected = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => onSelect(service.id)}
                className={cn(
                  "w-full text-left p-5 md:p-6 rounded-sm border transition-all duration-300",
                  selected
                    ? "border-silver bg-surface-elevated ring-1 ring-silver/30"
                    : "border-border bg-surface hover:border-border/80 hover:bg-surface-elevated"
                )}
                aria-pressed={selected}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold tracking-wide uppercase">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDuration(service.durationMinutes)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5" />
                        {formatCurrency(service.priceMinorUnits)}
                      </span>
                    </div>

                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-1.5 text-xs text-text-muted"
                        >
                          <CheckCircle2 className="w-3 h-3 text-silver shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={cn(
                      "shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 mt-1",
                      selected
                        ? "border-silver bg-silver"
                        : "border-border"
                    )}
                  >
                    {selected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-bg-primary" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
      </div>

      <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
        Services, pricing, and durations are configurable by NNW administration.
      </p>

      <div className="mt-8 flex justify-end">
        <Button
          variant="primary"
          size="lg"
          disabled={!selectedId}
          onClick={onNext}
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
