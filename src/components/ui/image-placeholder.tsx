import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  icon?: LucideIcon;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({
  label = "Image placeholder",
  sublabel = "Replace with real imagery",
  icon: Icon,
  className,
  aspectRatio = "aspect-[16/9]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-secondary border border-border/50 rounded-sm",
        aspectRatio,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
        {Icon && (
          <Icon
            className="w-8 h-8 text-border"
            strokeWidth={1}
          />
        )}
        <p className="text-[10px] text-text-muted/70 tracking-[0.15em] uppercase text-center">
          {label}
        </p>
        {sublabel && (
          <p className="text-[9px] text-text-muted/40 text-center">
            {sublabel}
          </p>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
    </div>
  );
}
