import { z } from "zod";


export const zodCatalogueUpdateSchema = (filteredCategoriesArr: string[]) => z.object({
    newCategory: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" })
        .superRefine((val, ctx) => {
            if (filteredCategoriesArr.includes(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Така категорія вже існує",
                    fatal: true,
                });
                return z.NEVER;
            }
        }),
    newTitle: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    newSubTitle: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    newDescription: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    newImage: z
        .string()
        .trim()
        .min(1, { message: "Додайте фото" }),
    newSliderTitle: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
    newSliderImages: z
        .string()
        .array()
        .nonempty({ message: "Додайте фото" }),
});