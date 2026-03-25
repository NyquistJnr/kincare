const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 bg-amber-50 rounded-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-gray-100">
          <img
            src="https://ui-avatars.com/api/?name=Ifunanya+Obi&background=random"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-bold text-slate-800 leading-none">
              Ifunanya Obi
            </p>
            <p className="text-xs text-slate-400">Diaspora · UK</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export { Header };
