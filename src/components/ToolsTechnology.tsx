import { TOOLS_CATEGORIES } from '../data/portfolioData';
import { Cpu, Server, BarChart2, Sparkles, Workflow, Compass, CheckCircle2 } from 'lucide-react';

export default function ToolsTechnology() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('ERP')) return <Server className="w-5 h-5 text-[#1267D3]" />;
    if (category.includes('Data')) return <BarChart2 className="w-5 h-5 text-[#1267D3]" />;
    if (category.includes('Intelligence') || category.includes('AI')) return <Sparkles className="w-5 h-5 text-amber-500" />;
    if (category.includes('Automation')) return <Workflow className="w-5 h-5 text-[#4B2E9B]" />;
    return <Compass className="w-5 h-5 text-[#1267D3]" />;
  };

  return (
    <section id="tools" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Digital Stack &amp; Software Mastery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            Tools &amp; Technology Stack
          </h2>
          <p className="text-base text-slate-600">
            A potent combination of Enterprise ERP, Power BI, Advanced Excel models, and Artificial Intelligence automation.
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#1267D3]/60 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Tool Items */}
                <div className="space-y-3">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-2"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          {tool.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {tool.role}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#1267D3] border border-blue-100 shrink-0">
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Hands-on Applied Proficiency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
