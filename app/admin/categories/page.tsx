import { getCategories } from "@/services/category.service";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>

      <PageHeader
        title="Categories"
        action={
            <Link href="/admin/categories/new">
            <Button>+ Add Category</Button>
            </Link>
        }
        />

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Slug</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
            {categories.map((category) => (
                <tr key={category.id}>
                <td className="border p-3">{category.name}</td>
                <td className="border p-3">{category.slug}</td>
                <td className="border p-3">
                    {category.isActive ? "Active" : "Inactive"}
                </td>
                <td className="border p-3">
                    <div className="flex gap-2">
                    <Link
                        href={`/admin/categories/${category.id}/edit`}
                        className="rounded bg-blue-500 px-3 py-1 text-white"
                    >
                        Edit
                    </Link>

                    <button className="rounded bg-red-500 px-3 py-1 text-white">
                        Delete
                    </button>
                    </div>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}