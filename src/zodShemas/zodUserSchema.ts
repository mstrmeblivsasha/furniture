import { z } from "zod";


export const zodUserSchema = z.object({
    email: z
        .string()
        .trim()
        .email(),
    password: z
        .string()
        .trim()
        .min(6, { message: "Заповніть це поле" }),
});


//extract the inferred type from schema
export type TypeUserSchema = z.infer<typeof zodUserSchema>;