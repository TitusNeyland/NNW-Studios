import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center font-medium tracking-[0.1em] uppercase select-none",
  {
    variants: {
      variant: {
        default: "bg-surface border border-border text-text-muted",
        silver: "bg-surface border border-silver/30 text-silver",
        chrome: "bg-surface-elevated border border-border text-chrome",
      },
      size: {
        sm: "text-[9px] px-2 py-0.5 rounded-sm",
        md: "text-[10px] px-2.5 py-1 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}
