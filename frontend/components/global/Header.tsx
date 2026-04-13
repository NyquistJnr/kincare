"use client";

import Image from 'next/image';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  userName?: string;
  userRole?: string;
  userImage?: string;
  onMenuToggle?: () => void;
}

const Header = ({ title, userName = "Ifunanya Obi", userRole = "Diaspora · Manchester", userImage = "/images/profile.jpg", onMenuToggle }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        {onMenuToggle && (
          <button onClick={onMenuToggle} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors -ml-2">
            <Menu className="w-5 h-5 text-[#252A3A]" />
          </button>
        )}
        <h1 className="text-lg sm:text-xl font-semibold text-slate-800">{title}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative p-2 bg-[#FFF4E5] rounded-lg cursor-pointer">
          <Bell className="w-5 h-5 text-[#F59E1A]" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#E5484D] rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-white p-1 pr-2 sm:pr-4 rounded-full border border-gray-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
            <Image
              src={userImage}
              alt={userName}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="text-sm hidden sm:block">
            <p className="font-bold text-slate-800 leading-none">
              {userName}
            </p>
            <p className="text-xs text-slate-400">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export { Header };
