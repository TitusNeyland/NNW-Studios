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
import { customerSchema, type CustomerFormData } from "@/features/booking/validation";
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
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB per file
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
      setFileError(`You can upload a maximum of ${MAX_FILES} files.`);
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

        {/* Audio file upload */}
        <div>
          <Label>Session Files</Label>
          <p className="text-xs text-text-muted mt-0.5 mb-3">
            Upload any audio files needed for your session — beats,
            instrumentals, reference tracks, rough recordings, etc.
          </p>

          {/* Drop zone */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add("border-silver");
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-silver");
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-silver");
              addFiles(e.dataTransfer.files);
            }}
            className="w-full p-6 rounded-sm border border-dashed border-border bg-surface hover:bg-surface-elevated hover:border-text-muted transition-colors duration-200 text-center cursor-pointer group"
          >
            <Upload className="w-6 h-6 text-text-muted mx-auto mb-2 group-hover:text-silver transition-colors" />
            <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
              Click to upload or drag &amp; drop
            </p>
            <p className="text-[10px] text-text-muted mt-1">
              MP3, WAV, AIFF, FLAC, OGG, M4A, AAC — up to 100 MB each, max{" "}
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

          {/* Error */}
          {fileError && (
            <p className="mt-2 text-xs text-red-400" role="alert">
              {fileError}
            </p>
          )}

          {/* File list */}
          {files.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {files.map((file, i) => (
                <div
                  key={`${file.name}-${file.size}-${i}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-sm bg-surface border border-border"
                >
                  <Music className="w-4 h-4 text-silver shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary truncate">
                      {file.name}
                    </p>
                    <p className="text-[10px] text-text-muted">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="p-1 rounded-sm text-text-muted hover:text-red-400 hover:bg-surface-elevated transition-colors"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <p className="text-[10px] text-text-muted">
                {files.length} file{files.length !== 1 ? "s" : ""} selected
              </p>
            </div>
          )}
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
