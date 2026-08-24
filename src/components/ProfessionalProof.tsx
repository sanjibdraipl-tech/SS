import { Award, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ProofProps {
  onOpenCvModal: () => void;
}

export default function ProfessionalProof({ onOpenCvModal }: ProofProps) {
  const stats = [
    { num: '26+', label: 'Years Experience', sub: 'Construction Plant & Machinery' },
    { num: 'Road', label: 'Highway Projects', sub: 'Expressways & 4/6-Lane Packages' },
    { num: 'Metro', label: 'Metro Rail Projects', sub: 'Elevated Viaducts & Piling' },
    { num: 'Bridge', label: 'Major Bridge Works', sub: 'River Crossings & Marine Piling' },
  ];

  return (
    <section id="proof" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Authority &amp; Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            Experience &amp; Professional Proof
          </h2>
          <p className="text-base text-slate-600">
            26+ years of verified on-site field leadership, multi-sector infrastructure delivery, and deep technological mastery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 text-center hover:border-[#1267D3]/60 hover:bg-blue-50/40 transition-all group"
            >
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#1267D3] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                {stat.num}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Capability Standards Grid */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B132B] rounded-3xl p-7 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Professional Standard</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-english">
              Verified Executive P&amp;M Leadership Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Review my comprehensive verified career history, machine fleet handling experience, and software credentials for Head of P&amp;M, AGM, GM, or Advisory roles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>26+ Years Field P&amp;M Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Make Heavy Equipment Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SAP PM &amp; Power BI Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Fabricated Data Guarantee</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-[#E8B735] hover:bg-amber-400 shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive CV Summary</span>
            </button>

            <a
              href={`mailto:${CONTACT_INFO.primaryEmail}?subject=Discussion%20regarding%20P%26M%20Leadership%20Role%20/%20Consulting`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-sm"
            >
              <span>Email Sanjib Directly</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
