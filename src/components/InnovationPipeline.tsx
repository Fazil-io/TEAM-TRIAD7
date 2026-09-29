import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Target, 
  Rocket, 
  CheckCircle, 
  FlaskConical, 
  ShieldCheck, 
  ShoppingCart, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface StageInfo {
  name: string;
  sub: string;
  icon: React.ElementType;
  accent: string;
  desc: string;
}

const pipelineStages: StageInfo[] = [
  { name: 'GOVERNMENT', sub: 'Department Need', icon: Building2, accent: 'from-blue-600 to-indigo-600', desc: 'Operational challenges identified by nodal officers' },
  { name: 'CHALLENGE', sub: 'RFP & Sandbox', icon: Target, accent: 'from-indigo-600 to-violet-600', desc: 'Standardized specifications with milestone funding' },
  { name: 'STARTUP', sub: 'DPIIT Matching', icon: Rocket, accent: 'from-violet-600 to-cyan-600', desc: 'Automated discovery & rapid proposal submission' },
  { name: 'EVALUATION', sub: 'Consensus Rubric', icon: CheckCircle, accent: 'from-cyan-600 to-teal-600', desc: 'Multi-expert scoring on innovation, cost & feasibility' },
  { name: 'PILOT', sub: 'Controlled Trials', icon: FlaskConical, accent: 'from-teal-600 to-amber-600', desc: 'Tranche-based sandbox in live municipal environments' },
  { name: 'VALIDATION', sub: 'KPI Attainment', icon: ShieldCheck, accent: 'from-amber-600 to-emerald-600', desc: 'Independent empirical auditing against baseline metrics' },
  { name: 'PROCUREMENT', sub: 'GeM Transition', icon: ShoppingCart, accent: 'from-emerald-600 to-sky-600', desc: 'Expedited transition into public procurement catalogs' },
  { name: 'SCALE', sub: 'State-wide Impact', icon: TrendingUp, accent: 'from-sky-600 to-blue-600', desc: 'Replication across 36 districts and municipal bodies' },
];

export const InnovationPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % pipelineStages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="w-full py-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden my-8">
      {/* Dynamic backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Feature: Live Innovation Pipeline</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] tracking-tight text-white">
              The SAMARTH Structured Pathway
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Click any node to inspect real-world transition criteria.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {isAutoPlaying ? 'Pause Flow' : 'Auto Play'}
            </button>
            <div className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700">
              0{activeStage + 1} / 08
            </div>
          </div>
        </div>

        {/* Stepper Grid / Horizontal Trail */}
        <div className="relative">
          {/* Glowing connecting line */}
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-0.5 bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 transition-all duration-700 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              style={{ width: `${(activeStage / (pipelineStages.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              const isPast = activeStage > idx;

              return (
                <button
                  key={stage.name}
                  onClick={() => {
                    setActiveStage(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`group flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border border-sky-400/80 shadow-lg shadow-sky-500/20 scale-105 ring-2 ring-sky-500/30'
                      : isPast
                      ? 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                      : 'bg-slate-950/40 border border-slate-800/60 opacity-70 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${stage.accent} text-white shadow-md shadow-sky-500/40 scale-110`
                        : isPast
                        ? 'bg-slate-800 text-sky-400'
                        : 'bg-slate-900 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 mb-0.5">
                    0{idx + 1}
                  </span>
                  <span className={`text-[11px] sm:text-xs font-bold tracking-tight uppercase leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {stage.name}
                  </span>
                  <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {stage.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed active stage callout banner */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-slate-900/90 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Active Phase: Stage 0{activeStage + 1} &mdash; {pipelineStages[activeStage].name}
              </span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-xs text-slate-300 font-medium">{pipelineStages[activeStage].sub}</span>
            </div>
            <p className="text-sm text-slate-300">
              {pipelineStages[activeStage].desc}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : pipelineStages.length - 1))}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200"
            >
              &larr; Prev
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev + 1) % pipelineStages.length)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white"
            >
              Next Phase &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
