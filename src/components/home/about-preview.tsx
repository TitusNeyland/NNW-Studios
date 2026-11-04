"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/motion";
import { Separator } from "@/components/ui/separator";

export function AboutPreview() {
  return (
    <Section className="py-24 md:py-32 lg:py-40 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <Separator className="mb-12 max-w-24 mx-auto bg-silver/30" />
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="text-center">
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
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted">
              NNW Studios — Never Not Working®
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <Separator className="mt-12 max-w-24 mx-auto bg-silver/30" />
        </Reveal>
      </div>
    </Section>
  );
}
