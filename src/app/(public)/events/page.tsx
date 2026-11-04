import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Music,
  PartyPopper,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from NNW Studios — curated parties, DJ performances, and live experiences.",
  openGraph: {
    title: "Events — NNW Studios",
    description:
      "Discover upcoming events and relive past experiences from NNW Studios.",
  },
};

const upcomingEvents = [
  {
    title: "NOCTURNAL VOL. IV",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Curated Party",
    slug: "nocturnal-vol-iv",
    description:
      "The next chapter in our signature nightlife series. An immersive evening of curated sound, visual art, and community.",
    featured: true,
  },
  {
    title: "SOUND CHECK LIVE",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Live Performance",
    slug: "sound-check-live",
    description:
      "Live performances from emerging artists and established voices in an intimate venue setting.",
  },
  {
    title: "THE EXCHANGE",
    date: "Coming Soon",
    location: "Venue TBA",
    type: "Industry Night",
    slug: "the-exchange",
    description:
      "A networking night for creatives, industry professionals, and artists. Music, conversation, and connection.",
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
  {
    title: "AFTER DARK VOL. II",
    type: "Listening Session",
    slug: "after-dark-vol-ii",
  },
  {
    title: "BASELINE",
    type: "DJ Night",
    slug: "baseline",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl">
          <Badge variant="silver" size="md">
            Events
          </Badge>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
            What&rsquo;s
            <br />
            <span className="text-chrome-gradient">happening.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            Upcoming and past experiences. Curated parties, live performances,
            and the moments that define the NNW community.
          </p>
        </div>
      </Section>

      {/* ── Upcoming ── */}
      <Section className="pb-24 md:pb-32">
        <SectionHeader
          eyebrow="Upcoming"
          title="On the horizon."
          className="mb-14"
        />

        {/* Featured event */}
        <Link
          href={`/events/${upcomingEvents[0].slug}`}
          className="group block rounded-sm overflow-hidden border border-border mb-4 hover:border-border/80 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ImagePlaceholder
              label="Featured event image"
              icon={PartyPopper}
              aspectRatio="aspect-[16/10] lg:aspect-auto"
              className="lg:min-h-[400px] rounded-none border-0"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center bg-surface group-hover:bg-surface-elevated transition-colors duration-500">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="chrome" size="md">
                  Featured
                </Badge>
                <Badge variant="default" size="sm">
                  {upcomingEvents[0].type}
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                {upcomingEvents[0].title}
              </h2>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-md">
                {upcomingEvents[0].description}
              </p>
              <div className="mt-6 flex flex-col gap-2 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {upcomingEvents[0].date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
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

        {/* Other upcoming */}
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
              <div className="p-6 md:p-8">
                <Badge variant="default" size="sm" className="mb-3">
                  {event.type}
                </Badge>
                <h3 className="text-xl font-bold tracking-wide uppercase group-hover:text-chrome transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {event.description}
                </p>
                <div className="mt-4 flex flex-col gap-1.5 text-xs text-text-muted">
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

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── Past Events ── */}
      <Section className="py-24 md:py-32">
        <SectionHeader
          eyebrow="Archive"
          title="Past experiences."
          description="A look back at what we've built together."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {pastEvents.map((event) => (
            <div
              key={event.slug}
              className="bg-surface p-6"
            >
              <ImagePlaceholder
                label={`${event.title} archive photo`}
                icon={Music}
                aspectRatio="aspect-[16/10]"
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
          Sample past events — replace with real event archive from CMS.
        </p>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          Want NNW at your event?
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-md mx-auto">
          We bring the sound, the energy, and the production. Let&rsquo;s talk
          about your next experience.
        </p>
        <div className="mt-8">
          <Link href="/experiences#inquire">
            <Button variant="primary" size="lg">
              Submit a DJ Inquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
