"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const sampleEvents = [
  {
    title: "NOCTURNAL VOL. IV",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Curated Party",
    slug: "nocturnal-vol-iv",
  },
  {
    title: "SOUND CHECK LIVE",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Live Performance",
    slug: "sound-check-live",
  },
  {
    title: "THE EXCHANGE",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Industry Night",
    slug: "the-exchange",
  },
];

export function ExperiencesPreview() {
  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
        <Reveal>
          <SectionHeader
            eyebrow="Experiences"
            title="Moments you remember."
            description="Curated events, DJ performances, and nightlife experiences that set the standard."
          />
        </Reveal>
        <Reveal delay={0.2} className="shrink-0">
          <Link href="/experiences">
            <Button variant="secondary" size="md">
              All Experiences
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
        {sampleEvents.map((event) => (
          <StaggerItem key={event.slug}>
            <Link
              href={`/events/${event.slug}`}
              className="group block bg-surface hover:bg-surface-elevated transition-colors duration-500"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] bg-bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] text-text-muted tracking-[0.15em] uppercase">
                    Event image placeholder
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.15em] uppercase text-text-muted bg-bg-primary/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                  {event.type}
                </span>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-wide uppercase group-hover:text-chrome transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="mt-3 flex flex-col gap-1.5 text-xs text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-4 text-[10px] text-text-muted/60 text-center tracking-wide">
        Sample events shown as placeholders — not real listings.
      </p>
    </Section>
  );
}
