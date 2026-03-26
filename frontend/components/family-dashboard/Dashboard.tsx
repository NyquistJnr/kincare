import React from 'react';
import Image from 'next/image';
import { Bell, ArrowRight, Lightbulb } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative p-2 bg-[#FFF4E5] rounded-lg cursor-pointer">
            <Bell className="w-5 h-5 text-[#F59E1A]" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#E5484D] rounded-full"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
              {/* Using a placeholder avatar, replace src with actual image */}
              <Image 
                src="/images/profile.jpg" 
                alt="Ngozi" 
                layout="fill" 
                objectFit="cover"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Ngozi</p>
              <p className="text-xs text-gray-500">Family · Lagos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-8xl mx-auto space-y-6">
        {/* Greeting */}
        <h2 className="text-2xl font-semibold">Good evening, Ngozi 👋</h2>

        {/* Health Wealth Balance Card */}
        <div className="bg-[#FEF3D9] border border-[#FDE0A1] rounded-2xl p-6 relative flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-gray-500 tracking-wider mb-1">HEALTH WEALTH BALANCE</p>
              <h3 className="text-4xl font-semibold text-black">₦485,000</h3>
              <p className="text-xs text-gray-500 mt-1">
                Funded by Kemi 💛 · Always ready for you
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">
              <ArrowRight className="w-4 h-4" />
              <span>Raise Claim</span>
            </button>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-end text-right">
            <div className="flex items-center gap-1.5 bg-[#E6F6ED] text-[#00A859] px-3 py-1 rounded-full text-xs font-medium border border-[#A6E5C3] mb-3">
              <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
              Wallet Active
            </div>
            <p className="text-xs text-gray-500">Linked diaspora</p>
            <p className="text-sm font-bold text-[#252A3A]">Ifunanya Okeke</p>
            <p className="text-xs text-gray-500">Canada</p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#F0FAFF] border border-[#BCE4F7] rounded-xl p-4 flex gap-3 shadow-sm">
          <Lightbulb className="w-5 h-5 text-[#30A8E6] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-[#252A3A]">How to use KinCare in an emergency</h4>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              At the hospital, tap <span className="font-semibold text-[#30A8E6]">Raise a Claim</span>. Upload the invoice photo and enter the hospital&apos;s bank account number. Kemi gets notified immediately and approves from Canada. The hospital is paid directly. You never handle the money.
            </p>
          </div>
        </div>

        {/* Recent Claims Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6">
            <h3 className="text-lg font-medium">My Recent Claims</h3>
            <button className="flex items-center gap-1 text-[#F59E1A] hover:text-[#E08D16] text-sm font-medium transition-colors">
              See all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Hospital</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Payment</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-xs text-gray-600">Mar 23, 2026 · 11:01 PM</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#252A3A]">St. Mary&apos;s Hospital, Awka</p>
                    <p className="text-xs text-gray-500">Anambra State</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#252A3A]">₦380,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-600">Awaiting Approval</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-xs text-gray-600">Feb 14, 2026 · 12:49 PM</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#252A3A]">Reddington Hospital</p>
                    <p className="text-xs text-gray-500">Lagos</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#252A3A]">₦210,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-600 font-mono tracking-tighter">ISW-2026-014-KC-002100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}