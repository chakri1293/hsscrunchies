import Link from "next/link";
import { getSubCategories } from "@/services/subcategory.service";

export default async function SubCategoriesPage() {
  const subCategories = await getSubCategories();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sub Categories</h1>

        <Link
          href="/admin/subcategories/new"
          className="rounded bg-pink-500 px-4 py-2 text-white"
        >
          + Add Sub Category
        </Link>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {subCategories.map((subCategory) => (
            <tr key={subCategory.id}>
              <td className="border p-3">{subCategory.name}</td>
              <td className="border p-3">{subCategory.category.name}</td>
              <td className="border p-3">
                {subCategory.isActive ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}