import type { BookingStatus } from "@/types";

/**
 * Booking State Machine
 *
 * Documents allowed transitions between booking states.
 * In production, these transitions are enforced server-side
 * via Firestore transactions — never client-side.
 *
 * States:
 *   draft → pending → pending_payment → confirmed → completed
 *                   ↘ cancelled                    ↘ cancelled
 *                   ↘ expired                      ↘ rescheduled → pending
 *           confirmed → refund_pending → refunded
 *
 * Hold lifecycle:
 *   1. Customer selects a slot → temporary hold created (bookingHolds collection)
 *   2. Hold has an expiration (e.g., 10 minutes)
 *   3. Customer completes details + review → booking created as "pending"
 *   4. Hold is consumed atomically in the same transaction
 *   5. If hold expires before completion → slot released automatically
 *
 * Conflict prevention:
 *   - Slot allocation uses Firestore transactions
 *   - A simple availability query followed by a separate write is NOT safe
 *   - The transaction checks: room availability, engineer availability,
 *     existing holds, blackout dates, operating hours, and buffers
 *   - If any conflict is detected, the transaction is aborted
 *
 * Engineer unavailability policy:
 *   1. Notify customer promptly
 *   2. Offer eligible alternative with explicit consent
 *   3. Offer reschedule with original engineer
 *   4. Offer refund if alternatives unacceptable
 *   5. NEVER silently substitute an engineer
 */

export const ALLOWED_TRANSITIONS: Record<BookingStatus, BookingStatus[]> = {
  draft: ["pending", "cancelled", "expired"],
  pending: ["pending_payment", "confirmed", "cancelled", "expired"],
  pending_payment: ["confirmed", "cancelled", "expired"],
  confirmed: ["completed", "cancelled", "rescheduled"],
  completed: [],
  cancelled: [],
  rescheduled: ["pending", "cancelled"],
  refund_pending: ["refunded"],
  refunded: [],
  expired: [],
};

export function canTransition(
  from: BookingStatus,
  to: BookingStatus
): boolean {
  return ALLOWED_TRANSITIONS[from]?.includes(to) ?? false;
}

/**
 * Hold configuration — configurable per studio
 */
export const HOLD_CONFIG = {
  expirationMinutes: 10,
  maxActiveHoldsPerCustomer: 2,
} as const;

/**
 * Scheduling constraints — all configurable via admin
 */
export const SCHEDULING_DEFAULTS = {
  operatingHoursStart: 10,
  operatingHoursEnd: 22,
  bufferMinutes: 30,
  minimumNoticeHours: 24,
  maximumAdvanceDays: 60,
  timezone: "America/Chicago",
} as const;
