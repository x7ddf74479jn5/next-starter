import { z } from "zod";

export const userSchema = z.object({
  id: z.number().min(1),
  bio: z.string().max(20).optional(),
});

export const updateUserSchema = z.object({
  bio: z.string().max(20, "bioは20文字以内で入力してください").optional(),
});
