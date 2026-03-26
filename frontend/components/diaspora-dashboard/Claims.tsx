import React from 'react';
import Image from 'next/image';
import { 
  Bell, 
  Download, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function Claims() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold">Claim</h1>
        
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
                alt="Ifunanya Obi" 
                layout="fill" 
                objectFit="cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-bold">Ifunanya Obi</p>
              <p className="text-xs text-gray-500">Diaspora · Manchester</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-[1400px] mx-auto space-y-8">
        
        {/* Page Header & Export Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-bold text-[#252A3A] mb-1">
              Claim & Payment History
            </h2>
            <p className="text-[15px] text-gray-500 font-medium">
              Full audit trail — every claim, payment, and top-up on your wallet
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-[#252A3A] px-5 py-2.5 rounded-xl font-bold transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Claims</p>
            <p className="text-4xl font-bold text-[#252A3A]">12</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Paid Out</p>
            <p className="text-4xl font-bold text-[#E5484D]">₦1.84M</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Topped Up</p>
            <p className="text-4xl font-bold text-[#22C55E]">₦2.4M</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Auto-Approvals</p>
            <p className="text-4xl font-bold text-[#252A3A]">2</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-5 py-2 rounded-full border border-[#FDE0A1] bg-[#FFFDF5] text-[#F59E1A] text-xs font-bold transition-colors">
              All
            </button>
            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
              Claims
            </button>
            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
              Top-Ups
            </button>
            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white text-xs font-bold transition-colors">
              Auto-Approved
            </button>
          </div>

          {/* Search & Date Filter */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-xs font-bold text-[#252A3A] bg-white focus:outline-none min-w-[140px] appearance-none cursor-pointer">
              <option>90 Days</option>
              <option>30 Days</option>
              <option>All Time</option>
            </select>
            
            <div className="relative w-full lg:w-64">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder="Search by hospital" 
                className="w-full border border-gray-300 rounded-lg py-2.5 pl-9 pr-4 text-xs font-medium text-[#252A3A] bg-white focus:outline-none focus:border-[#F59E1A]"
              />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                  <th className="px-6 py-5">Date & Time</th>
                  <th className="px-6 py-5">Type</th>
                  <th className="px-6 py-5">Description</th>
                  <th className="px-6 py-5">Hospital</th>
                  <th className="px-6 py-5">Interswitch Ref</th>
                  <th className="px-6 py-5">Amount</th>
                  <th className="px-6 py-5">AI Flag</th>
                  <th className="px-6 py-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                {/* Row 1: Claim Paid */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Mar 23, 2026</p>
                    <p className="text-[11px] text-gray-500">11:04 PM</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF0F0] border border-red-200 text-[#E5484D] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#E5484D] rounded-full"></span>
                      Claim Paid
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Emergency head trauma</p>
                    <p className="text-[10px] text-gray-400">Raised by Emeka</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">St. Mary&apos;s Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">GTBank · 0024578901</p>
                  </td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-038-KC-004821</td>
                  <td className="px-6 py-5 text-sm font-bold text-[#E5484D]">-₦380,000</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2 py-0.5 rounded text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Settled
                    </span>
                  </td>
                </tr>

                {/* Row 2: Top-up */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Mar 20, 2026</p>
                    <p className="text-[11px] text-gray-500">9:12 AM</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Top-up
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Wallet top-up</p>
                    <p className="text-[10px] text-gray-400">Barclays Debit **** 4821</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A]">KinCare Wallet</p>
                  </td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-033-KC-003981</td>
                  <td className="px-6 py-5 text-sm font-bold text-[#00A859]">+₦200,000</td>
                  <td className="px-6 py-5 font-bold text-gray-400">—</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Confirmed
                    </span>
                  </td>
                </tr>

                {/* Row 3: Auto-approved */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Feb 14, 2026</p>
                    <p className="text-[11px] text-gray-500">2:33 AM</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF9EA] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
                      Auto-approved
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Appendectomy</p>
                    <p className="text-[10px] text-gray-400">Raised by Emeka</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Reddington Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">Access · 0011234567</p>
                  </td>
                  <td className="px-6 py-5 text-[10px] text-gray-500 font-mono tracking-tighter">ISW-2026-014-KC-002100</td>
                  <td className="px-6 py-5 text-sm font-bold text-[#E5484D]">-₦210,000</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2 py-0.5 rounded text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Settled
                    </span>
                  </td>
                </tr>

                {/* Row 4: Declined */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Dec 19, 2025</p>
                    <p className="text-[11px] text-gray-500">8:44 PM</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                      Declined
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Eye surgery</p>
                    <p className="text-[10px] text-gray-400">Raised by Emeka · AI flagged 3.1x above range</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-[#252A3A]">No payment made</p>
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-400">—</td>
                  <td className="px-6 py-5 text-sm font-bold text-[#252A3A]">₦850,000</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1 bg-[#FFF0F0] border border-red-200 text-[#E5484D] px-2 py-0.5 rounded text-[10px] font-bold">
                      <AlertTriangle className="w-3 h-3" />
                      Flagged
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-300 text-gray-600 px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                      Declined
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