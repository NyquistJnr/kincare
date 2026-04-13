"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function LinkPaymentPage() {
  // State for form inputs (matching the populated data in the design)
  const [cardName, setCardName] = useState('Ifunaya Chidinma Okeke');
  const [cardNumber, setCardNumber] = useState('4821 •••• •••• 4821');
  const [expiry, setExpiry] = useState('09 / 28');
  const [cvv, setCvv] = useState('•••');
  
  // State to manage which payment method is selected
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'bank'>('card');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans text-[#252A3A]">
      
      <div className="w-full max-w-md mx-auto mb-10 flex flex-col items-center">
        
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
        <div className="flex items-center justify-between w-full mb-10 relative px-4">
          {/* Step 1 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-semibold tracking-wider">Role</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 2 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-semibold tracking-wider">Account</span>
          </div>
          
          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>
          
          {/* Step 3 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-semibold tracking-wider">Security</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>

          {/* Step 4 - Completed */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#00A859] text-white flex items-center justify-center font-semibold shrink-0">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#00A859] font-semibold tracking-wider">KYC</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#00A859] mx-2"></div>

          {/* Step 5 - Active */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded bg-[#F59E1A] text-white flex items-center justify-center font-semibold shrink-0">
              5
            </div>
            <span className="absolute -bottom-5 text-[9px] text-[#F59E1A] font-semibold tracking-wider">Payment</span>
          </div>
        </div>

        {/* Headers */}
        <div className="w-full text-left mb-5">
          <h1 className="text-2xl sm:text-[28px] font-semibold mb-2">
            Link a payment method
          </h1>
          <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
            How would you like to fund your health wallet? You can always add more methods later.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="w-full space-y-3 mb-5">
          
          {/* Option 1: Debit or Credit Card */}
          <div>
            <div 
              onClick={() => setSelectedMethod('card')}
              className={`cursor-pointer rounded-xl p-5 transition-colors border ${
                selectedMethod === 'card' 
                  ? 'border-[#FDE0A1] bg-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="font-semibold text-[#252A3A] mb-0.5 text-sm">Debit or Credit Card</h3>
              <p className="text-[11px] text-gray-500 font-medium">Visa, Mastercard, Amex · GBP, USD, CAD</p>
            </div>

            {/* Expanded Form for Card details */}
            {selectedMethod === 'card' && (
              <div className="border border-gray-200 rounded-xl p-5 mt-2 space-y-4 shadow-sm bg-white">
                {/* Cardholder Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-medium text-gray-500">
                    Cardholder name
                  </label>
                  <input 
                    type="text" 
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
                  />
                </div>

                {/* Card Number */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-medium text-gray-500">
                    Card number
                  </label>
                  <input 
                    type="text" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
                  />
                </div>

                {/* Expiry and CVV Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-medium text-gray-500">
                      Expiry
                    </label>
                    <input 
                      type="text" 
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-medium text-gray-500">
                      CVV
                    </label>
                    <input 
                      type="text" 
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm font-medium text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Option 2: Bank Transfer */}
          <div 
            onClick={() => setSelectedMethod('bank')}
            className={`cursor-pointer rounded-xl p-5 transition-colors border ${
              selectedMethod === 'bank' 
                ? 'border-[#FDE0A1] bg-white' 
                : 'border-gray-300 bg-white hover:bg-gray-50'
            }`}
          >
            <h3 className="font-semibold text-[#252A3A] mb-0.5 text-sm">Bank Transfer</h3>
            <p className="text-[11px] text-gray-500 font-medium">Direct debit from UK, US, or CA account</p>
          </div>

        </div>

        {/* Action Button */}
        <button
          onClick={() => router.push('/diaspora')}
          className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white py-4 rounded-xl font-bold text-[15px] transition-colors shadow-sm mt-2"
        >
          Save & Continue
        </button>

      </div>
    </div>
  );
}