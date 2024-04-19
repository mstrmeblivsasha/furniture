import { z } from "zod";


export const zodCatalogueUpdateSchema = z.object({
    newCategory: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
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


//extract the inferred type from schema
export type TypeCatalogueUpdateSchema = z.infer<typeof zodCatalogueUpdateSchema>;