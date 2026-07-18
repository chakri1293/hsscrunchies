import { createCategory } from "@/actions/category.actions";

export default function CategoryForm() {
  return (
    <form action={createCategory} className="space-y-6 max-w-xl">

      <div>
        <label className="block mb-2 font-medium">
          Category Name
        </label>

        <input
          name="name"
          className="w-full rounded border p-3"
          placeholder="Enter category name"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Slug
        </label>

        <input
          name="slug"
          className="w-full rounded border p-3"
          placeholder="scrunchies"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded bg-pink-500 px-6 py-3 text-white"
      >
        Save Category
      </button>

    </form>
  );
}