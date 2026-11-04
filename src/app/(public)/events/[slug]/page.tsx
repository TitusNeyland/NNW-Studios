import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Music,
  ExternalLink,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const eventsData: Record<
  string,
  {
    title: string;
    type: string;
    date: string;
    location: string;
    venue: string;
    description: string;
    longDescription: string;
    lineup: string[];
  }
> = {
  "nocturnal-vol-iv": {
    title: "NOCTURNAL VOL. IV",
    type: "Curated Party",
    date: "Coming Soon",
    location: "City, State",
    venue: "Venue TBA",
    description:
      "The next chapter in our signature nightlife series. An immersive evening of curated sound, visual art, and community.",
    longDescription:
      "NOCTURNAL is NNW's flagship nightlife series — a curated collision of sound, visual art, and creative community. Each edition builds on the last, pushing the boundaries of what a party can be. Expect carefully selected DJs, immersive visual installations, and a crowd that understands the assignment. Volume IV raises the bar once again.",
    lineup: ["DJ TBA", "Special Guest TBA", "Resident DJs"],
  },
  "sound-check-live": {
    title: "SOUND CHECK LIVE",
    type: "Live Performance",
    date: "Coming Soon",
    location: "City, State",
    venue: "Venue TBA",
    description:
      "Live performances from emerging artists and established voices in an intimate venue setting.",
    longDescription:
      "SOUND CHECK LIVE strips it back to what matters — raw talent in an intimate room. Each edition features a curated lineup of emerging and established artists performing live. No backing tracks, no shortcuts. Just artists, instruments, and an audience that came to listen.",
    lineup: ["Artist TBA", "Artist TBA", "Host TBA"],
  },
  "the-exchange": {
    title: "THE EXCHANGE",
    type: "Industry Night",
    date: "Coming Soon",
    location: "City, State",
    venue: "Venue TBA",
    description:
      "A networking night for creatives, industry professionals, and artists.",
    longDescription:
      "THE EXCHANGE is where ideas meet opportunity. A structured networking experience for creatives, industry professionals, producers, engineers, and artists. Curated introductions, panel discussions, and a DJ set that keeps the energy right. This is how real connections happen.",
    lineup: ["Panel Speakers TBA", "DJ TBA"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData[slug];
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: `${event.title} — NNW Studios`,
      description: event.description,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = eventsData[slug];
  if (!event) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Events
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="chrome" size="md">
            {event.type}
          </Badge>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
          {event.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4 text-text-muted" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-text-muted" />
            {event.venue} — {event.location}
          </span>
        </div>
      </Section>

      {/* ── Event image ── */}
      <Section className="pb-16 md:pb-20">
        <ImagePlaceholder
          label={`${event.title} event photography`}
          sublabel="Replace with real event imagery"
          icon={Music}
          aspectRatio="aspect-[21/9]"
        />
      </Section>

      {/* ── Details grid ── */}
      <Section className="pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
              About This Event
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {event.longDescription}
            </p>

            <Separator className="my-10" />

            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
              Lineup
            </h2>
            <ul className="space-y-3">
              {event.lineup.map((artist) => (
                <li
                  key={artist}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <Users className="w-4 h-4 text-silver" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {artist}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-sm border border-border bg-surface p-6 space-y-5">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-1">
                  Date
                </p>
                <p className="text-sm font-semibold">{event.date}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-1">
                  Venue
                </p>
                <p className="text-sm font-semibold">{event.venue}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-1">
                  Location
                </p>
                <p className="text-sm font-semibold">{event.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-1">
                  Type
                </p>
                <p className="text-sm font-semibold">{event.type}</p>
              </div>

              <Separator />

              <Button variant="primary" size="lg" className="w-full" disabled>
                RSVP Coming Soon
              </Button>

              <p className="text-[10px] text-text-muted/50 text-center tracking-wide">
                RSVP and ticket links will be enabled when events are published
                through the CMS.
              </p>
            </div>

            <Link
              href="/experiences#inquire"
              className="flex items-center justify-between p-4 rounded-sm border border-border bg-surface hover:bg-surface-elevated transition-colors duration-300 group"
            >
              <span className="text-xs font-medium tracking-wide uppercase text-text-muted group-hover:text-text-primary transition-colors">
                Book NNW for your event
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
            </Link>
          </div>
        </div>
      </Section>

      <p className="text-center pb-12 text-[10px] text-text-muted/50 tracking-wide">
        This is a placeholder event page — all details are configurable through
        the NNW CMS.
      </p>
    </>
  );
}
