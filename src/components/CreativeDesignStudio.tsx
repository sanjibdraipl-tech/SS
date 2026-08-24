import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Palette,
  Video,
  Play,
  Pause,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Monitor,
  Smartphone,
  Cpu,
  ArrowRight,
  Maximize2,
  Film,
  Volume2,
  VolumeX,
  Eye,
  Sliders,
  ChevronRight,
  Code2
} from 'lucide-react';

import webDesignImg from '../assets/images/web_design_showcase_1787592981215.jpg';
import videoStudioImg from '../assets/images/video_graphics_studio_1787592993231.jpg';
import graphicDesignImg from '../assets/images/graphic_design_showcase_1787593004891.jpg';
import EngineeringLogo from './EngineeringLogo';

type StudioTab = 'web' | 'graphics' | 'video';

export default function CreativeDesignStudio() {
  const [activeTab, setActiveTab] = useState<StudioTab>('web');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35);
  const [activeVideoScene, setActiveVideoScene] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<string | null>(null);

  const videoScenes = [
    { title: '3D Asphalt Batch Plant Breakdown', time: '0:45', tag: '3D Explainer' },
    { title: 'Electronic Sensor Paver Grade Calibration', time: '1:30', tag: 'Technical Tutorial' },
    { title: 'Hydraulic Piling Rig Urban Viaduct Walkthrough', time: '2:15', tag: 'Site Footage' },
    { title: 'Power BI Fleet Availability Dashboard Demo', time: '3:00', tag: 'Digitalization UI' },
  ];

  // Video progress animation timer when playing
  useEffect(() => {
    let interval: any;
    if (isPlayingVideo) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingVideo(false);
            return 0;
          }
          return prev + 1;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlayingVideo]);

  return (
    <section id="design-studio" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1267D3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Digital Creative, Media &amp; Engineering Studio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-english">
            Website Design, AI Image Graphics &amp; Video Production
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Specialized digital design and video engineering powered by <strong className="text-amber-400">Engineering Digital Technique</strong>. From bespoke web apps and industrial 3D schematics to high-impact technical video tutorials.
          </p>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#1267D3] text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Website Design</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('graphics')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'graphics'
                  ? 'bg-[#1267D3] text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Image &amp; AI Graphics</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-[#1267D3] text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Graphics &amp; Video Making</span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Website Design & Engineering Portals */}
        <AnimatePresence mode="wait">
          {activeTab === 'web' && (
            <motion.div
              key="web-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl group">
                  
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>https://sanjibdigitaltechnology.in</span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">100% Responsive</div>
                  </div>

                  {/* Showcase Image */}
                  <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => setSelectedPreviewImage(webDesignImg)}>
                    <img
                      src={webDesignImg}
                      alt="Modern Website Design & Engineering Dashboard UI"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-slate-900/90 text-xs font-bold text-blue-300 border border-blue-500/30">
                        Interactive Engineering &amp; Business Portals
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Web Design Capabilities & Tech */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Modern Web Design &amp; Architecture</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-english">
                    Tailored Web Applications &amp; High-Impact Showcase Sites
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    We craft modern, visually polished web platforms with smooth layout transitions, responsive layouts, interactive calculators, and high-speed execution tailored for infrastructure EPCs, contractors, and businesses.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5">
                  {[
                    'Clean Typography, Sophisticated Neutrals & Responsive Layouts',
                    'Interactive Fleet KPI Simulators & Availability Calculators',
                    'High SEO Rank, Fast Lighthouse Scores & Instant Loading',
                    'Fluid Framer Motion Transitions & Subtle Micro-Interactions',
                    'Cross-Device Compatibility (Desktop, Tablet & Mobile 100%)'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Engineering Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 19', 'Tailwind CSS', 'TypeScript', 'Motion Animations', 'Vite', 'Express APIs'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-blue-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1267D3] hover:bg-[#0e52aa] text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  <span>Request Custom Website Design</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Image Design, AI Graphics & Technical Illustration */}
          {activeTab === 'graphics' && (
            <motion.div
              key="graphics-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Visual Artwork Canvas */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl group cursor-pointer" onClick={() => setSelectedPreviewImage(graphicDesignImg)}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={graphicDesignImg}
                      alt="Digital Graphic Design, AI Technical Art & Blueprints"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm">
                        AI Graphics &amp; Schematics
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Engineering Digital Technique Visual Branding</h4>
                        <p className="text-xs text-slate-300">Infographics, 3D Machinery Models, &amp; YouTube Artwork</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Graphic Design Scope */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Creative Graphics &amp; AI Visuals</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-english">
                    Industrial Schematics, 3D Blueprints &amp; Brand Assets
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Bridging engineering precision and artistic design. We produce high-resolution AI-generated industrial imagery, technical vector blueprints, and branded identity packages.
                  </p>
                </div>

                {/* Scope Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <h5 className="font-bold text-amber-300 mb-1">AI Image Generation</h5>
                    <p className="text-slate-300">Photorealistic machinery, plant environments, and project visualizations.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <h5 className="font-bold text-amber-300 mb-1">Technical Schematics</h5>
                    <p className="text-slate-300">Hydraulic circuits, plant flow diagrams, and 3D exploded assemblies.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <h5 className="font-bold text-amber-300 mb-1">YouTube Graphics</h5>
                    <p className="text-slate-300">Click-worthy technical thumbnails, banners, and channel artwork.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <h5 className="font-bold text-amber-300 mb-1">Corporate Branding</h5>
                    <p className="text-slate-300">Vector logos, identity emblems, presentation decks, and brochures.</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all"
                >
                  <span>Order Graphic &amp; AI Image Design</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Graphics with Video Design Making & Video Editing */}
          {activeTab === 'video' && (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Interactive Video Editor Player */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                  
                  {/* Player Top Bar */}
                  <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Film className="w-4 h-4 text-red-400" />
                      <span className="text-xs font-bold text-white font-mono">
                        ENGINEERING DIGITAL TECHNIQUE [4K VIDEO SUITE]
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white animate-pulse">
                        LIVE STUDIO
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-slate-400 hover:text-white"
                        aria-label="Toggle Sound"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Video Stage Display */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={videoStudioImg}
                      alt="Engineering Video Editing Studio & 3D Motion Graphics"
                      className={`w-full h-full object-cover transition-opacity duration-300 ${isPlayingVideo ? 'opacity-90 scale-102' : 'opacity-70'}`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Central Play/Pause Button */}
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="absolute z-20 w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer ring-4 ring-white/20"
                      aria-label={isPlayingVideo ? 'Pause Video Preview' : 'Play Video Preview'}
                    >
                      {isPlayingVideo ? (
                        <Pause className="w-7 h-7 fill-white" />
                      ) : (
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      )}
                    </button>

                    {/* Floating Lower Third Overlay Simulation */}
                    <div className="absolute bottom-16 left-4 right-4 z-10 pointer-events-none">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 max-w-sm flex items-center gap-3">
                        <EngineeringLogo size="sm" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                            {videoScenes[activeVideoScene].tag}
                          </div>
                          <div className="text-xs font-bold text-white truncate">
                            {videoScenes[activeVideoScene].title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Soundwave Visualizer Bar when playing */}
                    {isPlayingVideo && (
                      <div className="absolute top-4 right-4 z-10 flex items-end gap-1 h-6 px-2 py-1 rounded bg-black/60 backdrop-blur-xs">
                        <div className="w-1 bg-emerald-400 animate-bounce h-4" />
                        <div className="w-1 bg-emerald-400 animate-bounce h-6 delay-75" />
                        <div className="w-1 bg-emerald-400 animate-bounce h-3 delay-150" />
                        <div className="w-1 bg-emerald-400 animate-bounce h-5 delay-100" />
                      </div>
                    )}
                  </div>

                  {/* Video Scrubber & Controls */}
                  <div className="p-4 bg-slate-900 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                      <span>00:{videoProgress < 10 ? `0${videoProgress}` : videoProgress}</span>
                      <span className="text-white font-bold">{videoScenes[activeVideoScene].title}</span>
                      <span>03:00</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div
                      className="h-2 w-full bg-slate-800 rounded-full overflow-hidden cursor-pointer relative"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newPct = Math.round((clickX / rect.width) * 100);
                        setVideoProgress(newPct);
                      }}
                    >
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-150 relative"
                        style={{ width: `${videoProgress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>

                    {/* Scene Jump Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-3">
                      {videoScenes.map((scene, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => {
                            setActiveVideoScene(sIdx);
                            setVideoProgress(sIdx * 25 + 10);
                          }}
                          className={`p-1.5 rounded-lg text-[10px] text-left transition-all truncate cursor-pointer ${
                            activeVideoScene === sIdx
                              ? 'bg-red-950/80 text-red-200 border border-red-500/50 font-bold'
                              : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                          }`}
                        >
                          <div className="font-mono text-[9px] text-slate-500">{scene.time}</div>
                          <div className="truncate">{scene.title}</div>
                        </button>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

              {/* Right Column: Video Production Services */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                    <Video className="w-3.5 h-3.5" />
                    <span>Technical Media &amp; Video Production</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-english">
                    Engineering Video Making, 3D Animations &amp; YouTube Editing
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Full post-production suite specialized in technical machinery tutorials, 3D equipment animations, construction site montages, and high-retention YouTube video production.
                  </p>
                </div>

                {/* Video Deliverables */}
                <div className="space-y-3">
                  {[
                    { title: '3D Machinery Motion Animations', desc: 'Exploded views, internal component rotations, and fluid dynamics.' },
                    { title: 'YouTube Channel Video Editing', desc: 'Kinetic typography, animated lower-thirds, sound mixing & pacing.' },
                    { title: 'Site Walkthroughs & Drone Montages', desc: 'Cinematic color grading for highway, bridge & plant project videos.' },
                    { title: 'Technical Explainer Video Tutorials', desc: 'Step-by-step operator guides & maintenance procedure videos.' },
                  ].map((vItem, vIdx) => (
                    <div key={vIdx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/70">
                      <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 font-bold text-xs">
                        {vIdx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white">{vItem.title}</h5>
                        <p className="text-[11px] text-slate-400 mt-0.5">{vItem.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md shadow-red-500/20"
                >
                  <span>Book Video &amp; Animation Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Modal Preview */}
        {selectedPreviewImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedPreviewImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700"
              >
                &times;
              </button>
              <img
                src={selectedPreviewImage}
                alt="Enlarged Preview"
                className="w-full h-auto max-h-[75vh] object-contain bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
