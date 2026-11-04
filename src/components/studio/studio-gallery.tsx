"use client";

import { Camera } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

export function StudioGallery() {
  return (
    <Section className="py-24 md:py-32 bg-bg-secondary">
      <Reveal>
        <SectionHeader
          eyebrow="The Space"
          title="See the studio."
          description="A look inside the environment where your next project comes to life."
          className="mb-14"
        />
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: "Control room", aspect: "aspect-[4/3]" },
          { label: "Live room", aspect: "aspect-[4/3]" },
          { label: "Vocal booth", aspect: "aspect-[4/3]" },
          { label: "Console detail", aspect: "aspect-[4/3]" },
          { label: "Lounge area", aspect: "aspect-[4/3]" },
          { label: "Equipment rack", aspect: "aspect-[4/3]" },
        ].map((item) => (
          <StaggerItem key={item.label}>
            <ImagePlaceholder
              label={item.label}
              sublabel="Replace with studio photo"
              icon={Camera}
              aspectRatio={item.aspect}
            />
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-4 text-[10px] text-text-muted/60 text-center tracking-wide">
        Gallery images are placeholders — replace with real studio photography.
      </p>
    </Section>
  );
}
