import React, { useState } from 'react';
import { 
  workflowStages 
} from '../data/mockData';
import { 
  Search, 
  FileSpreadsheet, 
  Compass, 
  UploadCloud, 
  CheckCircle2, 
  FlaskConical, 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import type { WorkflowStage } from '../types';

export const SolutionSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(workflowStages[0]);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Search': return Search;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Compass': return Compass;
      case 'UploadCloud': return UploadCloud;
      case 'CheckCircle2': return CheckCircle2;
      case 'FlaskConical': return FlaskConical;
      case 'BarChart3': return BarChart3;
      case 'TrendingUp': return TrendingUp;
      default: return Search;
    }
  };

  return (
    <section id="solution" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The TRIAD7 Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Introducing SAMARTH
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured digital pathway from government problem to scalable innovation.
          </p>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            SAMARTH is a web-based Government–Startup Innovation Procurement Platform that transforms uncertain experimentation into governed, milestone-backed public technology trials.
          </p>
        </div>

        {/* 8-Stage Interactive Horizontal Grid / Cards */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Interactive 8-Stage Pipeline (Click to inspect stage)
            </h3>
            <span className="text-xs text-sky-600 font-medium">
              Currently viewing: Stage {selectedStage.stageNumber}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {workflowStages.map((stage) => {
              const Icon = getIcon(stage.iconName);
              const isSelected = selectedStage.id === stage.id;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-md shadow-sky-500/15 ring-2 ring-sky-500/20 translate-y-[-2px]'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-sky-600' : 'text-slate-400'}`}>
                        {stage.stageNumber}
                      </span>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-600'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h4 className={`text-xs font-bold font-['Outfit'] uppercase tracking-tight mb-1 truncate ${
                      isSelected ? 'text-slate-950 font-bold' : 'text-slate-800'
                    }`}>
                      {stage.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                      {stage.shortDesc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-medium">
                    <span>{stage.duration}</span>
                    <ArrowRight className={`w-2.5 h-2.5 transition-transform ${isSelected ? 'text-sky-600 translate-x-0.5' : 'text-slate-300'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-mono font-bold border border-sky-200">
                  STAGE {selectedStage.stageNumber}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Estimated: {selectedStage.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                {selectedStage.stageNumber} &mdash; {selectedStage.title}: {selectedStage.shortDesc}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedStage.fullDesc}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Stakeholders Involved:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.stakeholders.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Deliverables & KPI Gates */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6 lg:border-l border-slate-100">
              {/* Deliverables Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                    Mandatory Artifacts & Deliverables
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedStage.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KPI Audit Gates */}
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-200/60">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900 font-mono">
                    Phase Validation & Gate Criteria
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedStage.kpis.map((kpi, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
