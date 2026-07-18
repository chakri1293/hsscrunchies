import { getCategories } from "@/services/category.service";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>
    
      <div className="mb-6 flex justify-between">
        <h2 className="text-3xl font-bold">
            Categories
        </h2>

        <Link
            href="/admin/categories/new"
            className="rounded bg-pink-500 px-5 py-2 text-white"
        >
            + Add Category
        </Link>
    </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Slug</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((c) => (
            <tr key={c.id}>
              <td className="border p-3">{c.name}</td>
              <td className="border p-3">{c.slug}</td>
              <td className="border p-3">
                {c.isActive ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}