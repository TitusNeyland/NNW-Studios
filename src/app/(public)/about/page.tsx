import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "NNW Studios is a multidisciplinary creative company — culture, sound, experiences, and strategy.",
};

export default function AboutPage() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl">
        <SectionHeader
          eyebrow="About"
          title="Never Not Working."
          description="NNW Studios is a multidisciplinary creative company operating across music production, entertainment, culture, events, and consulting."
        />

        <Separator className="my-12 max-w-24 bg-silver/30" />

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            We exist at the intersection of sound and culture — building the
            infrastructure that supports creative people and the communities
            they serve.
          </p>
          <p>
            From the recording studio to the stage, from brand strategy to
            editorial storytelling, everything we do is designed to move ideas
            forward with intention and craft.
          </p>
          <p className="text-[10px] text-text-muted tracking-wide mt-8">
            Business details, team bios, and studio location are configurable
            through the NNW CMS.
          </p>
        </div>
      </div>
    </Section>
  );
}
