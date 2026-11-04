import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const articlesData: Record<
  string,
  {
    title: string;
    category: string;
    excerpt: string;
    readTime: string;
    body: string[];
  }
> = {
  "behind-the-board": {
    title: "Behind the Board",
    category: "Studio Life",
    excerpt:
      "An inside look at how sessions come together — from the first take to the final mix.",
    readTime: "5 min read",
    body: [
      "Every record starts the same way — an idea, a feeling, something that needs to be captured. What happens between that first spark and the finished product is where the real work lives. It's not glamorous. It's repetitive, painstaking, and deeply technical. But it's also where the magic happens.",
      "Behind the board, an engineer is making thousands of micro-decisions. Gain staging, mic placement, compression ratios, EQ curves — each one invisible to the listener, but essential to the final result. The best engineers make it feel effortless. The truth is, it's anything but.",
      "At NNW Studios, we believe in process. Not the kind that slows you down, but the kind that ensures every session moves with intention. From the moment an artist walks through the door, the environment is designed to support their creative vision — not impose ours.",
      "This is what it means to be behind the board. It's not just about pushing faders. It's about understanding the artist, serving the song, and having the discipline to know when the record is done.",
    ],
  },
  "sound-and-the-city": {
    title: "Sound & The City",
    category: "Culture",
    excerpt:
      "How local music scenes shape identity and create communities worth protecting.",
    readTime: "4 min read",
    body: [
      "Every city has a sound. Not the official one — not the one you hear in tourism campaigns or on carefully curated playlists. The real one. The one that lives in basement studios, late-night sets, open mics, and the spaces between genres that nobody bothered to name.",
      "Local music scenes are ecosystems. They create identity, build community, and give artists a place to develop before the world is watching. When these scenes are healthy, they produce culture that travels. When they're neglected, something irreplaceable disappears.",
      "NNW exists to strengthen that infrastructure. Not to gatekeep it. Not to commercialize it beyond recognition. But to give it the professional resources it deserves — recording spaces, performance opportunities, strategic support, and visibility.",
    ],
  },
  "the-art-of-the-set": {
    title: "The Art of the Set",
    category: "Experiences",
    excerpt:
      "What separates a great DJ set from a forgettable one — and why curation matters.",
    readTime: "4 min read",
    body: [
      "Anyone can play songs. The difference between a DJ and a playlist is intention. It's the ability to read a room, to understand energy as a narrative arc, and to make a thousand strangers feel like they're exactly where they're supposed to be.",
      "A great set isn't about the biggest drops or the most recognizable tracks. It's about tension and release, about building moments that people carry with them long after the night ends. It's about curation — choosing not just what to play, but when, and why.",
      "This is what NNW brings to every performance. Not just music, but an experience designed to resonate. From song selection to transitions to the spaces between tracks, every detail matters.",
    ],
  },
  "midnight-sessions": {
    title: "Midnight Sessions",
    category: "Studio Life",
    excerpt:
      "Some of the best records happen after hours. A look at the late-night creative process.",
    readTime: "3 min read",
    body: [
      "There's something about working after midnight. The world gets quiet. The pressure lifts. The self-consciousness that colors daytime sessions starts to fade, and what's left is honesty.",
      "Some of the best records in history were made in the early hours — not because late nights are inherently creative, but because they strip away everything that isn't essential. No phone calls. No obligations. Just the work.",
      "At NNW, we respect the creative clock. Some artists do their best work at 10 AM. Others need the quiet of 2 AM. Our studio is built to accommodate both, because the schedule should serve the music — not the other way around.",
    ],
  },
  "building-a-brand-in-music": {
    title: "Building a Brand in Music",
    category: "Strategy",
    excerpt:
      "The intersection of creative identity and business — and why both matter equally.",
    readTime: "5 min read",
    body: [
      "Talent alone doesn't build careers. It's a necessary foundation, but without strategy, positioning, and intentional brand development, even exceptional artists get lost in the noise.",
      "Building a brand in music isn't about logos and color palettes — though those matter. It's about defining what you stand for, who you're speaking to, and how every piece of content, every performance, every release reinforces that identity.",
      "NNW's Strategy division exists for exactly this reason. We help artists and creative businesses build the infrastructure around their talent — the business models, the audience strategies, and the brand systems that turn great work into sustainable careers.",
    ],
  },
  "producers-you-should-know": {
    title: "The Producers You Should Know",
    category: "Interviews",
    excerpt:
      "Conversations with the people shaping the sound of the next generation.",
    readTime: "6 min read",
    body: [
      "Behind every great record is a producer who understood the assignment. Not just technically — creatively. The producers who shape culture aren't always the ones with the most credits. They're the ones who bring something unique to every session.",
      "In this series, we sit down with the producers and engineers who are pushing boundaries — the ones working in studios like ours, building sounds that haven't been categorized yet.",
      "These conversations are about process, philosophy, and the unglamorous reality of making something from nothing. Because that's what production really is — taking an idea that exists only in someone's head and making it real.",
    ],
  },
  "analog-vs-digital": {
    title: "Analog vs Digital",
    category: "Studio Life",
    excerpt:
      "The ongoing conversation about warmth, clarity, and what actually matters in the mix.",
    readTime: "4 min read",
    body: [
      "The analog vs. digital debate has been going on for decades, and it's not going to be settled in a blog post. But here's what we've learned from years of working with both: the best tool is the one that serves the song.",
      "Analog gear has character. Harmonic distortion, subtle compression, the way a signal interacts with physical components — these things are real, and they matter. But digital tools have precision, recall, and flexibility that analog can't match.",
      "At NNW Studios, we don't pick sides. We use both, strategically, based on what the project needs. Because the listener doesn't care whether you used a vintage compressor or a plugin. They care whether the record moves them.",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — NNW Studios`,
      description: article.excerpt,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export default async function CultureArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) notFound();

  return (
    <>
      <Section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <Link
          href="/culture"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Stories
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="chrome" size="md">
            {article.category}
          </Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] uppercase max-w-4xl">
          {article.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
          {article.excerpt}
        </p>
      </Section>

      <Section className="pb-12 md:pb-16">
        <ImagePlaceholder
          label={`${article.title} featured image`}
          sublabel="Replace with editorial photography"
          icon={Camera}
          aspectRatio="aspect-[21/9]"
        />
      </Section>

      <Section className="pb-24 md:pb-32">
        <article className="max-w-2xl mx-auto">
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-text-secondary leading-[1.8] mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <Separator className="my-12 max-w-24 bg-silver/30" />

          <p className="text-xs text-text-muted text-center tracking-wide">
            NNW Studios — Never Not Working®
          </p>
        </article>
      </Section>

      <p className="text-center pb-12 text-[10px] text-text-muted/50 tracking-wide">
        Placeholder article — content managed through the NNW CMS.
      </p>
    </>
  );
}
