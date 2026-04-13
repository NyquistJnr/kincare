import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Hospital } from 'lucide-react';

export default function ReviewClaimPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content */}
      <main className="p-4 sm:p-8 max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <Link href="/diaspora/claims" className="flex items-center gap-2 text-sm text-[#4E576E] font-medium mb-6 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>All Claims / Review Claim</span>
        </Link>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column (Claim Details) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Primary Claim Info Card */}
            <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  {/* Hospital Icon */}
                  <div className="w-12 h-12 bg-[#FFF9EA] rounded-xl flex items-center justify-center text-[#F59E1A] shrink-0">
                    <Hospital className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#252A3A] mb-1">
                      St. Mary&apos;s Hospital, Awka
                    </h2>
                    <p className="text-xs text-[#4E576E]">
                      Raised by Emeka · 2 minutes ago
                    </p>
                  </div>
                </div>
                
                <div className="text-right flex flex-col items-end">
                  <h3 className="text-2xl font-semibold text-[#252A3A] mb-2">₦380,000</h3>
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
                    Awaiting Approval
                  </span>
                </div>
              </div>

              {/* Invoice Sub-section */}
              <div className="mt-6 flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div>
                  <h4 className="text-sm font-semibold text-[#252A3A] mb-0.5">Hospital Invoice — Uploaded</h4>
                  <p className="text-[10px] text-[#8891A4] font-medium tracking-wide">
                    hospital_bill_stmarys.jpg · 1 page · Uploaded 2 min ago
                  </p>
                </div>
                <button className="text-xs font-semibold text-[#343B52] border border-[#343B52] px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                  View Invoice
                </button>
              </div>
            </div>

            {/* AI Brief Card */}
            <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-2xl p-6 shadow-sm">
              <div className="inline-block border border-[#F59E1A] text-[#F59E1A] text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider bg-white">
                KinCare AI Brief
              </div>
              <p className="text-xs text-[#8891A4] leading-relaxed mb-6">
                This claim is for emergency head trauma treatment at a registered hospital in Anambra State. The amount of ₦380,000 is within the normal range for this procedure type and location. No anomalies detected.
              </p>
              
              {/* Cost Range Bar */}
              <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-[#FDE0A1]">
                <span className="text-[10px] font-medium text-gray-400 tracking-wider ml-1">Cost range</span>
                <div className="flex-1 h-1.5 bg-[#E6F6ED] rounded-full overflow-hidden flex">
                  <div className="w-[70%] h-full bg-[#22C55E] rounded-full"></div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium mr-1">
                  <Check className="w-3 h-3 text-[#22C55E]" strokeWidth={3} />
                  Within normal range
                </div>
              </div>
            </div>

            {/* Payment Account Card */}
            <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-4 uppercase">
                Hospital Payment Account
              </p>
              
              <div className="space-y-1.5 mb-5">
                <label className="block text-sm font-medium text-[#252A3A]">
                  Account Number
                </label>
                <input 
                  type="text" 
                  value="0024578901" 
                  readOnly
                  className="w-full border border-[#FDE0A1] rounded-xl p-3.5 text-sm text-[#252A3A] font-medium bg-white focus:outline-none"
                />
              </div>

              {/* Verification Badge */}
              <div className="flex gap-2.5 items-start">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#00A859] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={4} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#252A3A] mb-0.5">St. Mary&apos;s Hospital Ltd</p>
                  <p className="text-[11px] text-gray-500 font-medium">
                    GTBank · 0024578901 · Business Account · Verified via Interswitch
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column (Approval Action Card) */}
          <div className="bg-[#FAFAFA] border border-gray-300 rounded-2xl p-6 shadow-sm">
            <h3 className="text-[11px] font-medium text-gray-400 tracking-wider mb-5 uppercase">
              Approve This Payment
            </h3>
            
            {/* Calculation rows */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm font-medium text-[#252A3A]">
                <span className="font-medium text-gray-600">Current wallet</span>
                <span>₦485,000</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium text-[#E5484D]">
                <span className="font-medium">This payment</span>
                <span>- ₦380,000</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium text-[#F59E1A] pt-2 border-t border-gray-200">
                <span className="font-medium">Remaining</span>
                <span>₦105,000</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/diaspora/payment-successful" className="w-full bg-[#22C55E] hover:bg-[#1CA850] text-white rounded-xl py-3.5 font-medium text-sm transition-colors block text-center">
                Approve - Pay ₦380,000
              </Link>
              <button className="w-full bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl py-3.5 font-medium text-sm transition-colors">
                Decline Claim
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-5 leading-relaxed px-2 font-medium">
              Payment sent directly to St. Mary&apos;s Hospital via Interswitch. 
              Funds never touch any family member&apos;s personal account.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}