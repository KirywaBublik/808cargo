import { z } from "zod";
export const loginFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Имя необходимо" }),
  phone: z
    .string()
    .refine(
      (value) => /^7\d{10}$/.test(value),
      "Некорректный номер телефона",
    ),
  city: z.string().min(1, {
    message: "",
  }),
});

export type LoginFormSchema = z.infer<
  typeof loginFormSchema
>;
