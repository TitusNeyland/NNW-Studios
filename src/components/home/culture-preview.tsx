"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const sampleContent = [
  {
    title: "Behind the Board",
    category: "Studio Life",
    excerpt:
      "An inside look at how sessions come together — from the first take to the final mix.",
    slug: "behind-the-board",
    featured: true,
  },
  {
    title: "Sound & The City",
    category: "Culture",
    excerpt:
      "How local music scenes shape identity and create communities worth protecting.",
    slug: "sound-and-the-city",
  },
  {
    title: "The Art of the Set",
    category: "Experiences",
    excerpt:
      "What separates a great DJ set from a forgettable one — and why curation matters.",
    slug: "the-art-of-the-set",
  },
];

export function CulturePreview() {
  return (
    <Section className="py-24 md:py-32 lg:py-40 bg-bg-secondary">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
        <Reveal>
          <SectionHeader
            eyebrow="Culture"
            title="Stories worth telling."
            description="Creative expression, artist spotlights, and the ideas that drive the work."
          />
        </Reveal>
        <Reveal delay={0.2} className="shrink-0">
          <Link href="/culture">
            <Button variant="secondary" size="md">
              All Stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border rounded-sm overflow-hidden">
        {/* Featured story — spans 7 cols */}
        <StaggerItem className="lg:col-span-7">
          <Link
            href={`/culture/${sampleContent[0].slug}`}
            className="group block h-full bg-surface hover:bg-surface-elevated transition-colors duration-500"
          >
            {/* Image placeholder */}
            <div className="relative aspect-[16/9] bg-bg-primary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">
                  Featured image placeholder
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
              <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.15em] uppercase text-silver">
                Featured
              </span>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-3">
                {sampleContent[0].category}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                {sampleContent[0].title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-lg">
                {sampleContent[0].excerpt}
              </p>
            </div>
          </Link>
        </StaggerItem>

        {/* Remaining stories — stacked in 5 cols */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-border">
          {sampleContent.slice(1).map((item) => (
            <StaggerItem key={item.slug} className="flex-1">
              <Link
                href={`/culture/${item.slug}`}
                className="group flex flex-col justify-between h-full bg-surface hover:bg-surface-elevated transition-colors duration-500 p-8"
              >
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-3">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium tracking-wide uppercase text-text-muted group-hover:text-silver transition-colors duration-300">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      <p className="mt-4 text-[10px] text-text-muted/60 text-center tracking-wide">
        Sample content shown as placeholders — not published articles.
      </p>
    </Section>
  );
}
