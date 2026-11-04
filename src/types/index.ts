/* ── NNW Studios Core Types ──
 *
 * These types define the domain model boundaries.
 * Firestore document shapes will align with these in Phase 3–4.
 */

// ── Roles ──
export type UserRole =
  | "guest"
  | "client"
  | "member"
  | "staff"
  | "engineer"
  | "admin"
  | "superadmin";

// ── Booking States ──
export type BookingStatus =
  | "draft"
  | "pending"
  | "pending_payment"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "rescheduled"
  | "refund_pending"
  | "refunded"
  | "expired";

// ── Payment States ──
export type PaymentStatus =
  | "none"
  | "pending"
  | "deposit_paid"
  | "paid"
  | "refund_pending"
  | "refunded"
  | "failed";

// ── Inquiry Statuses ──
export type InquiryStatus =
  | "new"
  | "reviewing"
  | "contacted"
  | "quoted"
  | "confirmed"
  | "declined"
  | "closed";

// ── Content Status ──
export type ContentStatus = "draft" | "published" | "archived";

// ── Service ──
export interface StudioService {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  priceMinorUnits: number;
  depositMinorUnits: number;
  currency: string;
  features: string[];
  eligibleEngineerIds: string[];
  active: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// ── Booking ──
export interface Booking {
  id: string;
  customerUid: string;
  customerSnapshot: {
    name: string;
    email: string;
    phone?: string;
    artistName?: string;
  };
  serviceId: string;
  roomId: string;
  engineerId: string;
  startUtc: string;
  endUtc: string;
  studioTimezone: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  totalMinorUnits: number;
  depositMinorUnits: number;
  currency: string;
  policyAcknowledged: boolean;
  notes?: string;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
}

// ── Event ──
export interface NnwEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  dateTimeUtc: string;
  venue: string;
  location: string;
  images: string[];
  lineup: string[];
  ticketUrl?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

// ── Content Article ──
export interface ContentArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  status: ContentStatus;
  authorId: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// ── DJ Inquiry ──
export interface DjInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  requestedDate: string;
  venue: string;
  estimatedAttendance?: number;
  budgetRange?: string;
  duration?: string;
  requirements?: string;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
}

// ── Consultation Inquiry ──
export interface ConsultationInquiry {
  id: string;
  name: string;
  email: string;
  organization?: string;
  projectType: string;
  goals: string;
  timeline?: string;
  budgetRange?: string;
  notes?: string;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
}
