import { z } from "zod";

export const customerSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  customerEmail: z.string().email("Valid email is required"),
  customerPhone: z.string().optional(),
  artistName: z.string().optional(),
  projectNotes: z.string().optional(),
  policyAcknowledged: z
    .boolean()
    .refine((v) => v === true, "You must acknowledge the session policy"),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
