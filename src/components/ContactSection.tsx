import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Road / Highway Construction',
    requirement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Road / Highway Construction',
    'Metro Rail Infrastructure',
    'Bridge & Marine Works',
    'Hot Mix / WMM Plant Setup',
    'Stone Crusher / Batching Plant',
    'P&M Digitalization & Power BI',
    'Equipment Maintenance & RCA Audit',
    'Senior P&M Leadership Opportunity',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New P&M Website Enquiry:*%0A*Name:* ${encodeURIComponent(formData.name || 'Client')}%0A*Company:* ${encodeURIComponent(formData.company || 'N/A')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Type:* ${encodeURIComponent(formData.projectType)}%0A*Requirement:* ${encodeURIComponent(formData.requirement || 'Plant & Machinery Discussion')}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappDirect}?text=${text}`, '_blank');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`P&M Enquiry from ${formData.name || 'Client'} (${formData.projectType})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nRequirement Details:\n${formData.requirement}`);
    window.location.href = `mailto:${CONTACT_INFO.primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Inquire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-english">
            Let's Discuss Your P&amp;M Requirement
          </h2>
          <p className="text-base text-slate-600">
            Reach out directly for Plant &amp; Machinery leadership roles, fleet uptime audits, chronic breakdown troubleshooting, or digital dashboard implementation.
          </p>
        </div>

        {/* Desktop: 2-column, Mobile: Contact details first, then form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Authority */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-200">
                Direct Contact Information
              </h3>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#1267D3] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Location &amp; Base
                  </span>
                  <p className="text-sm font-bold text-slate-800">
                    KOLKATA - 700102
                  </p>
                  <p className="text-xs text-slate-600">
                    West Bengal, India
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Mobile &amp; WhatsApp Direct
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.rawPhone}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#1267D3] block"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Click to open WhatsApp chat</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#4B2E9B] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Official Email Addresses
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.emails[0]}`}
                    className="text-xs font-bold text-slate-800 hover:text-[#1267D3] block"
                  >
                    {CONTACT_INFO.emails[0]}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emails[1]}`}
                    className="text-xs font-bold text-slate-800 hover:text-[#1267D3] block mt-0.5"
                  >
                    {CONTACT_INFO.emails[1]}
                  </a>
                </div>
              </div>

              {/* Quick Response Notice */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Prompt Response Guaranteed within 24 Hours</span>
              </div>
            </div>

            {/* Direct Quick WhatsApp Banner */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-6 text-white shadow-lg flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">Instant WhatsApp Inquiry</h4>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Connect for quick technical advice or interview scheduling.
                </p>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs shrink-0 hover:bg-emerald-50 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.name || 'Valued Client'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry for <strong className="text-slate-900 font-semibold">{formData.projectType}</strong> has been structured. Choose your preferred channel to send instantly:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaEmail}
                      className="w-full sm:w-1/2 py-3 rounded-xl bg-[#1267D3] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#0e52aa] transition-colors shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline mt-4 block mx-auto cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Send Technical Inquiry / Executive Opportunity
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. R. K. Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / Contractor Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Infrastructure EPC Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp No *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Type / Discussion Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Requirement Details / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your equipment type, project location, plant issues, or role details..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1267D3] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#1267D3] hover:bg-[#0e52aa] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Privacy Guarantee: Your project details and contact data are strictly confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
