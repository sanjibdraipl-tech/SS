import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function MobileStickyActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Call / Contact Button */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#1267D3] active:bg-[#0d53ab] text-white font-bold text-xs shadow-md"
        >
          <span>Discuss Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
