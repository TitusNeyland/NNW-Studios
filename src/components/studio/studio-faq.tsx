"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a studio session?",
    answer:
      "Use our online booking system to select your service, choose an available time slot, provide your details, and confirm your reservation. You can also contact us directly for custom session requests.",
  },
  {
    question: "What should I bring to my session?",
    answer:
      "Bring any reference tracks, lyrics, beats, or project files you want to work with. We provide all professional equipment and recording infrastructure. If you have specific gear preferences, let us know when you book.",
  },
  {
    question: "Can I choose my engineer?",
    answer:
      "Yes. During booking you can select a preferred engineer or let us assign the first available engineer who matches your session type. Engineer availability depends on your selected date and service.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation and rescheduling policies are configured by the NNW team. Specific terms will be displayed during the booking process before you confirm your reservation.",
  },
  {
    question: "Do you offer package rates?",
    answer:
      "We offer configurable session packages and membership options. Contact us to discuss pricing structures that match your project scope and timeline.",
  },
  {
    question: "Is the studio available on weekends?",
    answer:
      "Studio availability, including weekends and evenings, is configured by the NNW team. Check the booking calendar for real-time availability.",
  },
  {
    question: "Can I bring guests to my session?",
    answer:
      "Guest policies vary by session type and are set by the studio. Details will be provided during booking or can be discussed when you contact us.",
  },
];

export function StudioFaq() {
  return (
    <Section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions."
          align="center"
          className="mb-14"
        />

        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-[10px] text-text-muted/60 text-center tracking-wide">
          FAQs are editable through the NNW administration system.
        </p>
      </div>
    </Section>
  );
}
