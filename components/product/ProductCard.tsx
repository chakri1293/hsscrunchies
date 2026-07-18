import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

export default function ProductCard({
  product,
}: {
  product: any;
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-pink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Clickable Product */}
      <Link href={`/products/${product.slug}`}>

        <div className="relative aspect-square overflow-hidden bg-pink-50">

          {product.images.length > 0 ? (
            <Image
              src={product.images[0].imageUrl}
              alt={product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-5xl">
              🎀
            </div>
          )}

        </div>

        <div className="p-3">

          <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
            {product.name}
          </h3>

          <p className="mt-2 text-lg font-bold text-pink-600">
            ₹{Number(product.price)}
          </p>

        </div>

      </Link>

      {/* Add To Cart */}
      <div className="px-3 pb-3">

        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: Number(product.price),
            image: product.images[0]?.imageUrl ?? "",
          }}
        />

      </div>

    </div>
  );
}