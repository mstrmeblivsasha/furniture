import { z } from "zod";

const regexPhone = /^\+\d{12}$/;

export const contactsSchema = z.object({
    userName: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .min(3, { message: "Занадто коротке" })
        .max(40, { message: "Забагато символів" }),
    phone: z
        .string()
        .regex(regexPhone, "+380123456789")
        .max(16, { message: "Забагато символів" }),
    message: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .max(240, { message: "Too long" }),
});

//extract the inferred type from schema
export type TypeContactsSchema = z.infer<typeof contactsSchema>;
