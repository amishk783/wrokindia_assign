import * as z from "zod";

export const registerSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "user"]).default("user"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const trainCreateSchema = z.object({
  trainName: z.string().min(1, "Train name required"),
  totalSeats: z.number(),
  source_station: z.string().min(1, "Source station required"),
  destination_station: z.string().min(1, "Destination station required"),
});
