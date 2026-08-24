import { motion } from 'motion/react';
import { PhoneCall, ShieldCheck, ArrowRight, Award, MessageCircle, FileText, CheckCircle2, ChevronRight, Activity, Cpu, Sparkles } from 'lucide-react';
import { CONTACT_INFO, HERO_TRUST_ITEMS } from '../data/portfolioData';

// Generated Profile and Site Assets
import heavyMachineryHero from '../assets/images/heavy_machinery_site_1787591750083.jpg';
import EngineeringLogo from './EngineeringLogo';

interface HeroProps {
  onOpenCvModal: () => void;
  userPhoto?: string;
  onPhotoUpload?: (newPhotoUrl: string) => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-[#0B132B] text-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800 overflow-hidden">
      
      {/* AI App Ambient Background Glows & Patterns */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#1267D3]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#4B2E9B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Status Badges with Motion */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-400/20 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Senior P&amp;M Roles, Advisory &amp; Digital Media</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/20">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Heavy Plant, Maintenance &amp; Digital Solutions</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Positioning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Professional Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.14] mb-4 font-english">
              Construction Plant &amp; Machinery Specialist{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1267D3] via-blue-400 to-[#E8B735] mt-1">
                with P&amp;M Digitalization, Web &amp; Video Media
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-7">
              Driving maximum fleet availability, predictive maintenance (PMS/RCA), turnkey plant erection, and digital transformation across <strong className="text-white font-semibold">Road Expressways, Metro Viaducts, Major Bridges</strong>, and Heavy Production Plants — combined with <strong className="text-amber-300 font-semibold">Website Design, 3D Graphics &amp; Video Production</strong>.
            </p>

            {/* CTAs Button Cluster */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7">
              {/* Primary Call CTA */}
              <a
                href={`tel:${CONTACT_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#1267D3] hover:bg-[#0e52aa] shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-95 transition-all text-sm group"
                id="hero-btn-call"
              >
                <PhoneCall className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-sm"
                id="hero-btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4 text-slate-900" />
                <span>WhatsApp Chat</span>
              </a>

              {/* Design Studio Link CTA */}
              <a
                href="#design-studio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-blue-200 bg-blue-900/40 hover:bg-blue-900/60 border border-blue-500/30 backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Design &amp; Video Studio</span>
              </a>

              {/* Download CV CTA */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all text-sm cursor-pointer"
                id="hero-btn-cv"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Executive CV</span>
              </button>
            </div>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-1">Core Mastery:</span>
              {['Asphalt & WMM Plants', 'Crushers & Paving', 'PMS & RCA', 'SAP PM & ERP', 'Web & Video Studio', 'Power BI & AI'].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/80 shadow-xs hover:border-blue-400/40 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Engineering Authority Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative bg-slate-800/90 rounded-3xl p-5 sm:p-7 border border-slate-700/80 shadow-2xl backdrop-blur-md overflow-hidden hover:border-slate-600 transition-colors">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 px-3.5 py-1.5 bg-gradient-to-l from-[#1267D3] to-[#4B2E9B] text-white text-[11px] font-bold rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-sm z-10">
                <Cpu className="w-3.5 h-3.5 text-amber-300" />
                <span>Verified Technical Authority</span>
              </div>

              {/* Engineering Identity Header */}
              <div className="flex items-center gap-4 mb-5 pt-1">
                <div className="p-3 rounded-2xl bg-slate-900 border border-blue-500/30 shadow-lg shrink-0">
                  <EngineeringLogo size="lg" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight font-english">
                    Engineering Digital Technique
                  </h2>
                  <p className="text-xs font-semibold text-blue-300 mt-0.5">
                    Heavy Machinery &bull; Digitalization &bull; Media
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-1">
                    Construction P&amp;M &bull; {CONTACT_INFO.city}
                  </p>
                </div>
              </div>

              {/* Verified Value Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/70 hover:border-amber-400/40 transition-colors">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#E8B735] block">Heavy Plant</span>
                  <span className="text-[11px] text-slate-300 font-medium">Fleet &amp; Commissioning</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/70 hover:border-blue-400/40 transition-colors">
                  <span className="text-xl sm:text-2xl font-extrabold text-white block">Road &amp; Metro</span>
                  <span className="text-[11px] text-slate-300 font-medium">Mega Project Packages</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/70 hover:border-blue-400/40 transition-colors">
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-400 block">PMS / RCA</span>
                  <span className="text-[11px] text-slate-300 font-medium">Downtime Reduction</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/70 hover:border-emerald-400/40 transition-colors">
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 block">SAP PM &amp; AI</span>
                  <span className="text-[11px] text-slate-300 font-medium">Real-Time Dashboards</span>
                </div>
              </div>

              {/* Machinery & Sector Tags */}
              <div className="space-y-1.5 mb-4">
                <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Specialized Heavy Fleet &amp; Plants
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {['Hot Mix & WMM Plants', 'Sensor Pavers & Rollers', 'Hydraulic Piling Rigs', 'Stone Crushers'].map((sec) => (
                    <span
                      key={sec}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900/70 text-slate-200 border border-slate-700"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Fast Contact Trigger */}
              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Headquarters:</span>
                  <span className="font-bold text-white text-xs">Kolkata - 700102</span>
                </div>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Trust Strip / Stats Ribbon */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HERO_TRUST_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-700/80 shadow-md hover:border-[#1267D3]/60 hover:bg-slate-800 transition-all flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-110 group-hover:bg-[#1267D3] group-hover:text-white transition-all">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

