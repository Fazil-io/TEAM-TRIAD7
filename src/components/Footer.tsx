import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Technology', href: '#technology' },
    { name: 'Matching', href: '#matching' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md">
                T7
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-['Outfit']">
                TRIAD<span className="text-sky-400">7</span>
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-200">
                SAMARTH
              </h4>
              <p className="text-xs text-sky-400 font-mono">
                Government–Startup Innovation Procurement Platform
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A structured digital pathway connecting department operational challenges with eligible startup solutions for controlled pilots, milestone-based funding, and public scale-up.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@triad7.example"
                className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                aria-label="Email TRIAD7"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Hackathon Metadata */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              SIH 2026 Submission
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-300">Event:</strong> Smart India Hackathon 2026
              </li>
              <li>
                <strong className="text-slate-300">Problem ID:</strong> <span className="font-mono text-sky-400">SIH26136</span>
              </li>
              <li>
                <strong className="text-slate-300">Category:</strong> Software
              </li>
              <li>
                <strong className="text-slate-300">Theme:</strong> Miscellaneous
              </li>
              <li>
                <strong className="text-slate-300">Nodal State:</strong> Maharashtra
              </li>
            </ul>
          </div>

          {/* Col 5: Organization & Mandate */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Organization
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300 font-medium leading-relaxed">
                Government of Maharashtra
              </p>
              <p className="leading-relaxed">
                Maharashtra State Innovation Society (MSInS), Dept of Skills, Employment, Entrepreneurship & Innovation.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official SIH Track
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; 2026 <strong className="text-slate-300">TRIAD7</strong>. Built for Smart India Hackathon 2026.
          </p>

          <p className="text-[11px] text-slate-400 text-center max-w-xl">
            Disclaimer: SAMARTH is a prototype solution developed by TRIAD7 for SIH 2026. Startup profiles and pilot metrics shown are illustrative demo data.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
