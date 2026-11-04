"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  FolderOpen,
  User,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ProtectedRoute } from "@/features/auth/protected-route";
import { useAuth } from "@/features/auth/auth-context";
import { CLIENT_ROLES } from "@/lib/permissions/roles";
import type { ReactNode } from "react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { label: "Projects", href: "/dashboard/projects", icon: FolderOpen },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute requiredRoles={CLIENT_ROLES}>
      <DashboardContent>{children}</DashboardContent>
    </ProtectedRoute>
  );
}

function DashboardContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto">
        {/* Welcome header */}
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-1">
            Dashboard
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Welcome back
            {user?.displayName ? `, ${user.displayName.split(" ")[0]}` : ""}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar nav */}
          <nav className="lg:w-56 shrink-0" aria-label="Dashboard">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
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

              <button
                onClick={() => signOut()}
                className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-sm font-medium text-text-muted hover:text-text-primary hover:bg-surface transition-colors duration-200 mt-2 lg:mt-auto"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
