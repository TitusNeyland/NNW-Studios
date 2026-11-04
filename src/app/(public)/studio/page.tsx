import type { Metadata } from "next";
import Link from "next/link";
import { Mic, SlidersHorizontal, Headphones, Volume2, Music } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Professional recording sessions, music production, mixing, mastering, and artist development at NNW Studios.",
};

const services = [
  {
    icon: Mic,
    title: "Recording Sessions",
    description:
      "Professional vocal and instrument tracking in an acoustically treated environment with top-tier equipment.",
  },
  {
    icon: Volume2,
    title: "Music Production",
    description:
      "Full production services from arrangement to final output — tailored to your creative vision.",
  },
  {
    icon: SlidersHorizontal,
    title: "Mixing",
    description:
      "Industry-standard mix engineering that brings clarity, depth, and punch to your recordings.",
  },
  {
    icon: Headphones,
    title: "Mastering",
    description:
      "Release-ready mastering optimized for streaming, vinyl, and broadcast distribution.",
  },
  {
    icon: Music,
    title: "Creative Sessions",
    description:
      "Open-format studio time for writing, experimentation, and collaborative creative work.",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
            Studio
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
            Make your next
            <br />
            <span className="text-chrome-gradient">record here.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            A professional creative environment designed for artists who take
            their craft seriously.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/studio/book">
              <Button variant="primary" size="lg">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-20 md:py-28 bg-bg-secondary">
        <SectionHeader
          eyebrow="Services"
          title="What we offer."
          description="Every session type is configurable — services, pricing, and availability are managed by the NNW team."
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-surface p-8 flex flex-col gap-4"
              >
                <Icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
                <h3 className="text-base font-bold tracking-wide uppercase">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[10px] text-text-muted/60 text-center tracking-wide">
          Offerings shown are configurable — pricing and availability set by
          NNW administration.
        </p>
      </Section>

      {/* CTA */}
      <Section className="py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          Ready to record?
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Find a time that works and reserve your session.
        </p>
        <div className="mt-8">
          <Link href="/studio/book">
            <Button variant="primary" size="xl">
              Book a Session
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
