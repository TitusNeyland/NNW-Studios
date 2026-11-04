"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mic,
  CalendarDays,
  PartyPopper,
  Newspaper,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ProtectedRoute } from "@/features/auth/protected-route";
import { useAuth } from "@/features/auth/auth-context";
import { ADMIN_ROLES } from "@/lib/permissions/roles";
import type { ReactNode } from "react";

const navSections = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Studio", href: "/admin/studio", icon: Mic },
      { label: "Bookings", href: "/admin/bookings", icon: CalendarDays },
      { label: "Events", href: "/admin/events", icon: PartyPopper },
    ],
  },
  {
    label: "Content",
    items: [
      { label: "Articles", href: "/admin/content", icon: Newspaper },
      { label: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Clients", href: "/admin/clients", icon: Users },
      { label: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute requiredRoles={ADMIN_ROLES} fallbackPath="/login">
      <AdminContent>{children}</AdminContent>
    </ProtectedRoute>
  );
}

function AdminContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { signOut } = useAuth();

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto">
        {/* Admin header */}
        <div className="flex items-center gap-2 mb-8">
          <Shield className="w-4 h-4 text-silver" />
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted">
            Administration
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <nav className="lg:w-56 shrink-0" aria-label="Admin">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {navSections.map((section) => (
                <div key={section.label} className="min-w-fit">
                  <p className="hidden lg:block text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted/60 mb-2 px-3">
                    {section.label}
                  </p>
                  <div className="flex lg:flex-col gap-0.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const active =
                        pathname === item.href ||
                        (item.href !== "/admin" &&
                          pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2.5 px-3 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors duration-200",
                            active
                              ? "bg-surface-elevated text-text-primary"
                              : "text-text-muted hover:text-text-primary hover:bg-surface"
                          )}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="min-w-fit lg:mt-4">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-sm font-medium text-text-muted hover:text-text-primary hover:bg-surface transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
