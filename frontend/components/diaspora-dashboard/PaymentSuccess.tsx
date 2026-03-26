import React from 'react';
import Image from 'next/image';
import { Bell, Check, ArrowLeft } from 'lucide-react';

export default function PaymentSuccessPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold">Raise Claim</h1>
        
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
              <p className="text-sm font-bold">Ifunanya Obi</p>
              <p className="text-xs text-gray-500">Diaspora · Manchester</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Centered Success State */}
      <main className="p-8 pb-20 flex flex-col items-center text-center mt-6">
        
        <div className="w-full max-w-[700px] flex flex-col items-center">
          
          {/* Success Icon */}
          <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>

          {/* Titles & Description */}
          <h2 className="text-[32px] font-semibold text-[#252A3A] mb-3">
            Payment Sent
          </h2>
          <p className="text-[15px] text-[#252A3A] mb-10 leading-relaxed font-medium">
            ₦380,000 has been transferred directly to St. Mary&apos;s Hospital via Interswitch. <br/>
            Treatment can begin immediately.
          </p>

          {/* Green Outlined Receipt Card */}
          <div className="w-full bg-white border border-[#22C55E] rounded-xl p-6 md:p-8 text-left shadow-sm mb-8">
            
            {/* Transaction Reference */}
            <div className="mb-6">
              <p className="text-[11px] font-medium text-gray-400 tracking-wider mb-1.5">
                Interswitch Transaction Reference
              </p>
              <p className="text-[#22C55E] font-mono font-medium tracking-wide text-lg">
                TXN-ISW-2026-038-KC-004821
              </p>
            </div>

            {/* Details Grid (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Recipient Box */}
              <div className="bg-[#F8F9FA] rounded-xl p-5">
                <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase mb-2">
                  Recipient
                </p>
                <p className="text-sm font-medium text-[#252A3A] leading-tight mb-0.5">
                  St. Mary&apos;s Hospital Ltd
                </p>
                <p className="text-[11px] text-gray-500">
                  GTBank · 0024578901
                </p>
              </div>

              {/* Amount Box */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 flex flex-col justify-center">
                <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase mb-1">
                  Amount
                </p>
                <p className="text-2xl font-medium text-[#252A3A]">
                  ₦380,000
                </p>
              </div>

              {/* Timestamp Box */}
              <div className="bg-[#F8F9FA] rounded-xl p-5">
                <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase mb-2">
                  Timestamp
                </p>
                <p className="text-sm font-medium text-[#252A3A]">
                  1:04 PM · Mar 23 2026
                </p>
              </div>

              {/* Status Box */}
              <div className="bg-[#F8F9FA] rounded-xl p-5">
                <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase mb-2">
                  Status
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#22C55E] px-3 py-1 rounded-full text-xs font-medium mt-0.5">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span>
                  Settled
                </div>
              </div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl px-8 py-3.5 font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
              <ArrowLeft className="w-4 h-4 text-gray-500" />
              Back to Dashboard
            </button>
            <button className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#1CA850] text-white rounded-xl px-10 py-3.5 font-medium text-sm transition-colors shadow-sm">
              Top-Up Wallet
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}