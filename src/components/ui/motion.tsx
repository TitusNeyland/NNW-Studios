"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  type Variants,
  type HTMLMotionProps,
} from "motion/react";

/* ── Reusable animation presets ── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* ── Scroll-triggered reveal wrapper ── */

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered container wrapper ── */

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  once?: boolean;
  stagger?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  className,
  once = true,
  stagger = 0.1,
  delayChildren = 0.1,
  ...props
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Single stagger item ── */

export function StaggerItem({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
