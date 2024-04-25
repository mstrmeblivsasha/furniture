import { z } from "zod";


export const zodCatalogueSchema = z.object({
    category: z
        .string()
        .trim()
        .min(1, { message: "Заповніть це поле" }),
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