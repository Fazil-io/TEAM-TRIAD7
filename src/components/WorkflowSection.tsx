import React, { useState } from 'react';
import { 
  Building, 
  FilePlus, 
  Send, 
  Search, 
  FileText, 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  Clock, 
  BarChart, 
  ShoppingCart, 
  TrendingUp,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface Step {
  id: number;
  label: string;
  category: 'Government' | 'Startup' | 'Review' | 'Pilot & Scale';
  desc: string;
  badge: string;
  icon: React.ElementType;
}

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      id: 1,
      label: 'Government Department',
      category: 'Government',
      desc: 'Nodal state department or municipal agency registers an operational challenge requiring external technical innovation.',
      badge: 'Demand Definition',
      icon: Building
    },
    {
      id: 2,
      label: 'Create Challenge',
      category: 'Government',
      desc: 'Standardized challenge authoring with clear problem statements, baseline operational data, sandbox rules, and budget caps.',
      badge: 'Specification',
      icon: FilePlus
    },
    {
      id: 3,
      label: 'Publish Opportunity',
      category: 'Government',
      desc: 'Challenge is published on SAMARTH with eligibility guidelines, milestone tranches, and evaluation rubrics open to eligible startups.',
      badge: 'Open Call',
      icon: Send
    },
    {
      id: 4,
      label: 'Startup Discovery',
      category: 'Startup',
      desc: 'Smart matching engine alerts verified DPIIT startups based on domain capability, sector relevance, and regional presence.',
      badge: 'AI Matching',
      icon: Search
    },
    {
      id: 5,
      label: 'Solution Submission',
      category: 'Startup',
      desc: 'Startups submit technical proposals, architecture blueprints, sandbox deployment roadmaps, and self-attested compliances.',
      badge: 'Zero Red-Tape',
      icon: FileText
    },
    {
      id: 6,
      label: 'Eligibility Screening',
      category: 'Review',
      desc: 'Automated statutory checks for DPIIT registration, turnover exemptions under GFR, and technical threshold criteria.',
      badge: 'Automated KYC',
      icon: ShieldCheck
    },
    {
      id: 7,
      label: 'Expert Evaluation',
      category: 'Review',
      desc: 'Multi-criteria blind peer scoring by independent domain experts, academic faculty, and department technical advisors.',
      badge: 'Consensus Scoring',
      icon: Award
    },
    {
      id: 8,
      label: 'Pilot Selection',
      category: 'Review',
      desc: 'Top-ranked solutions are awarded formal sandbox trial agreements with milestone-linked financial grants.',
      badge: 'Sandbox Contract',
      icon: FlaskConical
    },
    {
      id: 9,
      label: 'Milestone Tracking',
      category: 'Pilot & Scale',
      desc: 'Governed 30%-40%-30% tranche disbursal tied to real-world deployment telemetry, field logs, and verification sign-offs.',
      badge: 'Escrow Tranches',
      icon: Clock
    },
    {
      id: 10,
      label: 'KPI Validation',
      category: 'Pilot & Scale',
      desc: 'Empirical comparison against baseline metrics: cost savings, service acceleration, system reliability, and user acceptance.',
      badge: 'Third-Party Audit',
      icon: BarChart
    },
    {
      id: 11,
      label: 'Procurement',
      category: 'Pilot & Scale',
      desc: 'Successful pilots receive formal Validation Certificates and pre-formatted transition dossiers for GeM direct purchase or state tenders.',
      badge: 'Public Procurement',
      icon: ShoppingCart
    },
    {
      id: 12,
      label: 'Scale-Up',
      category: 'Pilot & Scale',
      desc: 'Proven innovation is scaled across municipal corporations, zilla parishads, and other state departments with documented evidence.',
      badge: 'Statewide Impact',
      icon: TrendingUp
    }
  ];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Government': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Startup': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'Review': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Pilot & Scale': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="workflow" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            From Problem to Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A 12-step transparent workflow connecting departmental needs to statewide scale.
          </p>
        </div>

        {/* 12-Step Visual Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl scale-[1.02] ring-2 ring-sky-500/40'
                    : 'bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-sky-400' : 'text-slate-400'}`}>
                      STEP {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      isActive ? 'bg-slate-800 text-slate-300 border-slate-700' : getCategoryColor(step.category)
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-sky-500 text-slate-950' : 'bg-slate-100 text-slate-700 group-hover:bg-sky-50 group-hover:text-sky-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-sm font-bold font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {step.label}
                    </h3>
                  </div>

                  <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                  <span className={isActive ? 'text-slate-400' : 'text-slate-400'}>
                    Phase: {step.category}
                  </span>
                  {isActive && (
                    <span className="flex items-center gap-1 text-sky-400 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Active
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              {activeStep + 1}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase">
                Workflow Spotlight &bull; {steps[activeStep].category}
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                {steps[activeStep].label} &mdash; {steps[activeStep].badge}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-2xs"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow-2xs"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
