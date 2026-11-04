"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Upload, X, Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { BookingFormData } from "@/features/booking/types";
import {
  customerSchema,
  type CustomerFormData,
} from "@/features/booking/validation";
import { cn } from "@/lib/utils";

const ACCEPTED_TYPES = [
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/aiff",
  "audio/x-aiff",
  "audio/flac",
  "audio/ogg",
  "audio/mp4",
  "audio/aac",
];
const ACCEPTED_EXTENSIONS = ".mp3,.wav,.aiff,.aif,.flac,.ogg,.m4a,.aac";
const MAX_FILE_SIZE = 100 * 1024 * 1024;
const MAX_FILES = 10;

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

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
  const [files, setFiles] = useState<File[]>(formData.sessionFiles ?? []);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    setFileError(null);

    const newFiles: File[] = [];
    for (let i = 0; i < incoming.length; i++) {
      const file = incoming[i];
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError(
          `"${file.name}" is not a supported audio format. Use MP3, WAV, AIFF, FLAC, OGG, M4A, or AAC.`
        );
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError(
          `"${file.name}" exceeds the 100 MB limit (${formatFileSize(file.size)}).`
        );
        return;
      }
      newFiles.push(file);
    }

    const combined = [...files, ...newFiles];
    if (combined.length > MAX_FILES) {
      setFileError(`Maximum of ${MAX_FILES} files allowed.`);
      return;
    }
    setFiles(combined);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError(null);
  };

  const onSubmit = (data: CustomerFormData) => {
    updateForm({
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone ?? "",
      artistName: data.artistName ?? "",
      projectNotes: data.projectNotes ?? "",
      sessionFiles: files,
      policyAcknowledged: data.policyAcknowledged,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Your Details
        </h2>
        <p className="mt-2 text-[15px] text-text-secondary/80">
          Tell us who you are and anything we should know.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name / Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Phone / Artist row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Notes */}
        <div>
          <Label htmlFor="book-notes">Session Notes</Label>
          <Textarea
            id="book-notes"
            placeholder="References, session goals, special requirements..."
            className="min-h-[100px]"
            {...register("projectNotes")}
          />
        </div>

        {/* File upload */}
        <div>
          <Label>Session Files</Label>
          <p className="text-[11px] text-text-muted/40 mt-0.5 mb-3">
            Upload beats, instrumentals, reference tracks, or rough recordings.
          </p>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add("border-white/20");
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-white/20");
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-white/20");
              addFiles(e.dataTransfer.files);
            }}
            className="w-full p-8 rounded-xl border border-dashed border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.025] hover:border-white/[0.12] transition-all duration-500 text-center cursor-pointer group"
          >
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] w-fit mx-auto mb-3 group-hover:bg-white/[0.05] transition-colors duration-500">
              <Upload className="w-5 h-5 text-text-muted/40 group-hover:text-text-muted transition-colors duration-500" />
            </div>
            <p className="text-[13px] font-medium text-text-secondary/70 group-hover:text-text-primary transition-colors duration-500">
              Click to upload or drag &amp; drop
            </p>
            <p className="text-[10px] text-text-muted/30 mt-1">
              MP3, WAV, AIFF, FLAC, OGG, M4A, AAC — up to 100 MB, max{" "}
              {MAX_FILES} files
            </p>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS}
            multiple
            className="hidden"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />

          {fileError && (
            <p className="mt-2 text-[11px] text-red-400/80" role="alert">
              {fileError}
            </p>
          )}

          {files.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {files.map((file, i) => (
                <div
                  key={`${file.name}-${file.size}-${i}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <Music className="w-3.5 h-3.5 text-text-muted/40 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-text-primary truncate">
                      {file.name}
                    </p>
                    <p className="text-[10px] text-text-muted/30">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="p-1.5 rounded-md text-text-muted/30 hover:text-red-400/80 hover:bg-white/[0.03] transition-colors duration-300"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Policy */}
        <div className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.015]">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("policyAcknowledged")}
              className={cn(
                "mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-white shrink-0",
                errors.policyAcknowledged && "ring-2 ring-red-500/40"
              )}
            />
            <div>
              <p className="text-[13px] text-text-primary font-medium">
                I acknowledge the session policy
              </p>
              <p className="mt-1 text-[11px] text-text-muted/40 leading-relaxed">
                Booking confirmation, cancellation, and rescheduling policies
                apply. Terms are displayed during review and configured by NNW
                Studios.
              </p>
              {errors.policyAcknowledged && (
                <p className="mt-1.5 text-[11px] text-red-400/80" role="alert">
                  {errors.policyAcknowledged.message}
                </p>
              )}
            </div>
          </label>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
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
