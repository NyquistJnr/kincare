const HealthWealthBlnCard = () => {
  return (
    <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        Health Wealth Balance
      </p>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-4xl font-black text-slate-900 leading-none">
          ₦485,000
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-6">
        Covering 3 family members · Anambra, Nigeria
      </p>

      <div className="mb-8">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1 uppercase italic">
          <span>Safe balance progress</span>
          <span>97% · ₦500,000 target</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 w-[97%] rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-amber-500 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          Raise Claim
        </button>
        <button className="border border-gray-200 text-slate-600 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50">
          View History
        </button>
      </div>
    </div>
  );
};

export { HealthWealthBlnCard };
