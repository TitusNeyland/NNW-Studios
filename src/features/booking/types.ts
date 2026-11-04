import type { BookingStatus, PaymentStatus } from "@/types";

export interface StudioRoom {
  id: string;
  name: string;
  description: string;
  capacity: number;
  active: boolean;
}

export interface Engineer {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  active: boolean;
}

export interface BookableService {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  priceMinorUnits: number;
  depositMinorUnits: number;
  currency: string;
  features: string[];
  eligibleEngineerIds: string[];
  eligibleRoomIds: string[];
  active: boolean;
  sortOrder: number;
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface BookingFormData {
  serviceId: string;
  engineerPreference: "choose" | "first-available";
  engineerId: string | null;
  roomId: string;
  date: string;
  timeSlot: TimeSlot | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  artistName: string;
  projectNotes: string;
  sessionFiles: File[];
  policyAcknowledged: boolean;
}

export interface BookingDraft {
  service: BookableService;
  engineer: Engineer | null;
  room: StudioRoom;
  date: string;
  timeSlot: TimeSlot;
  customer: {
    name: string;
    email: string;
    phone: string;
    artistName: string;
  };
  projectNotes: string;
  sessionFiles: File[];
  policyAcknowledged: boolean;
}

export interface BookingConfirmation {
  referenceId: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  service: string;
  engineer: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  timezone: string;
  totalFormatted: string;
  depositFormatted: string;
}

export type BookingStep =
  | "service"
  | "engineer"
  | "datetime"
  | "details"
  | "review"
  | "confirmation";

export const BOOKING_STEPS: { key: BookingStep; label: string }[] = [
  { key: "service", label: "Service" },
  { key: "engineer", label: "Engineer" },
  { key: "datetime", label: "Date & Time" },
  { key: "details", label: "Details" },
  { key: "review", label: "Review" },
  { key: "confirmation", label: "Confirmed" },
];
