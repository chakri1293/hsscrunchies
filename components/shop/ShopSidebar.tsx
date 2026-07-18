"use client";

import { useRouter, useSearchParams } from "next/navigation";

type SubCategory = {
  id: string;
  name: string;
  slug: string;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
};

export default function ShopSidebar({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  const selectedSubCategory =
    searchParams.get("subcategory");

  const activeCategory = categories.find(
    (c) => c.slug === selectedCategory
  );

  return (
    <div className="space-y-8">

      {/* Categories */}

      <div>

        <h3 className="mb-3 font-semibold">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">

          <button
            onClick={() => router.push("/shop")}
            className="rounded-full border px-4 py-2"
          >
            All
          </button>

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() =>
                router.push(
                  `/shop?category=${category.slug}`
                )
              }
              className={`rounded-full border px-4 py-2 ${
                selectedCategory === category.slug
                  ? "bg-pink-500 text-white"
                  : ""
              }`}
            >
              {category.name}
            </button>

          ))}

        </div>

      </div>

      {/* Sub Categories */}

      {activeCategory && (

        <div>

          <h3 className="mb-3 font-semibold">
            {activeCategory.name}
          </h3>

          <div className="flex flex-wrap gap-2">

            <button
              onClick={() =>
                router.push(
                  `/shop?category=${activeCategory.slug}`
                )
              }
              className="rounded-full border px-4 py-2"
            >
              All
            </button>

            {activeCategory.subCategories.map((subCategory) => (

              <button
                key={subCategory.id}
                onClick={() =>
                  router.push(
                    `/shop?category=${activeCategory.slug}&subcategory=${subCategory.slug}`
                  )
                }
                className={`rounded-full border px-4 py-2 ${
                  selectedSubCategory === subCategory.slug
                    ? "bg-pink-500 text-white"
                    : ""
                }`}
              >
                {subCategory.name}
              </button>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}