import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { CONTACT_INFO, ABOUT_HIGHLIGHTS, EXPERTISE_CARDS, TOOLS_CATEGORIES } from '../data/portfolioData';
import EngineeringLogo from './EngineeringLogo';
import sanjibPortraitDefault from '../assets/images/sanjib_profile_photo_1787592360152.jpg';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Actions Bar: Print & Close */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1267D3]">
            <ShieldCheck className="w-4 h-4" />
            <span>EXECUTIVE P&amp;M PROFILE &amp; CV SUMMARY</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Header with Photo & Logo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#1267D3] shadow-md bg-slate-100 shrink-0">
              <img
                src={sanjibPortraitDefault}
                alt="Sanjib Sarkar"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-english">
                  SANJIB SARKAR
                </h2>
                <EngineeringLogo size="sm" />
              </div>
              <p className="text-sm font-bold text-[#1267D3] mt-0.5">
                Engineering Digital Technique &bull; P&amp;M Specialist
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1">
                26+ Years Field &amp; Executive Experience in Construction Equipment, Plants &amp; Maintenance Management
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-1 sm:text-right">
            <div className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Kolkata - 700102, West Bengal, India</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{CONTACT_INFO.primaryEmail}</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            Executive Career Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Construction Plant &amp; Machinery specialist with 26+ years of field leadership across National Highways, Metro Rail Viaducts, Major Bridges, and heavy crushing plants. Proven track record in turnkey plant erection, commissioning, structured preventive maintenance schedules (PMS), chronic failure root cause analysis (RCA), spare parts cost control, and enterprise asset management using SAP PM and Power BI.
          </p>
        </div>

        {/* Core Expertise Grid */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Key Competencies &amp; Operations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
            {ABOUT_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Domain Knowledge */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Heavy Equipment &amp; Plant Fleet Scope
          </h3>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <p><strong>Production Plants:</strong> Asphalt Batch Mix (120–200 TPH), Wet Mix Macadam (WMM), Stone Crushers (Jaw/Cone), Concrete Batching &amp; RMC.</p>
            <p><strong>Heavy Fleet:</strong> Hydraulic Excavators (Tata Hitachi, Komatsu, CAT, Volvo, Hyundai), Sensor Pavers, Motor Graders, Tandem/Soil Compactors, Piling Rigs (Bauer, Casagrande, Sany), Heavy Crawler Cranes.</p>
            <p><strong>Digital Stack:</strong> SAP PM, SAP HANA, ERP Nway, Power BI, Advanced Excel (Power Query/ETL), AI Diagnostic Prompts, n8n/Zapier Automation.</p>
          </div>
        </div>

        {/* Contact Footer in Modal */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">Available for Permanent Leadership &amp; Specialized Consulting</span>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="px-4 py-2 rounded-xl bg-[#1267D3] text-white font-bold hover:bg-[#0e52aa] transition-colors"
            >
              Call: {CONTACT_INFO.phone}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
