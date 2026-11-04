import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <div className="w-full">
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-sm border bg-surface px-4 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors duration-200",
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

Input.displayName = "Input";

export { Input };
