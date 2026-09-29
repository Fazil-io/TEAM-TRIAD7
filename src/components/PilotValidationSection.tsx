import React, { useState } from 'react';
import { pilotMilestones } from '../data/mockData';
import { 
  FlaskConical, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  FileCheck2
} from 'lucide-react';

export const PilotValidationSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(pilotMilestones[1]); // Milestone 2 active

  const lifecycleStages = [
    { name: 'Startup Selected', sub: 'Ranking Complete', status: 'done' },
    { name: 'Pilot Agreement', sub: 'Sandbox Contract', status: 'done' },
    { name: 'Milestone 1', sub: '30% Tranche Disbursed', status: 'done' },
    { name: 'Milestone 2', sub: '40% Active Trial', status: 'current' },
    { name: 'Milestone 3', sub: '30% Final Audit', status: 'upcoming' },
    { name: 'KPI Measurement', sub: 'Telemetry Audit', status: 'upcoming' },
    { name: 'Independent Validation', sub: 'Empirical Sign-off', status: 'upcoming' },
    { name: 'Decision', sub: 'GeM Procurement', status: 'upcoming' },
  ];

  return (
    <section id="pilot" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sandbox De-Risking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            From Proposal to Proof
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Controlled real-world pilots that replace speculation with verifiable empirical data.
          </p>
        </div>

        {/* Pilot Lifecycle Horizontal Stepper */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl mb-12">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                PILOT GOVERNANCE TIMELINE
              </span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">
                Live Lifecycle Progression (JalDrishti IoT Labs &bull; Pune Municipal Pilot)
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              Demo Simulation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative">
            {lifecycleStages.map((stage, idx) => {
              const isDone = stage.status === 'done';
              const isCurrent = stage.status === 'current';

              return (
                <div
                  key={stage.name}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isCurrent
                      ? 'bg-sky-600/30 border-sky-400 ring-2 ring-sky-500/30 shadow-lg'
                      : isDone
                      ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-center mb-1.5">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isCurrent ? (
                      <div className="w-5 h-5 rounded-full bg-sky-400 flex items-center justify-center text-[10px] font-bold text-slate-950 animate-pulse">
                        &bull;
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-slate-400">
                        {idx + 1}
                      </div>
                    )}
                  </div>
                  <h4 className={`text-xs font-bold leading-tight ${isCurrent ? 'text-white' : isDone ? 'text-slate-200' : 'text-slate-400'}`}>
                    {stage.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                    {stage.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Tranche Funding & Evidence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Milestone Tranche Cards */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Milestone-Based Funding Structure (Tranche Releases)
            </span>

            {pilotMilestones.map((ms) => {
              const isSelected = selectedMilestone.number === ms.number;
              const isCompleted = ms.status === 'Completed';
              const isInProgress = ms.status === 'In Progress';

              return (
                <div
                  key={ms.number}
                  onClick={() => setSelectedMilestone(ms)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-lg ring-2 ring-sky-500/20'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 text-slate-700">
                      MILESTONE {ms.number}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isInProgress
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {ms.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {ms.title}
                  </h4>

                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium text-sky-700">
                      <DollarSign className="w-3.5 h-3.5 text-sky-600" />
                      {ms.fundingShare}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {ms.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Milestone Verification Dossier */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  VERIFICATION CRITERIA
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  Milestone {selectedMilestone.number} Detailed Audit
                </h4>
              </div>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700">
                {selectedMilestone.fundingShare}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Required Deliverables for Fund Release:
                </span>
                <div className="space-y-2">
                  {selectedMilestone.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700">
                      <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Quantitative Validation KPIs:
                </span>
                <div className="space-y-2">
                  {selectedMilestone.kpis.map((kpi, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span>Tranche disbursed directly to escrow on proof</span>
                <span className="font-semibold text-sky-700">Zero Upfront Waste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
