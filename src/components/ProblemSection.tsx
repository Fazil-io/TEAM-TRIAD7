import React from 'react';
import { 
  Building2, 
  Rocket, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const govNeeds = [
    { title: 'Operational Solutions', desc: 'Real-world fixes for citizen services, water, health & infrastructure' },
    { title: 'Novel Innovation', desc: 'Modern AI, IoT, and digital automation to replace legacy inefficiencies' },
    { title: 'Faster Problem Solving', desc: 'Rapid pilot validation instead of multi-year stalled procurements' },
    { title: 'Empirical Evidence', desc: 'Measurable KPIs and verified field results before budget commitment' },
    { title: 'Reliable Vendors', desc: 'Accountable, compliant entities that can deliver at scale' }
  ];

  const startupHaves = [
    { title: 'Frontier Technology', desc: 'Breakthrough artificial intelligence, computer vision, and IoT stacks' },
    { title: 'Agile Innovation', desc: 'Ability to iterate, adapt, and deploy solutions in weeks' },
    { title: 'Specialized Technical Teams', desc: 'Domain engineers focused exclusively on targeted problems' },
    { title: 'Cost-Effective Solutions', desc: 'Modern cloud architectures built without legacy overhead' },
    { title: 'High Growth Potential', desc: 'Eagerness to scale across districts, state bodies, and national portals' }
  ];

  const systemicBottlenecks = [
    {
      title: 'Established Vendor Bias',
      text: 'Conventional public tenders enforce stringent turnover criteria (e.g. ₹5-10 Cr) and 3+ years prior government track record, automatically disqualifying innovative early-stage startups.'
    },
    {
      title: 'No Structured Discovery',
      text: 'Department officers lack a dedicated, searchable registry to discover which DPIIT-registered startups are solving their specific operational challenges.'
    },
    {
      title: 'Absence of Controlled Pilots',
      text: 'Novel technology cannot be bought "off the shelf" without real-world trials, yet traditional rules lack clear provisions for paid, milestone-based sandbox pilots.'
    },
    {
      title: 'Unclear KPI & Scale Pathway',
      text: 'Even when pilots succeed informally, there is no standardized protocol to transition trial outcomes into formal procurement contracts on GeM or state portals.'
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Problem Statement SIH26136</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            The Gap We Identified
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Government innovation often exists on both sides — but the connection is missing.
          </p>
        </div>

        {/* Visual Comparison: LEFT (Government) - CENTER (THE GAP) - RIGHT (Startups) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch mb-16">
          {/* LEFT: Government Needs */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
                    Public Sector
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                    Government Needs
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Government departments face pressing operational challenges but struggle to acquire non-traditional solutions under standard procurement rules.
              </p>

              <div className="space-y-3">
                {govNeeds.map((need, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        {need.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {need.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Constrained by standard RFP clauses</span>
              <span className="font-semibold text-slate-700">Demand Side</span>
            </div>
          </div>

          {/* CENTER: THE GAP Bridge */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="w-full flex lg:flex-col items-center justify-center gap-3">
              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-blue-300 via-rose-400 to-cyan-300" />
              
              <div className="relative group p-4 rounded-2xl bg-gradient-to-br from-rose-500 via-red-600 to-amber-600 text-white shadow-lg shadow-rose-500/25 text-center shrink-0">
                <span className="text-[10px] font-mono tracking-widest uppercase block text-rose-200">
                  MISSING LINK
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight font-['Outfit'] block leading-tight">
                  THE GAP
                </span>
                <div className="w-6 h-0.5 bg-rose-200/70 mx-auto my-1.5" />
                <span className="text-[9px] font-medium leading-none block text-rose-100">
                  How do we connect them?
                </span>
              </div>

              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-amber-400 via-rose-400 to-cyan-300" />
            </div>
          </div>

          {/* RIGHT: Startups Have */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-cyan-700 flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 font-mono">
                    Startup Ecosystem
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                    Startups Have
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Startups create cutting-edge technology and agile prototypes, but lack clear visibility into public sector demand and struggle with tender barriers.
              </p>

              <div className="space-y-3">
                {startupHaves.map((have, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                    <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        {have.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {have.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Constrained by prior experience criteria</span>
              <span className="font-semibold text-slate-700">Supply Side</span>
            </div>
          </div>
        </div>

        {/* 4 Systematic Bottlenecks Cards */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                ROOT CAUSE ANALYSIS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white mt-1">
                Why Conventional Procurement Fails for Startups
              </h3>
            </div>
            <span className="text-xs text-slate-400 max-w-sm">
              Standard tenders are designed for buying established commodities, not nurturing unproven breakthrough technologies.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemicBottlenecks.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
