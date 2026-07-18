import { prisma } from "@/lib/prisma";

export async function getShopData(
  categorySlug?: string,
  subCategorySlug?: string
) {

  const categories = await prisma.category.findMany({
    where: {
      isActive: true,
    },
    include: {
      subCategories: {
        where: {
          isActive: true,
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
    orderBy: {
      displayOrder: "asc",
    },
  });

  const products = await prisma.product.findMany({
    where: {
      isActive: true,

      ...(subCategorySlug
        ? {
            subCategory: {
              slug: subCategorySlug,
            },
          }
        : categorySlug
        ? {
            subCategory: {
              category: {
                slug: categorySlug,
              },
            },
          }
        : {}),
    },

    include: {
      subCategory: {
        include: {
          category: true,
        },
      },

      images: {
        take: 1,
        orderBy: {
          displayOrder: "asc",
        },
      },
    },

    orderBy: {
      displayOrder: "asc",
    },
  });

  return {
    categories,
    products,
  };
}