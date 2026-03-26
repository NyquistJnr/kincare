"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Banknote, Clock, Lightbulb, Bell } from 'lucide-react';

export default function AutoApprovalSuccess() {
  return (
    <div className="flex-1 min-h-screen bg-[#FAFAFA] text-[#252A3A] font-sans">
      {/* Main Content - Centered */}
      <main className="p-4 sm:p-8 pb-20 flex flex-col items-center text-center mt-6 sm:mt-10">
        
        <div className="w-full max-w-[600px] flex flex-col items-center">
          
          {/* Top Zap Icon */}
          <div className="w-16 h-16 rounded-full border-[2.5px] border-[#F59E1A] flex items-center justify-center mb-6 bg-white shadow-sm">
            <Zap className="w-7 h-7 text-[#F59E1A]" strokeWidth={2.5} />
          </div>

          {/* Titles & Description */}
          <h2 className="text-2xl sm:text-[32px] font-semibold text-[#252A3A] mb-3">
            Auto-Approval is Live
          </h2>
          <p className="text-[15px] text-[#252A3A] mb-6 leading-relaxed font-medium">
            Your family is now protected even when you can&apos;t be reached. <br/>
            Here&apos;s the rule that&apos;s active on your account.
          </p>

          {/* Active Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFFDF5] border border-[#FDE0A1] text-[#F59E1A] px-4 py-1.5 rounded-full text-xs font-semibold mb-10 shadow-sm">
            <span className="w-2 h-2 bg-[#F59E1A] rounded-full"></span>
            Active since March 23, 2026 · 11:32 PM
          </div>

          {/* Rule Summary Badges Grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {/* Rule 1: Amount */}
            <div className="flex items-center gap-2 bg-[#FFFDF5] border border-[#FDE0A1] px-4 py-2.5 rounded-lg text-[13px] font-medium text-[#252A3A] shadow-sm">
              <Banknote className="w-4 h-4 text-gray-700" />
              <span>Auto-approve claims up to <span className="font-semibold text-[#F59E1A]">₦500,000</span></span>
            </div>

            {/* Rule 2: Time */}
            <div className="flex items-center gap-2 bg-[#FFFDF5] border border-[#FDE0A1] px-4 py-2.5 rounded-lg text-[13px] font-medium text-[#252A3A] shadow-sm">
              <Clock className="w-4 h-4 text-gray-700" />
              <span>Fires after <span className="font-semibold text-[#F59E1A]">1 hour</span> unreachable</span>
            </div>

            {/* Rule 3: Notifications */}
            <div className="flex items-center gap-2 bg-[#FFFDF5] border border-[#FDE0A1] px-4 py-2.5 rounded-lg text-[13px] font-medium text-[#252A3A] shadow-sm">
              <Bell className="w-4 h-4 text-gray-700" />
              <span>Notifications <span className="font-semibold text-[#F59E1A]">on</span> — push & email</span>
            </div>

            {/* Rule 4: AI Check */}
            <div className="flex items-center gap-2 bg-[#FFFDF5] border border-[#FDE0A1] px-4 py-2.5 rounded-lg text-[13px] font-medium text-[#252A3A] shadow-sm">
              <Lightbulb className="w-4 h-4 text-gray-700" />
              <span>AI anomaly check <span className="font-semibold text-[#F59E1A]">always runs</span></span>
            </div>
          </div>

          {/* Manage Rule Card */}
          <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 text-left">
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-4 uppercase">
              Manage Your Rule
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/diaspora/auto-approval" className="flex-1 border border-gray-300 text-[#252A3A] hover:bg-gray-50 rounded-lg py-3 font-semibold text-[13px] transition-colors text-center">
                Update Rule
              </Link>
              <button className="flex-1 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg py-3 font-semibold text-[13px] transition-colors">
                Deactivate
              </button>
            </div>
            
            <p className="text-[11px] text-gray-500 font-medium text-center">
              Deactivating removes the safety net. Claims will require your manual approval at all times.
            </p>
          </div>

          {/* Back to Dashboard Button */}
          <Link href="/diaspora" className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-4 font-semibold text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>

        </div>
      </main>
    </div>
  );
}