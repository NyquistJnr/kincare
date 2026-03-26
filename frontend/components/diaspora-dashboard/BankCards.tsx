import React from 'react';
import Link from 'next/link';
import { CreditCard, Plus, Trash2, Building2, CheckCircle2 } from 'lucide-react';

export default function BankCardsPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#FAFAFA] text-[#252A3A] font-sans">
      <main className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-bold text-[#252A3A] mb-1">
              Bank & Cards
            </h2>
            <p className="text-[15px] text-gray-500 font-medium">
              Manage your payment methods for wallet top-ups
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#F59E1A] hover:bg-[#E08D16] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
            <span>Add New Card</span>
          </button>
        </div>

        {/* Saved Cards Section */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">
            Saved Cards
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Card 1 — Primary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF9EA] rounded-xl flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[#F59E1A]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#252A3A]">Barclays Debit</p>
                    <p className="text-xs text-gray-500">**** **** **** 4821</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#E6F6ED] border border-[#A6E5C3] text-[#00A859] px-2.5 py-1 rounded-full text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 bg-[#00A859] rounded-full"></span>
                  Primary
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex gap-6">
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Expires</p>
                    <p className="font-bold text-[#252A3A]">08/2028</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Currency</p>
                    <p className="font-bold text-[#252A3A]">GBP (£)</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Last used</p>
                    <p className="font-bold text-[#252A3A]">Mar 20, 2026</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link href="/diaspora/topup-wallet" className="text-xs font-bold text-[#F59E1A] hover:text-[#E08D16] transition-colors">
                  Top Up with this card →
                </Link>
                <button className="text-xs font-medium text-gray-400 hover:text-[#E5484D] transition-colors flex items-center gap-1">
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove
                </button>
              </div>
            </div>

            {/* Card 2 — Secondary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#252A3A]">HSBC Visa</p>
                    <p className="text-xs text-gray-500">**** **** **** 7392</p>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-[#F59E1A] hover:text-[#E08D16] border border-[#FDE0A1] px-2.5 py-1 rounded-full transition-colors">
                  Make Primary
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex gap-6">
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Expires</p>
                    <p className="font-bold text-[#252A3A]">11/2027</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Currency</p>
                    <p className="font-bold text-[#252A3A]">GBP (£)</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium mb-0.5">Last used</p>
                    <p className="font-bold text-[#252A3A]">Never</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link href="/diaspora/topup-wallet" className="text-xs font-bold text-[#F59E1A] hover:text-[#E08D16] transition-colors">
                  Top Up with this card →
                </Link>
                <button className="text-xs font-medium text-gray-400 hover:text-[#E5484D] transition-colors flex items-center gap-1">
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Linked Bank Accounts Section */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 uppercase">
            Linked Bank Accounts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Bank Account 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0FAFF] rounded-xl flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#30A8E6]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#252A3A]">Barclays Current Account</p>
                    <p className="text-xs text-gray-500">Sort: 20-45-78 · Acc: ****4821</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[#00A859] text-[10px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <div className="flex items-center justify-between text-xs mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-400 font-medium">
                  Added Mar 15, 2026 · GBP
                </p>
                <button className="font-medium text-gray-400 hover:text-[#E5484D] transition-colors flex items-center gap-1">
                  <Trash2 className="w-3.5 h-3.5" />
                  Unlink
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Security Info */}
        <div className="bg-[#FFFDF5] border border-[#FDE0A1] rounded-xl p-5 flex gap-3 shadow-sm">
          <CreditCard className="w-5 h-5 text-[#F59E1A] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-[#252A3A] mb-1">Your payment details are secure</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              All card and bank data is encrypted and processed by Interswitch. KinCare never stores your full card number or CVV. You can remove a card at any time.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
