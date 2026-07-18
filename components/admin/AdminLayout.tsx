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

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}