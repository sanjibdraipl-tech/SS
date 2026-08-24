import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MachineryGallery from './components/MachineryGallery';
import CreativeDesignStudio from './components/CreativeDesignStudio';
import Expertise from './components/Expertise';
import Services from './components/Services';
import PlantAnalyticsDashboard from './components/PlantAnalyticsDashboard';
import DigitalTransformation from './components/DigitalTransformation';
import ProjectPortfolio from './components/ProjectPortfolio';
import CaseStudies from './components/CaseStudies';
import KpiCalculator from './components/KpiCalculator';
import ToolsTechnology from './components/ToolsTechnology';
import WorkProcess from './components/WorkProcess';
import ProfessionalProof from './components/ProfessionalProof';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyActionBar from './components/MobileStickyActionBar';
import CvModal from './components/CvModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);
  
  // Manage user-uploaded personal photo with localStorage persistence
  const [userPhoto, setUserPhoto] = useState<string>(() => {
    return localStorage.getItem('sanjib_custom_profile_photo') || '';
  });

  const handlePhotoUpload = (newPhotoUrl: string) => {
    setUserPhoto(newPhotoUrl);
    try {
      localStorage.setItem('sanjib_custom_profile_photo', newPhotoUrl);
    } catch (e) {
      console.warn('LocalStorage limit reached for photo', e);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#1267D3]/20 selection:text-[#1267D3]">
      
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Photo & Custom Uploader */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          userPhoto={userPhoto}
          onPhotoUpload={handlePhotoUpload}
        />

        {/* 3. About Section with Photo & Executive Narrative */}
        <About
          onOpenCvModal={() => setIsCvModalOpen(true)}
          userPhoto={userPhoto}
          onPhotoUpload={handlePhotoUpload}
        />

        {/* 4. Heavy Machinery & Plant Gallery (SEO & Visual Showcase) */}
        <MachineryGallery />

        {/* 4b. Digital Creative, Website, Image & Video Design Studio */}
        <CreativeDesignStudio />

        {/* 5. Core Expertise Section */}
        <Expertise />

        {/* 6. Services Section */}
        <Services />

        {/* 6b. Interactive P&M Analytics & Decision Intelligence Dashboard */}
        <PlantAnalyticsDashboard />

        {/* 7. Digital P&M Transformation Section (Power BI Dashboard Showcase) */}
        <DigitalTransformation />

        {/* 8. Selected Project Experience / Portfolio */}
        <ProjectPortfolio />

        {/* 9. P&M Case Studies */}
        <CaseStudies />

        {/* 10. Interactive P&M Fleet Availability & MTBF/MTTR Calculator */}
        <KpiCalculator />

        {/* 11. Tools & Technology */}
        <ToolsTechnology />

        {/* 12. Work Process */}
        <WorkProcess />

        {/* 13. Professional Proof & Experience Stats */}
        <ProfessionalProof onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 14. FAQ Accordion (SEO Section) */}
        <FAQ />

        {/* 15. Contact Section with Inquiry Form */}
        <ContactSection />

        {/* 16. Final High-Impact CTA */}
        <FinalCTA />
      </main>

      {/* 17. Comprehensive Footer */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* 18. Mobile Sticky Action Bar */}
      <MobileStickyActionBar />

      {/* Executive CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Legal Modal (Privacy, Terms, Refund) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

