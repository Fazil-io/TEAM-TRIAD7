import React from 'react';
import { 
  Zap, 
  Users2, 
  ShieldCheck, 
  Eye, 
  Maximize2, 
  Building2, 
  Rocket, 
  Sparkles,
  ArrowRightLeft
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      num: '01',
      title: 'Faster Innovation',
      desc: 'Quicker discovery and testing of solutions.',
      metric: '75% Reduction',
      metricSub: 'in pilot onboarding latency (months down to weeks)',
      icon: Zap,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      num: '02',
      title: 'Startup Inclusion',
      desc: 'Better access to government opportunities.',
      metric: 'Level Playing Field',
      metricSub: 'GFR exemptions for prior turnover and experience recognized digitally',
      icon: Users2,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      num: '03',
      title: 'Lower Procurement Risk',
      desc: 'Pilot-first validation before wider deployment.',
      metric: 'Zero Blank-Check Buys',
      metricSub: 'every rupee backed by live sandbox trials and empirical proof',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      num: '04',
      title: 'Transparency',
      desc: 'Structured evaluation, milestones and KPI tracking.',
      metric: '100% Audit Trail',
      metricSub: 'tamper-evident evaluation scores and milestone disbursal logs',
      icon: Eye,
      color: 'from-indigo-600 to-blue-500'
    },
    {
      num: '05',
      title: 'Scalability',
      desc: 'Successful solutions can be replicated across departments and districts.',
      metric: 'Statewide Readiness',
      metricSub: 'reproducible blueprints ready for Maharashtra’s 36 districts',
      icon: Maximize2,
      color: 'from-sky-600 to-indigo-600'
    }
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Public Sector Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Designed for Measurable Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Quantifiable value delivery for citizens, departments, and emerging founders.
          </p>
        </div>

        {/* 5 Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((imp) => {
            const Icon = imp.icon;
            return (
              <div
                key={imp.num}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {imp.num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${imp.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] tracking-tight">
                    {imp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {imp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-base font-extrabold text-slate-900 font-['Outfit']">
                    {imp.metric}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {imp.metricSub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Visual: Government <-> SAMARTH <-> Startups */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
              THE TRI-PARTY EQUILIBRIUM
            </span>
            <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">
              Harmonizing the Ecosystem
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              SAMARTH serves as the trusted neutral bridge ensuring mutual accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Government Left Node */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
              <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white font-['Outfit']">
                Government
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Defines Challenges &bull; Evaluates &bull; Procures
              </p>
              <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Demand Anchor
              </div>
            </div>

            {/* SAMARTH Center Engine */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white text-center shadow-lg shadow-sky-600/30 ring-2 ring-sky-400/40">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowRightLeft className="w-5 h-5 text-cyan-200" />
                <span className="font-extrabold text-sm uppercase tracking-wider font-mono">
                  SAMARTH
                </span>
                <ArrowRightLeft className="w-5 h-5 text-cyan-200" />
              </div>
              <h4 className="text-lg font-bold font-['Outfit']">
                Innovation Procurement Platform
              </h4>
              <p className="text-xs text-cyan-100 mt-1">
                Matching &bull; Sandbox &bull; Milestone Escrow &bull; Validation
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-semibold text-slate-900">
                <span className="py-1 rounded bg-white/90">Innovation</span>
                <span className="py-1 rounded bg-white/90">Efficiency</span>
                <span className="py-1 rounded bg-white/90">Evidence</span>
                <span className="py-1 rounded bg-white/90">Scale</span>
              </div>
            </div>

            {/* Startups Right Node */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
              <Rocket className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white font-['Outfit']">
                Startups
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Submits Tech &bull; Pilots in Sandbox &bull; Scales Up
              </p>
              <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Supply Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
