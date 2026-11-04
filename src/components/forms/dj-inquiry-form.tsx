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
  phone: z.string().optional(),
  eventType: z.string().min(1, "Select an event type"),
  requestedDate: z.string().optional(),
  venue: z.string().optional(),
  estimatedAttendance: z.string().optional(),
  budgetRange: z.string().optional(),
  duration: z.string().optional(),
  requirements: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function DjInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    void _data; // Will be sent to Firestore
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
          Thank you for your interest. Our team will review your inquiry and
          follow up within 48 hours.
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
          <Label htmlFor="dj-name">Name *</Label>
          <Input
            id="dj-name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <Label htmlFor="dj-email">Email *</Label>
          <Input
            id="dj-email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="dj-phone">Phone</Label>
          <Input
            id="dj-phone"
            type="tel"
            placeholder="(000) 000-0000"
            {...register("phone")}
          />
        </div>
        <div>
          <Label htmlFor="dj-event-type">Event Type *</Label>
          <Select
            id="dj-event-type"
            error={errors.eventType?.message}
            {...register("eventType")}
          >
            <option value="">Select type</option>
            <option value="private-party">Private Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding</option>
            <option value="brand-activation">Brand Activation</option>
            <option value="festival">Festival</option>
            <option value="venue-residency">Venue / Residency</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="dj-date">Requested Date</Label>
          <Input
            id="dj-date"
            type="date"
            {...register("requestedDate")}
          />
        </div>
        <div>
          <Label htmlFor="dj-venue">Venue / Location</Label>
          <Input
            id="dj-venue"
            placeholder="Venue name or city"
            {...register("venue")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <Label htmlFor="dj-attendance">Est. Attendance</Label>
          <Input
            id="dj-attendance"
            placeholder="e.g. 200"
            {...register("estimatedAttendance")}
          />
        </div>
        <div>
          <Label htmlFor="dj-budget">Budget Range</Label>
          <Select id="dj-budget" {...register("budgetRange")}>
            <option value="">Select range</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-3k">$1,000 – $3,000</option>
            <option value="3k-5k">$3,000 – $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-plus">$10,000+</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="dj-duration">Set Duration</Label>
          <Select id="dj-duration" {...register("duration")}>
            <option value="">Select</option>
            <option value="1hr">1 Hour</option>
            <option value="2hr">2 Hours</option>
            <option value="3hr">3 Hours</option>
            <option value="4hr">4 Hours</option>
            <option value="4hr-plus">4+ Hours</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="dj-requirements">Additional Details</Label>
        <Textarea
          id="dj-requirements"
          placeholder="Tell us about your event, vibe, and any special requirements..."
          {...register("requirements")}
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
