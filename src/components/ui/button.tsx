"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-[0.1em] uppercase transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-30 select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-text-primary text-bg-primary hover:bg-chrome active:scale-[0.97] shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
        secondary:
          "border border-border/80 text-text-primary hover:border-text-muted hover:bg-white/[0.03] active:scale-[0.97]",
        ghost:
          "text-text-muted hover:text-text-primary hover:bg-white/[0.04]",
        chrome:
          "bg-chrome-subtle border border-border text-chrome hover:border-text-muted active:scale-[0.97]",
        link: "text-text-muted underline-offset-4 hover:text-text-primary hover:underline p-0 h-auto tracking-normal",
      },
      size: {
        sm: "h-8 px-4 text-[10px] rounded-[4px]",
        md: "h-10 px-5 text-[11px] rounded-[4px]",
        lg: "h-12 px-7 text-xs rounded-[5px]",
        xl: "h-14 px-9 text-xs rounded-[5px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
