import React, { useState } from 'react';
import { architectureLayers } from '../data/mockData';
import { 
  Users, 
  Layout, 
  Cpu, 
  Database, 
  Cloud, 
  Code,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(3); // Layer 3 Backend Services by default

  const getLayerIcon = (layer: number) => {
    switch (layer) {
      case 1: return Users;
      case 2: return Layout;
      case 3: return Cpu;
      case 4: return Database;
      case 5: return Cloud;
      default: return Layers;
    }
  };

  const getLayerColors = (layer: number) => {
    switch (layer) {
      case 1: return { text: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' };
      case 2: return { text: 'text-indigo-700', bg: 'bg-indigo-50', border: 'border-indigo-200' };
      case 3: return { text: 'text-cyan-700', bg: 'bg-cyan-50', border: 'border-cyan-200' };
      case 4: return { text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' };
      case 5: return { text: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-200' };
      default: return { text: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-200' };
    }
  };

  return (
    <section id="technology" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Modular Enterprise Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            Technology Behind SAMARTH
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A 5-layer enterprise GovTech architecture engineered for security, high availability, and statutory compliance.
          </p>
        </div>

        {/* 5-Layer Stack Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Layer Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              System Architecture Layers (Click to inspect)
            </span>

            {architectureLayers.map((layer) => {
              const Icon = getLayerIcon(layer.layer);
              const isSelected = selectedLayer === layer.layer;
              const colors = getLayerColors(layer.layer);

              return (
                <button
                  key={layer.layer}
                  onClick={() => setSelectedLayer(layer.layer)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-800 shadow-xl scale-[1.02] ring-2 ring-sky-500/30'
                      : 'bg-slate-50/80 text-slate-800 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-sky-500 text-slate-950'
                          : `${colors.bg} ${colors.text}`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-sky-400' : 'text-slate-400'}`}>
                          LAYER 0{layer.layer}
                        </span>
                      </div>
                      <h4 className={`text-sm font-bold font-['Outfit'] ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {layer.name.replace(`LAYER ${layer.layer} — `, '')}
                      </h4>
                      <p className={`text-[11px] truncate max-w-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {layer.tagline}
                      </p>
                    </div>
                  </div>

                  <div className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-slate-800 text-sky-400' : 'bg-slate-200/60 text-slate-600'
                  }`}>
                    {layer.items.length} Modules
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Detailed Inspection Panel */}
          <div className="lg:col-span-7">
            {(() => {
              const currentLayer = architectureLayers.find((l) => l.layer === selectedLayer) || architectureLayers[2];
              const Icon = getLayerIcon(currentLayer.layer);

              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-md">
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                          LAYER {currentLayer.layer} SPECIFICATION
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-['Outfit']">
                          {currentLayer.name}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-xs text-slate-500 font-medium">
                      Enterprise Tier
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">
                    {currentLayer.tagline}. Every component in this layer is built for zero single-point of failure and strict audit traceability.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentLayer.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-sky-300 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {item.title}
                          </h4>
                          {item.techBadge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-sky-50 text-sky-700 border border-sky-200/80">
                              {item.techBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Quality Guarantees Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>End-to-End Encryption (TLS 1.3 & AES-256)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      <span>MeitY & GFR 2017 Ready</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
