"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Palette,
  Music,
  Lightbulb,
  Mic,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { Reveal } from "@/components/ui/motion";

const divisions = [
  {
    title: "Studio",
    tagline: "Your sound. Our space.",
    description:
      "Professional recording sessions, music production, mixing, mastering, and artist development.",
    href: "/studio",
    icon: Mic,
    featured: true,
  },
  {
    title: "Culture",
    tagline: "Stories that shape perspective.",
    description:
      "Lifestyle, creative expression, storytelling, original content, and cultural influence.",
    href: "/culture",
    icon: Palette,
  },
  {
    title: "Experiences",
    tagline: "Moments you remember.",
    description:
      "DJ performances, curated parties, nightlife experiences, and event production.",
    href: "/experiences",
    icon: Music,
  },
  {
    title: "Strategy",
    tagline: "Ideas need direction.",
    description:
      "Creative consulting, business strategy, brand development, and membership-based services.",
    href: "/strategy",
    icon: Lightbulb,
  },
];

export function Divisions() {
  return (
    <Section id="divisions" className="py-28 md:py-36 lg:py-44">
      <Reveal className="mb-20 md:mb-24">
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-text-muted/60 mb-5">
          Four Divisions
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
          One vision.
          <br />
          <span className="text-text-muted">Four disciplines.</span>
        </h2>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border/50 rounded-lg overflow-hidden">
        {divisions.map((div) => {
          const Icon = div.icon;
          return (
            <StaggerItem key={div.title}>
              <Link
                href={div.href}
                className={`group relative flex flex-col justify-between p-8 md:p-10 lg:p-14 min-h-[300px] md:min-h-[360px] transition-all duration-700 ease-out ${
                  div.featured
                    ? "bg-surface-elevated/80 hover:bg-[#222225]"
                    : "bg-surface/60 hover:bg-surface-elevated/60"
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-700">
                    <Icon
                      className="w-5 h-5 text-text-muted group-hover:text-silver transition-colors duration-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <ArrowUpRight className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="mt-auto">
                  {div.featured && (
                    <span className="inline-block text-[9px] font-medium tracking-[0.25em] uppercase text-silver/80 mb-3 border border-silver/20 px-2.5 py-1 rounded-full">
                      Book Now
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-700">
                    {div.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] font-medium text-text-muted tracking-wide">
                    {div.tagline}
                  </p>
                  <p className="mt-4 text-[13px] text-text-secondary/80 leading-relaxed max-w-sm">
                    {div.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
