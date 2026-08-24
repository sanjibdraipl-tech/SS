import { useState } from 'react';
import { HardHat, Layers, Maximize2, X, ChevronRight, Wrench, Fuel, ShieldAlert, Cpu } from 'lucide-react';

import asphaltPlantImg from '../assets/images/asphalt_plant_crusher_1787591776500.jpg';
import sensorPaverImg from '../assets/images/sensor_paver_highway_1787591801791.jpg';
import heavyMachinerySiteImg from '../assets/images/heavy_machinery_site_1787591750083.jpg';
import metroPilingRigImg from '../assets/images/metro_piling_rig_1787591815147.jpg';

interface MachineryItem {
  id: string;
  title: string;
  category: 'Asphalt & Plant' | 'Paving & Road' | 'Earthmoving & Fleet' | 'Piling & Metro';
  image: string;
  alt: string;
  capacity: string;
  location: string;
  description: string;
  specs: string[];
}

export default function MachineryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageModal, setActiveImageModal] = useState<MachineryItem | null>(null);

  const machineryItems: MachineryItem[] = [
    {
      id: 'asphalt-batch-plant',
      title: '160 TPH Asphalt Batch Mix Plant & Secondary Stone Crusher',
      category: 'Asphalt & Plant',
      image: asphaltPlantImg,
      alt: 'Asphalt Batch Mix Plant 160 TPH and Aggregate Stone Crusher Plant for Expressway Construction',
      capacity: '160 TPH Output',
      location: 'Highway & Expressway Packages',
      description: 'Turnkey erection, PLC calibration, burner tuning, bitumen storage heating, and continuous preventative maintenance for heavy production plants.',
      specs: ['4-bin cold aggregate feeder', 'Twin-shaft pugmill mixer', 'LDO/FO burner tuning', 'Baghouse filter compliance'],
    },
    {
      id: 'sensor-paver-highway',
      title: 'Electronic Sensor Asphalt Paver & Vibratory Compactor Fleet',
      category: 'Paving & Road',
      image: sensorPaverImg,
      alt: 'High Capacity Electronic Sensor Asphalt Paver laying DBM and BC layers with Tandem Rollers',
      capacity: '9.0m Paving Width',
      location: 'National Expressway Corridor',
      description: 'Precision grade control, thickness monitoring, screed heating optimization, and tandem compaction pacing to meet strict MoRTH smoothness indexes.',
      specs: ['Dual slope & grade sensors', 'Heavy tamper screed', '800 TPH throughput', 'Automatic mat levelers'],
    },
    {
      id: 'heavy-earthmoving-fleet',
      title: 'Heavy Hydraulic Excavators & Soil Compactor Fleet',
      category: 'Earthmoving & Fleet',
      image: heavyMachinerySiteImg,
      alt: 'Heavy Hydraulic Crawler Excavators and Vibratory Soil Compactors working on highway embankment',
      capacity: '20T - 35T Class Fleet',
      location: 'Major Infrastructure Project Sites',
      description: 'Multi-site fleet governance, hourly diesel tracking, scheduled 250/500/1000 hr PM kits, hydraulic oil health analysis, and MTBF monitoring.',
      specs: ['Hydraulic pressure monitoring', 'High-capacity bucket cycles', 'Fleet telematics GPS', '100% genuine spares SOP'],
    },
    {
      id: 'hydraulic-piling-rig-metro',
      title: 'Heavy Rotary Hydraulic Piling Rig & Crawler Cranes',
      category: 'Piling & Metro',
      image: metroPilingRigImg,
      alt: 'Hydraulic Rotary Piling Rig drilling deep foundation piles for elevated metro rail viaduct',
      capacity: '250 kNm Torque Rating',
      location: 'Elevated Metro Rail Corridors',
      description: 'Deep foundation piling machinery operations, Kelly bar maintenance, bentonite slurry pumping, and crane safety compliance for urban viaduct construction.',
      specs: ['Telescopic friction Kelly bar', 'Rotary head torque telemetry', 'Rig safety interlocking', 'Transit mixer coordination'],
    },
  ];

  const categories = ['All', 'Asphalt & Plant', 'Paving & Road', 'Earthmoving & Fleet', 'Piling & Metro'];

  const filteredItems = selectedCategory === 'All'
    ? machineryItems
    : machineryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="machinery" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <HardHat className="w-3.5 h-3.5 text-amber-700" />
              <span>Heavy Infrastructure Plant &amp; Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-english">
              Heavy Machinery &amp; Plant Operations Gallery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
              Real-world execution photos of Asphalt Batch Mix Plants, Electronic Sensor Pavers, Heavy Excavators, and Piling Rigs governed under 26+ years of P&amp;M leadership.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1267D3] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Machinery Grid with Rich SEO Figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col group"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setActiveImageModal(item)}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                  {item.category}
                </div>

                {/* Capacity Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm">
                  {item.capacity}
                </div>

                {/* Zoom Hover Icon */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5 text-[#1267D3]" />
                  </div>
                </div>
              </div>

              {/* Machinery Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#1267D3] font-bold uppercase tracking-wider mb-1">
                    {item.location}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#1267D3] transition-colors leading-snug mb-2 font-english">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Spec Badges */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <Wrench className="w-3.5 h-3.5 text-[#1267D3]" />
                    <span>Technical Highlights:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((sp, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              P&amp;M
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Require Equipment Inspection, PMS Setup or Plant Commissioning?
              </h4>
              <p className="text-xs text-slate-300">
                Consult with 26+ years experienced Senior P&amp;M Specialist Sanjib.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#1267D3] hover:bg-[#0e52aa] text-white font-bold text-xs sm:text-sm transition-all shrink-0"
          >
            Inquire for Project Fleet
          </a>
        </div>

      </div>

      {/* Machinery Lightbox Modal */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeImageModal.image}
              alt={activeImageModal.alt}
              className="w-full h-auto max-h-[65vh] object-contain bg-black"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-slate-900 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                  {activeImageModal.capacity}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeImageModal.location}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{activeImageModal.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{activeImageModal.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
