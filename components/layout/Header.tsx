import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Container>
        <div className="grid h-20 grid-cols-[220px_1fr_320px_120px] items-center gap-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-pink-500">
            HS Scrunchies
          </Link>

          {/* Navigation */}
          <nav className="hidden justify-center md:flex items-center gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center rounded-full border px-4 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex justify-end items-center gap-5">
            <Heart size={22} className="cursor-pointer" />
            <User size={22} className="cursor-pointer" />
            <ShoppingCart size={22} className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </header>
  );
}