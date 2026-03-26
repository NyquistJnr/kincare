import React from 'react';
import Image from 'next/image';
import { Bell, Plus } from 'lucide-react';

export default function LinkedKin() {
  return (
    <div className="flex-1 min-h-screen bg-[#FAFAFA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-medium">Linked Kin</h1>
        
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative p-2 bg-[#FFF4E5] rounded-lg cursor-pointer">
            <Bell className="w-5 h-5 text-[#F59E1A]" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#F59E1A] rounded-full border-2 border-white"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
              <Image 
                src="/images/profile.jpg" 
                alt="Ifunanya Obi" 
                layout="fill" 
                objectFit="cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Ifunanya Obi</p>
              <p className="text-xs text-[#4E576E]">Diaspora · Manchester</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto space-y-6">
        
        {/* Page Title & Top Action */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Add new Kin</h2>
            <p className="text-gray-500 text-[15px]">Manage who can raise claims on your wallet.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
            <span>Top Wallet</span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column (Pairing Code Card) */}
          <div className="lg:col-span-2 bg-white border border-gray-300 rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-4 uppercase">
              Your Pairing Code
            </p>
            
            <p className="text-[15px] text-[#252A3A] mb-8 leading-relaxed font-medium">
              Share this code with your family member. They download KinCare, <br className="hidden md:block" />
              select &apos;<span className="font-semibold">Family Member</span>&apos; and enter the code to link to your wallet.
            </p>

            {/* Dashed Code Box */}
            <div className="border-2 border-dashed border-[#FDE0A1] rounded-2xl p-8 flex flex-col items-center justify-center mb-8 bg-[#FFFCF5]">
              <h3 className="text-5xl md:text-6xl font-medium tracking-widest text-[#252A3A] mb-3">
                KC · 7F2A
              </h3>
              <p className="text-[11px] text-gray-500 font-semibold">
                Expires in 47 hours 52 minutes · <button className="text-[#F59E1A] hover:underline">Regenerate</button>
              </p>
            </div>

            <p className="text-sm text-[#252A3A] mb-6 leading-relaxed font-medium">
              Once they enter the code and confirm, they&apos;ll appear in your linked kin <br className="hidden md:block" />
              list and can immediately raise claims.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-3.5 font-semibold text-[15px] transition-colors shadow-sm">
                Send via WhatsApp
              </button>
              <button className="w-full bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl py-3.5 font-semibold text-[15px] transition-colors shadow-sm">
                Copy Code
              </button>
            </div>
          </div>

          {/* Right Column (Linked Members Card) */}
          <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-4 uppercase">
              Linked Members (2)
            </p>
            
            <div className="space-y-4">
              
              {/* Member 1: Emeka (Active) */}
              <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#252A3A] mb-0.5">Emeka</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Linked March 10, 2026 · Anambra</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {/* Custom Toggle Switch - Active */}
                  <div className="w-9 h-5 bg-[#E6F6ED] rounded-full relative cursor-pointer border border-[#A6E5C3]">
                    <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#00A859] rounded-full shadow-sm"></div>
                  </div>
                  <p className="text-[9px] text-gray-400 font-semibold">2 claims raised</p>
                </div>
              </div>

              {/* Member 2: Ngozi (Inactive) */}
              <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between opacity-70">
                <div>
                  <h4 className="text-sm font-semibold text-[#252A3A] mb-0.5">Ngozi</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Linked January 22, 2026 · Lagos</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {/* Custom Toggle Switch - Inactive */}
                  <div className="w-9 h-5 bg-gray-100 rounded-full relative cursor-pointer border border-gray-200">
                    <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-gray-400 rounded-full shadow-sm"></div>
                  </div>
                  <p className="text-[9px] text-gray-400 font-semibold">1 claim raised</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}