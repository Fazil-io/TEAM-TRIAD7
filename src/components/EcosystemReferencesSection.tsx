import React from 'react';
import { ecosystemReferences } from '../data/mockData';
import { 
  AlertCircle, 
  Link2
} from 'lucide-react';

export const EcosystemReferencesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Link2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Interoperability & Policy Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Research & Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Designed to integrate with established national and state public procurement infrastructure.
          </p>

          {/* Mandatory Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium text-left max-w-2xl">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              References and integrations shown here represent the ecosystem relevant to the proposed solution. Actual integrations are subject to authorization and technical feasibility.
            </span>
          </div>
        </div>

        {/* 4 Ecosystem Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ecosystemReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-700 uppercase">
                    {ref.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Integration Target
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] mb-2">
                  {ref.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {ref.roleInSamarth}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Architecture Scope: </span>
                {ref.integrationScope}
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Compliance Citations Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <span className="font-bold text-slate-900 font-mono uppercase block mb-0.5">
              Statutory Alignment Highlights
            </span>
            <span>
              Consistent with <strong>General Financial Rules (GFR) 2017 Rules 170 & 173</strong> (Prior Turnover & Experience Exemption for DPIIT Startups) and <strong>Maharashtra State Innovative Startup Policy</strong>.
            </span>
          </div>
          <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold shrink-0">
            Policy Compliant
          </span>
        </div>
      </div>
    </section>
  );
};
