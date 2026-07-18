import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),

  subCategoryId: z.string(),

  price: z.coerce.number(),

  comparePrice: z.coerce.number().optional(),

  stock: z.coerce.number(),

  sku: z.string().optional(),

  shortDescription: z.string().optional(),

  description: z.string().optional(),

  isFeatured: z.boolean().optional(),

  isNewArrival: z.boolean().optional(),

  isBestSeller: z.boolean().optional(),

  isActive: z.boolean().optional()
});