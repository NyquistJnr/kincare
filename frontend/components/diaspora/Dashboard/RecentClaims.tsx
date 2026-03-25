const RecentClaims = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-gray-50">
        <h3 className="font-bold text-lg text-slate-800">Recent Claims</h3>
        <a
          href="#"
          className="text-amber-500 text-sm font-semibold flex items-center gap-1 hover:underline"
        >
          See all{" "}
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="px-6 py-4">Hospital</th>
              <th className="px-6 py-4">Raised by</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">AI Check</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="text-sm group hover:bg-gray-50 transition">
              <td className="px-6 py-5">
                <p className="font-bold text-slate-800">
                  St. Mary's Hospital, Awka
                </p>
                <p className="text-xs text-slate-400">Anambra State</p>
              </td>
              <td className="px-6 py-5 text-slate-600 font-medium">Emeka</td>
              <td className="px-6 py-5 font-bold text-slate-800">₦380,000</td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 uppercase">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Normal
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold border border-amber-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>{" "}
                  Pending
                </span>
              </td>
              <td className="px-6 py-5 text-slate-500 text-xs font-medium">
                2 min ago
              </td>
              <td className="px-6 py-5 text-right">
                <button className="bg-amber-500 text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-amber-600 transition shadow-sm">
                  Review
                </button>
              </td>
            </tr>
            <tr className="text-sm group hover:bg-gray-50 transition">
              <td className="px-6 py-5">
                <p className="font-bold text-slate-800">Reddington Hospital</p>
                <p className="text-xs text-slate-400">Lagos</p>
              </td>
              <td className="px-6 py-5 text-slate-600 font-medium">Ngozi</td>
              <td className="px-6 py-5 font-bold text-slate-800">₦95,000</td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 uppercase">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Normal
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                  Paid
                </span>
              </td>
              <td className="px-6 py-5 text-slate-500 text-xs font-medium">
                3 days ago
              </td>
              <td className="px-6 py-5 text-right">
                <button className="border border-gray-200 text-slate-600 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-white">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentClaims;
