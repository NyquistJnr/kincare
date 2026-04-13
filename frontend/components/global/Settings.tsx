"use client";

import React from 'react';
import Link from 'next/link';
import { User, Shield, Bell, CreditCard, Globe, LogOut } from 'lucide-react';

interface SettingsProps {
  userName?: string;
  userEmail?: string;
  userRole?: 'diaspora' | 'family';
  basePath?: string;
}

export default function Settings({ 
  userName = "Ifunanya Obi", 
  userEmail = "ifunanya@email.com",
  userRole = "diaspora",
  basePath = "/diaspora"
}: SettingsProps) {
  return (
    <div className="flex-1 min-h-screen bg-[#FAFAFA] text-[#252A3A] font-sans">
      <main className="p-4 sm:p-8 max-w-8xl mx-auto space-y-6 sm:space-y-8">

        {/* Page Header */}
        <div>
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#252A3A] mb-1">Settings</h2>
          <p className="text-sm sm:text-[15px] text-gray-500 font-medium">
            Manage your account preferences and security
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Your Profile</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 rounded-full bg-[#FFF9EA] flex items-center justify-center text-[#F59E1A] text-xl font-bold shrink-0">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-bold text-[#252A3A] truncate">{userName}</p>
              <p className="text-sm text-gray-500 truncate">{userEmail}</p>
              <span className="inline-flex items-center gap-1.5 bg-[#FFF9EA] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-0.5 rounded-full text-[10px] font-bold mt-1 capitalize">
                {userRole} Member
              </span>
            </div>
            <button className="text-sm font-bold text-[#F59E1A] hover:text-[#E08D16] transition-colors self-start sm:self-center">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-3">

          {/* Personal Information */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-[#FFF9EA] rounded-xl flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-[#F59E1A]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#252A3A]">Personal Information</p>
                <p className="text-xs text-gray-500">Name, phone number, address</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </button>
          </div>

          {/* Security */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-[#E6F6ED] rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#00A859]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#252A3A]">Security & PIN</p>
                <p className="text-xs text-gray-500">Change PIN, biometrics, two-factor auth</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-[#F0FAFF] rounded-xl flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-[#30A8E6]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#252A3A]">Notifications</p>
                <p className="text-xs text-gray-500">Push, email, and SMS preferences</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </button>
          </div>

          {/* Payment Methods — diaspora only */}
          {userRole === 'diaspora' && (
            <Link href={`${basePath}/bank-cards`} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden block">
              <div className="flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-[#FFF0F0] rounded-xl flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-[#E5484D]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#252A3A]">Payment Methods</p>
                  <p className="text-xs text-gray-500">Manage saved cards and bank accounts</p>
                </div>
                <span className="text-gray-400 text-lg">›</span>
              </div>
            </Link>
          )}

          {/* Language & Region */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#252A3A]">Language & Region</p>
                <p className="text-xs text-gray-500">English · West Africa (WAT)</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </button>
          </div>

        </div>

        {/* Danger Zone */}
        <div className="bg-white border border-red-100 rounded-2xl p-4 sm:p-6 shadow-sm">
          <p className="text-[10px] font-bold text-[#E5484D] tracking-wider mb-4 uppercase">Danger Zone</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-[#252A3A]">Log out of KinCare</p>
              <p className="text-xs text-gray-500">You&apos;ll need your PIN to sign back in</p>
            </div>
            <button className="flex items-center gap-2 border border-red-200 text-[#E5484D] hover:bg-red-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors self-start">
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </div>
        </div>

        {/* App Info */}
        <p className="text-center text-[10px] text-gray-400 font-medium pb-6">
          KinCare v1.0.0 · Powered by Interswitch · Lagos, Nigeria
        </p>

      </main>
    </div>
  );
}
