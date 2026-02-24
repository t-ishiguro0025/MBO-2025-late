import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .refine((v) => z.string().email().or(z.literal("")).safeParse(v).success, {
      message: "正しいメールアドレスを入力してください",
    }),
  password: z
    .string()
    .min(1, { message: "パスワードを入力してください" })
    .refine((v) => z.string().min(8).or(z.literal("")).safeParse(v).success, {
      message: "パスワードは8文字以上で入力してください",
    }),
});

export type LoginInput = z.infer<typeof loginSchema>;
