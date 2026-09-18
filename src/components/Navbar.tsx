import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Wrench, Sparkles } from 'lucide-react';
import EngineeringLogo from './EngineeringLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Digitalization', href: '#digitalization' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tools & AI', href: '#tools' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left Side */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="SANJIB - Engineering Digital Technique Construction P&M"
          >
            {/* Official Engineering Digital Technique Emblem Logo */}
            <div className="relative group-hover:scale-105 transition-transform">
              <EngineeringLogo size="md" />
            </div>

            {/* Brand Typography */}
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-english whitespace-nowrap">
                  SANJIB SARKAR
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#1267D3] font-bold block mt-0.5 tracking-tight whitespace-nowrap">
                Engineering Digital Technique
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Menu (Selected Target Element) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6.5" aria-label="Main Navigation">
            <a
              href="#home"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              About
            </a>

            {/* Services with Integrated Design & Video Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
              >
                <span>Services &amp; Design</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1267D3] transition-transform duration-200 group-hover:rotate-180" />
              </a>

              {/* Dropdown Container */}
              <div
                className={`absolute top-full left-0 pt-2 w-72 z-50 transition-all duration-200 ${
                  servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-1'
                }`}
              >
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 space-y-1">
                  <a
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1267D3] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#1267D3] transition-colors">
                        P&amp;M Fleet Services
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        Plant Erection, PMS, Spares &amp; SAP PM Governance
                      </div>
                    </div>
                  </a>

                  <a
                    href="#design-studio"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#1267D3] transition-colors">
                        Design &amp; Video Studio
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        Technical Web, AI Graphics &amp; Video Production
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#machinery"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Machinery
            </a>
            <a
              href="#analytics"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Analytics
            </a>
            <a
              href="#digitalization"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Digitalization
            </a>
            <a
              href="#projects"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Projects
            </a>
            <a
              href="#tools"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Tools &amp; AI
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
            >
              Contact
            </a>
          </nav>

          {/* Simple Right CTA Button (No Contact Details in Header) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1267D3] hover:bg-[#0e52aa] active:scale-95 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-[#1267D3]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#1267D3] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Simple Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 shadow-xl animate-in slide-in-from-top duration-150">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#about')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>About</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Services with Sub-Items on Mobile */}
            <div className="py-1 px-3 bg-slate-50 rounded-xl my-1 border border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Services &amp; Design
              </span>
              <button
                type="button"
                onClick={() => handleNavClick('#services')}
                className="w-full text-left py-1.5 text-sm font-semibold text-[#1267D3] flex items-center justify-between"
              >
                <span>&bull; P&amp;M Fleet Services</span>
                <ArrowRight className="w-3 h-3 text-[#1267D3]" />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#design-studio')}
                className="w-full text-left py-1.5 text-sm font-semibold text-amber-700 flex items-center justify-between"
              >
                <span>&bull; Design &amp; Video Studio</span>
                <ArrowRight className="w-3 h-3 text-amber-600" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('#machinery')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Machinery</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#analytics')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Analytics</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#digitalization')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Digitalization</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#projects')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#tools')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Tools &amp; AI</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <div className="pt-2 mt-1 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-white font-bold bg-[#1267D3] hover:bg-[#0e52aa] text-xs sm:text-sm"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
