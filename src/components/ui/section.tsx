import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("relative w-full px-6 md:px-12 lg:px-20 xl:px-32", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
