import { z } from "zod";

export const loginSchema = z.object({
  id: z
    .string()
    .min(4, { message: "아이디는 필수값입니다." })
    .regex(/^[a-zA-Z0-9]+$/, { message: "올바른 아이디 형식 입력" }),
  pw: z.string().min(8, { message: "비밀번호 8자 이상" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
