"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-bg-primary">
        {/* Atmospheric gradient overlay — replaces real video/image until assets exist */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/60 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,192,192,0.04)_0%,transparent_70%)]" />
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-text-muted mb-6 md:mb-8">
            Est. MMXX
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] uppercase"
        >
          Never Not
          <br />
          <span className="text-chrome-gradient">Working.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          A creative ecosystem built around sound, culture,
          <br className="hidden md:block" />
          and the people moving it forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/studio/book">
            <Button variant="primary" size="lg">
              Book a Studio Session
            </Button>
          </Link>
          <Link href="#divisions">
            <Button variant="secondary" size="lg">
              Explore NNW
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
