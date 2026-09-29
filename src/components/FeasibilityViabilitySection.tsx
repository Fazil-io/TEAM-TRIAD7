import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  Layers, 
  TrendingUp,
  Shield
} from 'lucide-react';

export const FeasibilityViabilitySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Strategic Feasibility & Business Case</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Feasibility & Viability Analysis
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A balanced evaluation of technical execution and long-term public sector sustainability.
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FEASIBILITY CARD */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                      TECHNICAL READINESS
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 font-['Outfit']">
                      Technical Feasibility
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-100/80 text-blue-800 font-bold">
                  HIGH
                </span>
              </div>

              {/* Key Points */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Core Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Modern Web-based platform (React + TypeScript)
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; MeitY-empaneled cloud deployment
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Granular Role-Based Access Control (RBAC)
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Standardized Open APIs & data integration
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 sm:col-span-2">
                    &bull; AI-assisted taxonomy & similarity matching engine
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-sky-600" />
                  Technical Challenges & Mitigation
                </h4>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: Data security & public integrity</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> TLS 1.3 end-to-end encryption, SHA-256 tamper-evident logs, and multi-factor authentication (MFA).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: Integrating with legacy state portals</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> Standard REST/GraphQL wrappers, asynchronous webhooks, and headless XML/JSON export protocols.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: High concurrent traffic during open calls</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> Containerized microservices on Kubernetes with automated auto-scaling and CDN caching.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Built on proven, battle-tested modern open-source web technologies.
            </div>
          </div>

          {/* VIABILITY CARD */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-700 uppercase">
                      FINANCIAL & OPERATIONAL
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 font-['Outfit']">
                      Economic Viability
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-100/80 text-cyan-800 font-bold">
                  HIGH
                </span>
              </div>

              {/* Key Points */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Economic & Operational Drivers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Drastically reduced administrative overhead
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Reusable platform across 36 districts
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Milestone-based funding protects public tax funds
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                    &bull; Highly scalable cloud architecture
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 sm:col-span-2">
                    &bull; Substantial ROI from early operational efficiency gains
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-cyan-700" />
                  Adoption Challenges & Mitigation
                </h4>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: Initial platform development & setup costs</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> Phased pilot rollout starting with 2 pilot departments, proving ROI before full-scale deployment.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: Government department adoption inertia</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> MSInS policy alignment, intuitive zero-training UX, and pre-templated challenge authoring.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2 text-rose-700 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Challenge: Cross-stakeholder coordination</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Solution:</strong> Structured notification pipelines, automated deadline alerts, and unified role dashboards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Economically sound with long-term cost recovery and multiplier effect.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
