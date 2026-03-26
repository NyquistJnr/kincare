import React from 'react';
import Image from 'next/image';
import { Bell, Check, ArrowLeft, Info } from 'lucide-react';

export default function ClaimSuccessPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold">Raise Claim</h1>
        
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative p-2 bg-[#FFF4E5] rounded-lg cursor-pointer">
            <Bell className="w-5 h-5 text-[#F59E1A]" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#E5484D] rounded-full"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
              <Image 
                src="/images/profile.jpg" 
                alt="Ngozi" 
                layout="fill" 
                objectFit="cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-bold">Ngozi</p>
              <p className="text-xs text-gray-500">Family · Lagos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Centered Success State */}
      <main className="p-8 pb-20 overflow-y-auto flex flex-col items-center text-center">
        
        <div className="w-full max-w-[520px] flex flex-col items-center mt-6">
          
          {/* Success Icon */}
          <div className="w-16 h-16 bg-[#00A859] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>

          {/* Titles & Description */}
          <h2 className="text-3xl font-bold text-[#252A3A] mb-3">
            Hospital Has Been Paid
          </h2>
          <p className="text-[15px] text-[#252A3A] mb-8 leading-relaxed">
            Ifunanya approved the payment. ₦380,000 has been sent <br/>
            directly to St. Mary&apos;s Hospital via Interswitch. <br/>
            <span className="font-bold">Show this screen to the hospital reception.</span>
          </p>

          {/* Large Green "Show to Hospital" Card */}
          <div className="w-full bg-[#E6F6ED] border border-[#00A859] rounded-xl py-6 px-4 mb-8">
            <p className="text-[11px] font-bold text-[#00A859] tracking-wider uppercase mb-2">
              Show this to the hospital
            </p>
            <h3 className="text-2xl font-bold text-[#252A3A] mb-1">
              ₦380,000 Sent
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              St. Mary&apos;s Hospital Ltd · GTBank · 0024578901
            </p>
            <div className="inline-block bg-white text-[#00A859] px-4 py-1.5 rounded text-xs font-mono font-bold tracking-tight border border-[#A6E5C3]">
              TXN: ISW-2026-030-KC-004821
            </div>
          </div>

          {/* Details Grid (2x2) */}
          <div className="w-full grid grid-cols-2 gap-4 text-left mb-6">
            
            {/* Box 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                Payment Sent To
              </p>
              <p className="text-sm font-bold text-[#252A3A] leading-tight mb-0.5">
                St. Mary&apos;s Hospital Ltd
              </p>
              <p className="text-[11px] text-gray-500">
                GTBank · 0024578901
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-center">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                Amount
              </p>
              <p className="text-xl font-bold text-[#252A3A]">
                ₦380,000
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                Approved By
              </p>
              <p className="text-sm font-bold text-[#252A3A] leading-tight mb-0.5">
                Ifunanya Okeke
              </p>
              <p className="text-[11px] text-gray-500">
                From Manchester · 11:04 PM
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                Settlement
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2 py-1 rounded-full text-[10px] font-bold mt-0.5">
                <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                Confirmed via Interswitch
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="w-full bg-[#F0FAFF] border border-[#BCE4F7] rounded-xl p-4 flex gap-3 text-left mb-8 shadow-sm">
            <Info className="w-5 h-5 text-[#30A8E6] shrink-0 mt-0.5" fill="#30A8E6" color="white" />
            <div>
              <h4 className="text-xs font-bold text-[#30A8E6] mb-1">What happens now?</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                The hospital&apos;s bank account has been credited by Interswitch. Show the transaction reference above to hospital staff if needed. Ifunanya has been notified and can see this payment in their audit log.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl py-3.5 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
            Back to Dashboard
          </button>

        </div>
      </main>
    </div>
  );
}