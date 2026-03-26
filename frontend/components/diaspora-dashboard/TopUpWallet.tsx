import React from 'react';
import Image from 'next/image';
import { Bell, CreditCard, ArrowLeft } from 'lucide-react';

export default function TopUpWallet() {
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
              <p className="text-sm text-gray-500">Diaspora · Manchester</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">
        
        {/* Page Title & Balances */}
        <div className="mb-8">
          <h2 className="text-[28px] font-semibold text-[#252A3A] mb-2">
            Top up your wallet
          </h2>
          <p className="text-[15px] text-gray-500 font-medium">
            Current balance: <span className="text-[#252A3A] font-semibold">₦285,000</span> · Safe balance: <span className="text-[#F59E1A] font-semibold">57%</span>
          </p>
        </div>

        {/* 2-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column (Fund Your Wallet Form) */}
          <div className="lg:col-span-3 bg-[#FFFDF5] border border-[#FDE0A1] rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-6 uppercase">
              Fund Your Wallet
            </p>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-500 mb-2">
                Amount to deposit (₦)
              </label>
              <input 
                type="text" 
                defaultValue="500,000" 
                className="w-full border border-gray-300 rounded-lg p-3 text-sm font-semibold text-[#252A3A] focus:outline-none bg-white"
              />
            </div>

            {/* Quick Set Buttons */}
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <span className="text-[10px] text-gray-400 font-semibold mr-1">Quick set:</span>
              <button className="px-3 py-1.5 rounded-full border border-gray-300 text-gray-400 text-[10px] font-semibold hover:bg-gray-50 bg-white transition-colors">
                ₦50,000
              </button>
              <button className="px-3 py-1.5 rounded-full border border-gray-300 text-gray-400 text-[10px] font-semibold hover:bg-gray-50 bg-white transition-colors">
                ₦100,000
              </button>
              <button className="px-3 py-1.5 rounded-full border border-[#F59E1A] text-[#F59E1A] text-[10px] font-semibold bg-[#FFF9EA] transition-colors">
                ₦200,000
              </button>
              <button className="px-3 py-1.5 rounded-full border border-gray-300 text-gray-400 text-[10px] font-semibold hover:bg-gray-50 bg-white transition-colors">
                ₦500,000
              </button>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-500 mb-2">
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

            {/* Summary List */}
            <div className="space-y-3 mb-8 text-[11px] md:text-sm">
              <div className="flex justify-between font-medium text-gray-500">
                <span>Deposit amount</span>
                <span className="font-semibold text-[#252A3A]">₦500,000</span>
              </div>
              <div className="flex justify-between font-medium text-gray-500">
                <span>Interswitch fee</span>
                <span className="font-semibold text-[#252A3A]">₦0 (waived during setup)</span>
              </div>
              <div className="flex justify-between font-semibold text-[#252A3A] pt-1">
                <span>Total debited (GBP)</span>
                <span className="text-[#F59E1A]">£240.18</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-4 font-semibold text-sm transition-colors shadow-sm">
              Review Top-Up
            </button>

          </div>

          {/* Right Column (Breakdown & Confirm Actions) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Payment Breakdown Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-[10px] font-semibold text-gray-400 tracking-wider mb-6 uppercase">
                Payment Breakdown
              </p>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-500">Wallet top-up</span>
                  <span className="font-semibold text-[#252A3A]">₦200,000</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-500">Exchange rate (GBP/NGN)</span>
                  <span className="font-semibold text-[#252A3A]">1 GBP = 2,075.40 NGN</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-500">Interswitch processing fee</span>
                  <span className="font-semibold text-[#252A3A]">
                    ₦0 <span className="text-[#22C55E] font-medium text-[10px] ml-0.5">(waived)</span>
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-500">FX conversion fee</span>
                  <span className="font-semibold text-[#252A3A]">£0.48</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-gray-500">Total charged to Barclays *4821</span>
                  <span className="font-semibold text-[#F59E1A]">£96.98</span>
                </div>
              </div>
            </div>

            {/* Balance Forecast Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-medium text-gray-500">Current balance</span>
                <span className="font-semibold text-[#252A3A]">₦285,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-500">After top-up</span>
                <span className="font-semibold text-[#22C55E]">₦485,000 ↑</span>
              </div>
            </div>

            {/* Payment Method Selected Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#252A3A]" />
                <div>
                  <p className="text-[11px] font-semibold text-[#252A3A]">Barclays Debit - **** 4821</p>
                  <p className="text-[10px] text-gray-400">GBP · Change</p>
                </div>
              </div>
              <button className="text-[10px] font-semibold text-[#F59E1A] hover:underline">
                Change
              </button>
            </div>

            {/* Confirm Actions */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-[#22C55E] hover:bg-[#1CA850] text-white rounded-xl py-3.5 font-semibold text-sm transition-colors shadow-sm">
                Confirm Top-Up
              </button>
              <button className="w-full bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl py-3.5 font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4 text-gray-500" />
                Back to Dashboard
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}