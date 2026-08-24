import { useState } from 'react';
import { ArrowRight, Sparkles, Database, FileSpreadsheet, Server, PieChart, CheckCircle2, Maximize2, X, Activity, Cpu, BarChart3, Layers } from 'lucide-react';
import { TRANSFORMATION_STEPS } from '../data/portfolioData';
import pmDashboardImg from '../assets/images/pm_digitalization_dash_1787591762917.jpg';

export default function DigitalTransformation() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const techChips = ['SAP PM', 'SAP HANA', 'SAP RISE', 'ERP Nway', 'Advanced Excel', 'Power BI Dashboards', 'ChatGPT / Gemini AI', 'n8n Automation', 'Fleet Telematics IoT'];

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-slate-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="digitalization" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-[#0B132B] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* AI App Ambient Background Glows */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4B2E9B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1267D3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digitalization &amp; AI Edge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-english">
            From Traditional P&amp;M to Digital &amp; AI-Enabled P&amp;M
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Replacing paper logbooks and reactive breakdowns with structured SAP PM workflows, automated Power BI analytics, and AI-assisted predictive maintenance.
          </p>
        </div>

        {/* Tech Chips Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {techChips.map((tech, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-slate-200 transition-colors shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* High Impact Digital Dashboard Visual Card */}
        <div className="mb-14 bg-slate-800/90 rounded-3xl p-5 sm:p-8 border border-slate-700/90 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-700">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wide">
                  Live System Architecture
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Real-Time P&amp;M Analytics
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-english">
                Enterprise Power BI &amp; SAP PM Fleet Reliability Command Center
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Expand Visual</span>
            </button>
          </div>

          {/* Image Showcase Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Dashboard Screenshot with SEO figure markup */}
            <div className="lg:col-span-8">
              <figure className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <img
                  src={pmDashboardImg}
                  alt="Construction Plant & Machinery Digital Dashboard - Power BI & SAP PM Equipment Availability, MTBF & MTTR Metrics"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    Click to view high-resolution Digitalization architecture
                  </span>
                </div>
                <figcaption className="sr-only">
                  High-capacity digital telemetry and SAP PM equipment dashboard developed for construction plant and machinery fleet management.
                </figcaption>
              </figure>
            </div>

            {/* Core Digital Capabilities List */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide mb-1">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Fleet Availability &gt;92%</span>
                </div>
                <p className="text-xs text-slate-300">
                  Automated MTBF and MTTR analytics identify recurring machine failure patterns before project critical path delays occur.
                </p>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wide mb-1">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>AI Predictive Diagnostics</span>
                </div>
                <p className="text-xs text-slate-300">
                  Custom AI prompt engines and scripts analyze vibration reports, oil degradation, and thermal telemetry for precision interventions.
                </p>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wide mb-1">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span>100% Spares &amp; Fuel Visibility</span>
                </div>
                <p className="text-xs text-slate-300">
                  Direct ERP &amp; SAP PM integration tracks batch mix plant energy, diesel consumption, and hydraulic oil consumption per engine hour.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Transformation Flow: Desktop 3x2 interactive stepped cards, Mobile vertical timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {TRANSFORMATION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-slate-800/70 backdrop-blur-md rounded-3xl p-6 border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    STAGE {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-blue-300 mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase 0{idx + 1} of 06</span>
                {idx < 5 && <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-amber-400/40 ml-4 pl-6 space-y-8 mb-12">
          {TRANSFORMATION_STEPS.map((step) => (
            <div key={step.step} className="relative">
              <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-400">
                {step.step}
              </div>
              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
                <div className="flex items-center gap-2 mb-1">
                  {getStepIcon(step.icon)}
                  <h3 className="text-base font-bold text-white">
                    {step.step}. {step.title}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-blue-300 mb-2">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#1267D3]/20 via-[#4B2E9B]/30 to-amber-500/10 rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to modernize your project's Plant &amp; Machinery reporting?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Let us design custom SAP PM master data and live Power BI dashboards for your fleet.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#E8B735] hover:bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-md"
          >
            Request Digital Roadmap
          </a>
        </div>

      </div>

      {/* Lightbox Modal for Full-Screen View */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl p-2">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={pmDashboardImg}
              alt="Expanded P&M Digitalization Dashboard"
              className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-center">
              <h4 className="text-sm font-bold text-white">Enterprise P&amp;M Fleet Reliability &amp; SAP PM Architecture</h4>
              <p className="text-xs text-slate-400 mt-1">Live Power BI &amp; AI Telematics Integration for High-Speed Highway &amp; Infrastructure Projects</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

