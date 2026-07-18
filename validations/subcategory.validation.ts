import { z } from "zod";

export const subCategorySchema = z.object({
    name: z
        .string()
        .min(2, "Sub category name must contain at least 2 characters")
        .max(50, "Sub category name cannot exceed 50 characters"),

    slug: z
        .string()
        .min(2, "Slug is required"),

    categoryId: z
        .string()
        .min(1, "Category is required"),
});


export type SubCategoryInput = z.infer<typeof subCategorySchema>;