import CategoryForm from "@/components/admin/CategoryForm";

export default function NewCategoryPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Add Category
      </h1>

      <CategoryForm />
    </div>
  );
}