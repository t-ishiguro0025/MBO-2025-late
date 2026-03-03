import { z } from "zod";

const emailOrEmptySchema = z.string().email().or(z.literal(""));
const passwordOrEmptySchema = z.string().min(8).or(z.literal(""));

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .refine((v) => emailOrEmptySchema.safeParse(v).success, {
      message: "正しいメールアドレスを入力してください",
    }),
  password: z
    .string()
    .min(1, { message: "パスワードを入力してください" })
    .refine((v) => passwordOrEmptySchema.safeParse(v).success, {
      message: "パスワードは8文字以上で入力してください",
    }),
});

export type LoginInput = z.infer<typeof loginSchema>;
