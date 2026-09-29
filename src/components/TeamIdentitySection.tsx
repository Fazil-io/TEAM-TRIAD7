import React from 'react';
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react';

export const TeamIdentitySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Subtle Animated TRIAD7 Logo Treatment */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer glowing pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-transparent animate-spin [animation-duration:18s]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-sky-400/40" />

              {/* Triangle Triad Nodes SVG */}
              <svg className="w-56 h-56" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="t7triad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>

                {/* Outer Triangle connecting 3 triad vertices */}
                <polygon
                  points="100,28 175,160 25,160"
                  stroke="url(#t7triad)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  className="animate-flow-line"
                />

                {/* 3 Nodes with pulse */}
                <circle cx="100" cy="28" r="8" fill="url(#circGrad)" />
                <circle cx="100" cy="28" r="14" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />

                <circle cx="175" cy="160" r="8" fill="url(#circGrad)" />
                <circle cx="175" cy="160" r="14" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />

                <circle cx="25" cy="160" r="8" fill="url(#circGrad)" />
                <circle cx="25" cy="160" r="14" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />

                {/* Stylized numeral 7 in the center */}
                <path
                  d="M74 82 H128 L98 136"
                  stroke="#0f172a"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M74 82 H128 L98 136"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Floating badges around the geometric logo */}
              <div className="absolute top-2 right-4 px-2.5 py-1 rounded-lg bg-white shadow-sm border border-slate-200 text-[10px] font-bold text-slate-700">
                Technology
              </div>
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-white shadow-sm border border-slate-200 text-[10px] font-bold text-slate-700">
                Problem Solving
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-white shadow-sm border border-slate-200 text-[10px] font-bold text-slate-700">
                Product Thinking
              </div>
            </div>
          </div>

          {/* Right Column: Identity Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Team Philosophy & Culture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
              Why TRIAD7?
            </h2>

            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
              &ldquo;TRIAD7 brings together technology, problem-solving and product thinking to build practical digital solutions for real-world challenges.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We approach hackathons not as mere 36-hour code sprints, but as product incubators for genuine public impact. With SAMARTH, our ambition is to present a production-grade blueprint that Maharashtra State Innovation Society and government departments can practically adopt and institutionalize.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Code2 className="w-5 h-5 text-blue-600 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Technical Rigor</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">High-assurance architecture without shortcuts</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Compass className="w-5 h-5 text-indigo-600 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Problem First</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Deep regulatory & procurement analysis</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Lightbulb className="w-5 h-5 text-amber-600 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Product Thinking</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Intuitive UX for civil servants and founders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
