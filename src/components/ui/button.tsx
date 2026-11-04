"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-40 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-text-primary text-bg-primary hover:bg-chrome hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "border border-border text-text-primary hover:border-silver hover:text-chrome hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-surface",
        chrome:
          "bg-chrome-subtle border border-border text-chrome hover:border-silver hover:scale-[1.02] active:scale-[0.98]",
        link: "text-text-secondary underline-offset-4 hover:text-text-primary hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-sm",
        md: "h-11 px-6 text-sm rounded-sm",
        lg: "h-13 px-8 text-sm rounded-sm",
        xl: "h-14 px-10 text-base rounded-sm",
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
