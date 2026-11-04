import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Music,
  PartyPopper,
  Disc3,
  Star,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Separator } from "@/components/ui/separator";
import { DjInquirySection } from "@/components/experiences/dj-inquiry-section";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "DJ performances, curated parties, nightlife experiences, and event production by NNW Studios.",
  openGraph: {
    title: "Experiences — NNW Studios",
    description:
      "Curated events, live DJ performances, and nightlife experiences that set the standard.",
  },
};

const upcomingEvents = [
  {
    title: "NOCTURNAL VOL. IV",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Curated Party",
    slug: "nocturnal-vol-iv",
    featured: true,
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

const pastEvents = [
  {
    title: "NOCTURNAL VOL. III",
    type: "Curated Party",
    slug: "nocturnal-vol-iii",
  },
  {
    title: "LATE CHECKOUT",
    type: "Rooftop Set",
    slug: "late-checkout",
  },
  {
    title: "FREQUENCIES",
    type: "Music Showcase",
    slug: "frequencies",
  },
  {
    title: "THE OPENING",
    type: "Studio Launch",
    slug: "the-opening",
  },
];

const serviceTypes = [
  {
    icon: Disc3,
    title: "DJ Performances",
    description:
      "Professionally curated sets for private events, venues, brand activations, and festivals.",
  },
  {
    icon: PartyPopper,
    title: "Event Production",
    description:
      "End-to-end event concept, planning, and execution for immersive nightlife experiences.",
  },
  {
    icon: Music,
    title: "Curated Parties",
    description:
      "Signature NNW events with custom lineups, branded environments, and curated guest lists.",
  },
  {
    icon: Star,
    title: "Brand Activations",
    description:
      "Music-driven experiences designed to amplify brand launches, campaigns, and product reveals.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="silver" size="md">
              Events & DJ
            </Badge>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
              Moments you
              <br />
              <span className="text-chrome-gradient">remember.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              Curated events, DJ performances, and nightlife experiences that
              set the standard. We create the moments people talk about.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#inquire">
                <Button variant="primary" size="lg">
                  Book a DJ
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#events">
                <Button variant="secondary" size="lg">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            label="DJ performance photography"
            sublabel="Replace with event/nightlife imagery"
            icon={Music}
            aspectRatio="aspect-[4/5]"
            className="lg:aspect-[3/4]"
          />
        </div>
      </Section>

      {/* ── Upcoming Events ── */}
      <Section id="events" className="py-24 md:py-32 bg-bg-secondary">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Upcoming"
            title="What's next."
            description="Events, performances, and experiences on the horizon."
          />
          <Link href="/events" className="shrink-0">
            <Button variant="secondary" size="md">
              All Events
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Featured event */}
        <Link
          href={`/events/${upcomingEvents[0].slug}`}
          className="group block rounded-sm overflow-hidden border border-border mb-4 hover:border-border/80 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ImagePlaceholder
              label="Featured event"
              icon={PartyPopper}
              aspectRatio="aspect-[16/10] lg:aspect-auto"
              className="lg:min-h-[360px] rounded-none border-0"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center bg-surface group-hover:bg-surface-elevated transition-colors duration-500">
              <Badge variant="chrome" size="md" className="w-fit mb-4">
                Featured
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                {upcomingEvents[0].title}
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {upcomingEvents[0].date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {upcomingEvents[0].location}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-text-muted group-hover:text-silver transition-colors duration-300">
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>

        {/* Rest of events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {upcomingEvents.slice(1).map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group block bg-surface hover:bg-surface-elevated transition-colors duration-500"
            >
              <ImagePlaceholder
                label={`${event.title} image`}
                icon={Music}
                aspectRatio="aspect-[16/9]"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <Badge variant="default" size="sm" className="mb-3">
                  {event.type}
                </Badge>
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
          ))}
        </div>

        <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
          Sample events — not real listings. Events managed through the NNW CMS.
        </p>
      </Section>

      {/* ── What We Do ── */}
      <Section className="py-24 md:py-32">
        <SectionHeader
          eyebrow="Services"
          title="What we bring."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {serviceTypes.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-surface p-8 flex flex-col items-center text-center gap-4"
              >
                <Icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  {svc.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Past Events ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="Archive"
          title="Past experiences."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {pastEvents.map((event) => (
            <div
              key={event.slug}
              className="bg-surface p-6"
            >
              <ImagePlaceholder
                label={`${event.title} photo`}
                icon={Music}
                aspectRatio="aspect-square"
                className="mb-4 rounded-none border-0"
              />
              <Badge variant="default" size="sm" className="mb-2">
                {event.type}
              </Badge>
              <h3 className="text-sm font-bold tracking-wide uppercase">
                {event.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
          Sample past events — replace with real event archive data.
        </p>
      </Section>

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── DJ Inquiry ── */}
      <DjInquirySection />
    </>
  );
}
