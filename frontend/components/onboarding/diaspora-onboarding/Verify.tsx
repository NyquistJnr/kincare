"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Info } from 'lucide-react';

export default function VerifyIdentity() {
  // State matching the populated fields in the screenshot
  const [bvn, setBvn] = useState('22••••••••3');
  const [fullName, setFullName] = useState('Ifunaya Chidinma Okeke');
  const [phone, setPhone] = useState('+44 7700 900821');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans text-[#252A3A]">
      
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center mb-10 px-2 space-x-2">
            <Image 
                src="/images/logo.png" 
                alt="KinCare Logo" 
                width={60} 
                height={20} 
                priority
                className="object-contain"
            />
            <span className="text-4xl font-normal font-inter">
                <span className="text-[#252A3A]">Kin</span>
                <span className="text-[#F59E1A]">Care</span>
            </span>
        </div>

        {/* 5-Step Progress Stepper */}
        <div className="flex items-center justify-between w-full mb-12 relative px-4">
          {/* Step 1 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-gray-400 font-bold tracking-wider">Role</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 2 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-gray-400 font-bold tracking-wider">Account</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 3 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-gray-400 font-bold tracking-wider">Security</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>

          {/* Step 4 - Active */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#F59E1A] text-white flex items-center justify-center font-bold shrink-0">
              4
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#F59E1A] font-bold tracking-wider">KYC</span>
          </div>

          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 5 - Pending */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-white border border-gray-300 text-gray-400 flex items-center justify-center font-bold shrink-0">
              5
            </div>
          </div>
        </div>

        {/* Headers */}
        <div className="w-full text-left mb-8">
          <h1 className="text-[28px] font-bold mb-2">
            Verify your identity
          </h1>
          <p className="text-[15px] text-gray-600 font-medium leading-relaxed pr-4">
            Required by Interswitch&apos;s CBN-licensed payment <br className="hidden sm:block"/>
            infrastructure. Your data is encrypted and never shared.
          </p>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-5 mb-6">
          
          {/* BVN Input */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-medium text-gray-500">
              Bank Verification Number (BVN)
            </label>
            <input 
              type="text" 
              value={bvn}
              onChange={(e) => setBvn(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-[15px] font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
            />
            <p className="text-[9px] text-gray-400 font-medium">
              Your BVN links your identity to the payment system. Find it by dialing *565*0# on your Nigerian phone number.
            </p>
          </div>

          {/* Full Name Input */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-medium text-gray-500">
              Full legal name
            </label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-[15px] font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-medium text-gray-500">
              Phone number
            </label>
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-[15px] font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
            />
          </div>

        </div>

        {/* BVN Info Banner */}
        <div className="w-full bg-[#F0FAFF] border border-[#BCE4F7] rounded-xl p-4 flex gap-3 mb-8 shadow-sm items-start">
          <div className="w-4 h-4 rounded-full bg-[#30A8E6] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-3 h-3 text-white" />
          </div>
          <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
            <span className="font-bold text-[#30A8E6]">Why we need your BVN:</span> Interswitch requires BVN verification to process payments on KinCare. Your BVN is encrypted at rest and used only for identity verification — it is never stored in plaintext or shared with third parties.
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white py-4 rounded-xl font-bold text-[15px] transition-colors shadow-sm">
          Continue
        </button>

      </div>
    </div>
  );
}