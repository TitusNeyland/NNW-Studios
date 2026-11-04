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
  // Track the pathname that opened the menu; close when it changes
  const [menuState, setMenuState] = useState<{
    open: boolean;
    openedOn: string;
  }>({ open: false, openedOn: "" });
  const pathname = usePathname();
  const scrolled = useScroll(50);

  const mobileOpen = menuState.open && menuState.openedOn === pathname;

  const toggleMenu = () =>
    setMenuState((s) =>
      s.open ? { open: false, openedOn: "" } : { open: true, openedOn: pathname }
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav
          className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 group"
            aria-label="NNW Studios — Home"
          >
            <span className="text-lg md:text-xl font-bold tracking-[0.15em] uppercase text-text-primary group-hover:text-chrome transition-colors duration-300">
              NNW
            </span>
            <span className="hidden sm:inline text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted group-hover:text-text-secondary transition-colors duration-300">
              Studios
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.main.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300",
                    active
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-px bg-silver"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <Link href={siteConfig.nav.cta.href} className="ml-4">
              <Button variant="primary" size="sm">
                {siteConfig.nav.cta.label}
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="relative z-10 lg:hidden p-2 -mr-2 text-text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-md lg:hidden"
          >
            <nav
              className="flex flex-col items-center justify-center h-full gap-2"
              aria-label="Mobile"
            >
              {siteConfig.nav.main.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block text-2xl font-bold tracking-[0.1em] uppercase py-3 px-6 transition-colors duration-300",
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: 0.05 * siteConfig.nav.main.length,
                  duration: 0.3,
                }}
                className="mt-6"
              >
                <Link
                  href={siteConfig.nav.cta.href}
                  onClick={closeMenu}
                >
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
