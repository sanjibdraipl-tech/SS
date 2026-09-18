import { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Briefcase,
  Cpu,
  Truck,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ProofProps {
  onOpenCvModal: () => void;
}

type DossierTab = 'career' | 'fleet' | 'software';

export default function ProfessionalProof({ onOpenCvModal }: ProofProps) {
  const [activeDossierTab, setActiveDossierTab] = useState<DossierTab>('career');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(true);

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
            {/* Selected Focus Element: Enhanced Executive Verification Callout */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5 p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-inner backdrop-blur-xs">
              <span className="font-bold text-amber-300 block text-sm sm:text-base mb-1.5 font-english">
                Verified Executive Track Record &amp; Technical Credentials
              </span>
              Comprehensive field-verified career history steering multi-crore infrastructure projects as <strong className="text-white font-semibold">Head of P&amp;M at Site</strong> and <strong className="text-white font-semibold">Corporate Advisory</strong>. Mastery over large-scale <strong className="text-amber-200 font-semibold">Machine Fleet Handling</strong> (Asphalt &amp; Concrete Plants, Crushers, Sensor Pavers, Piling Rigs, Heavy Cranes) coupled with certified <strong className="text-blue-300 font-semibold">Software Credentials</strong> (SAP PM, Power BI, ERP Nway, Power Query ETL, and AI Telematics).
            </p>

            {/* Quick Interactive Credentials Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[11px] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-blue-400" />
                <span>Head of P&amp;M / AGM / Advisory</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-amber-400" />
                <span>150+ Multi-Make Fleet Units</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
                <Award className="w-3 h-3 text-emerald-400" />
                <span>SAP PM &amp; Power BI Certified Workflows</span>
              </span>
            </div>

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

            <button
              type="button"
              onClick={() => setIsDossierOpen(!isDossierOpen)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 transition-all text-sm cursor-pointer"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>{isDossierOpen ? 'Hide Credentials Dossier' : 'Review Full Credentials Dossier'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDossierOpen ? 'rotate-180' : ''}`} />
            </button>

            <a
              href={`mailto:${CONTACT_INFO.primaryEmail}?subject=Discussion%20regarding%20P%26M%20Leadership%20Role%20/%20Consulting`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-sm"
            >
              <span>Email Sanjib Directly</span>
            </a>
          </div>
        </div>

        {/* Interactive Detailed Credentials Dossier Panel */}
        {isDossierOpen && (
          <div className="mt-8 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-2xl animate-in fade-in duration-300">
            
            {/* Dossier Header & Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Head of P&amp;M &bull; Site &amp; Advisory Credentials Dossier</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white font-english">
                  Comprehensive Career, Fleet Handling &amp; Software Matrix
                </h4>
              </div>

              {/* Tab Switcher */}
              <div className="flex items-center gap-1.5 bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80">
                <button
                  type="button"
                  onClick={() => setActiveDossierTab('career')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeDossierTab === 'career'
                      ? 'bg-[#1267D3] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Career History &amp; Roles</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDossierTab('fleet')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeDossierTab === 'fleet'
                      ? 'bg-[#1267D3] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Machine Fleet Handling</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDossierTab('software')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeDossierTab === 'software'
                      ? 'bg-[#1267D3] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Software Credentials</span>
                </button>
              </div>
            </div>

            {/* Dossier Content Area */}
            <div className="mt-6">
              
              {/* TAB 1: CAREER HISTORY & ROLES */}
              {activeDossierTab === 'career' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold">Site Leadership</span>
                      <span className="text-slate-400 font-medium">National Highways &amp; Expressways</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">Head of P&amp;M / Senior Plant In-Charge</h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Led turnkey erection, commissioning, and continuous 24x7 operation of Asphalt Batch Mix Plants (160-200 TPH), Wet Mix Macadam (WMM) plants, and sensor paver paving trains across high-tonnage MoRTH highway corridors.
                    </p>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Zero paving stoppages during black-top cycle; &gt;96% plant availability</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Daily fuel consumption logging &amp; burner calibration saving ₹75/Ton</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-mono font-bold">Urban Mass Transit</span>
                      <span className="text-slate-400 font-medium">Metro Rail Viaducts &amp; Deep Piling</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">Plant &amp; Heavy Machinery Lead</h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Supervised critical hydraulic rotary piling rigs (Bauer BG series), heavy crawler cranes (75T-150T), and concrete pumping logistics in congested urban metro corridors with strict lifting safety protocols.
                    </p>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Rigorous third-party load test certifications &amp; zero heavy-lift incidents</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Continuous pile bore tremie pouring synchronization with RMC plants</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono font-bold">Major Bridge &amp; Flyover</span>
                      <span className="text-slate-400 font-medium">Marine &amp; River Pier Construction</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">Senior P&amp;M Specialist</h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Managed riverbed concrete batching plants, gantry cranes for precast segment launching, vibratory piling hammers, and marine workboat machinery under high humidity and corrosion challenges.
                    </p>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Uninterrupted high-grade concrete casting for river pier well caps</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Segment lifter and launching gantry fail-safe hydraulic maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold">Advisory &amp; Corporate</span>
                      <span className="text-slate-400 font-medium">Head Office &amp; Multi-Site Projects</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">P&amp;M Strategic Advisory &amp; Digitalization Lead</h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Executive advisory for Project Directors, EPC Boards, and P&amp;M HODs on capital fleet sizing, CapEx vs OpEx evaluation, equipment lifecycle cost (LCC), and SAP PM / Power BI digital rollouts.
                    </p>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Centralized visibility across 150+ heavy equipment units</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Spare parts dead-stock reduced by 94.6% using structured ABC/VED norms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 2: MACHINE FLEET HANDLING EXPERIENCE */}
              {activeDossierTab === 'fleet' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Production Plants</span>
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li><strong>Asphalt Hot Mix Plants:</strong> 120–200 TPH Batch Mix (Lintec, Apollo, Ammann, Parker)</li>
                      <li><strong>WMM Plants:</strong> 200–250 TPH Continuous pugmill plants</li>
                      <li><strong>Stone Crushers:</strong> 150–200 TPH 2-Stage &amp; 3-Stage (Jaw + Cone - Metso, Sandvik, Terex)</li>
                      <li><strong>Concrete Batching:</strong> 30, 60, 90 &amp; 120 m³/hr Pan &amp; Twin-Shaft (Schwing Stetter, Macons)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Paving &amp; Compaction</span>
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li><strong>Sensor Pavers:</strong> Hydrostatic Electronic Sensor Pavers (Vögele Super 1800-3, Dynapac SD2500, Apollo)</li>
                      <li><strong>Tandem Vibratory Rollers:</strong> 9T–11T (Hamm HD90, Dynapac CC384, Volvo)</li>
                      <li><strong>Pneumatic Tired Rollers (PTR):</strong> 15T–25T rubber-tired compactors</li>
                      <li><strong>Soil Compactors:</strong> 11T–13T (Case 1107EX, JCB, Hamm 311)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <h5 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Foundation &amp; Lifting</span>
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li><strong>Hydraulic Piling Rigs:</strong> Bauer BG28 / BG30, Casagrande, Sany SR285 rotary rigs</li>
                      <li><strong>Heavy Crawler Cranes:</strong> 75T, 100T, 150T lattice-boom cranes (Tata, Kobelco, Sany)</li>
                      <li><strong>Gantry Cranes &amp; Winches:</strong> Girder launching trusses &amp; bridge erectors</li>
                      <li><strong>Vibratory Hammers:</strong> Hydraulic sheet pile &amp; casing drivers (PTC, ICE)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Earthmoving &amp; Grading</span>
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li><strong>Hydraulic Excavators:</strong> 20T to 35T class (Tata Hitachi EX200/ZX220, Komatsu PC210, CAT 320D, Volvo EC210)</li>
                      <li><strong>Motor Graders:</strong> 140 HP articulated graders (CAT 140K, Liugong, Komatsu)</li>
                      <li><strong>Wheel Loaders:</strong> 3T–5T bucket loaders (CAT 950, SDLG, Liugong)</li>
                      <li><strong>Dozer &amp; Rock Breakers:</strong> D6/D8 class dozers &amp; hydraulic rock breakers</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 sm:col-span-2">
                    <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Fleet Management Norms Enforced</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All machine operations are governed by structured Preventive Maintenance Schedules (PMS at 250h / 500h / 1000h / 2000h), daily 10-point operator walk-around checks, hydraulic oil particle contamination analysis, and strict calibrated burner air-fuel ratio checks.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: SOFTWARE CREDENTIALS & DIGITAL STACK */}
              {activeDossierTab === 'software' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold block w-max mb-2">ERP Asset Module</span>
                    <h5 className="text-sm font-bold text-white mb-1">SAP PM &amp; S/4HANA</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Equipment Master creation, functional location hierarchy, maintenance task lists, notification generation, work order release, spare parts reservations, and settlement tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold block w-max mb-2">Executive Analytics</span>
                    <h5 className="text-sm font-bold text-white mb-1">Power BI Interactive Dashboards</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Automated DAX measures for Plant Availability (PA %), Fleet Utilization (EU %), MTBF &amp; MTTR trend curves, specific fuel burn rates, and site-wise OpEx variance dashboards.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold block w-max mb-2">Construction ERP</span>
                    <h5 className="text-sm font-bold text-white mb-1">ERP Nway &amp; Web ERPs</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Daily machinery hour-meter log capture, site fuel issue vouchers, inter-site machinery transfer gate passes, and workshop spare part inventory control.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold block w-max mb-2">Automated ETL</span>
                    <h5 className="text-sm font-bold text-white mb-1">Advanced Excel &amp; Power Query</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Multi-workbook consolidation pipelines, unpivoting raw site logs, formula auditing, automated daily executive P&amp;M status summaries without manual re-keying.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold block w-max mb-2">Automation &amp; AI</span>
                    <h5 className="text-sm font-bold text-white mb-1">n8n / Zapier &amp; AI Diagnostics</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Automated WhatsApp/Email alerts for upcoming PMS services and critical spares stock levels; structured AI prompts for machine error code diagnostics.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold block w-max mb-2">Technical Design</span>
                    <h5 className="text-sm font-bold text-white mb-1">AutoCAD &amp; Plant Layouts</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Plant general arrangement (GA) drawings, aggregate cold bin ramps, transformer and DG foundation layouts, and cable trench routing schematics.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
