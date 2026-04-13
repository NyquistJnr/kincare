"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ConnectWalletPage() {
  // Simple state to simulate input values for the demonstration
  const router = useRouter();
  const [fullName, setFullName] = useState('Ngozi Okeke');
  const [pairingCode, setPairingCode] = useState('KC·7F2A');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans text-[#252A3A]">
      
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Logo (Using specific requested style) */}
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

        {/* Progress Stepper */}
        <div className="flex items-center mb-6 w-full">
          {/* Step 1 - Completed */}
          <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" strokeWidth={3} />
          </div>
          <div className="flex-1 h-0.5 bg-[#00A859] mx-4"></div>
          
          {/* Step 2 - Active */}
          <div className="w-8 h-8 rounded bg-[#F59E1A] text-white flex items-center justify-center font-bold shrink-0">
            2
          </div>
          <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
          
          {/* Step 3 - Pending */}
          <div className="w-8 h-8 rounded bg-white border border-gray-300 text-gray-400 flex items-center justify-center font-bold shrink-0">
            3
          </div>
          
          <span className="text-xs text-gray-500 font-medium ml-4 whitespace-nowrap">
            Step 2 of 3
          </span>
        </div>

        {/* Headers */}
        <div className="w-full text-left mb-5">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#0D0F14] mb-2">
            Connect to your family&apos;s wallet
          </h1>
          <p className="text-base sm:text-[18px] text-[#343B52] leading-relaxed">
            Enter your full name and the pairing code shared
            with you. Your wallet access will be set up instantly.
          </p>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-6 mb-8">
          
          {/* Full Name Input */}
          <div className="space-y-1">
            <label className="block text-sm text-[#4E576E]">
              Your full name
            </label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-[15px] font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
            />
            <p className="text-[11px] text-[#8891A4]">
              As it appears on your ID — this is how you&apos;ll appear in the diaspora member&apos;s app
            </p>
          </div>

          {/* Pairing Code Input */}
          <div className="space-y-1">
            <label className="block text-sm text-[#4E576E]">
              Your pairing code
            </label>
            <input 
              type="text" 
              value={pairingCode}
              onChange={(e) => setPairingCode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-[15px] font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
            />
            {/* Success Message */}
            <p className="text-xs text-[#00A859] font-medium flex items-center gap-1.5 pt-1">
              <Check className="w-3.5 h-3.5 bg-[#00A859] text-white rounded p-0.5" strokeWidth={3} />
              Code verified — linked to Ifunanya Okeke
            </p>
          </div>

        </div>

        {/* Continue Button */}
        <button
          onClick={() => router.push('/set-pin-family')}
          className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white py-4 rounded-xl font-bold text-[15px] transition-colors mb-4"
        >
          Continue
        </button>

        {/* Footer Links */}
        <div className="w-full text-center space-y-4">
          <p className="text-[11px] text-[#252A3A]">
            By continuing you agree to KinCare&apos;s <a href="#" className="text-[#F59E1A] hover:underline">Terms of Service</a>.
          </p>
          
          <div className="w-full h-px bg-gray-100"></div>
          
          <p className="text-xs text-[#252A3A]">
            Code not working? <button className="text-[#F59E1A] hover:underline">Ask Ifunanya to resend a new one</button> — codes expire after 48 hours.
          </p>
        </div>

      </div>
    </div>
  );
}