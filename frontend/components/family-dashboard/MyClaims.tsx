import React from 'react';
import Image from 'next/image';
import { Bell, Plus, ArrowLeft, ArrowRight } from 'lucide-react';

export default function FamilyClaimsPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold">My Claims</h1>
        
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
                alt="Ngozi" 
                layout="fill" 
                objectFit="cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-bold">Ngozi</p>
              <p className="text-xs text-gray-500">Family · Lagos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-[1200px] mx-auto space-y-8">
        
        {/* Page Header & Action */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-bold text-[#252A3A] mb-1">
              My Claims
            </h2>
            <p className="text-[15px] text-gray-500 font-medium">
              All claims raised on Kemi&apos;s wallet
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
            <span>Raise New Claim</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Claims</p>
            <p className="text-[40px] leading-none font-bold text-[#252A3A]">4</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Paid</p>
            <p className="text-[40px] leading-none font-bold text-[#22C55E]">₦730,000</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Pending</p>
            <p className="text-[40px] leading-none font-bold text-[#252A3A]">1</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-5 py-2 rounded-full border border-[#FDE0A1] bg-[#FFFDF5] text-[#F59E1A] text-xs font-bold transition-colors">
            All time
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
            Last 30 days
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
            Last 90 days
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
            Last 6 months
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
            Custom Range
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                  <th className="px-6 py-5">Date & Time</th>
                  <th className="px-6 py-5">Hospital</th>
                  <th className="px-6 py-5">Amount</th>
                  <th className="px-6 py-5">Approved By</th>
                  <th className="px-6 py-5">Interswitch Ref</th>
                  <th className="px-6 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                {/* Row 1: Pending */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Mar 23, 2026</p>
                    <p className="text-[11px] text-gray-500">11:04 PM</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">St. Mary&apos;s Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">GTBank - 0024578901</p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-[#252A3A]">₦380,000</td>
                  <td className="px-6 py-5 text-xs text-gray-600 font-medium">Kemi — awaiting</td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-033-KC-003981</td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
                      Pending
                    </span>
                  </td>
                </tr>

                {/* Row 2: Paid (Auto-approved) */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Mar 20, 2026</p>
                    <p className="text-[11px] text-gray-500">9:12 AM</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A]">KinCare Wallet</p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-[#252A3A]">₦210,000</td>
                  <td className="px-6 py-5 text-xs text-gray-600 font-medium">Auto-approved</td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-033-KC-003901</td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Paid
                    </span>
                  </td>
                </tr>

                {/* Row 3: Paid */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Feb 14, 2026</p>
                    <p className="text-[11px] text-gray-500">2:33 AM</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Reddington Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">Access - 0011234567</p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-[#252A3A]">₦95,000</td>
                  <td className="px-6 py-5 text-xs text-gray-600 font-medium">Kemi Adeyemi</td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-014-KC-002100</td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Paid
                    </span>
                  </td>
                </tr>

                {/* Row 4: Paid */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Dec 19, 2025</p>
                    <p className="text-[11px] text-gray-500">8:44 PM</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A]">No payment made</p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-[#252A3A]">₦45,000</td>
                  <td className="px-6 py-5 text-xs text-gray-600 font-medium">Kemi Adeyemi</td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-038-KC-004821</td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Paid
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-[11px] text-gray-500 font-bold">Showing 6 of 12 transactions</p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-[11px] font-bold text-[#252A3A] hover:bg-gray-50 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-[11px] font-bold text-[#252A3A] hover:bg-gray-50 transition-colors">
              Next <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}