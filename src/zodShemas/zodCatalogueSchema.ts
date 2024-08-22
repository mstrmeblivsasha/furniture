import { z } from "zod";


export const zodCatalogueSchema = (categoriesArr: string[]) => z.object({
    category: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .superRefine((val, ctx) => {
            if (categoriesArr.includes(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Така категорія вже існує",
                    fatal: true,
                });
                return z.NEVER;
            }
        }),
    title: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    subTitle: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    description: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    image: z
        .string()
        .trim()
        .min(1, { message: "Додайте фото" }),
    sliderTitle: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    sliderImages: z
        .string()
        .array()
        .nonempty({ message: "Додайте фото" }),
});