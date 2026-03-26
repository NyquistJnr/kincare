"use client";

import React, { useState } from 'react';
import { ArrowLeft, Zap, CheckCircle2, Info } from 'lucide-react';

export default function AutoApproval() {
  // State for the configuration form
  const [maxAmount, setMaxAmount] = useState('500,000');
  const [unreachableTime, setUnreachableTime] = useState('1 hour');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  // Helper to check if notifications are fully off
  const notificationsOn = pushEnabled || emailEnabled;

  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content */}
      <main className="p-4 sm:p-8 max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <button className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-6 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Dashboard / Auto-Approval</span>
        </button>

        {/* Hero Banner */}
        <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#F59E1A] tracking-wider mb-4 uppercase">
            <Zap className="w-3.5 h-3.5" fill="#F59E1A" /> AUTO-APPROVAL
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#252A3A] mb-3">
            Your family gets care, <br className="hidden md:block"/>
            even when you&apos;re unreachable.
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed font-medium max-w-3xl">
            Set a rule once. If a claim comes in and you can&apos;t be reached within your chosen time window 
            — and the amount is under your limit — KinCare approves and pays the hospital automatically. 
            You are notified the moment it fires, and you can review everything in your history.
          </p>
        </div>

        {/* Configuration Section Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-1">Configure your rule</h3>
          <p className="text-[15px] text-gray-500">Set your limits once. Update them any time from Settings.</p>
        </div>

        {/* Two Column Layout for Settings & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column (Configuration Form) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Claim Limit */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 rounded-full border-2 border-[#F59E1A] text-[#F59E1A] flex items-center justify-center font-semibold shrink-0 bg-[#FFFDF5]">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[#252A3A] text-[15px]">A claim is raised</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Your family member raises a claim at the hospital and submits the invoice.<br/>
                    You receive a push notification immediately.
                  </p>
                </div>
              </div>

              <div className="ml-12">
                <div className="relative mb-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[#252A3A]">₦</span>
                  <input 
                    type="text" 
                    value={maxAmount}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg py-3 pl-8 pr-4 text-sm font-semibold text-[#252A3A] focus:outline-none focus:border-[#F59E1A]"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 font-medium mr-1">Quick set:</span>
                  {['100,000', '250,000', '500,000', '1,000,000'].map((amt) => (
                    <button 
                      key={amt}
                      onClick={() => setMaxAmount(amt)}
                      className={`text-[11px] px-3 py-1 rounded-full font-semibold border transition-colors ${
                        maxAmount === amt 
                          ? 'bg-[#FFF4E5] border-[#F59E1A] text-[#F59E1A]' 
                          : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400'
                      }`}
                    >
                      ₦{amt}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2 items-start mt-3">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[#FFF4E5] flex items-center justify-center shrink-0">
                    <Info className="w-3 h-3 text-[#F59E1A]" />
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    The average emergency claim in Anambra State is ₦80,000-₦320,000. ₦500,000 covers most emergency scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Time Window */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 rounded-full border-2 border-[#F59E1A] text-[#F59E1A] flex items-center justify-center font-semibold shrink-0 bg-[#FFFDF5]">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[#252A3A] text-[15px]">Activate after unreachable for</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    How long KinCare waits for your response before auto-approving
                  </p>
                </div>
              </div>

              <div className="ml-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['15 mins', '30 mins', '1 hour', '2 hours'].map((time) => (
                    <button 
                      key={time}
                      onClick={() => setUnreachableTime(time)}
                      className={`text-sm px-5 py-2 rounded-full font-semibold border transition-colors ${
                        unreachableTime === time 
                          ? 'bg-[#FFF4E5] border-[#F59E1A] text-[#F59E1A]' 
                          : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2 items-start mt-3">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[#FFF4E5] flex items-center justify-center shrink-0">
                    <Info className="w-3 h-3 text-[#F59E1A]" />
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    1 hour gives you time to see the notification even if your phone was on silent, while ensuring your family isn&apos;t left waiting too long.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Notifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 rounded-full border-2 border-[#F59E1A] text-[#F59E1A] flex items-center justify-center font-semibold shrink-0 bg-[#FFFDF5]">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[#252A3A] text-[15px]">Notify me when auto-approval triggers</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Receive a push notification and email when a rule fires
                  </p>
                </div>
              </div>

              <div className="ml-12 space-y-3">
                
                {/* Push Toggle */}
                <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
                  <div>
                    <h5 className="font-semibold text-[13px] text-[#252A3A]">Push notification</h5>
                    <p className="text-[11px] text-gray-500">Instant alert when auto-approval fires</p>
                  </div>
                  {/* Custom Toggle Switch */}
                  <div 
                    onClick={() => setPushEnabled(!pushEnabled)}
                    className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${pushEnabled ? 'bg-[#22C55E]' : 'bg-gray-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${pushEnabled ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>

                {/* Email Toggle */}
                <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
                  <div>
                    <h5 className="font-semibold text-[13px] text-[#252A3A]">Email summary</h5>
                    <p className="text-[11px] text-gray-500">Full claim details sent via email</p>
                  </div>
                  {/* Custom Toggle Switch */}
                  <div 
                    onClick={() => setEmailEnabled(!emailEnabled)}
                    className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${emailEnabled ? 'bg-[#22C55E]' : 'bg-gray-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${emailEnabled ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>

                {!notificationsOn && (
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium mt-3 px-1">
                    We strongly recommend keeping notifications on. You should always know when an auto-approval fires on your behalf.
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Right Column (Live Preview & Safeguards) */}
          <div className="space-y-6">
            
            {/* Live Preview Card */}
            <div className="bg-[#FAFAFA] border border-gray-300 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-6 uppercase">
                Your Rule — Live Preview
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[13px] border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-500">Max amount</span>
                  <span className="font-semibold text-[#252A3A]">₦{maxAmount}</span>
                </div>
                <div className="flex justify-between items-center text-[13px] border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-500">Unreachable after</span>
                  <span className="font-semibold text-[#252A3A]">{unreachableTime}</span>
                </div>
                <div className="flex justify-between items-center text-[13px] border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-500">Notifications</span>
                  <span className="font-semibold text-[#252A3A]">{notificationsOn ? 'On' : 'Off'}</span>
                </div>
                <div className="flex justify-between items-center text-[13px] pt-1">
                  <span className="font-medium text-gray-500">Status</span>
                  <span className="inline-block border border-[#F59E1A] text-[#F59E1A] text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#FFFDF5]">
                    Ready to activate
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#F59E1A] hover:bg-[#E08D16] text-white rounded-xl py-3.5 font-semibold text-[15px] transition-colors shadow-sm">
                Activate Auto-Approval
              </button>
            </div>

            {/* Safeguards Card */}
            <div className="bg-[#E6F6ED] border border-[#A6E5C3] rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-bold text-[#00A859] tracking-wider mb-4 uppercase">
                Safeguards Always In Place
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                    Auto-approval only fires up to your chosen maximum amount. Claims above this always require your manual approval.
                  </p>
                </div>
                
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                    The AI anomaly check still runs. If the bill is flagged as suspicious, auto-approval is paused even if the amount is within limit.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                    Payment goes directly to the hospital&apos;s bank account via Interswitch. It never touches the family member&apos;s account.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4 h-4 rounded bg-[#00A859] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                    You can deactivate or update your rule at any time from Settings.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}