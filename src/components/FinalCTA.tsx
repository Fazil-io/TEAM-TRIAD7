import React from 'react';
import { Sparkles, ArrowRight, Users, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenPrototype: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPrototype }) => {
  const handleScrollToTeam = () => {
    const el = document.getElementById('team');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Smart India Hackathon 2026 &bull; PS SIH26136</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-['Outfit'] tracking-tight leading-[1.15]">
          From Government Need to{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Real-World Innovation.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          TRIAD7 is building SAMARTH to create a structured pathway where government challenges can meet startup innovation, be tested with evidence, and move toward scalable implementation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenPrototype}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Explore SAMARTH</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={handleScrollToTeam}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
          >
            <Users className="w-4 h-4 text-slate-300" />
            <span>Meet TRIAD7</span>
          </button>
        </div>

        {/* Small Hackathon Credibility Footer Row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Software Category</span>
          <span>&bull;</span>
          <span>Government of Maharashtra (MSInS)</span>
          <span>&bull;</span>
          <span>Department of Skills, Employment & Innovation</span>
        </div>
      </div>
    </section>
  );
};
