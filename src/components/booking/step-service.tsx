"use client";

import { ArrowRight, Clock, Check } from "lucide-react";
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
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Select a Service
        </h2>
        <p className="mt-2 text-[15px] text-text-secondary/80">
          Choose the session type that fits your project.
        </p>
      </div>

      <div className="space-y-2.5">
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
                  "w-full text-left p-6 rounded-xl border transition-all duration-500 group",
                  selected
                    ? "border-white/20 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08]"
                )}
                aria-pressed={selected}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[15px] font-semibold tracking-tight">
                        {service.name}
                      </h3>
                      <span className="text-[15px] font-semibold text-text-secondary">
                        {formatCurrency(service.priceMinorUnits)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] text-text-muted/70 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[11px] text-text-muted/50">
                      <Clock className="w-3 h-3" />
                      <span>{formatDuration(service.durationMinutes)}</span>
                      <span className="text-white/10">·</span>
                      <span>
                        {formatCurrency(service.depositMinorUnits)} deposit
                      </span>
                    </div>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase text-text-muted/60 bg-white/[0.03] rounded-full border border-white/[0.04]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selection indicator */}
                  <div
                    className={cn(
                      "shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 mt-0.5",
                      selected
                        ? "bg-white"
                        : "ring-1.5 ring-white/10 group-hover:ring-white/20"
                    )}
                  >
                    {selected && (
                      <Check
                        className="w-3.5 h-3.5 text-black"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
      </div>

      <div className="mt-10 flex justify-end">
        <Button variant="primary" size="lg" disabled={!selectedId} onClick={onNext}>
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
