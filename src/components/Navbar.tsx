import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPrototype: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrototype }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Technology', href: '#technology' },
    { name: 'Matching', href: '#matching' },
    { name: 'Impact', href: '#impact' },
    { name: 'Team', href: '#team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            aria-label="TRIAD7 Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-md shadow-sky-500/10 border border-slate-700/60 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                T7
              </span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-['Outfit']">
                  TRIAD<span className="text-sky-600">7</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-200/80">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  SIH 2026
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                SAMARTH Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-sky-600 bg-sky-50/80 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenPrototype}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Explore SAMARTH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPrototype}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-md shadow-xs"
            >
              Prototype
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl transition-all duration-200 px-4 pt-3 pb-6">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-sky-600 bg-sky-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrototype();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Explore SAMARTH Prototype</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
