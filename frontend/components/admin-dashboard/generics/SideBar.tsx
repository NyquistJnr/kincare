"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutGrid, 
  Plus, 
  ClipboardList, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#FFFFFF] flex flex-col py-8 px-6 border-r border-gray-100">
      {/* Logo Area */}
      <div className="flex items-center mb-12 px-2 space-x-2">
        <Image 
            src="/images/logo.png" 
            alt="KinCare Logo" 
            width={50} 
            height={40} 
            priority
            className="object-contain"
        />

        <span className="text-xl font-medium font-inter">
            <span className="text-[#252A3A]">Kin</span>
            <span className="text-[#F59E1A]">Care</span>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-3">
        {/* Active Link: Dashboard */}
        <Link 
          href="/dashboard" 
          className="flex items-center gap-4 px-4 py-3 bg-[#F59E1A] text-white rounded-xl transition-colors font-medium"
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Overview</span>
        </Link>

        {/* Inactive Link: Raise Claim */}
        <Link 
          href="/diaspora/claims" 
          className="flex items-center gap-4 px-4 py-3 text-[#252A3A] hover:bg-gray-50 rounded-xl transition-colors font-medium"
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Users</span>
        </Link>

        {/* Inactive Link: My Claims */}
        <Link 
          href="/diaspora/wallet" 
          className="flex items-center gap-4 px-4 py-3 text-[#252A3A] hover:bg-gray-50 rounded-xl transition-colors font-medium"
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Claims</span>
        </Link>

        {/* Inactive Link: My Claims */}
        <Link 
          href="/diaspora/linked-kin" 
          className="flex items-center gap-4 px-4 py-3 text-[#252A3A] hover:bg-gray-50 rounded-xl transition-colors font-medium"
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Transactions</span>
        </Link>

        {/* Inactive Link: My Claims */}
        <Link 
          href="/diaspora/bank-cards" 
          className="flex items-center gap-4 px-4 py-3 text-[#252A3A] hover:bg-gray-50 rounded-xl transition-colors font-medium"
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Alert</span>
        </Link>

        {/* Inactive Link: My Claims */}
        <Link 
          href="/diaspora/bank-cards" 
          className="flex items-center gap-4 px-4 py-3 text-[#252A3A] hover:bg-gray-50 rounded-xl transition-colors font-medium"
        >
          <ClipboardList className="w-5 h-5 text-gray-500" />
          <span>Api Status</span>
        </Link>
      </nav>

      {/* Bottom Actions */}
      <div className="space-y-4 mt-auto">
        {/* Settings (Light gray background) */}
        <Link 
          href="/settings" 
          className="flex items-center gap-4 px-4 py-3 bg-[#F8F9FA] text-[#252A3A] hover:bg-gray-100 rounded-xl transition-colors font-medium"
        >
          <Settings className="w-5 h-5 text-gray-700" />
          <span>Settings</span>
        </Link>

        {/* Log Out */}
        <button 
          onClick={() => console.log('Logging out...')}
          className="flex items-center gap-4 px-4 py-3 text-[#E5484D] hover:bg-red-50 rounded-xl transition-colors font-medium w-full text-left"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}