"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CartItem } from "@/types/cart";

type CartContextType = {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;

  increase: (productId: string) => void;

  decrease: (productId: string) => void;

  remove: (productId: string) => void;

  clearCart: () => void;

  getQuantity: (productId: string) => number;

  totalItems: number;

  totalPrice: number;
};

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart
  useEffect(() => {
    const stored = localStorage.getItem("cart");

    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const existing = prev.find(
        (x) => x.productId === item.productId
      );

      if (existing) {
        return prev.map((x) =>
          x.productId === item.productId
            ? {
                ...x,
                quantity: x.quantity + 1,
              }
            : x
        );
      }

      return [...prev, item];
    });
  }

  function increase(productId: string) {
    setCart((prev) =>
      prev.map((x) =>
        x.productId === productId
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x
      )
    );
  }

  function decrease(productId: string) {
    setCart((prev) =>
      prev
        .map((x) =>
          x.productId === productId
            ? {
                ...x,
                quantity: x.quantity - 1,
              }
            : x
        )
        .filter((x) => x.quantity > 0)
    );
  }

  function remove(productId: string) {
    setCart((prev) =>
      prev.filter(
        (x) => x.productId !== productId
      )
    );
  }

  function getQuantity(productId: string) {
    const item = cart.find(
        (x) => x.productId === productId
    );

    return item?.quantity ?? 0;
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        remove,
        clearCart,
        getQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}