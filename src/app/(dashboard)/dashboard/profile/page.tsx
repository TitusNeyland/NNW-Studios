import type { Metadata } from "next";
import { ProfileSettings } from "@/components/dashboard/profile-settings";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your NNW Studios account settings.",
};

export default function ProfilePage() {
  return <ProfileSettings />;
}
