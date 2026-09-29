import React, { useState } from 'react';
import { demoStartups } from '../data/mockData';
import { 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Building2,
  ShieldCheck,
  Info
} from 'lucide-react';

export const SmartMatchingSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const matchingFactors = [
    { title: 'Domain Alignment', desc: 'Sector taxonomic match with Department RFP keywords' },
    { title: 'Location & Sandbox Access', desc: 'Proximity to Maharashtra trial districts & field presence' },
    { title: 'Technical Capability & TRL', desc: 'Verified technology readiness level (TRL 5-9) and architecture' },
    { title: 'Eligibility & DPIIT', desc: 'Valid entity registration, DPIIT certs & GFR exemption compliance' },
    { title: 'Previous Solutions', desc: 'Prior municipal pilots, incubations, and field trial logs' },
    { title: 'Startup Profile & Team', desc: 'Technical team capacity, patent assets, and financial standing' }
  ];

  const filteredStartups = selectedDomain === 'All' 
    ? demoStartups 
    : demoStartups.filter(s => s.domain.toLowerCase().includes(selectedDomain.toLowerCase()));

  return (
    <section id="matching" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>AI Discovery Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Finding the Right Startup
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Automating the discovery bridge between Department challenges and verified startup innovators.
          </p>

          {/* Mandatory Demo Data Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>DEMO DATA:</strong> The startup profiles below are simulated illustrative examples for platform demonstration only, not real entities or official endorsements.
            </span>
          </div>
        </div>

        {/* Matching Factors Flowchart */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm mb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Input: Government Challenge */}
            <div className="w-full lg:w-1/4 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-center">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700 block">
                INPUT SOURCE
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Department Challenge Brief
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Operational KPIs & Sandbox Scope
              </p>
            </div>

            {/* Middle: 6 Matching Factors Grid */}
            <div className="w-full lg:w-2/4">
              <div className="text-center mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  SAMARTH Multi-Factor Matching Algorithm
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {matchingFactors.map((factor, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-left">
                    <span className="text-[10px] font-mono font-bold text-sky-600 block">
                      0{idx + 1}
                    </span>
                    <h5 className="text-xs font-semibold text-slate-900 leading-snug">
                      {factor.title}
                    </h5>
                    <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">
                      {factor.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Output: Potential Startup Matches */}
            <div className="w-full lg:w-1/4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center">
              <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block">
                MATCH OUTPUT
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Ranked Match Shortlist
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                DPIIT & GFR Pre-Audited Profiles
              </p>
            </div>
          </div>
        </div>

        {/* Demo Startup Match Cards (3 Cards) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Simulated Match Candidates
              </h3>
              <p className="text-xs text-slate-500">
                Live demo data showing matching score confidence and verified eligibility tags.
              </p>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
              {['All', 'Water', 'Health', 'Energy'].map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedDomain === dom
                      ? 'bg-sky-600 text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup) => (
              <div
                key={startup.id}
                className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Demo Tag & Match Score */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-100 text-amber-800 border border-amber-300">
                      DEMO DATA
                    </span>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{startup.matchScore}% Match</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 font-['Outfit']">
                    {startup.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {startup.tagline}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{startup.location}</span>
                    <span>&bull;</span>
                    <span className="font-medium text-slate-700">{startup.domain}</span>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      Readiness Tier:
                    </span>
                    <span className="font-semibold text-slate-800">
                      {startup.readinessLevel}
                    </span>
                  </div>

                  {/* Innovations */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">
                      Demonstrated Innovation:
                    </span>
                    {startup.keyInnovations.map((inn, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{inn}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Eligibility */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1.5">
                      Statutory Compliance:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {startup.verifiedEligibility.map((el, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-100">
                          <ShieldCheck className="w-2.5 h-2.5 text-blue-600" />
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Stage: {startup.stage}</span>
                  <span className="font-semibold text-sky-600">
                    Candidate Profile &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
