import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Users, 
  CheckSquare, 
  FlaskConical, 
  BarChart2, 
  ShoppingCart, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { demoChallenges, demoStartups, pilotMilestones } from '../data/mockData';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'challenges' | 'applications' | 'evaluations' | 'pilots' | 'milestones' | 'procurement'>('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState(demoChallenges[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Chrome / Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-xs">
              T7
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white font-['Outfit']">
                  SAMARTH Interactive Platform Console
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  DEMO DATA ENVIRONMENT
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Department of Skills, Employment & Innovation &bull; MSInS &bull; SIH26136
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Prototype Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Console Tab Navigation Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 flex items-center gap-2 overflow-x-auto py-2">
          {[
            { id: 'challenges', label: '1. Gov Challenges', icon: FileText, count: '3 Active' },
            { id: 'applications', label: '2. Startup Matching', icon: Users, count: '59 Submissions' },
            { id: 'evaluations', label: '3. Expert Scoring', icon: CheckSquare, count: 'Blind Rubric' },
            { id: 'pilots', label: '4. Active Pilots', icon: FlaskConical, count: '2 Live Trials' },
            { id: 'milestones', label: '5. Milestone Escrow', icon: BarChart2, count: '30-40-30 Tranches' },
            { id: 'procurement', label: '6. GeM Scale-Up', icon: ShoppingCart, count: 'Procurement Pack' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                  isActive ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Workspace Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white space-y-6">
          {/* TAB 1: CHALLENGES */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                    Department Operational Challenges
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Challenges published by Maharashtra state nodal departments with defined sandbox parameters.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Status: Filter All</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {demoChallenges.map((chal) => {
                  const isSelected = selectedChallenge.id === chal.id;
                  return (
                    <div
                      key={chal.id}
                      onClick={() => setSelectedChallenge(chal)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-50/50 border-sky-500 shadow-md ring-2 ring-sky-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {chal.id}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          chal.status === 'In Pilot' ? 'bg-emerald-100 text-emerald-800' :
                          chal.status === 'Reviewing' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {chal.status}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-sky-700 block">
                        {chal.dept}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-2">
                        {chal.title}
                      </h4>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                        <span>{chal.budget}</span>
                        <span>{chal.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Challenge Detail Sub-Panel */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold text-sky-600 uppercase">
                    Challenge Dossier: {selectedChallenge.id}
                  </span>
                  <span className="text-xs text-slate-500">
                    Target Domain: <strong className="text-slate-700">{selectedChallenge.domain}</strong>
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {selectedChallenge.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block font-mono">Sandbox Grant Cap:</span>
                    <strong className="text-slate-800 text-sm">{selectedChallenge.budget}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block font-mono">Pilot Timeline:</span>
                    <strong className="text-slate-800 text-sm">{selectedChallenge.duration}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 block font-mono">Applications Received:</span>
                    <strong className="text-slate-800 text-sm">{selectedChallenge.applicantsCount} Verified Startups</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Startup Applications & AI Match Confidence
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated compatibility scoring across DPIIT registration, capability, and technical readiness.
                </p>
              </div>

              <div className="space-y-3">
                {demoStartups.map((st) => (
                  <div key={st.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-100 text-amber-800 border border-amber-300">
                          DEMO DATA
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{st.name}</h4>
                        <span className="text-xs text-slate-400">&bull; {st.location}</span>
                      </div>
                      <p className="text-xs text-slate-600">{st.tagline}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {st.verifiedEligibility.map((v, i) => (
                          <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-medium rounded border border-blue-200">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{st.matchScore}% Match Score</span>
                      </div>
                      <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {st.demoStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EVALUATIONS */}
          {activeTab === 'evaluations' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Expert Blind Evaluation Rubric
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Multi-criteria decision analysis scoring by independent academic and technical evaluators.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                {[
                  { criteria: 'Technical Feasibility & Innovation Novelty', weight: '25%', score: '9.2 / 10', notes: 'Solid edge AI pipeline, minimal latency verified' },
                  { criteria: 'Public Sector Relevance & Problem Fit', weight: '25%', score: '9.5 / 10', notes: 'Directly solves non-revenue water loss for Pune MC' },
                  { criteria: 'Deployment Safety & Data Security', weight: '20%', score: '8.8 / 10', notes: 'TLS 1.3 telemetry encryption verified' },
                  { criteria: 'Cost Effectiveness & Scaling Viability', weight: '15%', score: '9.0 / 10', notes: '40% cheaper than imported acoustic sensor arrays' },
                  { criteria: 'Startup Team & Compliance Track Record', weight: '15%', score: '9.4 / 10', notes: 'Active DPIIT and Maharashtra MSME certificates verified' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-slate-900">{item.criteria}</span>
                        <span className="text-[10px] font-mono text-slate-400">Weight: {item.weight}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{item.notes}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 shrink-0">
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PILOTS */}
          {activeTab === 'pilots' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Active Sandbox Pilot Telemetry & Progress
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-world deployment in Pune Municipal Corporation (Ward 14 & 18).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Pipeline Telemetry Uptime</span>
                  <div className="text-2xl font-black text-slate-900 mt-1 font-['Outfit']">99.84%</div>
                  <span className="text-[11px] text-emerald-600 font-medium">&bull; 42 Sensor Nodes Active</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Leak Alerts Confirmed</span>
                  <div className="text-2xl font-black text-slate-900 mt-1 font-['Outfit']">14 Detected</div>
                  <span className="text-[11px] text-sky-600 font-medium">&bull; Mean detection time: 6.4 mins</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Estimated Water Saved</span>
                  <div className="text-2xl font-black text-slate-900 mt-1 font-['Outfit']">1.8 MLD</div>
                  <span className="text-[11px] text-emerald-600 font-medium">&bull; Exceeds target KPI by 22%</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MILESTONES */}
          {activeTab === 'milestones' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Milestone Escrow & Disbursal Ledger
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Governed 30% - 40% - 30% grant tranches authorized strictly against proof of delivery.
                </p>
              </div>

              <div className="space-y-4">
                {pilotMilestones.map((ms) => (
                  <div key={ms.number} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-500">Milestone 0{ms.number}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          ms.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                          ms.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {ms.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">{ms.title}</h4>
                      <p className="text-xs text-slate-500">{ms.duration}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm font-bold text-slate-800">{ms.fundingShare}</span>
                      <span className="block text-[10px] text-slate-400">Escrow Trigger Authorization</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PROCUREMENT */}
          {activeTab === 'procurement' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Scale-Up Procurement Pack (GeM / State Portal)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated translation from successful pilot validation to standard public procurement catalog.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-700" />
                  <h4 className="text-sm font-bold text-sky-950 font-['Outfit']">
                    SAMARTH Validation Certificate Generated (#SAM-MH-2026-VAL-019)
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  This dossier compiles verified KPI telemetry, departmental nodal acceptance sign-off, and GFR 2017 exemption attestations, enabling simplified procurement listing under GeM Startup Runway and state innovation frameworks.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="px-3.5 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold shadow-xs hover:bg-sky-700 cursor-pointer">
                    Export GeM Evaluation Dossier (PDF)
                  </button>
                  <button className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer">
                    View State Portal XML Feed
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>Prototype simulator designed for Smart India Hackathon 2026 jury demonstration.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 cursor-pointer"
          >
            Close Prototype View
          </button>
        </div>
      </div>
    </div>
  );
};
