import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-xs font-medium tracking-[0.1em] uppercase text-text-secondary mb-2 block",
      className
    )}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
