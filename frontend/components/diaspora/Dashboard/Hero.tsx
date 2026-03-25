import { HealthWealthBlnCard } from "./HealthWealthBlnCard";
import { AutoApprovalNavigation } from "./AutoApprovalNavigation";
import { LinkKin } from "./LinkKin";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
            Good evening, Ifunanya 👋
          </h2>
          <p className="text-slate-500 mt-1">
            Here's the status of your family's health wallet.
          </p>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-amber-200 transition">
          <span className="text-xl">+</span> Top Wallet
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <HealthWealthBlnCard />
        <div className="lg:col-span-5 space-y-4">
          <AutoApprovalNavigation />
          <LinkKin />
        </div>
      </div>
    </>
  );
};

export { Hero };
