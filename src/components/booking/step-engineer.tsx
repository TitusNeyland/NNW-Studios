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
        <p className="mt-2 text-base text-text-secondary/80">
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
                  ? "bg-white border-white shadow-lg shadow-white/10"
                  : "bg-white/90 border-white/60 hover:bg-white hover:shadow-md hover:shadow-white/5"
              )}
              aria-pressed={active}
            >
              <div
                className={cn(
                  "p-2.5 rounded-lg transition-colors duration-500",
                  active
                    ? "bg-black"
                    : "bg-neutral-100"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors duration-500",
                    active ? "text-white" : "text-neutral-400"
                  )}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-black">
                  {opt.title}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
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
                      ? "bg-white border-white shadow-lg shadow-white/10"
                      : "bg-white/90 border-white/60 hover:bg-white hover:shadow-md hover:shadow-white/5"
                  )}
                  aria-pressed={selected}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-lg font-semibold tracking-tight text-black">
                          {eng.name}
                        </h3>
                        <span className="text-xs text-neutral-400">
                          {eng.title}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                        {eng.bio}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {eng.specialties.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 text-xs font-medium tracking-wide uppercase text-neutral-500 bg-neutral-100 rounded-full"
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
                          ? "bg-black"
                          : "ring-1.5 ring-neutral-300 group-hover:ring-neutral-400"
                      )}
                    >
                      {selected && (
                        <Check
                          className="w-3.5 h-3.5 text-white"
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
