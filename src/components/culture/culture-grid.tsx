"use client";

import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const articles = [
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
  {
    title: "Midnight Sessions",
    category: "Studio Life",
    excerpt:
      "Some of the best records happen after hours. A look at the late-night creative process.",
    slug: "midnight-sessions",
  },
  {
    title: "Building a Brand in Music",
    category: "Strategy",
    excerpt:
      "The intersection of creative identity and business — and why both matter equally.",
    slug: "building-a-brand-in-music",
  },
  {
    title: "The Producers You Should Know",
    category: "Interviews",
    excerpt:
      "Conversations with the people shaping the sound of the next generation.",
    slug: "producers-you-should-know",
  },
  {
    title: "Analog vs Digital",
    category: "Studio Life",
    excerpt:
      "The ongoing conversation about warmth, clarity, and what actually matters in the mix.",
    slug: "analog-vs-digital",
  },
];

export function CultureGrid() {
  return (
    <>
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
        {articles.map((article) => (
          <StaggerItem key={article.slug}>
            <Link
              href={`/culture/${article.slug}`}
              className="group block bg-surface hover:bg-surface-elevated transition-colors duration-500"
            >
              <ImagePlaceholder
                label={`${article.title} cover`}
                icon={Camera}
                aspectRatio="aspect-[16/10]"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-2">
                  {article.category}
                </p>
                <h3 className="text-base font-bold tracking-tight uppercase group-hover:text-chrome transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium tracking-wide uppercase text-text-muted group-hover:text-silver transition-colors duration-300">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
        Sample articles shown as placeholders — content managed through the NNW
        CMS.
      </p>
    </>
  );
}
