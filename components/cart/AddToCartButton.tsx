"use client";

import { useCart } from "@/components/providers/CartProvider";

type CartProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  product,
}: {
  product: CartProduct;
}) {
  const {
    addToCart,
    increase,
    decrease,
    getQuantity,
  } = useCart();

  const quantity = getQuantity(product.id);

  if (quantity === 0) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          addToCart({
            productId: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            image: product.image,
            quantity: 1,
          });
        }}
        className="mt-3 w-full rounded-lg bg-pink-500 py-2 text-white transition hover:bg-pink-600"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="mt-3 flex items-center justify-between rounded-lg border"
    >
      <button
        onClick={() => decrease(product.id)}
        className="px-4 py-2 text-lg"
      >
        −
      </button>

      <span className="font-semibold">
        {quantity}
      </span>

      <button
        onClick={() => increase(product.id)}
        className="px-4 py-2 text-lg"
      >
        +
      </button>
    </div>
  );
}