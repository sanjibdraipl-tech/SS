import { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentCase = CASE_STUDIES_DATA[activeTab];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Problem-Solving Frameworks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            P&amp;M Engineering Case Studies
          </h2>
          <p className="text-base text-slate-600">
            Real-world step-by-step resolution frameworks across root cause failure analysis, plant erection, spare optimization, and digital reporting.
          </p>
        </div>

        {/* Tab Buttons (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CASE_STUDIES_DATA.map((cs, idx) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#1267D3] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="opacity-80 font-mono">0{idx + 1}</span>
              <span>{cs.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Case Header Strip */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-[#1267D3] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E8B735] text-slate-950 uppercase tracking-wider">
                  {currentCase.badge}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {currentCase.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center shrink-0">
              <span className="text-xs text-slate-300">Case 0{activeTab + 1} of 04</span>
            </div>
          </div>

          {/* KPI Summary Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-900 text-white divide-y md:divide-y-0 md:divide-x divide-slate-800 border-b border-slate-800 text-center">
            {currentCase.kpis.map((kpi, kIdx) => (
              <div key={kIdx} className="p-4">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#E8B735] tracking-tight">
                  {kpi.value}
                </span>
                <span className="text-xs font-bold text-slate-200 block">
                  {kpi.label}
                </span>
                <span className="text-[10px] text-slate-400">
                  {kpi.sublabel}
                </span>
              </div>
            ))}
          </div>

          {/* 6-Step Implementation Flow */}
          <div className="p-6 sm:p-8">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1267D3]" />
              <span>Step-by-Step Resolution Architecture:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {currentCase.steps.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#1267D3]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#1267D3] block mb-1">
                      {st.phase}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-slate-200/70 text-[11px] font-semibold text-slate-900">
                    <span className="text-[#4B2E9B] font-bold">Action Taken: </span>
                    <span>{st.actionPoint}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1267D3] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Impact Summary</h5>
                  <p className="text-xs sm:text-sm text-slate-700">{currentCase.summary}</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-[#1267D3] text-white font-bold text-xs hover:bg-[#0e52aa] transition-colors shrink-0"
              >
                Discuss Technical Problem
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
