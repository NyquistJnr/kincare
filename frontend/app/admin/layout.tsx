"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/admin-dashboard/generics/SideBar";
import { Header } from "@/components/global";

const inter = Inter({ subsets: ["latin"] });

const titleMap: Record<string, string> = {
  '/admin': 'System Overview',
  '/admin/users': 'Users',
  '/admin/claims': 'Claims',
  '/admin/transactions': 'Transactions',
  '/admin/alert': 'Alerts',
  '/admin/api-status': 'API Status',
  '/admin/settings': 'Settings',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = titleMap[pathname] || 'System Overview';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${inter.className} flex h-screen w-full overflow-hidden bg-[#F8F9FA] text-[#252A3A] antialiased`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 h-full overflow-y-auto flex flex-col min-w-0">
        <Header title={title} userName="Chidi Okafor" userRole="System Admin" onMenuToggle={() => setSidebarOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}