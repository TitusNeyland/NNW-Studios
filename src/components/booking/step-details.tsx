"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { BookingFormData } from "@/features/booking/types";
import { customerSchema, type CustomerFormData } from "@/features/booking/validation";
import { cn } from "@/lib/utils";

interface StepDetailsProps {
  formData: BookingFormData;
  updateForm: (patch: Partial<BookingFormData>) => void;
  onBack: () => void;
  onNext: () => void;
}

export function StepDetails({
  formData,
  updateForm,
  onBack,
  onNext,
}: StepDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      artistName: formData.artistName,
      projectNotes: formData.projectNotes,
      policyAcknowledged: formData.policyAcknowledged,
    },
  });

  const onSubmit = (data: CustomerFormData) => {
    updateForm({
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone ?? "",
      artistName: data.artistName ?? "",
      projectNotes: data.projectNotes ?? "",
      policyAcknowledged: data.policyAcknowledged,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
        Your Details
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Tell us who you are and anything we should know about your session.
      </p>

      <div className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="book-name">Full Name *</Label>
            <Input
              id="book-name"
              placeholder="Your name"
              error={errors.customerName?.message}
              {...register("customerName")}
            />
          </div>
          <div>
            <Label htmlFor="book-email">Email *</Label>
            <Input
              id="book-email"
              type="email"
              placeholder="you@example.com"
              error={errors.customerEmail?.message}
              {...register("customerEmail")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="book-phone">Phone</Label>
            <Input
              id="book-phone"
              type="tel"
              placeholder="(000) 000-0000"
              {...register("customerPhone")}
            />
          </div>
          <div>
            <Label htmlFor="book-artist">Artist / Project Name</Label>
            <Input
              id="book-artist"
              placeholder="Optional"
              {...register("artistName")}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="book-notes">Session Notes</Label>
          <Textarea
            id="book-notes"
            placeholder="Anything we should know — references, session goals, special requirements..."
            className="min-h-[100px]"
            {...register("projectNotes")}
          />
        </div>

        {/* Policy acknowledgement */}
        <div className="p-5 rounded-sm border border-border bg-surface">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("policyAcknowledged")}
              className={cn(
                "mt-1 h-4 w-4 rounded-sm border-border bg-surface text-silver accent-silver shrink-0",
                errors.policyAcknowledged && "ring-2 ring-red-500/50"
              )}
            />
            <div>
              <p className="text-sm text-text-primary font-medium">
                I acknowledge the session policy
              </p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                I understand that booking confirmation, cancellation, and
                rescheduling policies apply. Specific terms are displayed during
                review and are configurable by NNW Studios.
              </p>
              {errors.policyAcknowledged && (
                <p className="mt-1.5 text-xs text-red-400" role="alert">
                  {errors.policyAcknowledged.message}
                </p>
              )}
            </div>
          </label>
        </div>
      </div>

      <p className="mt-3 text-[10px] text-text-muted/50 tracking-wide">
        Guest booking supported. Account sign-in will be available in Phase 4.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" size="md" onClick={onBack} type="button">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button variant="primary" size="lg" type="submit">
          Review Booking
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}
