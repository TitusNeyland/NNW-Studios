"use client";

import {
  Globe,
  Palette,
  Bell,
  CreditCard,
  Shield,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const settingsSections = [
  {
    icon: Globe,
    title: "Site Information",
    description:
      "Business name, tagline, description, contact details, social links, and SEO defaults.",
  },
  {
    icon: Palette,
    title: "Branding & Appearance",
    description:
      "Logo, favicon, homepage hero content, featured imagery, and editable section copy.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Email notification settings for bookings, inquiries, and system events.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Stripe configuration, deposit rules, currency, and refund policies. Payment integration deferred.",
  },
  {
    icon: FileText,
    title: "Policies",
    description:
      "Booking policies, cancellation terms, privacy policy, and terms of service content.",
  },
  {
    icon: Shield,
    title: "Security & Access",
    description:
      "Role management, admin invitations, and access control settings.",
  },
];

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Settings
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Configure site-wide settings, branding, notifications, and policies.
        </p>
      </div>

      <div className="space-y-3">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="rounded-sm border border-border bg-surface p-5 flex items-start justify-between gap-4 hover:bg-surface-elevated transition-colors"
            >
              <div className="flex items-start gap-4">
                <Icon className="w-5 h-5 text-silver shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Configure
              </Button>
            </div>
          );
        })}
      </div>

      <Separator />

      <p className="text-[10px] text-text-muted/50 tracking-wide">
        Settings are stored in the Firestore <code>siteSettings</code>{" "}
        collection. Changes take effect immediately for public-facing content.
      </p>
    </div>
  );
}
