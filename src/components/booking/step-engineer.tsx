"use client";

import { ArrowLeft, ArrowRight, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Engineer } from "@/features/booking/types";

interface StepEngineerProps {
  engineers: Engineer[];
  preference: "choose" | "first-available";
  selectedId: string | null;
  onPreferenceChange: (p: "choose" | "first-available") => void;
  onSelect: (id: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function StepEngineer({
  engineers,
  preference,
  selectedId,
  onPreferenceChange,
  onSelect,
  onBack,
  onNext,
}: StepEngineerProps) {
  const canContinue =
    preference === "first-available" || (preference === "choose" && selectedId);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
        Choose Your Engineer
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Select a preferred engineer or let us assign the best available match.
      </p>

      {/* Path selection */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => onPreferenceChange("choose")}
          className={cn(
            "flex items-center gap-4 p-5 rounded-sm border text-left transition-all duration-300",
            preference === "choose"
              ? "border-silver bg-surface-elevated ring-1 ring-silver/30"
              : "border-border bg-surface hover:border-border/80"
          )}
          aria-pressed={preference === "choose"}
        >
          <User className="w-5 h-5 text-silver shrink-0" />
          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              Choose My Engineer
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              Select from available engineers
            </p>
          </div>
        </button>

        <button
          onClick={() => onPreferenceChange("first-available")}
          className={cn(
            "flex items-center gap-4 p-5 rounded-sm border text-left transition-all duration-300",
            preference === "first-available"
              ? "border-silver bg-surface-elevated ring-1 ring-silver/30"
              : "border-border bg-surface hover:border-border/80"
          )}
          aria-pressed={preference === "first-available"}
        >
          <Users className="w-5 h-5 text-silver shrink-0" />
          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              First Available
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              We&rsquo;ll match you with an eligible engineer
            </p>
          </div>
        </button>
      </div>

      {/* Engineer list */}
      {preference === "choose" && (
        <div className="mt-6 space-y-3">
          {engineers
            .filter((e) => e.active)
            .map((eng) => {
              const selected = eng.id === selectedId;
              return (
                <button
                  key={eng.id}
                  onClick={() => onSelect(eng.id)}
                  className={cn(
                    "w-full text-left p-5 rounded-sm border transition-all duration-300",
                    selected
                      ? "border-silver bg-surface-elevated ring-1 ring-silver/30"
                      : "border-border bg-surface hover:border-border/80 hover:bg-surface-elevated"
                  )}
                  aria-pressed={selected}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold tracking-wide uppercase">
                        {eng.name}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">
                        {eng.title}
                      </p>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                        {eng.bio}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {eng.specialties.map((s) => (
                          <Badge key={s} variant="default" size="sm">
                            {s}
                          </Badge>
                        ))}
                      </div>
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
                        <div className="w-2 h-2 rounded-full bg-bg-primary" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      )}

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
