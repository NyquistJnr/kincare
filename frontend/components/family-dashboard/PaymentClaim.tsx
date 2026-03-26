import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

export default function ClaimConfirmationPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content - Centered */}
      <main className="p-4 sm:p-8 pb-20 flex flex-col items-center text-center mt-6 sm:mt-12">
        
        {/* Send/Paper Plane Icon */}
        <div className="mb-6 rotate-[-15deg]">
          <Send className="w-12 h-12 text-[#F59E1A]" fill="currentColor" strokeWidth={1} />
        </div>

        {/* Titles & Description */}
        <h2 className="text-2xl sm:text-[32px] font-bold text-[#252A3A] mb-3 tracking-tight">
          Claim sent to Ifunanya
        </h2>
        <p className="text-[15px] text-[#252A3A] leading-relaxed font-medium max-w-[480px]">
          Kemi has been notified in Canada and will approve shortly. You&apos;ll get a notification the moment payment is sent to the hospital.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFFDF5] border border-[#FDE0A1] text-[#F59E1A] px-3 py-1 rounded-full text-[10px] font-bold mt-5 shadow-sm">
          <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
          Waiting for Kemi&apos;s approval
        </div>

        {/* Claim Summary Card */}
        <div className="w-full max-w-[440px] bg-white border border-gray-300 rounded-xl p-6 text-left shadow-sm mt-8 mb-4">
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">
            Your Claim
          </p>
          
          <div className="flex justify-between items-start mb-6">
            <p className="text-sm font-bold text-[#252A3A]">St. Mary&apos;s Hospital, Awka</p>
            <p className="text-sm font-bold text-[#252A3A]">₦380,000</p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-gray-200 ml-1.5 space-y-5">
            
            {/* Step 1: Claim Submitted */}
            <div className="relative pl-5">
              <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#00A859] ring-4 ring-white"></span>
              <h4 className="text-[11px] font-bold text-[#252A3A] mb-0.5">Claim submitted</h4>
              <p className="text-[9px] text-gray-500 font-medium">11:01 PM · Invoice uploaded · Account verified</p>
            </div>

            {/* Step 2: Kemi Notified */}
            <div className="relative pl-5">
              <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#F59E1A] ring-4 ring-white"></span>
              <h4 className="text-[11px] font-bold text-[#252A3A] mb-0.5">Kemi notified — awaiting approval</h4>
              <p className="text-[9px] text-gray-500 font-medium">Auto-approval fires if unreachable for 1 hour</p>
            </div>

            {/* Step 3: Payment Sent (Pending/Gray) */}
            <div className="relative pl-5">
              <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-gray-200 ring-4 ring-white"></span>
              <h4 className="text-[11px] font-bold text-gray-300">Payment sent to hospital</h4>
            </div>

          </div>
        </div>

        {/* Back Button */}
        <Link href="/family" className="w-full max-w-[440px] bg-white border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-xl py-3.5 font-bold text-[13px] transition-colors flex items-center justify-center gap-2 shadow-sm mb-3">
          <ArrowLeft className="w-4 h-4 text-gray-500" />
          Back to Dashboard
        </Link>

        {/* Footer Note */}
        <p className="text-[9px] text-gray-400 font-medium max-w-[440px] text-center">
          You&apos;ll receive a notification the moment the hospital is paid. Keep this page open to track live status.
        </p>

      </main>
    </div>
  );
}