import { useRef, ChangeEvent } from 'react';
import { Check, ArrowRight, Award, ShieldCheck, Briefcase, Camera, HardHat, Cog, Cpu } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, CONTACT_INFO } from '../data/portfolioData';
import sanjibPortraitDefault from '../assets/images/sanjib_profile_photo_1787592360152.jpg';
import EngineeringLogo from './EngineeringLogo';

interface AboutProps {
  onOpenCvModal?: () => void;
  userPhoto?: string;
  onPhotoUpload?: (newPhotoUrl: string) => void;
}

export default function About({ onOpenCvModal, userPhoto, onPhotoUpload }: AboutProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentPhoto = userPhoto || sanjibPortraitDefault;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && onPhotoUpload) {
          onPhotoUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Executive Profile &amp; Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-english">
            About Me — <span className="text-[#1267D3]">Senior Construction Plant &amp; Machinery Professional</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Profile, Photo & Badges */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-[#1267D3] rounded-3xl p-6 sm:p-7 text-white shadow-xl overflow-hidden border border-slate-700/60">
              
              {/* Background Ambient Glow */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#4B2E9B]/40 rounded-full blur-2xl pointer-events-none" />

              {/* Sanjib Photo in About Card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative group/photo shrink-0">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-[#E8B735] shadow-md bg-slate-950">
                    <img
                      src={currentPhoto}
                      alt="SANJIB - Construction P&M Specialist Photo"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Change or upload personal photo"
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1267D3] hover:bg-[#0e52aa] border-2 border-slate-900 text-white flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer"
                    aria-label="Upload custom photo"
                  >
                    <Camera className="w-3 h-3" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-white leading-tight font-english">
                      SANJIB SARKAR
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <EngineeringLogo size="sm" />
                    <p className="text-xs text-blue-200 font-bold">
                      Engineering Digital Technique
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-300 font-mono mt-1">
                    26+ Yrs Professional Execution &bull; {CONTACT_INFO.city}
                  </p>
                </div>
              </div>

              {/* Journey Milestones Timeline Box */}
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/15 mb-5 text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>26+ Years Industry Progression</span>
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Field Mechanical Operations &rarr; Turnkey Plant Erection &amp; Commissioning &rarr; Multi-Site Fleet Leadership &rarr; SAP PM &amp; ERP Digitalization &rarr; Power BI &amp; AI-Driven Predictive Maintenance.
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-black/25 rounded-xl p-3 border border-white/10">
                  <span className="block text-2xl font-extrabold text-[#E8B735]">26+</span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wide">Years Field Exp</span>
                </div>
                <div className="bg-black/25 rounded-xl p-3 border border-white/10">
                  <span className="block text-2xl font-extrabold text-white">4+</span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wide">Key Sectors</span>
                </div>
              </div>

            </div>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500 block">Direct Email Inquiry:</span>
                <span className="font-bold text-slate-800">{CONTACT_INFO.primaryEmail}</span>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#1267D3] text-white font-bold hover:bg-[#0e52aa] transition-colors"
              >
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Right Column: 80-120 Word Concise Description + Key Strengths */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Executive Introduction Text in 100% English */}
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 mb-6 text-base sm:text-lg">
              <p className="leading-relaxed text-slate-800 font-medium">
                I am Sanjib — a Construction Plant &amp; Machinery (P&amp;M) specialist with <strong className="text-slate-900 font-bold">26+ years of ground-level and executive field experience</strong> across National Highway Expressways, Metro Rail Viaducts, Major River Bridges, and Heavy Industrial Infrastructure packages.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                My mission is to eliminate chronic equipment downtime and minimize machine lifecycle costs by uniting hands-on mechanical troubleshooting mastery with modern digital tools including <strong className="text-slate-900 font-semibold">SAP PM, ERP Nway, Advanced Excel, Power BI visual dashboards, and AI automation</strong> for high-uptime infrastructure execution.
              </p>
            </div>

            {/* Key Strength List (Checklist items) */}
            <div className="w-full mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <HardHat className="w-4 h-4 text-[#1267D3]" />
                <span>Core Competencies &amp; Strengths</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-blue-50/60 border border-slate-200 shadow-xs transition-colors"
                  >
                    <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1267D3] hover:bg-[#0e52aa] shadow-md transition-all"
              >
                <span>View Professional Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenCvModal && (
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#4B2E9B]" />
                  <span>Download Executive Profile</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

