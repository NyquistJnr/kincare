import type { Metadata } from "next";
import { SideBar, Header } from "@/components/global";
export const metadata: Metadata = {
  title: "KinCare | Disapora",
  description: "KinCare for the Diaspora",
};
const menuItems = [
  { name: "Dashboard", href: "#", active: true },
  { name: "Claims", href: "#" },
  { name: "Wallet", href: "#" },
  { name: "Linked Kin", href: "#" },
  { name: "Bank & Cards", href: "#" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-slate-900">
      <SideBar menuItems={menuItems} />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        {children}
      </main>
    </div>
  );
}
