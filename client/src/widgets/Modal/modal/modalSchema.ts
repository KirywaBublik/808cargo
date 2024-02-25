import { z } from "zod";
export const loginFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Имя необходимо" }),
  lastName: z.string().min(1, {
    message: "Фамилия необхадима",
  }),
  patronymic: z.string().optional(),
  phone: z
    .string()
    .refine(
      (value) => /^7\d{10}$/.test(value),
      "Некорректный номер телефона",
    ),
  city: z.string().optional(),
});

export type LoginFormSchema = z.infer<
  typeof loginFormSchema
>;
