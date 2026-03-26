"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutGrid, 
  Users,
  ClipboardList, 
  ArrowLeftRight,
  Bell,
  Activity,
  Settings, 
  LogOut,
  X
} from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '/admin', icon: LayoutGrid },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Claims', href: '/admin/claims', icon: ClipboardList },
  { label: 'Transactions', href: '/admin/transactions', icon: ArrowLeftRight },
  { label: 'Alert', href: '/admin/alert', icon: Bell },
  { label: 'Api Status', href: '/admin/api-status', icon: Activity },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-[280px] lg:w-64 h-screen bg-white flex flex-col py-8 px-6 border-r border-gray-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <div className="flex items-center justify-between mb-12 px-2">
          <div className="flex items-center space-x-2">
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
          <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

      <nav className="flex-1 space-y-3">
        {navItems.map((item) => {
          const isActive = item.href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors font-medium ${
                isActive
                  ? 'bg-[#F59E1A] text-white'
                  : 'text-[#252A3A] hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'text-gray-500'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-4 mt-auto">
        <Link 
          href="/admin/settings"
          onClick={onClose}
          className="flex items-center gap-4 px-4 py-3 bg-[#F8F9FA] text-[#252A3A] hover:bg-gray-100 rounded-xl transition-colors font-medium"
        >
          <Settings className="w-5 h-5 text-gray-700" />
          <span>Settings</span>
        </Link>

        <button 
          onClick={() => console.log('Logging out...')}
          className="flex items-center gap-4 px-4 py-3 text-[#E5484D] hover:bg-red-50 rounded-xl transition-colors font-medium w-full text-left"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
    </>
  );
}