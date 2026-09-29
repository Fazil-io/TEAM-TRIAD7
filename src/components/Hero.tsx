import React from 'react';
import { ArrowRight, Sparkles, Building2, Code2, Award, ChevronDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { hackathonInfo } from '../data/team';

interface HeroProps {
  onOpenPrototype: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrototype }) => {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-sky-50/20">
      {/* Background ambient subtle grid & glow */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-sky-200/25 to-cyan-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-sky-800 uppercase font-['Outfit']">
                SMART INDIA HACKATHON 2026
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-slate-600">
                Team <strong className="text-slate-900 font-bold">TRIAD7</strong>
              </span>
            </div>

            {/* Main Heading with Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-['Outfit'] leading-[1.12]">
              Connecting Government Challenges with{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Startup Innovation
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Introducing <strong className="text-slate-900 font-semibold">SAMARTH</strong> — a digital innovation-procurement platform that connects government departments with eligible startups to evaluate, pilot, validate, procure and scale innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenPrototype}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-xl shadow-md hover:shadow-lg shadow-sky-600/20 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Explore SAMARTH</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('solution')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all duration-200 cursor-pointer"
              >
                <span>View Our Approach</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Small Information Row */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-600" />
                  <span className="font-semibold text-slate-800">PS ID:</span>
                  <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                    {hackathonInfo.problemStatementId}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-600" />
                  <span className="font-semibold text-slate-800">Category:</span>
                  <span>{hackathonInfo.category} ({hackathonInfo.theme})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">Organization:</span>
                  <span className="text-slate-700">{hackathonInfo.organization}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
