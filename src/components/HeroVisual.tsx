import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FileQuestion, 
  Rocket, 
  CheckCircle, 
  FlaskConical, 
  BadgeCheck, 
  ShoppingCart, 
  TrendingUp,
  Activity
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { label: 'Government', sub: 'Nodal Need', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { label: 'Challenges', sub: 'RFP & Sandbox', icon: FileQuestion, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { label: 'Startups', sub: 'DPIIT Verified', icon: Rocket, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
    { label: 'Evaluation', sub: 'Blind Scoring', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { label: 'Pilot', sub: 'Milestone Tranches', icon: FlaskConical, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { label: 'Validation', sub: 'KPI Proof', icon: BadgeCheck, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
    { label: 'Procurement', sub: 'GeM Transition', icon: ShoppingCart, color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
    { label: 'Scale', sub: 'State Rollout', icon: TrendingUp, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto p-4 sm:p-6 lg:p-7 rounded-3xl bg-gradient-to-b from-white via-slate-50/80 to-sky-50/30 border border-slate-200/90 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
      {/* Decorative gradient glow spots */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Strip */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
            SAMARTH Innovation Pipeline
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-medium text-sky-700">
          <Activity className="w-3 h-3 text-sky-600 animate-pulse" />
          <span>Stage {activeNode + 1} of 8 Active</span>
        </div>
      </div>

      {/* 2-Column Grid of 8 Ecosystem Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 relative">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeNode === index;
          const isPast = (activeNode > index && activeNode - index < 4) || (activeNode < 2 && index >= 6);

          return (
            <div
              key={node.label}
              onClick={() => setActiveNode(index)}
              className={`group relative p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                isActive
                  ? 'bg-white border-sky-500 shadow-md shadow-sky-500/15 ring-2 ring-sky-500/20 translate-y-[-2px]'
                  : isPast
                  ? 'bg-slate-50/90 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  : 'bg-white/70 border-slate-200/60 hover:bg-white hover:border-slate-300 opacity-90'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isActive ? 'bg-sky-600 text-white scale-105 shadow-sm' : `${node.bg} ${node.color}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                    )}
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-sky-950 font-semibold' : 'text-slate-800'}`}>
                    {node.label}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate">
                    {node.sub}
                  </p>
                </div>
              </div>

              {/* Status indicator bar at bottom of card */}
              <div className="mt-2 w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    isActive
                      ? 'w-full bg-gradient-to-r from-sky-500 to-cyan-500'
                      : isPast
                      ? 'w-full bg-slate-300'
                      : 'w-0'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Live Transition Indicator */}
      <div className="mt-4 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
        <span className="font-mono text-[11px]">
          Current Phase: <strong className="text-slate-800">{nodes[activeNode].label}</strong> ({nodes[activeNode].sub})
        </span>
        <button
          onClick={() => setActiveNode((prev) => (prev + 1) % nodes.length)}
          className="text-sky-600 hover:text-sky-800 font-medium text-[11px] underline underline-offset-2"
        >
          Next Step &rarr;
        </button>
      </div>
    </div>
  );
};
