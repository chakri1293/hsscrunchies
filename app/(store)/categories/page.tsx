import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { getActiveCategories } from "@/services/category.service";

export default async function CategoriesPage() {
  const categories = await getActiveCategories();

  return (
    <>
      {/* Hero */}
      <section className="bg-pink-50 py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">
              Shop Categories
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Explore our handmade collections crafted with love.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/${category.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-pink-100">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      🎀
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold">
                    {category.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-5 font-medium text-pink-600">
                    Explore Collection →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}