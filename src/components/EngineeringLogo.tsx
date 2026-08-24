import React from 'react';
import channelLogoImg from '../assets/images/channel_logo_1787592377456.jpg';

interface EngineeringLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
}

export default function EngineeringLogo({
  className = '',
  size = 'md',
  useImage = false,
}: EngineeringLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  if (useImage) {
    return (
      <img
        src={channelLogoImg}
        alt="Engineering Digital Technique Official Logo"
        className={`rounded-full object-cover shadow-sm ${sizeClasses[size]} ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // High-fidelity SVG vector logo matching "ENGINEERING DIGITAL TECHNIQUE" badge
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-md shadow-blue-900/30 ${sizeClasses[size]} ${className}`}
      title="Engineering Digital Technique"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Orange Ring */}
        <circle cx="100" cy="100" r="98" fill="#F38A18" />
        
        {/* Navy Blue Inner Circle */}
        <circle cx="100" cy="100" r="90" fill="#0C1B33" />
        <circle cx="100" cy="100" r="88" stroke="#F38A18" strokeWidth="2.5" />

        {/* Circular Path for Text */}
        <defs>
          <path
            id="textPathTop"
            d="M 28 100 A 72 72 0 1 1 172 100"
          />
          <path
            id="textPathBottom"
            d="M 172 100 A 72 72 0 1 1 28 100"
          />
        </defs>

        {/* Top Text: ENGINEERING */}
        <text fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="3" fontFamily="sans-serif">
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            ENGINEERING
          </textPath>
        </text>

        {/* Bottom Text: DIGITAL TECHNIQUE */}
        <text fill="#FFFFFF" fontSize="13.5" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            DIGITAL TECHNIQUE
          </textPath>
        </text>

        {/* Side Gear Accents */}
        <g transform="translate(18, 93) scale(0.65)" fill="#F38A18">
          <path d="M12 1a2 2 0 0 1 2 2v1.1a8 8 0 0 1 3.5 1.5l.8-.8a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8l-.8.8a8 8 0 0 1 1.5 3.5H24a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.1a8 8 0 0 1-1.5 3.5l.8.8a2 2 0 0 1 0 2.8l-1.4 1.4a2 2 0 0 1-2.8 0l-.8-.8a8 8 0 0 1-3.5 1.5V27a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.1a8 8 0 0 1-3.5-1.5l-.8.8a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8l.8-.8A8 8 0 0 1 3 17.5H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.1a8 8 0 0 1 1.5-3.5l-.8-.8a2 2 0 0 1 0-2.8l1.4-1.4a2 2 0 0 1 2.8 0l.8.8A8 8 0 0 1 10 4.1V3a2 2 0 0 1 2-2h2z M13 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        </g>

        <g transform="translate(165, 93) scale(0.65)" fill="#F38A18">
          <path d="M12 1a2 2 0 0 1 2 2v1.1a8 8 0 0 1 3.5 1.5l.8-.8a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8l-.8.8a8 8 0 0 1 1.5 3.5H24a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.1a8 8 0 0 1-1.5 3.5l.8.8a2 2 0 0 1 0 2.8l-1.4 1.4a2 2 0 0 1-2.8 0l-.8-.8a8 8 0 0 1-3.5 1.5V27a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.1a8 8 0 0 1-3.5-1.5l-.8.8a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8l.8-.8A8 8 0 0 1 3 17.5H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.1a8 8 0 0 1 1.5-3.5l-.8-.8a2 2 0 0 1 0-2.8l1.4-1.4a2 2 0 0 1 2.8 0l.8.8A8 8 0 0 1 10 4.1V3a2 2 0 0 1 2-2h2z M13 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        </g>

        {/* Center Circular Badge Background */}
        <circle cx="100" cy="100" r="54" fill="#FFFFFF" stroke="#F38A18" strokeWidth="4" />

        {/* Cyan Mechanical Gear Under Helmet */}
        <g transform="translate(62, 102)" fill="#1CB5E0" stroke="#0C1B33" strokeWidth="2.5">
          <path d="M38 4 C 44 4, 48 10, 48 18 C 58 18, 66 22, 70 30 L 64 36 C 58 46, 48 52, 38 52 C 28 52, 18 46, 12 36 L 6 30 C 10 22, 18 18, 28 18 C 28 10, 32 4, 38 4 Z" />
          <circle cx="38" cy="22" r="6" fill="#0C1B33" />
        </g>

        {/* Orange Construction Safety Hard Hat Helmet */}
        <g transform="translate(56, 56)">
          {/* Main Helmet Dome */}
          <path
            d="M 12 42 C 12 18, 28 6, 44 6 C 60 6, 76 18, 76 42 Z"
            fill="#F38A18"
            stroke="#0C1B33"
            strokeWidth="3.5"
          />

          {/* Helmet Ribs / Grooves */}
          <rect x="28" y="12" width="8" height="24" rx="4" fill="#FBD338" stroke="#0C1B33" strokeWidth="2" />
          <rect x="40" y="9" width="8" height="27" rx="4" fill="#FBD338" stroke="#0C1B33" strokeWidth="2" />
          <rect x="52" y="12" width="8" height="24" rx="4" fill="#FBD338" stroke="#0C1B33" strokeWidth="2" />

          {/* Helmet Rim / Brim */}
          <rect
            x="4"
            y="40"
            width="80"
            height="9"
            rx="4.5"
            fill="#FBD338"
            stroke="#0C1B33"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}
