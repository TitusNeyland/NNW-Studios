import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  TrendingUp,
  Users,
  Sparkles,
  Target,
  BarChart3,
  Crown,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ConsultationInquirySection } from "@/components/strategy/consultation-inquiry-section";

export const metadata: Metadata = {
  title: "Strategy",
  description:
    "Creative consulting, brand strategy, artist development, and membership services from NNW Studios.",
  openGraph: {
    title: "Strategy — NNW Studios",
    description:
      "Creative consulting for artists, brands, and entrepreneurs who are ready to move with intention.",
  },
};

const consultingServices = [
  {
    icon: Compass,
    title: "Creative Direction",
    description:
      "Define your visual and sonic identity. We help artists and brands develop a cohesive creative language that connects with their audience.",
    capabilities: [
      "Visual identity systems",
      "Art direction",
      "Brand voice development",
    ],
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy",
    description:
      "Position your brand for growth. From market positioning to audience development, we build strategies that compound over time.",
    capabilities: [
      "Market positioning",
      "Competitive analysis",
      "Growth roadmaps",
    ],
  },
  {
    icon: Users,
    title: "Artist Development",
    description:
      "Build a career, not just a catalog. We work with emerging and independent artists to develop sustainable creative businesses.",
    capabilities: [
      "Release strategy",
      "Audience building",
      "Partnership development",
    ],
  },
  {
    icon: Target,
    title: "Project Planning",
    description:
      "Turn ideas into executable plans. We help creative teams scope, sequence, and deliver ambitious projects on time.",
    capabilities: [
      "Project scoping",
      "Timeline development",
      "Resource planning",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Consulting",
    description:
      "Make smarter creative business decisions. Financial modeling, partnership evaluation, and operational strategy for creative companies.",
    capabilities: [
      "Revenue modeling",
      "Partnership strategy",
      "Operational systems",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative Consulting",
    description:
      "Fresh perspective, applied strategically. We partner with teams to solve creative problems and unlock new opportunities.",
    capabilities: [
      "Creative problem-solving",
      "Innovation workshops",
      "Concept development",
    ],
  },
];

const membershipTiers = [
  {
    name: "Associate",
    icon: Star,
    description:
      "For independent creatives looking for ongoing access and community.",
    features: [
      "Priority studio booking",
      "Member rate on sessions",
      "Access to NNW events",
      "Monthly creative brief",
    ],
  },
  {
    name: "Partner",
    icon: Crown,
    description:
      "For serious artists and businesses seeking strategic creative partnership.",
    features: [
      "Everything in Associate",
      "Quarterly strategy sessions",
      "Dedicated project manager",
      "Custom content production",
      "Brand collaboration access",
    ],
    featured: true,
  },
];

export default function StrategyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl">
          <Badge variant="silver" size="md">
            Consulting
          </Badge>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
            Ideas need
            <br />
            <span className="text-chrome-gradient">direction.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            Creative consulting for artists, brands, and entrepreneurs who are
            ready to move with intention. We help you build what matters.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#inquire">
              <Button variant="primary" size="lg">
                Start a Conversation
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
      </Section>

      {/* ── Approach ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="Our Approach"
            title="Strategy is craft."
            description="We don't do templates. Every engagement starts with understanding your specific goals, constraints, and creative identity — then we build a plan that actually works."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                description:
                  "Deep discovery into your goals, audience, competitive landscape, and creative identity.",
              },
              {
                step: "02",
                title: "Strategize",
                description:
                  "Build a clear, actionable plan with priorities, timelines, and measurable outcomes.",
              },
              {
                step: "03",
                title: "Execute",
                description:
                  "Implement alongside your team with ongoing support, iteration, and accountability.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="text-center p-6"
              >
                <p className="text-3xl font-bold text-chrome-gradient mb-3">
                  {phase.step}
                </p>
                <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Services ── */}
      <Section id="services" className="py-24 md:py-32">
        <SectionHeader
          eyebrow="Services"
          title="How we help."
          description="Configurable consulting services tailored to creative professionals and businesses."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {consultingServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-surface p-8 flex flex-col"
              >
                <Icon className="w-6 h-6 text-silver mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold tracking-wide uppercase mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                  {svc.description}
                </p>
                <ul className="space-y-1.5">
                  {svc.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2 text-xs text-text-muted"
                    >
                      <CheckCircle2 className="w-3 h-3 text-silver shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[10px] text-text-muted/50 text-center tracking-wide">
          Services shown are configurable — not all may be currently offered.
        </p>
      </Section>

      {/* ── Membership ── */}
      <Section className="py-24 md:py-32 bg-bg-secondary">
        <SectionHeader
          eyebrow="Membership"
          title="Go further together."
          description="Membership tiers designed for creative professionals who want ongoing access, priority booking, and strategic support."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {membershipTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-sm border p-8 flex flex-col ${
                  tier.featured
                    ? "border-silver/40 bg-surface-elevated"
                    : "border-border bg-surface"
                }`}
              >
                {tier.featured && (
                  <Badge
                    variant="silver"
                    size="sm"
                    className="absolute top-4 right-4"
                  >
                    Popular
                  </Badge>
                )}
                <Icon className="w-6 h-6 text-silver mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold tracking-wide uppercase">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-silver shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-text-muted mb-3">
                    Pricing determined by NNW — contact for details.
                  </p>
                  <Link href="#inquire">
                    <Button
                      variant={tier.featured ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                    >
                      Inquire
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[10px] text-text-muted/50 text-center tracking-wide">
          Membership details are configurable — benefits and pricing not yet
          finalized. Payment integration deferred.
        </p>
      </Section>

      <Separator className="mx-6 md:mx-12 lg:mx-20 xl:mx-32" />

      {/* ── Consultation Inquiry ── */}
      <ConsultationInquirySection />
    </>
  );
}
