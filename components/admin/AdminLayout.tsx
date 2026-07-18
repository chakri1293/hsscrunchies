import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <main className="flex-1 bg-gray-50">
            <div className="mx-auto max-w-7xl p-8">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
}