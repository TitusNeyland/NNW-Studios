"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  organization: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  goals: z.string().min(10, "Tell us a bit about your goals"),
  timeline: z.string().optional(),
  budgetRange: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 rounded-sm border border-border bg-surface min-h-[400px]">
        <CheckCircle2 className="w-10 h-10 text-silver mb-4" />
        <h3 className="text-xl font-bold tracking-tight uppercase">
          Inquiry Received
        </h3>
        <p className="mt-3 text-sm text-text-secondary max-w-sm">
          Thank you for reaching out. We&rsquo;ll review your inquiry and follow
          up within 48 hours to schedule a discovery call.
        </p>
        <p className="mt-6 text-[10px] text-text-muted tracking-wide">
          Demo submission — Firestore integration in Phase 4.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 p-8 rounded-sm border border-border bg-surface"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="consult-name">Name *</Label>
          <Input
            id="consult-name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <Label htmlFor="consult-email">Email *</Label>
          <Input
            id="consult-email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="consult-org">Organization / Artist Name</Label>
          <Input
            id="consult-org"
            placeholder="Optional"
            {...register("organization")}
          />
        </div>
        <div>
          <Label htmlFor="consult-type">Project Type *</Label>
          <Select
            id="consult-type"
            error={errors.projectType?.message}
            {...register("projectType")}
          >
            <option value="">Select type</option>
            <option value="creative-direction">Creative Direction</option>
            <option value="brand-strategy">Brand Strategy</option>
            <option value="artist-development">Artist Development</option>
            <option value="project-planning">Project Planning</option>
            <option value="business-consulting">Business Consulting</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="consult-goals">Project Goals *</Label>
        <Textarea
          id="consult-goals"
          placeholder="What are you trying to achieve? What challenges are you facing?"
          error={errors.goals?.message}
          {...register("goals")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="consult-timeline">Timeline</Label>
          <Select id="consult-timeline" {...register("timeline")}>
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="flexible">Flexible</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="consult-budget">Budget Range</Label>
          <Select id="consult-budget" {...register("budgetRange")}>
            <option value="">Select range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2k-5k">$2,000 – $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-plus">$25,000+</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="consult-notes">Additional Notes</Label>
        <Textarea
          id="consult-notes"
          placeholder="Anything else we should know?"
          className="min-h-[80px]"
          {...register("notes")}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        <Send className="w-4 h-4" />
      </Button>

      <p className="text-[10px] text-text-muted/50 text-center tracking-wide">
        Demo form — submissions will be stored in Firestore in Phase 4.
      </p>
    </form>
  );
}
