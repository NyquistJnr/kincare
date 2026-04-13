import React from 'react';
import Link from 'next/link';
import { 
  Plus, 
  ArrowRight, 
  Zap, 
  Link as LinkIcon, 
  CheckCircle2 
} from 'lucide-react';

export default function DiasporaDashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content */}
      <main className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
        
        {/* Greeting & Top Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <div>
            <h2 className="text-2xl text-black font-bold mb-1">Good evening, Ifunaya 👋</h2>
            <p className="text-[#4E576E] text-md">Here&apos;s the status of your family&apos;s health wallet.</p>
          </div>
          <Link href="/diaspora/topup-wallet" className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-6 py-3 rounded-xl font-bold transition-colors">
            <Plus className="w-5 h-5" />
            <span>Top Wallet</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Health Wealth Balance Card (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white border border-gray-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-xs font-medium text-[#4E576E] tracking-wider mb-2 uppercase">HEALTH WEALTH BALANCE</p>
              <h3 className="text-3xl sm:text-5xl font-semibold text-black mb-2">₦485,000</h3>
              <p className="text-sm text-[#4E576E]">
                Covering 3 family members · Anambra, Nigeria
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Safe balance progress</span>
                  <span className="font-normal text-[#252A3A]">97% <span className="font-normal text-gray-500">· ₦500,000 target</span></span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[97%] h-full bg-[#F59E1A] rounded-full"></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">
                  <ArrowRight className="w-4 h-4" />
                  <span>Raise Claim</span>
                </button>
                <Link href="/diaspora/claims" className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-[#252A3A] px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">
                  View History
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions (Right Column) */}
          <div className="flex flex-col gap-4">
            
            {/* Auto-Approval Card */}
            <Link href="/diaspora/auto-approval" className="bg-white border border-gray-200 border-l-4 border-l-[#F59E1A] rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer flex gap-4 group">
              <div className="shrink-0 mt-0.5">
                <Zap className="w-5 h-5 text-[#F59E1A]" fill="#FFF9EA" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-[#252A3A]">Set up Auto-Approval</h4>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F59E1A] transition-colors" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pr-2">
                  Ensure emergencies are covered even when you&apos;re unreachable. Takes 2 minutes.
                </p>
              </div>
            </Link>

            {/* Link Kin Card */}
            <Link href="/diaspora/link-kin" className="bg-white border border-gray-200 border-l-4 border-l-[#00A859] rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer flex gap-4 group">
              <div className="shrink-0 mt-0.5">
                <LinkIcon className="w-5 h-5 text-[#00A859]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-[#252A3A]">Link Your Kin</h4>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00A859] transition-colors" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pr-2">
                  2 members linked. Share a new pairing code to add more family members.
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Recent Claims Table */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6">
            <h3 className="text-lg font-medium">Recent Claims</h3>
            <Link href="/diaspora/claims" className="flex items-center gap-1 text-[#F59E1A] hover:text-[#E08D16] text-sm font-medium transition-colors">
              See all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-y border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Hospital</th>
                  <th className="px-6 py-4 font-medium">Raised By</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">AI Check</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium text-right"></th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {/* Row 1: Pending */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#252A3A]">St. Mary&apos;s Hospital, Awka</p>
                    <p className="text-xs text-gray-500">Anambra State</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#252A3A]">Emeka</td>
                  <td className="px-6 py-4 font-semibold text-[#252A3A]">₦380,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[11px] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-[#252A3A]">2 min ago</td>
                  <td className="px-6 py-4 text-right">
                    <Link href="/diaspora/review-claim" className="bg-[#F59E1A] hover:bg-[#E08D16] text-white px-5 py-1.5 rounded-lg text-xs font-medium transition-colors inline-block">
                      Review
                    </Link>
                  </td>
                </tr>

                {/* Row 2: Paid */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#252A3A]">Reddington Hospital</p>
                    <p className="text-xs text-gray-500">Lagos</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#252A3A]">Ngozi</td>
                  <td className="px-6 py-4 font-semibold text-[#252A3A]">₦95,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[11px] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-[#252A3A]">3 days ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded-lg text-xs font-medium transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}