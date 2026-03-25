const LinkKin = () => {
  return (
    <div className="bg-white p-5 rounded-2xl border-l-4 border-emerald-500 shadow-sm flex items-start justify-between group cursor-pointer">
      <div className="flex gap-3">
        <span className="mt-1 text-emerald-500">🔗</span>
        <div>
          <h4 className="font-bold text-slate-800">Link Your Kin</h4>
          <p className="text-xs text-slate-500 leading-relaxed mt-1">
            2 members linked. Share a new pairing code to add more family
            members.
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

export { LinkKin };
