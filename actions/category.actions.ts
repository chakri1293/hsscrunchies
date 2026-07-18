"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
  const name = formData.get("name")?.toString() ?? "";
  const slug = formData.get("slug")?.toString() ?? "";

  await prisma.category.create({
    data: {
      name,
      slug,
      displayOrder: 0,
      isActive: true,
    },
  });

  redirect("/admin/categories");
}