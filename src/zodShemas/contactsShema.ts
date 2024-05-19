import { z } from "zod";

const regexPhone = /^\+\d{12}$/;

export const contactsSchema = z.object({
    userName: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .min(2, { message: "Занадто коротке" })
        .max(40, { message: "Забагато символів" }),
    phone: z
        .string()
        .min(1, { message: "Заповніть це поле" })
        .regex(regexPhone, "+380981234567"),
    message: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .max(240, { message: "Забагато символів" }),
});

//extract the inferred type from schema
export type TypeContactsSchema = z.infer<typeof contactsSchema>;
