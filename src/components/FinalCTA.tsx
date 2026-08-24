import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B132B] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
          <ShieldCheck className="w-4 h-4" />
          <span>Strategic P&amp;M Leadership</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-english">
          Need Higher Machinery Uptime <br className="hidden sm:inline" />
          and Smarter Digital P&amp;M Operations?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Unite 26+ years of field machinery mastery with modern SAP PM, Power BI real-time dashboards, and AI-assisted diagnostics to build a highly efficient, data-driven plant operation today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-[#E8B735] hover:bg-amber-400 active:scale-95 shadow-xl shadow-amber-500/20 hover:shadow-2xl transition-all"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>

        {/* Direct Contact info */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span>Kolkata, West Bengal - 700102</span>
          <span>Phone: {CONTACT_INFO.phone}</span>
          <span>Email: {CONTACT_INFO.primaryEmail}</span>
        </div>

      </div>
    </section>
  );
}
