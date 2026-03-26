"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check, Delete } from 'lucide-react';

export default function SecureAccountPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(true);
  const [pin, setPin] = useState<string[]>([]);

  const handleDigit = (digit: string) => {
    if (pin.length < 6) setPin([...pin, digit]);
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  // Keypad button configuration
  const keypadButtons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '',  '0', 'delete'
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans text-[#252A3A]">
      
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center mb-8 mt-10 px-2 space-x-2">
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
        <div className="flex items-center justify-between w-full mb-10 relative px-2">
          {/* Step 1 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-bold tracking-wider">Role</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 2 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-bold tracking-wider">Account</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 3 - Active */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#F59E1A] text-white flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#F59E1A] font-bold tracking-wider">Security</span>
          </div>

          <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>

          {/* Step 4 - Pending */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-white border border-gray-300 text-gray-400 flex items-center justify-center font-bold shrink-0">
              4
            </div>
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
        <div className="w-full text-center mb-8">
          <h1 className="text-2xl sm:text-[28px] font-semibold mb-2">
            Secure your account
          </h1>
          <p className="text-[15px] text-gray-600 font-medium">
            Choose how you&apos;ll verify it&apos;s you when you open KinCare.
          </p>
        </div>

        {/* PIN Entry Section */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="text-center mb-6">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">
              ENTER YOUR 6-DIGIT PIN
            </p>
            <p className="text-xs text-gray-400 font-medium">
              You&apos;ll use this every time you open KinCare
            </p>
          </div>

          {/* PIN Dots */}
          <div className="flex gap-3 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 transition-colors ${
                  i < pin.length
                    ? 'bg-[#F59E1A] border-[#F59E1A]'
                    : 'border-gray-300 bg-white'
                }`}
              />
            ))}
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-3 gap-3 w-[260px]">
            {keypadButtons.map((btn, index) => {
              if (btn === '') {
                return <div key={index} className="h-[52px]"></div>;
              }

              if (btn === 'delete') {
                return (
                  <button 
                    key={index}
                    onClick={handleDelete}
                    className="h-[52px] rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <Delete className="w-5 h-5" />
                  </button>
                );
              }

              return (
                <button 
                  key={index}
                  onClick={() => handleDigit(btn)}
                  className="h-[52px] rounded-lg border border-gray-300 flex items-center justify-center text-xl font-medium text-[#252A3A] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="w-full flex items-start gap-3 mb-5 px-2">
          {/* Custom Checkbox */}
          <div 
            onClick={() => setAgreed(!agreed)}
            className={`mt-0.5 w-[18px] h-[18px] rounded flex items-center justify-center cursor-pointer transition-colors shrink-0 border ${
              agreed 
                ? 'bg-[#F59E1A] border-[#F59E1A]' 
                : 'border-gray-300 bg-white'
            }`}
          >
            <Check className={`w-3 h-3 stroke-[4] ${agreed ? 'text-white' : 'text-transparent'}`} />
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            I have read and agree to KinCare&apos;s Terms of Service and Privacy Policy. I understand that KinCare processes payments through Interswitch&apos;s CBN-licensed payment rails.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => router.push('/verify')}
          className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white py-4 rounded-xl font-bold text-[15px] transition-colors shadow-sm"
        >
          Continue
        </button>

      </div>
    </div>
  );
}