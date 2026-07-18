import Container from "@/components/layout/Container";
import ShopSidebar from "@/components/shop/ShopSidebar";
import { getShopData } from "@/services/shop.service";
import ProductCard from "@/components/product/ProductCard";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    subcategory?: string;
  }>;
}) {
  const params = await searchParams;

  const { categories, products } =
    await getShopData(
      params.category,
      params.subcategory
    );


  return (
    <Container>

      <div className="py-12">

        <h1 className="mb-8 text-4xl font-bold">
          Shop
        </h1>

        <div className="grid gap-8 lg:grid-cols-4">

          <aside>

            <ShopSidebar
              categories={categories}
            />

          </aside>

          <main className="lg:col-span-3">

            <div>

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-semibold">
                {products.length} Products
                </h2>

            </div>

            {products.length === 0 ? (

                <div className="rounded-xl border p-10 text-center">
                No Products Found
                </div>

            ) : (

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                    
                {products.map((product) => (

                    <ProductCard
                    key={product.id}
                    product={product}
                    />

                ))}

                </div>

            )}

            </div>

          </main>

        </div>

      </div>

    </Container>
  );
}