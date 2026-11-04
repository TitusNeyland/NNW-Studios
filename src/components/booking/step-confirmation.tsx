"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Check,
  Calendar,
  Clock,
  User,
  MapPin,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BookingConfirmation } from "@/features/booking/types";

interface StepConfirmationProps {
  confirmation: BookingConfirmation;
}

export function StepConfirmation({ confirmation }: StepConfirmationProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(confirmation.referenceId).catch(() => {});
  };

  return (
    <div className="text-center">
      {/* Success animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.1,
        }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
        >
          <Check className="w-10 h-10 text-black" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Booking Submitted
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary/70 max-w-md mx-auto">
          Your session request has been received. You&rsquo;ll get a
          confirmation once reviewed.
        </p>
      </motion.div>

      {/* Reference */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
      >
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-muted/40">
          Ref
        </span>
        <span className="text-[15px] font-bold text-text-primary tracking-widest font-mono">
          {confirmation.referenceId}
        </span>
        <button
          onClick={handleCopy}
          className="p-1 text-text-muted/30 hover:text-white transition-colors duration-300"
          aria-label="Copy reference ID"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3"
      >
        <span className="inline-flex items-center px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase text-text-muted/60 bg-white/[0.03] rounded-full border border-white/[0.06]">
          {confirmation.status === "pending"
            ? "Pending Review"
            : confirmation.status}
        </span>
      </motion.div>

      {/* Details card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 max-w-md mx-auto text-left rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
      >
        <div className="p-6 space-y-4">
          <DetailRow
            icon={Calendar}
            label="Date"
            value={formatDateFull(confirmation.date)}
          />
          <DetailRow
            icon={Clock}
            label="Time"
            value={`${confirmation.startTime} – ${confirmation.endTime} (${confirmation.timezone.replace("_", " ")})`}
          />
          <DetailRow
            icon={User}
            label="Engineer"
            value={confirmation.engineer}
          />
          <DetailRow icon={MapPin} label="Room" value={confirmation.room} />

          <div className="h-px bg-white/[0.04] my-1" />

          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted/50">Service</span>
            <span className="text-[13px] font-medium text-text-primary">
              {confirmation.service}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted/50">Total</span>
            <span className="text-[15px] font-bold text-text-primary tabular-nums">
              {confirmation.totalFormatted}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted/40">Deposit</span>
            <span className="text-[13px] text-text-secondary/60 tabular-nums">
              {confirmation.depositFormatted}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-md mx-auto text-left p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01]"
      >
        <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted/30 mb-3">
          What happens next
        </h3>
        <ul className="space-y-2">
          {[
            "Your booking will be reviewed by the NNW team",
            "You'll receive a confirmation email when approved",
            "Deposit details will be provided before your session",
            "Arrive 15 minutes before your session start time",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[13px] text-text-secondary/60"
            >
              <span className="text-text-muted/20 mt-0.5">→</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link href="/studio">
          <Button variant="secondary" size="lg">
            Back to Studio
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" size="lg">
            Go Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-text-muted/25 shrink-0 mt-0.5" />
      <div>
        <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-text-muted/30">
          {label}
        </p>
        <p className="text-[13px] text-text-primary mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function formatDateFull(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
