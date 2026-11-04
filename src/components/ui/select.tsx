import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => (
    <div className="w-full">
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-sm border bg-surface px-4 text-sm text-text-primary transition-colors duration-200 appearance-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/50 focus-visible:border-silver/50",
          "disabled:cursor-not-allowed disabled:opacity-40",
          error ? "border-red-500/60" : "border-border",
          className
        )}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
);

Select.displayName = "Select";

export { Select };
