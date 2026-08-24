import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import EngineeringLogo from './EngineeringLogo';
import channelLogoImg from '../assets/images/channel_logo_1787592377456.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Design & Video', href: '#design-studio' },
    { name: 'Services', href: '#services' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Digitalization', href: '#digitalization' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tools & AI', href: '#tools' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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

          {/* Clean Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1267D3] transition-colors py-1 focus:outline-none"
              >
                {link.name}
              </a>
            ))}
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
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#1267D3] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}

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
