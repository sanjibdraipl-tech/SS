import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Flame, BarChart3, Layout, Palette, Video, ArrowRight, Check, X, PhoneCall, Sparkles } from 'lucide-react';
import { SERVICES_LIST, CONTACT_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#1267D3]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#1267D3]" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-[#1267D3]" />;
      case 'BarChart3':
        return <BarChart3 className="w-7 h-7 text-[#4B2E9B]" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-[#1267D3]" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-amber-500" />;
      case 'Video':
        return <Video className="w-7 h-7 text-red-500" />;
      default:
        return <Building2 className="w-7 h-7 text-[#1267D3]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Consulting, Digital Engineering &amp; Creative Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            Specialized Professional Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From heavy plant management and predictive reliability to custom website development, graphic design, and technical video production.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, sIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: sIndex * 0.08 }}
              className="relative bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#1267D3]/60 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-300 group-hover:text-blue-300 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1267D3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Core Focus &amp; Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.slice(0, 4).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1267D3] mt-1.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs sm:text-sm font-bold text-[#1267D3] hover:text-[#0e52aa] flex items-center gap-1.5 group-hover:gap-2 transition-all cursor-pointer"
                >
                  <span>Detailed Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${CONTACT_INFO.rawPhone}`}
                  className="p-2 rounded-xl bg-blue-50 text-[#1267D3] hover:bg-[#1267D3] hover:text-white transition-colors"
                  title="Direct Phone Inquiry"
                  aria-label="Direct Phone Inquiry"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#1267D3]">
                    SERVICE {selectedService.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-500 mb-4">
                {selectedService.subtitle}
              </p>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Scope &amp; All Tangible Deliverables:
                </h4>
                <div className="space-y-2">
                  {selectedService.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-slate-800 mb-6">
                <strong className="block text-[#1267D3] font-bold mb-1">Target Audience &amp; Value:</strong>
                <p>{selectedService.targetAudience}</p>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${CONTACT_INFO.rawPhone}`}
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-[#1267D3] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 hover:bg-[#0e52aa] transition-colors shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
