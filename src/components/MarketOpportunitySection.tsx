import React from 'react';
import { 
  TrendingUp, 
  AlertCircle, 
  ArrowDown
} from 'lucide-react';

export const MarketOpportunitySection: React.FC = () => {
  const tiers = [
    {
      level: 'TAM',
      name: 'Total Addressable Market',
      value: '₹5,000 Cr',
      scope: 'India-wide government innovation procurement opportunity across central & state departments exploring agile startup pilots.',
      color: 'from-blue-600 to-indigo-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50/50',
      width: 'w-full'
    },
    {
      level: 'SAM',
      name: 'Serviceable Addressable Market',
      value: '₹500 Cr',
      scope: 'Relevant Maharashtra government departments, programs, municipal corporations (MCGM, PMC, PCMC, NMMC), and statutory bodies.',
      color: 'from-sky-600 to-blue-600',
      border: 'border-sky-200',
      bg: 'bg-sky-50/50',
      width: 'w-11/12'
    },
    {
      level: 'SOM',
      name: 'Serviceable Obtainable Market',
      value: '₹50 Cr',
      scope: 'Initial target sandbox opportunity across 3 pilot departments (Water, Health, Urban) in selected urban/rural districts over 18 months.',
      color: 'from-emerald-600 to-teal-600',
      border: 'border-emerald-200',
      bg: 'bg-emerald-50/50',
      width: 'w-5/6'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
            <span>Economic Scope & Sizing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Potential Market Opportunity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Illustrative scale potential of structured GovTech procurement pathways in India and Maharashtra.
          </p>

          {/* Mandatory Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              Illustrative estimates for solution planning — not official government statistics.
            </span>
          </div>
        </div>

        {/* Funnel Visual Stack */}
        <div className="max-w-4xl mx-auto space-y-4">
          {tiers.map((tier, idx) => (
            <div key={tier.level} className="flex flex-col items-center">
              <div className={`p-6 sm:p-7 rounded-3xl bg-white border ${tier.border} shadow-sm transition-all duration-200 hover:shadow-md ${tier.width}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} text-white flex items-center justify-center font-extrabold text-lg shadow-sm shrink-0`}>
                      {tier.level}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {tier.name}
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit'] tracking-tight">
                        {tier.value}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md sm:text-right">
                    {tier.scope}
                  </p>
                </div>
              </div>

              {idx < tiers.length - 1 && (
                <div className="py-2">
                  <ArrowDown className="w-5 h-5 text-slate-300 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Strategic Takeaway Card */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs">
          <p className="text-xs text-slate-500">
            Even capturing 1% of municipal innovation procurement unlocks catalytic opportunities for DPIIT-recognized startups while saving substantial public exchequer expenditure through pre-validated deployments.
          </p>
        </div>
      </div>
    </section>
  );
};
