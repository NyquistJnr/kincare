import React from 'react';
import Image from 'next/image';
import { Bell, CreditCard, AlertTriangle, Info, Check } from 'lucide-react';

export default function WalletSetup() {
  return (
    <div className="flex-1 min-h-screen bg-[#FAFAFA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-semibold">Wallet</h1>
        
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
              <p className="text-xs text-gray-500">Diaspora · Manchester</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">
        
        <div className="mb-8">
          <h2 className="text-[28px] font-semibold text-[#252A3A] mb-2">
            Let&apos;s set up your wallet
          </h2>
          <p className="text-[15px] text-gray-600 font-medium">
            Answer 3 quick questions and KinCare will recommend how <br className="hidden md:block"/>
            much to keep in your wallet to stay prepared for emergencies.
          </p>
        </div>

        {/* 2-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column (Form Inputs) */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Question 1: Family Members */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#252A3A] mb-4">How many family members are you covering?</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  Just 1
                </button>
                <button className="px-5 py-2 rounded-full border border-[#F59E1A] bg-[#FFFDF5] text-[#F59E1A] text-xs font-semibold">
                  2-3 people
                </button>
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  4-5 people
                </button>
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  7+ people
                </button>
              </div>
            </div>

            {/* Question 2: Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#252A3A] mb-3">Where in Nigeria are they located?</h3>
              <input 
                type="text" 
                value="Anambra" 
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 text-sm font-medium text-[#252A3A] focus:outline-none mb-2"
              />
              <p className="text-[11px] text-gray-400 font-medium">
                Location affects cost benchmarks for AI anomaly detection
              </p>
            </div>

            {/* Question 3: Budget */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#252A3A] mb-4">What is your monthly contribution budget?</h3>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  Under £50
                </button>
                <button className="px-4 py-2 rounded-full border border-[#F59E1A] bg-[#FFFDF5] text-[#F59E1A] text-xs font-semibold">
                  £50 - £150
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  £150 - £300
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-50">
                  Over £300
                </button>
              </div>
            </div>

            {/* Fund Wallet Action Card */}
            <div className="bg-white border-2 border-[#FDE0A1] rounded-2xl p-6 shadow-sm mt-8">
              <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-5 uppercase">
                Fund Your Wallet
              </p>

              {/* Amount Input */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-500 mb-2">
                  Amount to deposit (₦)
                </label>
                <input 
                  type="text" 
                  value="500,000" 
                  readOnly
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm font-semibold text-[#252A3A] focus:outline-none"
                />
                <p className="text-[10px] text-gray-400 font-medium mt-1.5">
                  ≈ £240 at today&apos;s rate · Powered by Interswitch
                </p>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 mb-2">
                  Pay from
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    value="Barclays Debit - **** 4821" 
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-sm font-semibold text-[#252A3A] focus:outline-none bg-gray-50"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2 mb-6 text-xs border-b border-gray-100 pb-4">
                <div className="flex justify-between font-medium text-gray-500">
                  <span>Deposit amount</span>
                  <span className="font-semibold text-[#252A3A]">₦500,000</span>
                </div>
                <div className="flex justify-between font-medium text-gray-500">
                  <span>Interswitch fee</span>
                  <span className="font-semibold text-[#252A3A]">₦0 (waived during setup)</span>
                </div>
                <div className="flex justify-between font-semibold text-[#252A3A] pt-2">
                  <span>Total debited (GBP)</span>
                  <span className="text-[#F59E1A]">£240.18</span>
                </div>
              </div>

              <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-4 font-semibold text-sm transition-colors shadow-sm">
                Fund Wallet - ₦500,000
              </button>

            </div>

          </div>

          {/* Right Column (Recommendations & Previews) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Recommendation Card */}
            <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-2xl p-6 shadow-sm">
              <div className="inline-block border border-[#F59E1A] text-[#F59E1A] text-[9px] font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider bg-white">
                KinCare Recommendation
              </div>
              
              <h3 className="text-[40px] font-semibold text-[#252A3A] leading-none mb-1">₦500,000</h3>
              <p className="text-[11px] text-gray-500 font-medium mb-6">Recommended minimum wallet balance</p>
              
              <p className="text-[11px] text-gray-600 leading-relaxed font-medium mb-6">
                Based on <span className="font-semibold">2-3 family members</span> in <span className="font-semibold">Anambra State</span>, your wallet should cover at least one hospitalisation event. The median emergency claim in this region is ₦180,000–₦320,000.
              </p>

              <div className="bg-white rounded-xl border border-[#FDE0A1] p-4 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">Suggested initial deposit</span>
                  <span className="font-semibold text-[#F59E1A]">₦500,000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">Suggested monthly top-up</span>
                  <span className="font-semibold text-[#F59E1A]">~ ₦380,000</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                  Illustrative — based on synthetic Nigerian healthcare cost benchmarks. Actual costs vary.
                </p>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-[#F0FAFF] border border-[#BCE4F7] rounded-xl p-4 flex gap-3 shadow-sm items-start">
              <div className="w-4 h-4 rounded-full bg-[#30A8E6] flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-3 h-3 text-white" />
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                <span className="font-semibold text-[#30A8E6]">What is the safe balance?</span> KinCare tracks a recommended minimum. When your wallet drops below it, you&apos;ll receive a low-balance alert before an emergency can catch you short.
              </p>
            </div>

            {/* Coverage Preview Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-[10px] font-semibold text-gray-400 tracking-wider mb-6 uppercase">
                Your Coverage at ₦500,000
              </p>

              <div className="space-y-5">
                {/* Emergency Admission */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                    <span className="text-[#252A3A]">Emergency admission deposit</span>
                    <span className="text-[#00A859] flex items-center gap-1">Covered <Check className="w-3 h-3" strokeWidth={3} /></span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#00A859] rounded-full"></div>
                  </div>
                </div>

                {/* Mid-range surgery */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                    <span className="text-[#252A3A]">Mid-range surgery</span>
                    <span className="text-[#00A859] flex items-center gap-1">Covered <Check className="w-3 h-3" strokeWidth={3} /></span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#00A859] rounded-full"></div>
                  </div>
                </div>

                {/* Major surgery */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                    <span className="text-[#252A3A]">Major surgery (e.g. private hospital)</span>
                    <span className="text-[#F59E1A]">Partial</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-[#F59E1A] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}