import Link from "next/link";

const menus = [
  { name: "Dashboard", href: "/admin" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Sub Categories", href: "/admin/subcategories" },
  { name: "Products", href: "/admin/products" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Banners", href: "/admin/banners" },
  { name: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r bg-white min-h-screen">
      <div className="p-6 text-xl font-bold">
        HS Admin
      </div>

      <nav className="flex flex-col">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="px-6 py-3 hover:bg-pink-100"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}