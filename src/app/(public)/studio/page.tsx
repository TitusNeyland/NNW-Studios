import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  SlidersHorizontal,
  Headphones,
  Volume2,
  Music,
  Monitor,
  Waves,
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { StudioFaq } from "@/components/studio/studio-faq";
import { StudioGallery } from "@/components/studio/studio-gallery";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Professional recording sessions, music production, mixing, mastering, and artist development at NNW Studios.",
  openGraph: {
    title: "Studio — NNW Studios",
    description:
      "Book a professional recording session. World-class equipment, experienced engineers, and a space built to inspire.",
  },
};

const services = [
  {
    icon: Mic,
    title: "Recording Sessions",
    description:
      "Professional vocal and instrument tracking in an acoustically treated environment with top-tier equipment.",
    features: [
      "Multi-track recording",
      "Acoustically treated rooms",
      "Premium microphone selection",
    ],
  },
  {
    icon: Volume2,
    title: "Music Production",
    description:
      "Full production services from arrangement to final output — tailored to your creative vision.",
    features: [
      "Beat production",
      "Arrangement & composition",
      "Sound design",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Mixing",
    description:
      "Industry-standard mix engineering that brings clarity, depth, and punch to your recordings.",
    features: [
      "Stem mixing",
      "Analog & digital processing",
      "Revision rounds included",
    ],
  },
  {
    icon: Headphones,
    title: "Mastering",
    description:
      "Release-ready mastering optimized for streaming, vinyl, and broadcast distribution.",
    features: [
      "Streaming optimization",
      "Format-specific masters",
      "Reference matching",
    ],
  },
  {
    icon: Music,
    title: "Creative Sessions",
    description:
      "Open-format studio time for writing, experimentation, and collaborative creative work.",
    features: [
      "Songwriting sessions",
      "Artist development",
      "Collaborative workspace",
    ],
  },
];

const equipment = [
  { icon: Monitor, label: "Pro Tools HDX", category: "DAW" },
  { icon: Waves, label: "Premium Analog Console", category: "Console" },
  { icon: Mic, label: "Neumann, AKG, Telefunken", category: "Microphones" },
  { icon: Headphones, label: "Studio Monitor System", category: "Monitoring" },
  { icon: SlidersHorizontal, label: "Outboard Processing", category: "Hardware" },
  { icon: Volume2, label: "Isolation Booths", category: "Rooms" },
];

const highlights = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule — day, evening, or weekend availability.",
  },
  {
    icon: Users,
    title: "Experienced Engineers",
    description: "Work with engineers who understand your genre and creative vision.",
  },
  {
    icon: Shield,
    title: "Professional Environment",
    description: "A space built for focus, creativity, and delivering your best work.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient workflows designed to respect your time and your deadlines.",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-20 md:pt-44 md:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="silver" size="md">
              Now Booking
            </Badge>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
              Make your next
              <br />
              <span className="text-chrome-gradient">record here.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              A professional creative environment designed for artists who take
              their craft seriously. World-class equipment, experienced
              engineers, and a space built to inspire.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/studio/book">
                <Button variant="primary" size="lg">
                  Book a Session
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="secondary" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            label="Studio interior photography"
            sublabel="Replace with real studio imagery"
            icon={Mic}
            aspectRatio="aspect-[4/5]"
            className="lg:aspect-[3/4]"
          />
        </div>
      </Section>

      {/* ── Services ── */}
      <Section id="services" className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="Services"
          title="What we offer."
          description="Every session type is fully configurable. Services, pricing, and availability are managed by the NNW team."
          className="mb-16"
        />

        <div className="space-y-px bg-border rounded-sm overflow-hidden">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-surface p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                <div className="md:col-span-1 flex items-center">
                  <Icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-lg font-bold tracking-wide uppercase">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <ul className="space-y-2">
                    {svc.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 text-sm text-text-muted"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-silver shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[10px] text-text-muted/60 text-center tracking-wide">
          Offerings shown are configurable — pricing and availability set by NNW
          administration.
        </p>
      </Section>

      {/* ── Studio Gallery ── */}
      <StudioGallery />

      {/* ── Equipment & Capabilities ── */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Equipment"
              title="Built for sound."
              description="Every piece of gear in the studio has been selected for performance, reliability, and creative flexibility."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipment.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-sm bg-surface border border-border/50"
                  >
                    <Icon
                      className="w-4 h-4 text-silver mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-xs font-medium tracking-wide uppercase text-text-primary">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-text-muted mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-[10px] text-text-muted/60 tracking-wide">
              Equipment list is a representative sample — full gear list
              configurable via admin.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Why NNW"
              title="The difference."
            />
            <div className="mt-12 space-y-8">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-sm bg-surface border border-border/50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-silver" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide uppercase">
                        {h.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── FAQ ── */}
      <StudioFaq />

      {/* ── Final CTA ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary text-center">
        <Badge variant="silver" size="md" className="mb-6">
          Now Booking
        </Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
          Ready to record?
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
          Find a time that works and reserve your session. Simple booking,
          professional results.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/studio/book">
            <Button variant="primary" size="xl">
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="xl">
              Ask a Question
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
