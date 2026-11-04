import type { BookableService, StudioRoom, Engineer, TimeSlot } from "./types";

export const STUDIO_TIMEZONE = "America/Chicago";

export const mockServices: BookableService[] = [
  {
    id: "svc-recording",
    name: "Recording Session",
    description:
      "Professional vocal and instrument tracking in an acoustically treated environment.",
    durationMinutes: 120,
    priceMinorUnits: 15000,
    depositMinorUnits: 5000,
    currency: "USD",
    features: [
      "Multi-track recording",
      "Premium mic selection",
      "Acoustically treated rooms",
      "Session engineer included",
    ],
    eligibleEngineerIds: ["eng-1", "eng-2", "eng-3"],
    eligibleRoomIds: ["room-a", "room-b"],
    active: true,
    sortOrder: 1,
  },
  {
    id: "svc-production",
    name: "Music Production",
    description:
      "Full production from arrangement to final output — tailored to your creative vision.",
    durationMinutes: 180,
    priceMinorUnits: 25000,
    depositMinorUnits: 10000,
    currency: "USD",
    features: [
      "Beat production",
      "Arrangement & composition",
      "Sound design",
      "Session musicians available",
    ],
    eligibleEngineerIds: ["eng-1", "eng-2"],
    eligibleRoomIds: ["room-a"],
    active: true,
    sortOrder: 2,
  },
  {
    id: "svc-mixing",
    name: "Mixing Session",
    description:
      "Industry-standard mix engineering that brings clarity, depth, and punch.",
    durationMinutes: 180,
    priceMinorUnits: 20000,
    depositMinorUnits: 7500,
    currency: "USD",
    features: [
      "Stem mixing",
      "Analog & digital processing",
      "Two revision rounds",
      "Reference matching",
    ],
    eligibleEngineerIds: ["eng-1", "eng-3"],
    eligibleRoomIds: ["room-a", "room-b"],
    active: true,
    sortOrder: 3,
  },
  {
    id: "svc-mastering",
    name: "Mastering",
    description:
      "Release-ready mastering optimized for streaming, vinyl, and broadcast.",
    durationMinutes: 60,
    priceMinorUnits: 10000,
    depositMinorUnits: 5000,
    currency: "USD",
    features: [
      "Streaming optimization",
      "Format-specific masters",
      "One revision round",
    ],
    eligibleEngineerIds: ["eng-3"],
    eligibleRoomIds: ["room-b"],
    active: true,
    sortOrder: 4,
  },
  {
    id: "svc-creative",
    name: "Creative Session",
    description:
      "Open-format studio time for writing, experimentation, and collaboration.",
    durationMinutes: 120,
    priceMinorUnits: 12000,
    depositMinorUnits: 5000,
    currency: "USD",
    features: [
      "Flexible session format",
      "Collaborative workspace",
      "Basic recording included",
    ],
    eligibleEngineerIds: ["eng-1", "eng-2", "eng-3"],
    eligibleRoomIds: ["room-a", "room-b"],
    active: true,
    sortOrder: 5,
  },
];

export const mockRooms: StudioRoom[] = [
  {
    id: "room-a",
    name: "Studio A",
    description: "Primary tracking room with full isolation booth and live room.",
    capacity: 6,
    active: true,
  },
  {
    id: "room-b",
    name: "Studio B",
    description: "Production suite optimized for mixing, mastering, and editing.",
    capacity: 3,
    active: true,
  },
];

export const mockEngineers: Engineer[] = [
  {
    id: "eng-1",
    name: "Marcus Cole",
    title: "Lead Engineer",
    bio: "10+ years of recording and production experience across hip-hop, R&B, and pop.",
    specialties: ["Recording", "Production", "Mixing"],
    active: true,
  },
  {
    id: "eng-2",
    name: "Ava Chen",
    title: "Producer / Engineer",
    bio: "Versatile producer and engineer with a focus on creative sessions and artist development.",
    specialties: ["Production", "Songwriting", "Creative Sessions"],
    active: true,
  },
  {
    id: "eng-3",
    name: "Derek Williams",
    title: "Mix / Mastering Engineer",
    bio: "Precision mix and mastering engineer specializing in clean, punchy, release-ready sound.",
    specialties: ["Mixing", "Mastering", "Recording"],
    active: true,
  },
];

export function formatCurrency(minorUnits: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(minorUnits / 100);
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}min`;
  if (m === 0) return `${h}hr`;
  return `${h}hr ${m}min`;
}

/**
 * Generate mock time slots for a given date.
 * In production, this queries Firestore for real availability
 * considering engineer schedules, room bookings, buffers, and blackout dates.
 */
export function generateMockSlots(
  date: string,
  durationMinutes: number
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startHour = 10;
  const endHour = 22;
  const slotDuration = durationMinutes;

  for (let hour = startHour; hour + slotDuration / 60 <= endHour; hour++) {
    const startH = hour.toString().padStart(2, "0");
    const endH = (hour + slotDuration / 60).toString().padStart(2, "0");

    const pseudo = simpleHash(`${date}-${hour}`);
    const available = pseudo % 3 !== 0;

    slots.push({
      start: `${startH}:00`,
      end: `${endH}:00`,
      available,
    });
  }

  return slots;
}

function simpleHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}
