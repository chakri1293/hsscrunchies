import { prisma } from "@/lib/prisma";

/**
 * Admin - Show all categories
 */
export async function getCategories() {
  return prisma.category.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
}

/**
 * Store - Show only active categories
 */
export async function getActiveCategories() {
  return prisma.category.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}