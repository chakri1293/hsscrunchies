import { prisma } from "@/lib/prisma";


// Get all sub categories
export async function getSubCategories() {
  return await prisma.subCategory.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}


// Get sub categories by category
export async function getSubCategoriesByCategory(
  categoryId: string
) {
  return await prisma.subCategory.findMany({
    where: {
      categoryId,
      isActive: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}


// Create sub category
export async function createSubCategory(data: {
  name: string;
  slug: string;
  description?: string;
  categoryId: string;
  displayOrder?: number;
}) {

  return await prisma.subCategory.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      categoryId: data.categoryId,
      displayOrder: data.displayOrder ?? 0,
      isActive: true,
    },
  });

}