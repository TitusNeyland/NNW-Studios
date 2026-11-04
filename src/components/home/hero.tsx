"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden grain"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary">
        {/* Radial spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(192,192,192,0.08),transparent_70%)]" />
        {/* Secondary ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(192,192,192,0.03),transparent_60%)]" />
        {/* Subtle horizontal line grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 120px, rgba(255,255,255,0.5) 120px, rgba(255,255,255,0.5) 121px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase text-text-muted/60 mb-8 md:mb-10">
            Est. MMXX — Houston, TX
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase"
        >
          Never Not
          <br />
          <span className="text-shimmer">Working.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 text-base md:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed tracking-tight"
        >
          A creative ecosystem built around sound, culture,
          <br className="hidden md:block" />
          and the people moving it forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/studio/book">
            <Button variant="primary" size="lg">
              Book a Studio Session
            </Button>
          </Link>
          <Link href="#divisions">
            <Button variant="ghost" size="lg">
              Explore NNW
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
