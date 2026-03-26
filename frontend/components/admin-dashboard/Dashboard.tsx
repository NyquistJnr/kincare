import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Wallet,
  MapPin
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#F8F9FA] text-[#252A3A] font-sans">
      {/* Main Content */}
      <main className="p-4 sm:p-8 max-w-[1400px] mx-auto space-y-6">
        
        {/* Page Header & System Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#252A3A] mb-1">
              System Overview
            </h2>
            <p className="text-[15px] text-gray-500 font-medium">
              Tuesday, March 24, 2026 · 11:47 PM WAT
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1.5 font-bold text-[#252A3A]">
              <span className="w-2.5 h-2.5 bg-[#00A859] rounded-full"></span>
              Interswitch Live
            </span>
            <span className="text-gray-400 font-medium">Last txn: 11:45 PM</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Users</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#252A3A]">247</p>
            <p className="text-[10px] font-bold text-[#00A859] mt-3 uppercase tracking-wide">↑ 12 This Week</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Wallet Value</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#252A3A]">₦42.8M</p>
            <p className="text-[10px] font-bold text-[#00A859] mt-3 uppercase tracking-wide">↑ ₦3.1M Today</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Claims Processed</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#252A3A]">1,084</p>
            <p className="text-[10px] font-bold text-[#00A859] mt-3 uppercase tracking-wide">↑ 28 Today</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Total Disbursed</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#252A3A]">₦18.4M</p>
            <p className="text-[10px] font-bold text-[#00A859] mt-3 uppercase tracking-wide">100% Settled</p>
          </div>
        </div>

        {/* Recent Claims Table */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6">
            <h3 className="text-lg font-bold">Recent Claims</h3>
            <button className="flex items-center gap-1 text-[#F59E1A] hover:text-[#E08D16] text-sm font-bold transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-y border-gray-100 text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Hospital</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">AI Flag</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                {/* Row 1: Auto-Approved */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Ifunaya Okeke</p>
                    <p className="text-[10px] text-gray-400">Diaspora · UK</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">St. Mary&apos;s Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">GTBank · 0024578901</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#252A3A]">₦380,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2 py-0.5 rounded text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> Normal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#F0FAFF] border border-[#BCE4F7] text-[#30A8E6] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#30A8E6] rounded-full"></span> Auto-Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-600">11:45 PM</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded-lg text-xs font-bold transition-colors">
                      View
                    </button>
                  </td>
                </tr>

                {/* Row 2: Flagged / Pending */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Tunde Balogun</p>
                    <p className="text-[10px] text-gray-400">Diaspora · US</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Emmanuel Chukwu</p>
                    <p className="text-[10px] text-gray-400">GTBank · 0087654321</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#252A3A]">₦210,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-[#FFF0F0] border border-red-200 text-[#E5484D] px-2 py-0.5 rounded text-[10px] font-bold">
                      <AlertTriangle className="w-3 h-3" /> Flagged
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF9EA] border border-[#FDE0A1] text-[#F59E1A] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#F59E1A] rounded-full"></span> Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-600">11:12 PM</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-[#F59E1A] hover:bg-[#E08D16] text-white px-5 py-1.5 rounded-lg text-xs font-bold transition-colors">
                      Review
                    </button>
                  </td>
                </tr>

                {/* Row 3: Approved */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Kemi Adeyemi</p>
                    <p className="text-[10px] text-gray-400">Diaspora · Canada</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-[#252A3A] mb-0.5">Reddington Hospital Ltd</p>
                    <p className="text-[10px] text-gray-400">Access · 0011234567</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#252A3A]">₦95,000</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2 py-0.5 rounded text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> Normal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span> Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-600">3 days ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded-lg text-xs font-bold transition-colors">
                      View
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Lower Grid: Alerts & API Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Active Alerts */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-5 uppercase">
              Active Alerts
            </p>
            
            <div className="space-y-4">
              {/* Alert 1: Anomaly */}
              <div className="bg-[#FFF0F0] border border-[#FDCACA] rounded-xl p-4 flex gap-3">
                <MapPin className="w-5 h-5 text-[#E5484D] shrink-0 mt-0.5" />
                <p className="text-xs text-[#252A3A] leading-relaxed font-medium">
                  <span className="font-bold text-[#E5484D]">AI Anomaly</span> — Tunde Balogun&apos;s ₦210,000 is 2.4× above expected range for procedure type. Awaiting diaspora review.
                </p>
              </div>

              {/* Alert 2: Auto-approval */}
              <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-xl p-4 flex gap-3">
                <Zap className="w-5 h-5 text-[#F59E1A] shrink-0 mt-0.5" />
                <p className="text-xs text-[#252A3A] leading-relaxed font-medium">
                  <span className="font-bold text-[#F59E1A]">Auto-approval fired</span> — Ifunaya Obi, ₦380,000. 45 min unreachability rule. Settled via Interswitch. Marked reviewed.
                </p>
              </div>

              {/* Alert 3: Low Balance */}
              <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-xl p-4 flex gap-3">
                <Wallet className="w-5 h-5 text-[#F59E1A] shrink-0 mt-0.5" />
                <p className="text-xs text-[#252A3A] leading-relaxed font-medium">
                  <span className="font-bold text-[#F59E1A]">Low balance</span> — Chukwuemeka Eze at ₦42,000, below ₦150,000 recommended minimum. Alert sent.
                </p>
              </div>
            </div>
          </div>

          {/* API Status */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-5 uppercase">
              API Status
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00A859] rounded-full"></span>
                  <span className="text-xs font-bold text-[#252A3A]">Interswitch Payment API</span>
                </div>
                <span className="border border-[#A6E5C3] text-[#00A859] text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E6F6ED]">
                  Operational
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00A859] rounded-full"></span>
                  <span className="text-xs font-bold text-[#252A3A]">Account Lookup API</span>
                </div>
                <span className="border border-[#A6E5C3] text-[#00A859] text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E6F6ED]">
                  Operational
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00A859] rounded-full"></span>
                  <span className="text-xs font-bold text-[#252A3A]">AI Anomaly Detection</span>
                </div>
                <span className="border border-[#A6E5C3] text-[#00A859] text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E6F6ED]">
                  Operational
                </span>
              </div>

              <div className="flex justify-between items-center pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E1A] rounded-full"></span>
                  <span className="text-xs font-bold text-[#252A3A]">Cross-Border Top-Up</span>
                </div>
                <span className="border border-[#FDE0A1] text-[#F59E1A] text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FFFDF5]">
                  Degraded
                </span>
              </div>
            </div>

            {/* Last Transaction Status */}
            <div className="bg-[#E6F6ED] border border-[#A6E5C3] rounded-lg p-4">
              <p className="text-[11px] font-medium text-gray-500 mb-1">Last successful transaction</p>
              <p className="text-[11px] font-mono font-bold text-[#00A859]">
                TXN-ISW-2026-038-KC-004821 - 11:45 PM
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}