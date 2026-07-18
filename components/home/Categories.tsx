import Link from "next/link";
import Container from "@/components/layout/Container";
import { getActiveCategories } from "@/services/category.service";

export default async function Categories() {
  const categories = await getActiveCategories();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-500">
            Browse our beautiful collection
          </p>
        </div>

        {categories.length === 0 ? (
          <p className="text-center text-gray-500">
            No categories found.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-32 overflow-hidden rounded-xl bg-pink-100">

                {category.image ? (
                    <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                    <span className="text-5xl">
                        🎀
                    </span>
                    </div>
                )}

                </div>

                <h3 className="text-lg font-semibold">
                  {category.name}
                </h3>

                {category.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}