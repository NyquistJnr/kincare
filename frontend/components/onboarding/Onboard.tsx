"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Plane, Home, Check } from 'lucide-react';

export default function OnboardingRolePage() {
  // State to track which role is selected. Defaulting to 'family' to match your image.
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'diaspora' | 'family'>('family');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans text-[#252A3A]">
      
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        
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

        {/* Header Text */}
        <div className="text-center mb-5 space-y-2">
          <h1 className="text-2xl sm:text-[32px] font-bold leading-tight">
            Who are you joining as?
          </h1>
          <p className="text-[15px] text-[#4E576E]">
            Select your role. This shapes your entire experience.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="w-full space-y-4 mb-8">
          
          {/* Option 1: Diaspora Member */}
          <div 
            onClick={() => setSelectedRole('diaspora')}
            className={`cursor-pointer border p-6 rounded-xl flex gap-5 items-start transition-all duration-200 ${
              selectedRole === 'diaspora' 
                ? 'border-[#F59E1A] bg-[#FFFDF5]' 
                : 'border-gray-400 hover:border-gray-500 bg-white'
            }`}
          >
            <div className="shrink-0 mt-1">
              <Plane className="w-7 h-7 text-[#252A3A]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-1.5">Diaspora Member</h2>
              <p className="text-[13px] text-[#4E576E] leading-relaxed pr-4">
                I live abroad and pre-fund a health wallet for my family in Nigeria. I approve claims and track all payments.
              </p>
            </div>
            {/* Checkbox */}
            <div className={`shrink-0 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
              selectedRole === 'diaspora' 
                ? 'bg-[#F59E1A] border-[#F59E1A]' 
                : 'border-gray-400 bg-transparent'
            }`}>
              <Check className={`w-3.5 h-3.5 stroke-[3] ${selectedRole === 'diaspora' ? 'text-white' : 'text-gray-400'}`} />
            </div>
          </div>

          {/* Option 2: Family Member */}
          <div 
            onClick={() => setSelectedRole('family')}
            className={`cursor-pointer border p-6 rounded-xl flex gap-5 items-start transition-all duration-200 ${
              selectedRole === 'family' 
                ? 'border-[#F59E1A] bg-white' 
                : 'border-gray-400 hover:border-gray-500 bg-white'
            }`}
          >
            <div className="shrink-0 mt-1">
              <Home className="w-7 h-7 text-[#252A3A]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-1.5">Family Member</h2>
              {/* Note: Duplicated text replicated exactly as shown in the provided screenshot */}
              <p className="text-[13px] text-[#4E576E] leading-relaxed pr-4">
                I live abroad and pre-fund a health wallet for my family in Nigeria. I approve claims and track all payments.
              </p>
            </div>
            {/* Checkbox */}
            <div className={`shrink-0 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
              selectedRole === 'family' 
                ? 'bg-[#F59E1A] border-[#F59E1A]' 
                : 'border-gray-400 bg-transparent'
            }`}>
              <Check className={`w-3.5 h-3.5 stroke-[3] ${selectedRole === 'family' ? 'text-white' : 'text-gray-400'}`} />
            </div>
          </div>

        </div>

        {/* Continue Button */}
        <button
          onClick={() => router.push(selectedRole === 'diaspora' ? '/register' : '/connect')}
          className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white py-4 rounded-xl font-bold text-[15px] transition-colors mb-4"
        >
          Continue
        </button>

        {/* Terms and Privacy Footer */}
        <p className="text-[10px] text-[#252A3A] text-center">
          By continuing you agree to KinCare&apos;s <a href="#" className="text-[#F59E1A] hover:underline">Terms of Service</a> and <a href="#" className="text-[#F59E1A] hover:underline">Privacy Policy</a>.
        </p>

      </div>
    </div>
  );
}