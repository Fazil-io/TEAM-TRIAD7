import React from 'react';
import { ShieldCheck, Award, Layers, Building, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-200/90 bg-slate-50/80 backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              CREDENTIALS & TRACK:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-2xs font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <strong className="text-slate-900 font-semibold">TRIAD7</strong> Team
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-2xs font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Smart India Hackathon 2026</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-2xs font-medium text-slate-700">
              <Award className="w-4 h-4 text-amber-600" />
              <span>PS ID: <strong className="font-mono text-slate-900">SIH26136</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-2xs font-medium text-slate-700">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Software (Misc)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-2xs font-medium text-slate-700">
              <Building className="w-4 h-4 text-emerald-600" />
              <span>Govt of Maharashtra &bull; MSInS</span>
            </div>

            <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50/80 border border-sky-200/80 text-sky-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>SAMARTH Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
