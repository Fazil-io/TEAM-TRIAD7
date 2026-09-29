import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

interface PrototypeSectionProps {
  onOpenModal: () => void;
}

export const PrototypeSection: React.FC<PrototypeSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="prototype" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayoutDashboard className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Product Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Explore the SAMARTH Prototype
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A cohesive control centre for nodal officers, evaluators, and startup founders.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-600/25 hover:shadow-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Launch Full Interactive Console</span>
              <Maximize2 className="w-4 h-4 ml-1 text-cyan-200" />
            </button>
          </div>
        </div>

        {/* In-page Professional Mockup Frame */}
        <div className="rounded-3xl border border-slate-200/90 bg-slate-950 text-white shadow-2xl overflow-hidden">
          {/* Mock Browser/App Chrome Header */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                https://samarth.gov.in/portal/dashboard (Prototype Simulation)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                v1.0.4-SIH
              </span>
              <button
                onClick={onOpenModal}
                className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium cursor-pointer"
              >
                <span>Expand</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* In-Page Dashboard Body Preview */}
          <div className="p-6 sm:p-8 bg-slate-900/90 space-y-6">
            {/* Top Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Active Challenges</span>
                <div className="text-2xl font-black text-white mt-1 font-['Outfit']">14 Dept RFPs</div>
                <span className="text-[10px] text-sky-400 mt-0.5 block">&bull; Water, Health, Urban Tech</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Verified Startups</span>
                <div className="text-2xl font-black text-white mt-1 font-['Outfit']">128 DPIIT</div>
                <span className="text-[10px] text-emerald-400 mt-0.5 block">&bull; 100% GFR 170 Compliant</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Live Sandbox Trials</span>
                <div className="text-2xl font-black text-white mt-1 font-['Outfit']">6 In Progress</div>
                <span className="text-[10px] text-amber-400 mt-0.5 block">&bull; Pune, Nagpur, Mumbai</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Escrow Disbursed</span>
                <div className="text-2xl font-black text-white mt-1 font-['Outfit']">₹1.42 Cr</div>
                <span className="text-[10px] text-cyan-400 mt-0.5 block">&bull; 100% on Verified Milestones</span>
              </div>
            </div>

            {/* In-page Active Preview Card */}
            <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    DEMO DATA PREVIEW
                  </span>
                  <span className="text-xs text-slate-400">Featured Active Pilot</span>
                </div>
                <h4 className="text-lg font-bold text-white font-['Outfit']">
                  Urban Water Acoustic Leak Detection & Telemetry (Pune MC)
                </h4>
                <p className="text-xs text-slate-300 max-w-xl">
                  Startup <strong className="text-sky-400">JalDrishti IoT Labs</strong> has achieved Milestone 1 (Sandbox setup & telemetry) and is now running Milestone 2 live trials in Ward 14 with 99.8% node connectivity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={onOpenModal}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Inspect Full Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
