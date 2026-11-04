"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";

export function FinalCta() {
  return (
    <Section className="py-32 md:py-40 lg:py-48">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-text-muted mb-6">
            Ready?
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] uppercase">
            Let&rsquo;s make
            <br />
            <span className="text-chrome-gradient">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
