"use client";

import Link from "next/link";
import { Mic, Headphones, SlidersHorizontal, Volume2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Mic,
    label: "Recording",
    description: "Professional vocal and instrument tracking",
  },
  {
    icon: SlidersHorizontal,
    label: "Mixing",
    description: "Industry-standard mix engineering",
  },
  {
    icon: Headphones,
    label: "Mastering",
    description: "Release-ready audio mastering",
  },
  {
    icon: Volume2,
    label: "Production",
    description: "Full music production and arrangement",
  },
];

export function StudioFeature() {
  return (
    <Section className="py-24 md:py-32 lg:py-40 bg-bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: copy */}
        <div>
          <Reveal>
            <SectionHeader
              eyebrow="Studio"
              title="Your sound. Our space."
              description="Step into a creative environment designed for artists who take their craft seriously. World-class equipment, experienced engineers, and a space built to inspire."
            />
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <StaggerItem
                  key={svc.label}
                  className="flex items-start gap-4 p-4 rounded-sm bg-surface/50 border border-border/50"
                >
                  <Icon
                    className="w-5 h-5 text-silver mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm font-semibold tracking-wide uppercase text-text-primary">
                      {svc.label}
                    </p>
                    <p className="mt-1 text-xs text-text-muted leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.3} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/studio/book">
              <Button variant="primary" size="lg">
                Book a Session
              </Button>
            </Link>
            <Link href="/studio">
              <Button variant="secondary" size="lg">
                Explore the Studio
              </Button>
            </Link>
          </Reveal>
        </div>

        {/* Right: visual placeholder */}
        <Reveal
          delay={0.2}
          className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden bg-surface border border-border"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8">
              <Mic
                className="w-12 h-12 text-border mx-auto mb-4"
                strokeWidth={1}
              />
              <p className="text-xs text-text-muted tracking-[0.15em] uppercase">
                Studio photography placeholder
              </p>
              <p className="text-[10px] text-text-muted/60 mt-2">
                Replace with real studio imagery
              </p>
            </div>
          </div>
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent" />
        </Reveal>
      </div>
    </Section>
  );
}
