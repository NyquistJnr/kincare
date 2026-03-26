"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/diaspora-dashboard/generics/SideBar";
import { Header } from "@/components/global";

const inter = Inter({ subsets: ["latin"] });

const titleMap: Record<string, string> = {
  '/diaspora': 'Dashboard',
  '/diaspora/claims': 'Claims',
  '/diaspora/wallet': 'Wallet',
  '/diaspora/topup-wallet': 'Wallet',
  '/diaspora/link-kin': 'Linked Kin',
  '/diaspora/bank-cards': 'Bank & Cards',
  '/diaspora/auto-approval': 'Auto-Approval',
  '/diaspora/review-claim': 'Review Claim',
  '/diaspora/payment-successful': 'Payment',
  '/diaspora/approval-success': 'Auto-Approval',
  '/diaspora/settings': 'Settings',
};

export default function DiasporaLayout({
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
        <Header title={title} onMenuToggle={() => setSidebarOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}