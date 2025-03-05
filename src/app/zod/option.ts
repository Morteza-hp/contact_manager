import { z } from "zod";

export const requiredString = (min: number, fieldName: String) =>
  z
    .string()
    .nonempty({
      message: `${fieldName} ضروری است`,
    })
    .min(min, {
      message: `وارد کردن حداقل ${min} کرکتر ضروری است`,
    });

export const requiredNumber = (min: number, max: number, fieldName: String) =>
  z.coerce
    .number()
    .min(min, {
      message: `حداقل عدد مجاز ${min} است`,
    })
    .max(max, {
      message: `حداکثر عدد مجاز ${max} است`,
    });

export const requiredEmail = (fieldName: String) =>
  z
    .string()
    .nonempty({
      message: `${fieldName} ضروری است`,
    })
    .email({ message: "آدرس ایمیل معتبر نیست" })
    .min(7, {
      message: "وارد کردن حداقل 7 کرکتر ضروری است",
    });

export const SigninFormSchema = z.object({
  name: requiredString(2, "نام"),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل ۸ کرکتر باشد" })
    .regex(/[a-zA-Z]/, { message: "رمز عبور باید حداقل شامل یک حرف باشد." })
    .regex(/[0-9]/, { message: "رمز عبور باید حداقل شامل یک عدد باشد." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "رمز عبور باید حداقل شامل یک علامت خاص باشد.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
