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
  {
    title: "Studio",
    tagline: "Your sound. Our space.",
    description:
      "Professional recording sessions, music production, mixing, mastering, and artist development.",
    href: "/studio",
    icon: Mic,
    featured: true,
  },
];

export function Divisions() {
  return (
    <Section id="divisions" className="py-24 md:py-32 lg:py-40">
      <Reveal className="mb-16 md:mb-20">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
          Four Divisions
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl">
          One vision.
          <br />
          <span className="text-text-secondary">Four disciplines.</span>
        </h2>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
        {divisions.map((div) => {
          const Icon = div.icon;
          return (
            <StaggerItem key={div.title}>
              <Link
                href={div.href}
                className={`group relative flex flex-col justify-between p-8 md:p-10 lg:p-12 min-h-[280px] md:min-h-[340px] transition-colors duration-500 ${
                  div.featured
                    ? "bg-surface-elevated hover:bg-[#2a2a2a]"
                    : "bg-surface hover:bg-surface-elevated"
                }`}
              >
                {/* Icon + indicator */}
                <div className="flex items-start justify-between">
                  <Icon
                    className="w-6 h-6 text-text-muted group-hover:text-silver transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-text-muted" />
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="mt-auto">
                  {div.featured && (
                    <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-silver mb-3 border border-border px-2 py-0.5 rounded-sm">
                      Book Now
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-500">
                    {div.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-text-muted tracking-wide">
                    {div.tagline}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-sm">
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
