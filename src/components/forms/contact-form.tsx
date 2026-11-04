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
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
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
      <div className="flex flex-col items-center justify-center text-center p-12 rounded-sm border border-border bg-surface min-h-[300px]">
        <CheckCircle2 className="w-10 h-10 text-silver mb-4" />
        <h3 className="text-xl font-bold tracking-tight uppercase">
          Message Sent
        </h3>
        <p className="mt-3 text-sm text-text-secondary max-w-sm">
          Thank you for reaching out. We&rsquo;ll get back to you within 48
          hours.
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
      className="space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="contact-name">Name *</Label>
          <Input
            id="contact-name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-subject">Subject *</Label>
        <Select
          id="contact-subject"
          error={errors.subject?.message}
          {...register("subject")}
        >
          <option value="">Select a subject</option>
          <option value="studio-booking">Studio Booking</option>
          <option value="dj-events">DJ & Events</option>
          <option value="consulting">Consulting</option>
          <option value="collaboration">Collaboration</option>
          <option value="press">Press & Media</option>
          <option value="general">General Inquiry</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          placeholder="Tell us what you're looking for..."
          error={errors.message?.message}
          {...register("message")}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </Button>

      <p className="text-[10px] text-text-muted/50 text-center tracking-wide">
        Demo form — submissions will be stored in Firestore in Phase 4.
      </p>
    </form>
  );
}
