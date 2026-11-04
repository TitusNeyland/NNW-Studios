"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Save, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/features/auth/auth-context";

const schema = z.object({
  displayName: z.string().min(2, "Name is required"),
});

type FormData = z.infer<typeof schema>;

export function ProfileSettings() {
  const { user, updateDisplayName } = useAuth();
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: user?.displayName ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    await updateDisplayName(data.displayName);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold tracking-tight uppercase">Profile</h2>

      {/* Profile form */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-6">
          Personal Information
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="profile-name">Display Name</Label>
            <Input
              id="profile-name"
              placeholder="Your name"
              error={errors.displayName?.message}
              {...register("displayName")}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input value={user?.email ?? ""} disabled />
            <p className="mt-1 text-[10px] text-text-muted">
              Email cannot be changed here.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
              <Save className="w-4 h-4" />
            </Button>
            {saved && (
              <span className="flex items-center gap-1.5 text-xs text-silver">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Saved
              </span>
            )}
          </div>
        </form>
      </div>

      <Separator />

      {/* Account details */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-6">
          Account Details
        </h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-text-muted">Account Role</span>
            <Badge variant="silver" size="md">
              {user?.role ?? "guest"}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-muted">Email Verified</span>
            <span className={user?.emailVerified ? "text-silver" : "text-text-muted"}>
              {user?.emailVerified ? "Verified" : "Not verified"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-muted">User ID</span>
            <span className="text-xs text-text-muted font-mono">
              {user?.uid?.slice(0, 12)}...
            </span>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="rounded-sm border border-border bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-4 h-4 text-silver" />
          <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted">
            Security
          </h3>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          Password changes and account deletion are handled through Firebase
          Authentication. Use the password reset flow from the sign-in page.
        </p>
        <Button variant="secondary" size="sm" disabled>
          Change Password
        </Button>
      </div>
    </div>
  );
}
