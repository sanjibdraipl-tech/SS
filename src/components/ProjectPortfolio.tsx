import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA, CONTACT_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { CheckCircle2, X, Wrench, ShieldCheck, Tag, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

import asphaltPlantImg from '../assets/images/asphalt_plant_crusher_1787591776500.jpg';
import sensorPaverImg from '../assets/images/sensor_paver_highway_1787591801791.jpg';
import heavyMachinerySiteImg from '../assets/images/heavy_machinery_site_1787591750083.jpg';
import metroPilingRigImg from '../assets/images/metro_piling_rig_1787591815147.jpg';
import pmDashboardImg from '../assets/images/pm_digitalization_dash_1787591762917.jpg';
import webDesignImg from '../assets/images/web_design_showcase_1787592981215.jpg';
import videoStudioImg from '../assets/images/video_graphics_studio_1787592993231.jpg';

export default function ProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Road', 'Metro', 'Bridge', 'Plant', 'Digitalization', 'Design & Video'];

  const getProjectImage = (category: string, id?: string) => {
    if (category === 'Design & Video') {
      return id === 'proj-7' ? videoStudioImg : webDesignImg;
    }
    switch (category) {
      case 'Road':
        return sensorPaverImg;
      case 'Metro':
        return metroPilingRigImg;
      case 'Bridge':
        return heavyMachinerySiteImg;
      case 'Plant':
        return asphaltPlantImg;
      case 'Digitalization':
        return pmDashboardImg;
      default:
        return heavyMachinerySiteImg;
    }
  };

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Proven Execution &amp; Creative Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-english">
              Selected Project Experience &amp; Media
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Field-proven track record across Highways, Metro Viaducts, Plants, and Digital Web / Video Engineering.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2 shrink-0 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">All Records Verified &amp; Grounded</span>
          </div>
        </div>

        {/* Category Filters with Smooth Motion indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1267D3] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <span>{cat === 'All' ? `All Works (${PROJECTS_DATA.length})` : cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-200 hover:border-[#1267D3]/60 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Project Image Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={getProjectImage(project.category, project.id)}
                    alt={`${project.name} - ${project.equipmentPlant}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </div>
                  {project.location && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-medium bg-black/60 backdrop-blur-xs text-slate-200">
                      {project.location}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1267D3] transition-colors leading-tight font-english">
                      {project.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1267D3] mb-4">
                      {project.clientIndustry} &bull; {project.role}
                    </p>

                    {/* Scope */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.scope}
                    </p>

                    {/* Tools / Technologies Used */}
                    <div className="flex flex-wrap gap-1 mb-5">
                      {project.toolsTech.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable & Verification */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-[#1267D3] hover:text-[#0e52aa] flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Full Case</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-50 text-[#1267D3] border border-blue-100 uppercase">
                  {selectedProject.category} Project
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedProject.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-2">
                {selectedProject.name}
              </h3>

              <p className="text-xs text-slate-500 font-medium mb-6">
                Client / Sector: {selectedProject.clientIndustry} &bull; {selectedProject.location}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Assigned Role:</span>
                  <span>{selectedProject.role}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Plant &amp; Machinery Fleet:</span>
                  <span>{selectedProject.equipmentPlant}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Operational Scope:</span>
                  <p className="leading-relaxed text-slate-600">{selectedProject.scope}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Core Deliverable:</span>
                  <p className="leading-relaxed text-slate-600">{selectedProject.deliverable}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-bold block mb-1">Verified Result:</span>
                  <p>{selectedProject.verifiedResult}</p>
                </div>

                {selectedProject.highlights && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-2">Key Highlights:</span>
                    <ul className="space-y-1 text-slate-600">
                      {selectedProject.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1267D3]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`tel:${CONTACT_INFO.rawPhone}`}
                  className="flex-1 py-3 rounded-xl bg-[#1267D3] text-white font-bold text-xs sm:text-sm text-center hover:bg-[#0e52aa] transition-colors"
                >
                  Discuss Similar Project
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

