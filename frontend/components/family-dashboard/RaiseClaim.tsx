import React from 'react';
import Image from 'next/image';
import { Bell, Check, FileText, AlertTriangle } from 'lucide-react';

export default function RaiseClaimPage() {
  // TOGGLE THIS VARIABLE:
  // true = shows the yellow personal account warnings (Screenshot 551)
  // false = shows the green hospital verified badge (Original)
  const isPersonalAccount = true; 

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

      {/* Main Content */}
      <main className="p-8 max-w-8xl mx-auto space-y-6">
        
        {/* Main Form Card Container */}
        <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
          
          {/* Balance Banner */}
          <div className="bg-[#FEF3D9] border border-[#FDE0A1] rounded-xl p-6 flex justify-between items-center mb-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Available for your care — funded by Ifunanya 💛</p>
              <h2 className="text-4xl font-semibold text-black">₦485,000</h2>
            </div>
            <div className="flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-3 py-1.5 rounded-full text-xs font-bold">
              <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
              Covers this claim
            </div>
          </div>

          {/* Progress Stepper */}
          <div className="flex items-center mb-10 overflow-x-auto">
            {/* Step 1 - Completed */}
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" strokeWidth={3} />
            </div>
            <div className="w-32 md:w-60 h-0.5 bg-[#00A859] mx-5 shrink-0"></div>
            
            {/* Step 2 - Active */}
            <div className="w-8 h-8 rounded bg-[#F59E1A] text-white flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div className="w-32 md:w-60 h-0.5 bg-gray-300 mx-5 shrink-0"></div>
            
            {/* Step 3 - Pending */}
            <div className="w-8 h-8 rounded bg-white border border-gray-300 text-gray-400 flex items-center justify-center font-bold shrink-0">
              3
            </div>
            
            <span className="text-sm text-gray-500 font-medium ml-5 whitespace-nowrap">
              Step 2 of 3 — Invoice & Hospital Account
            </span>
          </div>

          {/* Form Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Left Column - Invoice Upload & Notes */}
            <div className="space-y-6">
              {/* Upload Area */}
              <div className="border border-[#00A859] bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center h-48">
                <FileText className="w-8 h-8 text-[#252A3A] mb-3" />
                <p className="text-[#00A859] font-bold text-sm mb-1 flex items-center gap-1.5">
                  Invoice Uploaded <Check className="w-4 h-4" strokeWidth={3} />
                </p>
                <p className="text-xs text-gray-400 font-medium mb-4">
                  hospital_bill_stmarys.jpg · 1 page
                </p>
                <button className="border border-gray-300 text-gray-600 px-5 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
                  Replace
                </button>
              </div>

              {/* Note Input */}
              <div>
                <label className="block text-sm font-semibold text-[#252A3A] mb-2">
                  Note for Ifunanya (optional)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g Mama needs surgery deposit urgently. The hospital has confirmed bed" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#F59E1A]"
                />
              </div>
            </div>

            {/* Right Column - Payment Details */}
            <div>
              <p className="text-xs font-medium text-gray-400 tracking-wider mb-4 uppercase">
                Hospital Payment Account
              </p>
              
              {/* Account Number Input */}
              <div className="space-y-1 mb-4">
                <label className="block text-sm font-medium text-[#252A3A]">
                  Account Number
                </label>
                <input 
                  type="text" 
                  value="0024578901" 
                  readOnly
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm text-[#252A3A] font-medium bg-white focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  Enter the account number from the hospital&apos;s bill or POS terminal.
                </p>
              </div>
              
              {/* --- CONDITIONAL ALERT SECTION --- */}
              {isPersonalAccount ? (
                <div className="space-y-3 mb-6">
                  {/* Account Name Alert */}
                  <div className="bg-[#FFF9EA] border border-[#FDE0A1] rounded-lg p-4 flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-[#F59E1A] shrink-0 mt-0.5" fill="#F59E1A" color="white" />
                    <div>
                      <p className="text-sm font-bold text-[#E08D16] mb-0.5">Emmanuel Chukwu</p>
                      <p className="text-xs text-gray-600">
                        GTBank · Personal Account
                      </p>
                    </div>
                  </div>

                  {/* Warning Message Alert */}
                  <div className="bg-[#FFF9EA] border border-[#FDE0A1] rounded-lg p-4 flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-[#F59E1A] shrink-0 mt-0.5" fill="#F59E1A" color="white" />
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-bold text-[#E08D16]">Personal account detected. </span>
                      Common with small private clinics. Please confirm with the hospital or your family before submitting.
                    </p>
                  </div>
                </div>
              ) : (
                /* Original Verification Badge */
                <div className="bg-[#E6F6ED] border border-[#A6E5C3] rounded-lg p-4 flex gap-3 mb-6">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[#00A859] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#252A3A] mb-0.5">St. Mary&apos;s Hospital Ltd</p>
                    <p className="text-xs text-[#00A859]">
                      GTBank · 0024578901 · Business Account · Verified via Interswitch
                    </p>
                  </div>
                </div>
              )}
              {/* --- END CONDITIONAL ALERT SECTION --- */}

              {/* Submit Button */}
              <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-4 font-bold text-lg transition-colors">
                Submit Claim - Notify Kemi
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}