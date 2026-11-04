import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Film,
  Camera,
  Pen,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Separator } from "@/components/ui/separator";
import { CultureGrid } from "@/components/culture/culture-grid";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Stories, creative expression, artist spotlights, and the ideas that drive the work at NNW Studios.",
  openGraph: {
    title: "Culture — NNW Studios",
    description:
      "Explore original editorial content, artist interviews, behind-the-scenes stories, and creative collaborations.",
  },
};

const categories = [
  { label: "All", value: "all" },
  { label: "Studio Life", value: "studio-life" },
  { label: "Interviews", value: "interviews" },
  { label: "Behind the Scenes", value: "bts" },
  { label: "Music", value: "music" },
  { label: "Events", value: "events" },
];

export default function CulturePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-3xl">
          <Badge variant="silver" size="md">
            Editorial
          </Badge>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
            Stories worth
            <br />
            <span className="text-chrome-gradient">telling.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            Creative expression, artist spotlights, behind-the-scenes stories,
            and the ideas that drive the work.
          </p>
        </div>
      </Section>

      {/* ── Featured Story ── */}
      <Section className="pb-16 md:pb-24">
        <Link
          href="/culture/behind-the-board"
          className="group block rounded-sm overflow-hidden border border-border hover:border-border/80 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ImagePlaceholder
              label="Featured story cover"
              sublabel="Replace with editorial photography"
              icon={Camera}
              aspectRatio="aspect-[16/10] lg:aspect-auto"
              className="lg:min-h-[420px] rounded-none border-0"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center bg-surface group-hover:bg-surface-elevated transition-colors duration-500">
              <Badge variant="chrome" size="md" className="w-fit mb-6">
                Featured
              </Badge>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-3">
                Studio Life
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                Behind the Board
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-md">
                An inside look at how sessions come together — from the first
                take to the final mix. The craft, the process, and the people
                who make it happen.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-text-muted group-hover:text-silver transition-colors duration-300">
                Read Story
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>
        <p className="mt-3 text-[10px] text-text-muted/50 tracking-wide">
          Placeholder content — all stories managed through the NNW CMS.
        </p>
      </Section>

      {/* ── Book Feature ── */}
      <Section className="py-16 md:py-24 bg-bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] md:w-[300px] aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/5">
              <Image
                src="/images/beats-bots-culture.png"
                alt="Beats, Bots, and Culture by DJ Macho — book cover"
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>
          </div>

          {/* Book details */}
          <div className="max-w-lg">
            <Badge variant="chrome" size="md" className="mb-6">
              <BookOpen className="w-3 h-3" />
              New Book
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-[1.1]">
              Beats, Bots,
              <br />
              <span className="text-chrome-gradient">and Culture</span>
            </h2>
            <p className="mt-2 text-sm font-medium tracking-wide uppercase text-text-muted">
              By DJ Macho
            </p>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Everything you need to know about AI as a music creative.
              DJ Macho explores how artificial intelligence is transforming music
              production, DJing, and the creative process — offering a grounded,
              real-world perspective for artists navigating the intersection of
              technology and culture.
            </p>
            <div className="mt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase bg-text-primary text-bg-primary rounded-sm hover:bg-silver transition-colors duration-300"
              >
                Get the Book
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── Category Filter + Grid ── */}
      <Section className="py-16 md:py-24">
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.value}
              className={`px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase rounded-sm transition-colors duration-300 ${
                i === 0
                  ? "bg-surface-elevated text-text-primary border border-border"
                  : "text-text-muted hover:text-text-primary hover:bg-surface"
              }`}
              aria-pressed={i === 0}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <CultureGrid />
      </Section>

      {/* ── Content Types ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="What we cover"
          title="Beyond the studio."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {[
            {
              icon: Pen,
              title: "Editorial",
              description:
                "Original articles and think pieces on music, creativity, and culture.",
            },
            {
              icon: Film,
              title: "Video",
              description:
                "Behind-the-scenes footage, session recaps, and creative collaborations.",
            },
            {
              icon: Camera,
              title: "Photography",
              description:
                "Lifestyle imagery, studio sessions, and event documentation.",
            },
            {
              icon: Newspaper,
              title: "Features",
              description:
                "Artist spotlights, interviews, and in-depth creative profiles.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-surface p-8 flex flex-col items-center text-center gap-4"
              >
                <Icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          Got a story?
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-md mx-auto">
          We&rsquo;re always looking for compelling creative narratives.
          Reach out to contribute or collaborate.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
