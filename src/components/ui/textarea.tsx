import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors duration-200 resize-y",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/50 focus-visible:border-silver/50",
          "disabled:cursor-not-allowed disabled:opacity-40",
          error ? "border-red-500/60" : "border-border",
          className
        )}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
);

Textarea.displayName = "Textarea";

export { Textarea };
