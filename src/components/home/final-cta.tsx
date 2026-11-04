"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";

export function FinalCta() {
  return (
    <Section className="relative py-36 md:py-44 lg:py-52 grain overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(192,192,192,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-text-muted/50 mb-8">
            Ready?
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
            Let&rsquo;s make
            <br />
            <span className="text-shimmer">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/studio/book">
              <Button variant="primary" size="xl">
                Book the Studio
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="xl">
                Work With Us
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
