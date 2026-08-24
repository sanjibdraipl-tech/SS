import { motion } from 'motion/react';
import { Layers, Wrench, Truck, Factory, Compass, Cpu, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { EXPERTISE_CARDS } from '../data/portfolioData';
import { ExpertiseItem } from '../types';

interface ExpertiseProps {
  onSelectExpertise?: (item: ExpertiseItem) => void;
}

// Light color theme configurations for each of the 6 domain cards
const CARD_LIGHT_THEMES = [
  {
    // Domain 01 - Plant Management (Soft Light Sky / Blue)
    cardBg: 'bg-gradient-to-br from-blue-50/95 via-sky-50/60 to-white',
    borderColor: 'border-blue-200/80 hover:border-blue-400',
    iconBg: 'bg-blue-100 text-blue-600',
    numberColor: 'text-blue-600',
    badgeBg: 'bg-blue-100/90 text-blue-800 border-blue-200/70',
    checkColor: 'text-blue-600',
    btnColor: 'text-blue-600 hover:text-blue-800',
    shadowHover: 'hover:shadow-blue-500/10',
  },
  {
    // Domain 02 - Maintenance & Reliability (Soft Light Emerald / Mint)
    cardBg: 'bg-gradient-to-br from-emerald-50/95 via-teal-50/50 to-white',
    borderColor: 'border-emerald-200/80 hover:border-emerald-400',
    iconBg: 'bg-emerald-100 text-emerald-700',
    numberColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100/90 text-emerald-800 border-emerald-200/70',
    checkColor: 'text-emerald-600',
    btnColor: 'text-emerald-700 hover:text-emerald-900',
    shadowHover: 'hover:shadow-emerald-500/10',
  },
  {
    // Domain 03 - Heavy Equipment (Soft Light Amber / Warm Gold)
    cardBg: 'bg-gradient-to-br from-amber-50/95 via-orange-50/50 to-white',
    borderColor: 'border-amber-200/80 hover:border-amber-400',
    iconBg: 'bg-amber-100 text-amber-700',
    numberColor: 'text-amber-600',
    badgeBg: 'bg-amber-100/90 text-amber-800 border-amber-200/70',
    checkColor: 'text-amber-600',
    btnColor: 'text-amber-700 hover:text-amber-900',
    shadowHover: 'hover:shadow-amber-500/10',
  },
  {
    // Domain 04 - Production Plants (Soft Light Indigo / Slate Blue)
    cardBg: 'bg-gradient-to-br from-indigo-50/95 via-blue-50/50 to-white',
    borderColor: 'border-indigo-200/80 hover:border-indigo-400',
    iconBg: 'bg-indigo-100 text-indigo-700',
    numberColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-100/90 text-indigo-800 border-indigo-200/70',
    checkColor: 'text-indigo-600',
    btnColor: 'text-indigo-700 hover:text-indigo-900',
    shadowHover: 'hover:shadow-indigo-500/10',
  },
  {
    // Domain 05 - Infrastructure Projects (Soft Light Rose / Coral)
    cardBg: 'bg-gradient-to-br from-rose-50/95 via-orange-50/40 to-white',
    borderColor: 'border-rose-200/80 hover:border-rose-400',
    iconBg: 'bg-rose-100 text-rose-700',
    numberColor: 'text-rose-600',
    badgeBg: 'bg-rose-100/90 text-rose-800 border-rose-200/70',
    checkColor: 'text-rose-600',
    btnColor: 'text-rose-700 hover:text-rose-900',
    shadowHover: 'hover:shadow-rose-500/10',
  },
  {
    // Domain 06 - Digital P&M & AI (Soft Light Purple / Violet / Tech Glow)
    cardBg: 'bg-gradient-to-br from-purple-50/95 via-violet-50/50 to-white',
    borderColor: 'border-purple-200/80 hover:border-purple-400',
    iconBg: 'bg-purple-100 text-purple-700',
    numberColor: 'text-purple-600',
    badgeBg: 'bg-purple-100/90 text-purple-800 border-purple-200/70',
    checkColor: 'text-purple-600',
    btnColor: 'text-purple-700 hover:text-purple-900',
    shadowHover: 'hover:shadow-purple-500/10',
  },
];

export default function Expertise({ onSelectExpertise }: ExpertiseProps) {
  const getIcon = (iconName: string, customColorClass?: string) => {
    const cls = "w-6 h-6";
    switch (iconName) {
      case 'Layers':
        return <Layers className={cls} />;
      case 'Wrench':
        return <Wrench className={cls} />;
      case 'Truck':
        return <Truck className={cls} />;
      case 'Factory':
        return <Factory className={cls} />;
      case 'Compass':
        return <Compass className={cls} />;
      case 'Cpu':
        return <Cpu className={cls} />;
      default:
        return <Wrench className={cls} />;
    }
  };

  return (
    <section id="expertise" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            Construction Plant &amp; Machinery Expertise
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            6 core domains covering heavy plant setup, fleet reliability, operational maintenance, and data-driven digital transformation.
          </p>
        </motion.div>

        {/* 6 Cards Grid: Desktop 3x2, Tablet 2 cols, Mobile 1 col with Light Color Tones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_CARDS.map((card, idx) => {
            const theme = CARD_LIGHT_THEMES[idx % CARD_LIGHT_THEMES.length];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`${theme.cardBg} rounded-3xl p-6 sm:p-7 border ${theme.borderColor} shadow-sm hover:shadow-xl ${theme.shadowHover} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs`}>
                      {getIcon(card.icon)}
                    </div>
                    <span className={`text-xs font-mono font-bold ${theme.numberColor} bg-white/80 px-2.5 py-1 rounded-full border border-slate-200/60 shadow-2xs`}>
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1267D3] transition-colors font-english">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold mb-4">
                    {card.subtitle}
                  </p>

                  {/* Detailed Points */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 ${theme.checkColor} mt-0.5 shrink-0`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold border ${theme.badgeBg} shadow-2xs`}>
                    {card.badge}
                  </span>
                  <a
                    href="#contact"
                    className={`text-xs font-bold ${theme.btnColor} flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer`}
                  >
                    <span>Inquire Domain</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
