import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mic,
  Music,
  Lightbulb,
  Palette,
  Users,
  Target,
  Award,
  Camera,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "NNW Studios is a multidisciplinary creative company — culture, sound, experiences, and strategy.",
  openGraph: {
    title: "About — NNW Studios",
    description:
      "We exist at the intersection of sound and culture — building the infrastructure that supports creative people.",
  },
};

const values = [
  {
    icon: Target,
    title: "Intentional",
    description:
      "Every decision has a purpose. We build with direction, not momentum alone.",
  },
  {
    icon: Award,
    title: "Excellent",
    description:
      "The standard is the standard. We don't ship anything we wouldn't put our name on.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "The best work comes from trust. We partner with our clients, not just execute for them.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description:
      "We find new solutions. Innovation isn't a buzzword — it's how we approach every project.",
  },
];

const divisions = [
  {
    icon: Palette,
    title: "Culture",
    description:
      "Lifestyle, creative expression, storytelling, original content, and cultural influence.",
  },
  {
    icon: Music,
    title: "Experiences",
    description:
      "DJ performances, curated parties, nightlife experiences, and event production.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Creative consulting, business strategy, brand development, and membership-based services.",
  },
  {
    icon: Mic,
    title: "Studio",
    description:
      "Professional recording sessions, music production, mixing, mastering, and artist development.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="silver" size="md">
              About NNW
            </Badge>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
              Never not
              <br />
              <span className="text-chrome-gradient">working.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              NNW Studios is a multidisciplinary creative company operating
              across music production, entertainment, culture, events, and
              consulting.
            </p>
          </div>
          <ImagePlaceholder
            label="Team / studio photography"
            sublabel="Replace with NNW team or studio image"
            icon={Camera}
            aspectRatio="aspect-[4/5]"
            className="lg:aspect-[3/4]"
          />
        </div>
      </Section>

      {/* ── Mission ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <Separator className="mb-12 max-w-24 mx-auto bg-silver/30" />
          <blockquote>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.3] tracking-tight">
              &ldquo;We don&rsquo;t just make music.
              <br />
              We build the infrastructure around it —
              <br />
              the spaces, the events, the strategy,
              <br />
              <span className="text-text-secondary">
                and the culture that holds it all together.&rdquo;
              </span>
            </p>
          </blockquote>
          <Separator className="mt-12 max-w-24 mx-auto bg-silver/30" />
        </div>
      </Section>

      {/* ── Story ── */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Built from the ground up."
            />
            <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
              <p>
                NNW Studios started with a simple belief: creative people
                deserve better infrastructure. Better spaces to make music.
                Better events to build community. Better strategy to turn
                talent into sustainable careers.
              </p>
              <p>
                What began as a recording studio has grown into a full creative
                ecosystem — connecting artists, brands, and audiences through
                culture, sound, and shared experiences.
              </p>
              <p>
                The name says it all. Never Not Working isn&rsquo;t about
                hustle culture. It&rsquo;s about commitment to craft. It&rsquo;s
                about showing up every day with intention, focus, and a
                willingness to do the hard work that most people skip.
              </p>
            </div>
            <p className="mt-8 text-[10px] text-text-muted tracking-wide">
              Story content is configurable through the NNW CMS.
            </p>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder
              label="Studio origin story"
              sublabel="Replace with founding / behind-the-scenes photo"
              icon={Camera}
              aspectRatio="aspect-[4/3]"
            />
            <ImagePlaceholder
              label="Team at work"
              sublabel="Replace with team or session photo"
              icon={Camera}
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </Section>

      {/* ── Values ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="Values"
          title="What drives us."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-surface p-8 flex flex-col items-center text-center gap-4"
              >
                <Icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
                <h3 className="text-sm font-bold tracking-wide uppercase">
                  {v.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Divisions Overview ── */}
      <Section className="py-24 md:py-32">
        <SectionHeader
          eyebrow="What We Do"
          title="Four disciplines. One vision."
          description="Everything connects. Each division supports the others, creating a creative ecosystem that's greater than the sum of its parts."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.title}
                className="bg-surface p-8 md:p-10 flex gap-5"
              >
                <Icon
                  className="w-6 h-6 text-silver shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-lg font-bold tracking-wide uppercase">
                    {div.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {div.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Team placeholder ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="Team"
          title="The people behind the work."
          description="Team bios and photos are managed through the NNW administration system."
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {["Founder", "Lead Engineer", "Creative Director", "Events Lead"].map(
            (role) => (
              <div key={role} className="text-center">
                <ImagePlaceholder
                  label={`${role} headshot`}
                  icon={Camera}
                  aspectRatio="aspect-square"
                  className="mb-3"
                />
                <p className="text-xs font-medium tracking-wide uppercase text-text-muted">
                  {role}
                </p>
              </div>
            )
          )}
        </div>
        <p className="mt-6 text-[10px] text-text-muted/50 text-center tracking-wide">
          Team profiles are placeholders — editable through admin CMS.
        </p>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          Let&rsquo;s build something.
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-md mx-auto">
          Whether you need studio time, a DJ, creative strategy, or a
          partnership — we&rsquo;re ready.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/studio/book">
            <Button variant="primary" size="lg">
              Book the Studio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
