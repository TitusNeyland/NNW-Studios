"use client";

import { useState, useCallback } from "react";
import type {
  BookingStep,
  BookingFormData,
  BookingConfirmation,
} from "@/features/booking/types";
import { BOOKING_STEPS } from "@/features/booking/types";
import {
  mockServices,
  mockEngineers,
  mockRooms,
  formatCurrency,
  STUDIO_TIMEZONE,
} from "@/features/booking/mock-data";
import { BookingStepper } from "./booking-stepper";
import { StepService } from "./step-service";
import { StepEngineer } from "./step-engineer";
import { StepDatetime } from "./step-datetime";
import { StepDetails } from "./step-details";
import { StepReview } from "./step-review";
import { StepConfirmation } from "./step-confirmation";

const initialFormData: BookingFormData = {
  serviceId: "",
  engineerPreference: "choose",
  engineerId: null,
  roomId: "",
  date: "",
  timeSlot: null,
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  artistName: "",
  projectNotes: "",
  sessionFiles: [],
  policyAcknowledged: false,
};

export function BookingWizard() {
  const [step, setStep] = useState<BookingStep>("service");
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [confirmation, setConfirmation] =
    useState<BookingConfirmation | null>(null);

  const updateForm = useCallback(
    (patch: Partial<BookingFormData>) =>
      setFormData((prev) => ({ ...prev, ...patch })),
    []
  );

  const selectedService = mockServices.find((s) => s.id === formData.serviceId);
  const eligibleEngineers = selectedService
    ? mockEngineers.filter((e) =>
        selectedService.eligibleEngineerIds.includes(e.id)
      )
    : [];
  const selectedEngineer = formData.engineerId
    ? mockEngineers.find((e) => e.id === formData.engineerId) ?? null
    : null;
  const eligibleRooms = selectedService
    ? mockRooms.filter((r) =>
        selectedService.eligibleRoomIds.includes(r.id)
      )
    : [];
  const selectedRoom =
    mockRooms.find((r) => r.id === formData.roomId) ?? null;

  const goTo = (s: BookingStep) => setStep(s);

  const handleConfirm = async () => {
    if (!selectedService || !formData.timeSlot) return;

    // In production: server action creates a hold, validates availability
    // atomically, processes deposit, and returns a confirmed booking.
    await new Promise((r) => setTimeout(r, 1500));

    const ref = `NNW-${Date.now().toString(36).toUpperCase()}`;

    setConfirmation({
      referenceId: ref,
      status: "pending",
      paymentStatus: "none",
      service: selectedService.name,
      engineer: selectedEngineer?.name ?? "First Available",
      room: selectedRoom?.name ?? "Assigned at check-in",
      date: formData.date,
      startTime: formData.timeSlot.start,
      endTime: formData.timeSlot.end,
      timezone: STUDIO_TIMEZONE,
      totalFormatted: formatCurrency(selectedService.priceMinorUnits),
      depositFormatted: formatCurrency(selectedService.depositMinorUnits),
    });

    setStep("confirmation");
  };

  const stepIndex = BOOKING_STEPS.findIndex((s) => s.key === step);

  return (
    <div className="max-w-3xl mx-auto">
      {step !== "confirmation" && (
        <BookingStepper currentStep={step} completedIndex={stepIndex} />
      )}

      <div className="mt-8 md:mt-10">
        {step === "service" && (
          <StepService
            services={mockServices}
            selectedId={formData.serviceId}
            onSelect={(id) => {
              updateForm({
                serviceId: id,
                engineerId: null,
                roomId: "",
                date: "",
                timeSlot: null,
              });
            }}
            onNext={() => goTo("engineer")}
          />
        )}

        {step === "engineer" && selectedService && (
          <StepEngineer
            engineers={eligibleEngineers}
            preference={formData.engineerPreference}
            selectedId={formData.engineerId}
            onPreferenceChange={(p) =>
              updateForm({
                engineerPreference: p,
                engineerId: p === "first-available" ? null : formData.engineerId,
              })
            }
            onSelect={(id) => updateForm({ engineerId: id })}
            onBack={() => goTo("service")}
            onNext={() => {
              const room = eligibleRooms[0];
              if (room) updateForm({ roomId: room.id });
              goTo("datetime");
            }}
          />
        )}

        {step === "datetime" && selectedService && (
          <StepDatetime
            service={selectedService}
            engineerId={formData.engineerId}
            selectedDate={formData.date}
            selectedSlot={formData.timeSlot}
            onDateChange={(d) => updateForm({ date: d, timeSlot: null })}
            onSlotSelect={(s) => updateForm({ timeSlot: s })}
            onBack={() => goTo("engineer")}
            onNext={() => goTo("details")}
          />
        )}

        {step === "details" && (
          <StepDetails
            formData={formData}
            updateForm={updateForm}
            onBack={() => goTo("datetime")}
            onNext={() => goTo("review")}
          />
        )}

        {step === "review" && selectedService && (
          <StepReview
            formData={formData}
            service={selectedService}
            engineer={selectedEngineer}
            room={selectedRoom}
            onBack={() => goTo("details")}
            onConfirm={handleConfirm}
          />
        )}

        {step === "confirmation" && confirmation && (
          <StepConfirmation confirmation={confirmation} />
        )}
      </div>
    </div>
  );
}
