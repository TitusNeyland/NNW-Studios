import { Hero } from "@/components/home/hero";
import { Divisions } from "@/components/home/divisions";
import { StudioFeature } from "@/components/home/studio-feature";
import { ExperiencesPreview } from "@/components/home/experiences-preview";
import { CulturePreview } from "@/components/home/culture-preview";
import { StrategyPreview } from "@/components/home/strategy-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <StudioFeature />
      <ExperiencesPreview />
      <CulturePreview />
      <StrategyPreview />
      <AboutPreview />
      <FinalCta />
    </>
  );
}
