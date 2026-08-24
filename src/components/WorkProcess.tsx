import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { Search, BarChart2, Crosshair, TrendingUp, CheckCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function WorkProcess() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#1267D3]" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-[#1267D3]" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-[#4B2E9B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'CheckCheck':
        return <CheckCheck className="w-5 h-5 text-[#1267D3]" />;
      default:
        return <Search className="w-5 h-5 text-[#1267D3]" />;
    }
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            How I Approach a P&amp;M Challenge
          </h2>
          <p className="text-base text-slate-600">
            A proven 5-step scientific methodology for diagnosing chronic failures, implementing preventive protocols, and sustaining high fleet uptime.
          </p>
        </div>

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1267D3]/50 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-slate-400 group-hover:text-[#1267D3]">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-0.5 group-hover:text-[#1267D3] transition-colors">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-2">
                  {step.subtitle}
                </p>

                <p className="text-[11px] font-bold text-slate-800 mb-2 leading-snug">
                  {step.headline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.details}
                </p>
              </div>

              {idx < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-blue-500/30 ml-4 pl-6 space-y-6 mb-12">
          {WORK_PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative">
              <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[#1267D3] flex items-center justify-center text-[10px] font-bold text-[#1267D3] shadow-xs">
                {step.step}
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  {getStepIcon(step.icon)}
                  <h3 className="text-base font-bold text-slate-900">
                    {step.step} — {step.name}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  {step.subtitle}
                </p>
                <p className="text-xs font-bold text-slate-800 mb-2">
                  {step.headline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Strip */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-700 italic">
            "Eliminating recurring machine downtime is never about luck — it is about rigorous root-cause analysis, standardized lubrication, and daily digital accountability."
          </p>
          <span className="block text-xs font-bold text-[#1267D3] mt-2">— SANJIB, P&amp;M Specialist</span>
        </div>

      </div>
    </section>
  );
}
