import { z } from "zod";

const regexPhone = /^\+\d{12}$/;

export const contactsSchema = z.object({
    userName: z
        .string()
        .min(3, { message: "Username must be at least 3 characters" }),
    phone: z.string().regex(regexPhone, "+380123456789"),
    message: z.string().optional(),
});

//extract the inferred type from schema
export type ContactsSchemaType = z.infer<typeof contactsSchema>;
