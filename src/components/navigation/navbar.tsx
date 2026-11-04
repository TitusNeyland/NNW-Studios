"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export function Navbar() {
  const [menuState, setMenuState] = useState<{
    open: boolean;
    openedOn: string;
  }>({ open: false, openedOn: "" });
  const pathname = usePathname();
  const scrolled = useScroll(20);

  const mobileOpen = menuState.open && menuState.openedOn === pathname;

  const toggleMenu = () =>
    setMenuState((s) =>
      s.open
        ? { open: false, openedOn: "" }
        : { open: true, openedOn: pathname }
    );

  const closeMenu = () => setMenuState({ open: false, openedOn: "" });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-text-primary focus:text-bg-primary focus:rounded-sm"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          scrolled
            ? "glass border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <nav
          className="flex items-center justify-between h-14 md:h-16 px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-baseline gap-1.5 group"
            aria-label="NNW Studios — Home"
          >
            <span className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-text-primary group-hover:text-chrome transition-colors duration-500">
              NNW
            </span>
            <span className="hidden sm:inline text-[9px] font-medium tracking-[0.25em] uppercase text-text-muted/60 group-hover:text-text-muted transition-colors duration-500">
              Studios
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {siteConfig.nav.main.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-500",
                    active
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-silver to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="ml-5 pl-5 border-l border-border/50">
              <Link href={siteConfig.nav.cta.href}>
                <Button variant="primary" size="sm">
                  {siteConfig.nav.cta.label}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="relative z-10 lg:hidden p-2 -mr-2 text-text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg-primary/[0.98] backdrop-blur-2xl lg:hidden"
          >
            <nav
              className="flex flex-col items-center justify-center h-full gap-1"
              aria-label="Mobile"
            >
              {siteConfig.nav.main.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      delay: 0.06 * i,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block text-3xl font-bold tracking-tight uppercase py-3 px-6 transition-colors duration-500",
                        active
                          ? "text-text-primary"
                          : "text-text-muted hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  delay: 0.06 * siteConfig.nav.main.length,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8"
              >
                <Link href={siteConfig.nav.cta.href} onClick={closeMenu}>
                  <Button variant="primary" size="lg">
                    {siteConfig.nav.cta.label}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
