"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import Container from "./Container";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useCart } from "@/components/providers/CartProvider";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <div className="grid h-20 grid-cols-[220px_1fr_320px_120px] items-center gap-6">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center justify-center gap-8 font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Search */}

          <div className="hidden items-center rounded-full border px-4 py-2 lg:flex">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* Icons */}

          <div className="flex items-center justify-end gap-5">

            <Heart
              size={22}
              className="cursor-pointer"
            />

            <User
              size={22}
              className="cursor-pointer"
            />

            {/* Cart */}

            <Link
              href="/cart"
              className="relative"
            >
              <ShoppingCart
                size={22}
                className="cursor-pointer"
              />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[11px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

          </div>

        </div>
      </Container>
    </header>
  );
}