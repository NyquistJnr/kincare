const AutoApprovalNavigation = () => {
  return (
    <div className="bg-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-sm flex items-start justify-between group cursor-pointer">
      <div className="flex gap-3">
        <span className="mt-1 text-amber-500">⚡</span>
        <div>
          <h4 className="font-bold text-slate-800">Set up Auto-Approval</h4>
          <p className="text-xs text-slate-500 leading-relaxed mt-1">
            Ensure emergencies are covered even when you're unreachable. Takes 2
            minutes.
          </p>
        </div>
      </div>
      <svg
        className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export { AutoApprovalNavigation };
