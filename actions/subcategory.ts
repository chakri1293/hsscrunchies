"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function createSubCategoryAction(data: {
  name: string;
  slug: string;
  categoryId: string;
}) {

  try {

    const subCategory =
      await prisma.subCategory.create({
        data: {
          name: data.name,
          slug: data.slug,
          categoryId: data.categoryId,
          isActive: true,
          displayOrder: 0,
        },
      });


    revalidatePath("/admin/subcategories");


    return {
      success: true,
      data: subCategory,
    };


  } catch (error) {

    console.log(error);

    return {
      success:false,
      message:"Failed to create sub category"
    };

  }

}