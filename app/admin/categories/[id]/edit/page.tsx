type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Edit Category
      </h1>

      <p className="mt-4">
        Category ID: {id}
      </p>
    </div>
  );
}