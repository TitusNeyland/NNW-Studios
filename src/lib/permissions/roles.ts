import type { UserRole } from "@/types";

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  guest: 0,
  client: 1,
  member: 2,
  staff: 3,
  engineer: 3,
  admin: 4,
  superadmin: 5,
};

export function hasMinRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
}

export function isAdmin(role: UserRole): boolean {
  return role === "admin" || role === "superadmin";
}

export function isStaff(role: UserRole): boolean {
  return hasMinRole(role, "staff");
}

export const CLIENT_ROLES: UserRole[] = [
  "client",
  "member",
  "staff",
  "engineer",
  "admin",
  "superadmin",
];

export const ADMIN_ROLES: UserRole[] = ["admin", "superadmin"];
