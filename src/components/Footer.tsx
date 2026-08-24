import { MessageCircle, Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import EngineeringLogo from './EngineeringLogo';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'refund') => void;
}

export default function Footer({ onOpenLegalModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <EngineeringLogo size="md" />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-english">
                  SANJIB SARKAR
                </span>
                <p className="text-xs text-[#1267D3] font-bold">
                  Engineering Digital Technique
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Construction Plant &amp; Machinery specialist with 26+ years of field leadership across National Highway Expressways, Metro Rail Viaducts, Major Bridges, and heavy production plants — specializing in maintenance reliability, SAP PM, and AI automation.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              Official Portal: <span className="text-slate-300 font-semibold">{CONTACT_INFO.brandName}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#1267D3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#1267D3] transition-colors block">
                  Construction P&amp;M Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1267D3] transition-colors block">
                  Maintenance &amp; Reliability (PMS / RCA)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1267D3] transition-colors block">
                  Equipment &amp; Plant Troubleshooting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1267D3] transition-colors block">
                  P&amp;M Digitalization &amp; Power BI
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1267D3] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.primaryEmail}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} <strong className="text-slate-400 font-semibold">{CONTACT_INFO.brandName}</strong>. All rights reserved. Professional P&amp;M &amp; Digitalization Profile.
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('refund')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
