"use client";

import {
  Mic,
  SlidersHorizontal,
  Users,
  DoorOpen,
  Clock,
  CalendarOff,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  mockServices,
  mockEngineers,
  mockRooms,
  formatCurrency,
  formatDuration,
} from "@/features/booking/mock-data";

const managementSections = [
  { icon: Clock, label: "Operating Hours", description: "Set studio open/close hours" },
  { icon: CalendarOff, label: "Blackout Dates", description: "Block unavailable dates" },
  { icon: SlidersHorizontal, label: "Booking Rules", description: "Buffers, notice, max advance" },
];

export function AdminStudio() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Studio Management
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Manage services, engineers, rooms, and scheduling rules.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="rounded-sm border border-border bg-surface overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-silver" />
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Services
            </h2>
            <Badge variant="default" size="sm">
              {mockServices.length}
            </Badge>
          </div>
          <Button variant="secondary" size="sm">
            <Plus className="w-3.5 h-3.5" />
            Add Service
          </Button>
        </div>
        <div className="divide-y divide-border">
          {mockServices.map((svc) => (
            <div
              key={svc.id}
              className="p-5 flex items-center justify-between hover:bg-surface-elevated/50 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold">{svc.name}</p>
                <p className="text-xs text-text-muted mt-0.5">
                  {formatDuration(svc.durationMinutes)} · {formatCurrency(svc.priceMinorUnits)} · Deposit{" "}
                  {formatCurrency(svc.depositMinorUnits)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={svc.active ? "silver" : "default"} size="sm">
                  {svc.active ? "Active" : "Inactive"}
                </Badge>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineers */}
      <div className="rounded-sm border border-border bg-surface overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-silver" />
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Engineers
            </h2>
            <Badge variant="default" size="sm">
              {mockEngineers.length}
            </Badge>
          </div>
          <Button variant="secondary" size="sm">
            <Plus className="w-3.5 h-3.5" />
            Add Engineer
          </Button>
        </div>
        <div className="divide-y divide-border">
          {mockEngineers.map((eng) => (
            <div
              key={eng.id}
              className="p-5 flex items-center justify-between hover:bg-surface-elevated/50 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold">{eng.name}</p>
                <p className="text-xs text-text-muted mt-0.5">
                  {eng.title} · {eng.specialties.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="silver" size="sm">Active</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rooms */}
      <div className="rounded-sm border border-border bg-surface overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <DoorOpen className="w-4 h-4 text-silver" />
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Rooms
            </h2>
            <Badge variant="default" size="sm">
              {mockRooms.length}
            </Badge>
          </div>
          <Button variant="secondary" size="sm">
            <Plus className="w-3.5 h-3.5" />
            Add Room
          </Button>
        </div>
        <div className="divide-y divide-border">
          {mockRooms.map((room) => (
            <div
              key={room.id}
              className="p-5 flex items-center justify-between hover:bg-surface-elevated/50 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold">{room.name}</p>
                <p className="text-xs text-text-muted mt-0.5">
                  {room.description} · Capacity: {room.capacity}
                </p>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Scheduling */}
      <div className="rounded-sm border border-border bg-surface p-5">
        <h2 className="text-sm font-bold tracking-wide uppercase mb-4">
          Scheduling Configuration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {managementSections.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.label}
                className="flex items-start gap-3 p-4 rounded-sm border border-border hover:bg-surface-elevated transition-colors text-left"
              >
                <Icon className="w-4 h-4 text-silver shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold tracking-wide uppercase">
                    {s.label}
                  </p>
                  <p className="text-[10px] text-text-muted mt-0.5">
                    {s.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-[10px] text-text-muted/50 tracking-wide">
        All management actions will write to Firestore when configured. Editing
        forms will be modal or inline-edit based on field complexity.
      </p>
    </div>
  );
}
