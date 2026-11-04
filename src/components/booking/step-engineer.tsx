"use client";

import { ArrowLeft, ArrowRight, User, Users, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Choose Your Engineer
        </h2>
        <p className="mt-2 text-[15px] text-text-secondary/80">
          Select a preferred engineer or let us assign the best match.
        </p>
      </div>

      {/* Path selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {[
          {
            key: "choose" as const,
            icon: User,
            title: "Choose My Engineer",
            desc: "Select from available engineers",
          },
          {
            key: "first-available" as const,
            icon: Users,
            title: "First Available",
            desc: "We'll match you with the best fit",
          },
        ].map((opt) => {
          const Icon = opt.icon;
          const active = preference === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => onPreferenceChange(opt.key)}
              className={cn(
                "flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-500",
                active
                  ? "border-white/20 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08]"
              )}
              aria-pressed={active}
            >
              <div
                className={cn(
                  "p-2.5 rounded-lg transition-colors duration-500",
                  active
                    ? "bg-white/10"
                    : "bg-white/[0.03] border border-white/[0.05]"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors duration-500",
                    active ? "text-white" : "text-text-muted/50"
                  )}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-[13px] font-semibold tracking-tight">
                  {opt.title}
                </p>
                <p className="text-[11px] text-text-muted/50 mt-0.5">
                  {opt.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Engineer list */}
      {preference === "choose" && (
        <div className="mt-6 space-y-2.5">
          {engineers
            .filter((e) => e.active)
            .map((eng) => {
              const selected = eng.id === selectedId;
              return (
                <button
                  key={eng.id}
                  onClick={() => onSelect(eng.id)}
                  className={cn(
                    "w-full text-left p-6 rounded-xl border transition-all duration-500 group",
                    selected
                      ? "border-white/20 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08]"
                  )}
                  aria-pressed={selected}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-[15px] font-semibold tracking-tight">
                          {eng.name}
                        </h3>
                        <span className="text-[11px] text-text-muted/40">
                          {eng.title}
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] text-text-muted/60 leading-relaxed">
                        {eng.bio}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {eng.specialties.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase text-text-muted/50 bg-white/[0.03] rounded-full border border-white/[0.04]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
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
      )}

      <div className="mt-10 flex items-center justify-between">
        <Button variant="ghost" size="md" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button variant="primary" size="lg" disabled={!canContinue} onClick={onNext}>
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
