import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/admin-dashboard/generics/SideBar";

// Configure the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KinCare Admin Dashboard",
  description: "Manage your health wealth balance and claims with KinCare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA] text-[#252A3A] antialiased`}>
        {/* Main layout wrapper */}
        <div className="flex h-screen w-full overflow-hidden">
          
          {/* Sidebar - Fixed width, full height */}
          <div className="w-64 flex-shrink-0 h-full">
            <Sidebar />
          </div>

          {/* Main Content Area - Takes up remaining space, scrolls vertically */}
          <main className="flex-1 h-full overflow-y-auto">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}