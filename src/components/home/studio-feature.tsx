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
    <Section className="py-28 md:py-36 lg:py-44 bg-bg-secondary grain relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: copy */}
        <div>
          <Reveal>
            <SectionHeader
              eyebrow="Studio"
              title="Your sound. Our space."
              description="Step into a creative environment designed for artists who take their craft seriously. World-class equipment, experienced engineers, and a space built to inspire."
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <StaggerItem
                  key={svc.label}
                  className="group flex items-start gap-4 p-5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="p-2 rounded-md bg-white/[0.03] border border-white/[0.05] group-hover:border-silver/20 transition-colors duration-500">
                    <Icon
                      className="w-4 h-4 text-text-muted group-hover:text-silver transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold tracking-wide uppercase text-text-primary">
                      {svc.label}
                    </p>
                    <p className="mt-1 text-xs text-text-muted/80 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.3} className="mt-12 flex flex-col sm:flex-row gap-4">
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
          className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden bg-surface/50 border border-white/[0.04] glow-sm"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] w-fit mx-auto mb-5">
                <Mic
                  className="w-10 h-10 text-text-muted/30"
                  strokeWidth={1}
                />
              </div>
              <p className="text-[10px] text-text-muted/40 tracking-[0.2em] uppercase">
                Studio photography placeholder
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
        </Reveal>
      </div>
    </Section>
  );
}
