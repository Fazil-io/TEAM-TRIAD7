import React from 'react';
import { 
  Cpu, 
  FlaskConical, 
  Network, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const InnovationSection: React.FC = () => {
  const cards = [
    {
      id: '01',
      title: 'Smart Problem–Startup Matching',
      summary: 'Match government challenges with startups using domain, location, capability and eligibility.',
      detail: 'Leverages multi-vector taxonomic mapping across DPIIT classifications, technical readiness levels (TRL 5-9), and past field deployments to cut discovery time from months to seconds.',
      icon: Cpu,
      gradient: 'from-blue-600 to-cyan-500',
      tag: 'AI Semantic Matcher'
    },
    {
      id: '02',
      title: 'Pilot-First Validation',
      summary: 'Test promising innovations in controlled real-world environments before wider deployment.',
      detail: 'Instead of committing multi-crore budgets blindly, nodal departments host isolated 90-120 day sandbox trials with milestone tranches and verified citizen/field testing.',
      icon: FlaskConical,
      gradient: 'from-cyan-500 to-teal-500',
      tag: 'Risk Mitigation'
    },
    {
      id: '03',
      title: 'End-to-End Innovation Pipeline',
      summary: 'Connect problem identification, startup discovery, evaluation, pilot, procurement and scale-up in one ecosystem.',
      detail: 'Eliminates fragmented spreadsheets and disconnected committee approvals by establishing a single traceable digital ledger from problem creation through GeM scale-up.',
      icon: Network,
      gradient: 'from-indigo-600 to-blue-500',
      tag: 'Unified Lifecycle'
    },
    {
      id: '04',
      title: 'Transparent Decision Tracking',
      summary: 'Standardized evaluation, milestone tracking and measurable KPIs support evidence-based decisions.',
      detail: 'All evaluator grades, sandbox telemetry data, and validation certificates are preserved with verifiable audit logs to guarantee compliance with public audit standards.',
      icon: ShieldCheck,
      gradient: 'from-sky-600 to-indigo-600',
      tag: 'Evidence-Based'
    }
  ];

  return (
    <section id="innovation" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Uniqueness & Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            What Makes SAMARTH Different?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bridging public sector trust with startup agility through structured governance.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                        CARD {card.id}
                      </span>
                      <span className="mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-base text-sky-950 font-medium leading-relaxed mb-3">
                    &ldquo;{card.summary}&rdquo;
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  <span>Explore Architecture Capability</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
