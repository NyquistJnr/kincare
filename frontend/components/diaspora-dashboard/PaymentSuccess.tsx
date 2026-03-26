import React from 'react';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';

export default function PaymentSuccessPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content - Centered Success State */}
      <main className="p-4 sm:p-8 pb-20 flex flex-col items-center text-center mt-4 sm:mt-6">
        
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
            <Link href="/diaspora" className="w-full sm:w-auto bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl px-8 py-3.5 font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
              <ArrowLeft className="w-4 h-4 text-gray-500" />
              Back to Dashboard
            </Link>
            <Link href="/diaspora/topup-wallet" className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#1CA850] text-white rounded-xl px-10 py-3.5 font-medium text-sm transition-colors shadow-sm text-center">
              Top-Up Wallet
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}