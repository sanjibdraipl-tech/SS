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
            Construction Plant &amp; Machinery executive specialist with 26+ years of field leadership across National Highways &amp; Expressways, Metro Rail Viaducts, Major River Bridges, and High-Capacity Crushing Plants. Proven authority in turnkey plant erection, commissioning, structured preventive maintenance schedules (PMS), chronic failure root cause analysis (RCA), spare parts cost control, and enterprise asset management using SAP PM and Power BI. Available for <strong className="text-slate-900">Head of P&amp;M, AGM / GM, or Strategic Corporate Advisory</strong> roles.
          </p>
        </div>

        {/* Verified Career History & Roles */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span>Verified Career History &amp; Leadership Roles</span>
            <span className="text-[10px] text-blue-600 font-mono font-normal">Site &amp; Advisory Track Record</span>
          </h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900">Head of P&amp;M &bull; Site Operations Lead</span>
                <span className="text-[11px] font-semibold text-blue-700">National Highway &amp; Expressway EPCs</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Turnkey erection, commissioning, and continuous 24x7 operation of Asphalt Batch Mix Plants (160–200 TPH), Wet Mix Macadam (WMM) plants, and sensor paver paving trains across high-tonnage MoRTH highway corridors with &gt;96% uptime.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900">Plant &amp; Heavy Machinery Lead</span>
                <span className="text-[11px] font-semibold text-blue-700">Metro Rail Viaducts &amp; Deep Foundations</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Supervised hydraulic rotary piling rigs (Bauer BG series), heavy crawler cranes (75T–150T), and concrete pumping logistics in dense urban metro corridors with strict third-party lifting safety protocols.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900">Senior P&amp;M Specialist</span>
                <span className="text-[11px] font-semibold text-blue-700">Major River Bridges &amp; Marine Piers</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Managed riverbed concrete batching plants, precast segment launching gantry cranes, vibratory piling hammers, and marine workboat machinery under high humidity and river flow challenges.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900">P&amp;M Strategic Corporate Advisor</span>
                <span className="text-[11px] font-semibold text-blue-700">Head Office &amp; Multi-Project Governance</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Advising Project Directors and EPC leadership on capital fleet sizing, CapEx vs OpEx analysis, equipment lifecycle cost (LCC), and SAP PM / Power BI digital rollouts across 150+ fleet units.
              </p>
            </div>
          </div>
        </div>

        {/* Machine Fleet Handling Experience */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Machine Fleet Handling Experience (150+ Heavy Equipment Units)
          </h3>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div>
              <strong className="text-slate-900">Production Plants:</strong> Asphalt Batch Mix Plants (120–200 TPH - Lintec, Apollo, Ammann, Parker), Wet Mix Macadam (WMM 200–250 TPH), Stone Crushers (150–200 TPH Jaw + Cone - Metso, Sandvik, Terex), Concrete Batching &amp; RMC (30–120 m³/hr - Schwing Stetter, Macons).
            </div>
            <div>
              <strong className="text-slate-900">Paving &amp; Compaction:</strong> Hydrostatic Electronic Sensor Pavers (Vögele Super 1800-3, Dynapac SD2500, Apollo), Tandem Vibratory Rollers (9T–11T Hamm HD90, Dynapac CC384), Pneumatic Tired Rollers (PTR 15T–25T), Soil Compactors (Case 1107EX, JCB).
            </div>
            <div>
              <strong className="text-slate-900">Foundation &amp; Lifting:</strong> Hydraulic Piling Rigs (Bauer BG28 / BG30, Casagrande, Sany SR285), Crawler Cranes (75T, 100T, 150T - Tata, Kobelco, Sany), Gantry Cranes, Vibratory Sheet Piling Hammers (PTC, ICE).
            </div>
            <div>
              <strong className="text-slate-900">Heavy Earthmoving:</strong> Hydraulic Excavators (20T–35T Tata Hitachi EX200/ZX220, Komatsu PC210, CAT 320D, Volvo EC210), Motor Graders (140 HP CAT 140K, Liugong), Wheel Loaders (3T–5T CAT 950, SDLG).
            </div>
          </div>
        </div>

        {/* Software & Digital Credentials */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Software &amp; Digital Credentials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200/80">
              <strong className="text-blue-950 block mb-0.5">SAP PM &amp; S/4HANA:</strong>
              <span className="text-slate-600 text-[11px]">Equipment Master, Functional Location, Notification &amp; Work Orders, PMS Schedules &amp; Spares Reservation.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
              <strong className="text-amber-950 block mb-0.5">Power BI Interactive Dashboards:</strong>
              <span className="text-slate-600 text-[11px]">Fleet Availability %, MTBF/MTTR trends, specific fuel burn rates, and site-wise OpEx variance dashboards.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
              <strong className="text-emerald-950 block mb-0.5">ERP Nway &amp; Web ERPs:</strong>
              <span className="text-slate-600 text-[11px]">Daily machinery hour-meter log capture, site fuel issue vouchers, inter-site machinery transfer gate passes.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-200/80">
              <strong className="text-purple-950 block mb-0.5">Advanced Excel (Power Query ETL) &amp; AI:</strong>
              <span className="text-slate-600 text-[11px]">Automated multi-workbook ETL pipelines, automated alert triggers via n8n/Zapier, AI diagnostic prompts.</span>
            </div>
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
