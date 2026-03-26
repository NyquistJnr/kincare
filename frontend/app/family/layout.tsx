"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/family-dashboard/generics/SideBar";
import { Header } from "@/components/global";

const inter = Inter({ subsets: ["latin"] });

const titleMap: Record<string, string> = {
  '/family': 'Dashboard',
  '/family/raise-claim': 'Raise Claim',
  '/family/my-claim': 'My Claims',
  '/family/payment-claim': 'Raise Claim',
  '/family/success': 'Raise Claim',
  '/family/settings': 'Settings',
};

export default function FamilyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = titleMap[pathname] || 'Dashboard';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${inter.className} flex h-screen w-full overflow-hidden bg-[#F8F9FA] text-[#252A3A] antialiased`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 h-full overflow-y-auto flex flex-col min-w-0">
        <Header title={title} userName="Ngozi" userRole="Family · Lagos" onMenuToggle={() => setSidebarOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}