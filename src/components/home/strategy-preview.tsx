"use client";

import Link from "next/link";
import {
  Compass,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const capabilities = [
  { icon: Compass, label: "Creative Direction" },
  { icon: TrendingUp, label: "Brand Strategy" },
  { icon: Users, label: "Artist Development" },
  { icon: Sparkles, label: "Business Consulting" },
];

export function StrategyPreview() {
  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
            Strategy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] uppercase">
            Ideas need
            <br />
            <span className="text-chrome-gradient">direction.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Creative consulting for artists, brands, and entrepreneurs who are
            ready to move with intention.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <StaggerItem
                key={cap.label}
                className="flex flex-col items-center gap-3 p-6 rounded-sm bg-surface border border-border/50 hover:border-border transition-colors duration-300"
              >
                <Icon className="w-5 h-5 text-silver" strokeWidth={1.5} />
                <p className="text-xs font-medium tracking-[0.1em] uppercase text-text-secondary">
                  {cap.label}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.3} className="mt-12">
          <Link href="/strategy">
            <Button variant="secondary" size="lg">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
