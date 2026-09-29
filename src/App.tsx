import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { InnovationPipeline } from './components/InnovationPipeline';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WorkflowSection } from './components/WorkflowSection';
import { InnovationSection } from './components/InnovationSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SmartMatchingSection } from './components/SmartMatchingSection';
import { PilotValidationSection } from './components/PilotValidationSection';
import { ImpactSection } from './components/ImpactSection';
import { FeasibilityViabilitySection } from './components/FeasibilityViabilitySection';
import { MarketOpportunitySection } from './components/MarketOpportunitySection';
import { PrototypeSection } from './components/PrototypeSection';
import { TeamSection } from './components/TeamSection';
import { TeamIdentitySection } from './components/TeamIdentitySection';
import { EcosystemReferencesSection } from './components/EcosystemReferencesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrototypeModal } from './components/PrototypeModal';

export function App() {
  const [isPrototypeModalOpen, setIsPrototypeModalOpen] = useState(false);

  const openPrototypeModal = () => {
    setIsPrototypeModalOpen(true);
  };

  const closePrototypeModal = () => {
    setIsPrototypeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenPrototype={openPrototypeModal} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenPrototype={openPrototypeModal} />

        {/* 3. Credibility / Trust Strip */}
        <TrustStrip />

        {/* 4. Special Innovation Pipeline Animated Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InnovationPipeline />
        </div>

        {/* 5. Problem Section */}
        <ProblemSection />

        {/* 6. Solution Section */}
        <SolutionSection />

        {/* 7. How SAMARTH Works (Workflow) */}
        <WorkflowSection />

        {/* 8. Innovation Section */}
        <InnovationSection />

        {/* 9. Technical Architecture */}
        <ArchitectureSection />

        {/* 10. Smart Problem-Startup Matching */}
        <SmartMatchingSection />

        {/* 11. Pilot & Validation */}
        <PilotValidationSection />

        {/* 12. Impact Section */}
        <ImpactSection />

        {/* 13. Feasibility & Viability Matrices */}
        <FeasibilityViabilitySection />

        {/* 14. Market Opportunity (TAM / SAM / SOM) */}
        <MarketOpportunitySection />

        {/* 15. Product / Prototype Dashboard Mockup */}
        <PrototypeSection onOpenModal={openPrototypeModal} />

        {/* 16. Team Section */}
        <TeamSection />

        {/* 17. Team Identity ("Why TRIAD7?") */}
        <TeamIdentitySection />

        {/* 18. References & Ecosystem Integration */}
        <EcosystemReferencesSection />

        {/* 19. Final Call to Action */}
        <FinalCTA onOpenPrototype={openPrototypeModal} />
      </main>

      {/* 20. Footer */}
      <Footer />

      {/* Interactive Prototype Simulator Modal */}
      <PrototypeModal
        isOpen={isPrototypeModalOpen}
        onClose={closePrototypeModal}
      />
    </div>
  );
}

export default App;
