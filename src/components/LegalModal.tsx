import { X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1267D3] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal Policy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
              Privacy Policy
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Welcome to <strong>{CONTACT_INFO.brandName}</strong>. We value your privacy and are committed to protecting any personal and project information you provide.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">1. Information We Collect</h4>
              <p>
                When you submit an inquiry through our contact form, WhatsApp, or email, we collect your name, email address, phone number, company name, and machinery/project specifications solely to provide relevant consulting services.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">2. Confidentiality of Machinery & Site Data</h4>
              <p>
                All plant operational data, breakdown reports, and fleet figures shared during technical evaluations are kept strictly confidential and never sold, rented, or shared with third parties.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">3. Contact for Inquiries</h4>
              <p>
                If you have questions regarding this policy, contact us directly at <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-[#1267D3] font-semibold">{CONTACT_INFO.primaryEmail}</a> or call {CONTACT_INFO.phone}.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1267D3] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal Agreement</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
              Terms & Conditions
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                By accessing <strong>{CONTACT_INFO.brandName}</strong>, you agree to these terms of use.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">1. Professional Advisory Scope</h4>
              <p>
                Information and case studies on this website reflect 26+ years of professional Construction Plant & Machinery engineering and digital transformation practices.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">2. Project Specificity</h4>
              <p>
                Actual equipment availability and maintenance outcomes depend upon site-specific operating conditions, mechanical compliance, and technician execution.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">3. Intellectual Property</h4>
              <p>
                Content, frameworks, and visual representations on this website belong to SANJIB (sanjibdigitaltechnology.in).
              </p>
            </div>
          </div>
        )}

        {type === 'refund' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1267D3] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Commercial Terms</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
              Consulting & Engagement Policy
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Technical advisory, plant audits, PMS system implementation, and digital dashboard creation are governed by formal mutually agreed engagement contracts.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">1. Milestone-Based Consulting</h4>
              <p>
                Consulting deliverables (e.g., Plant Erection Audits, Power BI Dashboard deployment, RCA reports) are executed on agreed milestones.
              </p>
              <h4 className="font-bold text-slate-800 text-sm mt-3">2. Mutual Cancellation & Dispute Resolution</h4>
              <p>
                Any scope revisions or project timeline changes are accommodated cooperatively between the contractor/EPC company and the consultant.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
}
