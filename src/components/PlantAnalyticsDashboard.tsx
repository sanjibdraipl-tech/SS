import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import {
  BarChart3,
  Fuel,
  Factory,
  Zap,
  DollarSign,
  Wrench,
  Package,
  Clock,
  TrendingUp,
  Activity,
  CheckCircle2,
  AlertCircle,
  Filter,
  ShieldCheck,
  Download,
  Layers,
  ArrowUpRight,
  Info,
} from 'lucide-react';

// ==========================================
// 1. FUEL & FLEET DATA
// ==========================================
const FUEL_FLEET_DATA = [
  { month: 'Jan', excavator: 18.2, loader: 14.5, asphaltPlant: 165.0, paver: 12.0, standardNorm: 18.5, idleWastageLtr: 420 },
  { month: 'Feb', excavator: 17.8, loader: 14.2, asphaltPlant: 160.5, paver: 11.8, standardNorm: 18.5, idleWastageLtr: 380 },
  { month: 'Mar', excavator: 17.1, loader: 13.8, asphaltPlant: 156.0, paver: 11.5, standardNorm: 18.5, idleWastageLtr: 310 },
  { month: 'Apr', excavator: 16.5, loader: 13.4, asphaltPlant: 152.0, paver: 11.2, standardNorm: 18.5, idleWastageLtr: 260 },
  { month: 'May', excavator: 16.0, loader: 13.0, asphaltPlant: 148.5, paver: 10.9, standardNorm: 18.5, idleWastageLtr: 210 },
  { month: 'Jun', excavator: 15.6, loader: 12.7, asphaltPlant: 145.0, paver: 10.5, standardNorm: 18.5, idleWastageLtr: 180 },
];

const FUEL_CONSUMPTION_BY_EQUIPMENT = [
  { name: 'Asphalt Plant (Ltr/hr)', actual: 145.0, standard: 165.0, savingPercent: '12.1%' },
  { name: 'Hydraulic Excavator 20T-30T (Ltr/hr)', actual: 15.6, standard: 18.5, savingPercent: '15.6%' },
  { name: 'Wheel Loader 3T-5T (Ltr/hr)', actual: 12.7, standard: 15.0, savingPercent: '15.3%' },
  { name: 'Electronic Sensor Paver (Ltr/hr)', actual: 10.5, standard: 12.5, savingPercent: '16.0%' },
  { name: 'Motor Grader 140HP (Ltr/hr)', actual: 13.2, standard: 15.5, savingPercent: '14.8%' },
  { name: 'Soil Compactor 11T (Ltr/hr)', actual: 8.8, standard: 10.5, savingPercent: '16.2%' },
];

// ==========================================
// 2. PRODUCTION VS CAPACITY DATA
// ==========================================
const PRODUCTION_CAPACITY_DATA = [
  { month: 'Jan', asphaltActual: 38500, asphaltTarget: 40000, wmmActual: 52000, wmmTarget: 50000, concreteActual: 18500, concreteTarget: 20000 },
  { month: 'Feb', asphaltActual: 42100, asphaltTarget: 40000, wmmActual: 56200, wmmTarget: 50000, concreteActual: 21200, concreteTarget: 20000 },
  { month: 'Mar', asphaltActual: 46800, asphaltTarget: 42000, wmmActual: 61500, wmmTarget: 55000, concreteActual: 23800, concreteTarget: 22000 },
  { month: 'Apr', asphaltActual: 49200, asphaltTarget: 45000, wmmActual: 64800, wmmTarget: 60000, concreteActual: 25400, concreteTarget: 24000 },
  { month: 'May', asphaltActual: 52400, asphaltTarget: 48000, wmmActual: 68100, wmmTarget: 62000, concreteActual: 27100, concreteTarget: 25000 },
  { month: 'Jun', asphaltActual: 54900, asphaltTarget: 50000, wmmActual: 71300, wmmTarget: 65000, concreteActual: 28900, concreteTarget: 26000 },
];

const PLANT_OEE_METRICS = [
  { subject: 'Availability (PA %)', PlantActual: 95.8, StandardNorm: 85.0 },
  { subject: 'Performance Rate (PR %)', PlantActual: 92.4, StandardNorm: 80.0 },
  { subject: 'Quality Yield Rate (QR %)', PlantActual: 99.2, StandardNorm: 95.0 },
  { subject: 'Fuel Optimization', PlantActual: 88.5, StandardNorm: 75.0 },
  { subject: 'Mix Batch Cycle Speed', PlantActual: 93.0, StandardNorm: 82.0 },
  { subject: 'PM Compliance %', PlantActual: 97.5, StandardNorm: 80.0 },
];

// ==========================================
// 3. MACHINERY PRODUCTIVITY & AVAILABILITY
// ==========================================
const PRODUCTIVITY_FLEET_DATA = [
  { name: 'Asphalt Batch Mix Plant', availability: 96.5, utilization: 88.2, oee: 85.1, target: 85.0 },
  { name: 'WMM Continuous Plant', availability: 97.2, utilization: 91.0, oee: 88.4, target: 85.0 },
  { name: 'Crusher & Screening Plant', availability: 94.8, utilization: 86.5, oee: 82.0, target: 85.0 },
  { name: 'Hydraulic Excavator Fleet', availability: 93.4, utilization: 84.8, oee: 79.2, target: 80.0 },
  { name: 'Electronic Sensor Pavers', availability: 95.8, utilization: 87.6, oee: 83.9, target: 80.0 },
  { name: 'Piling Rigs & Cranes', availability: 92.0, utilization: 81.5, oee: 75.0, target: 75.0 },
];

const MTBF_MTTR_DATA = [
  { month: 'Month 1', mtbfHours: 240, mttrHours: 6.8, targetMtbf: 250 },
  { month: 'Month 2', mtbfHours: 290, mttrHours: 5.4, targetMtbf: 250 },
  { month: 'Month 3', mtbfHours: 350, mttrHours: 4.6, targetMtbf: 300 },
  { month: 'Month 4', mtbfHours: 420, mttrHours: 3.8, targetMtbf: 300 },
  { month: 'Month 5', mtbfHours: 490, mttrHours: 3.1, targetMtbf: 350 },
  { month: 'Month 6', mtbfHours: 560, mttrHours: 2.4, targetMtbf: 350 },
];

// ==========================================
// 4. COSTING BREAKDOWN (OpEx / Hr)
// ==========================================
const HOURLY_COSTING_PIE = [
  { name: 'Fuel & Energy', value: 46, color: '#1267D3' },
  { name: 'Preventive Spares & Filters', value: 20, color: '#10B981' },
  { name: 'Wear Liners & Ground Tools', value: 12, color: '#F59E0B' },
  { name: 'Operator & Technician Crew', value: 14, color: '#8B5CF6' },
  { name: 'Lubricants & Oils', value: 5, color: '#06B6D4' },
  { name: 'Insurance & Overheads', value: 3, color: '#64748B' },
];

const COST_PER_TON_TREND = [
  { month: 'Jan', actualCostPerTon: 345, budgetedCostPerTon: 380, savingPerTon: 35 },
  { month: 'Feb', actualCostPerTon: 332, budgetedCostPerTon: 380, savingPerTon: 48 },
  { month: 'Mar', actualCostPerTon: 318, budgetedCostPerTon: 375, savingPerTon: 57 },
  { month: 'Apr', actualCostPerTon: 304, budgetedCostPerTon: 370, savingPerTon: 66 },
  { month: 'May', actualCostPerTon: 292, budgetedCostPerTon: 365, savingPerTon: 73 },
  { month: 'Jun', actualCostPerTon: 285, budgetedCostPerTon: 360, savingPerTon: 75 },
];

// ==========================================
// 5. MAINTENANCE & BREAKDOWN ANALYSIS
// ==========================================
const MAINTENANCE_TYPE_SPLIT = [
  { name: 'Scheduled Preventive (PM)', hours: 380, percent: 76, color: '#10B981' },
  { name: 'Condition-Based / Predictive (PdM)', hours: 85, percent: 17, color: '#1267D3' },
  { name: 'Unplanned Breakdown (CM)', hours: 35, percent: 7, color: '#EF4444' },
];

const ROOT_CAUSE_PARETO = [
  { cause: 'Hydraulic Hose / Seal Wear', occurrences: 28, resolvedByPM: 26, rcaAction: 'High-pressure line proactive change schedule' },
  { cause: 'Dust / Filter Contamination', occurrences: 21, resolvedByPM: 21, rcaAction: 'Daily air pre-cleaner cyclonic purge' },
  { cause: 'Vibration Screen Liner Wear', occurrences: 15, resolvedByPM: 14, rcaAction: 'Hardox 450 liner thickness ultrasonic gauge' },
  { cause: 'Electrical Relay / Sensor Tripping', occurrences: 12, resolvedByPM: 11, rcaAction: 'IP67 enclosure sealing & de-humidifier' },
  { cause: 'Fuel Injector / Water in Diesel', occurrences: 8, resolvedByPM: 8, rcaAction: 'Bulk fuel primary separator bowl checks' },
];

// ==========================================
// 6. INVENTORY & SPARES MANAGEMENT
// ==========================================
const SPARES_INVENTORY_DATA = [
  { category: 'Fast Moving (Filters, Belts, O-rings)', stockValueLakhs: 18.5, consumptionRate: 'High (Monthly)', turnoverRatio: 6.2 },
  { category: 'Wear Parts (Liners, Screen Mesh, Teeth)', stockValueLakhs: 24.2, consumptionRate: 'Medium (Quarterly)', turnoverRatio: 4.5 },
  { category: 'Critical Insurance (Hyd. Pumps, Motors)', stockValueLakhs: 32.0, consumptionRate: 'Low (Annual / Contingency)', turnoverRatio: 1.8 },
  { category: 'Lubricants & Oils (Hyd. 68, Engine 15W40)', stockValueLakhs: 9.8, consumptionRate: 'High (Monthly)', turnoverRatio: 7.8 },
  { category: 'Electrical & Sensors (Load cells, PLCs)', stockValueLakhs: 8.5, consumptionRate: 'Medium', turnoverRatio: 3.2 },
];

const STOCK_DEADWEIGHT_REDUCTION = [
  { quarter: 'Q1 2023', totalStockValue: 125, deadStockValue: 28, stockTurnRatio: 2.8 },
  { quarter: 'Q2 2023', totalStockValue: 112, deadStockValue: 19, stockTurnRatio: 3.4 },
  { quarter: 'Q3 2023', totalStockValue: 98, deadStockValue: 12, stockTurnRatio: 4.1 },
  { quarter: 'Q4 2023', totalStockValue: 88, deadStockValue: 7, stockTurnRatio: 4.9 },
  { quarter: 'Q1 2024', totalStockValue: 82, deadStockValue: 3, stockTurnRatio: 5.6 },
  { quarter: 'Q2 2024', totalStockValue: 78, deadStockValue: 1.5, stockTurnRatio: 6.2 },
];

// ==========================================
// 7. EQUIPMENT LIFE & LIFECYCLE COST (LCC)
// ==========================================
const LIFECYCLE_COST_DATA = [
  { year: 'Yr 0 (CapEx)', capexCost: 100, cumulativeOpex: 0, cumulativeMaint: 0, residualValue: 95, optimalPoint: 'Acquisition' },
  { year: 'Yr 1', capexCost: 100, cumulativeOpex: 28, cumulativeMaint: 8, residualValue: 82, optimalPoint: 'Warranty & Peak' },
  { year: 'Yr 2', capexCost: 100, cumulativeOpex: 58, cumulativeMaint: 19, residualValue: 70, optimalPoint: 'Prime Operating' },
  { year: 'Yr 3', capexCost: 100, cumulativeOpex: 90, cumulativeMaint: 34, residualValue: 58, optimalPoint: 'Prime Operating' },
  { year: 'Yr 4', capexCost: 100, cumulativeOpex: 124, cumulativeMaint: 53, residualValue: 48, optimalPoint: 'Midlife Overhaul' },
  { year: 'Yr 5 (Sweet Spot)', capexCost: 100, cumulativeOpex: 160, cumulativeMaint: 76, residualValue: 40, optimalPoint: 'Optimal Overhaul/Retire' },
  { year: 'Yr 6', capexCost: 100, cumulativeOpex: 199, cumulativeMaint: 105, residualValue: 32, optimalPoint: 'Rising Cost Curve' },
  { year: 'Yr 7', capexCost: 100, cumulativeOpex: 242, cumulativeMaint: 142, residualValue: 24, optimalPoint: 'Uneconomical OpEx' },
  { year: 'Yr 8 (Scrap)', capexCost: 100, cumulativeOpex: 290, cumulativeMaint: 188, residualValue: 15, optimalPoint: 'Scrap / Salvage' },
];

type TabKey = 'fuel' | 'production' | 'productivity' | 'costing' | 'maintenance' | 'inventory' | 'lifecycle';

export default function PlantAnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('fuel');
  const [selectedSite, setSelectedSite] = useState<string>('all');

  const tabs = [
    { id: 'fuel' as TabKey, label: 'Fuel Fleet Analysis', icon: Fuel, badge: 'Saving 14.8%' },
    { id: 'production' as TabKey, label: 'Plant Production & Yield', icon: Factory, badge: '54,900 T/M' },
    { id: 'productivity' as TabKey, label: 'Machinery Productivity', icon: Zap, badge: '96.5% Avail' },
    { id: 'costing' as TabKey, label: 'Operating Costing', icon: DollarSign, badge: '₹285/Ton' },
    { id: 'maintenance' as TabKey, label: 'Maintenance & RCA', icon: Wrench, badge: '560h MTBF' },
    { id: 'inventory' as TabKey, label: 'Spares & Inventory', icon: Package, badge: '6.2x Turn' },
    { id: 'lifecycle' as TabKey, label: 'Life & Lifecycle Cost (LCC)', icon: Clock, badge: 'TCO Curve' },
  ];

  return (
    <section id="analytics" className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800 overflow-hidden">
      
      {/* Ambient Grid Glows */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1267D3]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/20">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>Plant &amp; Machinery Analytical Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-english">
              P&amp;M Operational Analytics &amp; Decision Intelligence
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Comprehensive analytics across fuel burn economics, plant production yield, fleet productivity (PA / EU / OEE), hourly costing, maintenance compliance, spares inventory turnover, and equipment lifecycle cost (LCC).
            </p>
          </div>

          {/* Quick Filter Control */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 pl-1 font-semibold">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              <span>Site Dataset:</span>
            </div>
            <select
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
              className="bg-slate-900 text-xs font-bold text-white px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-hidden focus:border-blue-500 cursor-pointer"
            >
              <option value="all">Consolidated All Mega Sites</option>
              <option value="expressway">Expressway Highway Package</option>
              <option value="metro">Metro Rail Viaduct &amp; Deep Piling</option>
              <option value="bridge">Major Marine River Bridge</option>
            </select>
          </div>
        </div>

        {/* 7 Interactive Category Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-slate-700">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1267D3] to-blue-700 text-white border-blue-400/50 shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-800/70 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Analysis Panel Content with Animation */}
        <AnimatePresence mode="wait">
          
          {/* ============================================================== */}
          {/* 1. FUEL & FLEET ANALYSIS TAB                                  */}
          {/* ============================================================== */}
          {activeTab === 'fuel' && (
            <motion.div
              key="fuel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Fleet Fuel Optimization</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">14.8%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Consumption reduced vs standard</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Idle Time Wastage Cut</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">-57.1%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">From 420 L/mo down to 180 L/mo</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Asphalt Plant Fuel Burn</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">145.0 L/h</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Standard norm: 165 L/h (Burner tuned)</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Excavator Fleet Economy</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block font-mono">15.6 L/h</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Eco-mode &amp; auto-idle enforced</span>
                </div>
              </div>

              {/* Main Chart + Equipment Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Fuel Trend Area Chart */}
                <div className="lg:col-span-8 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-english">
                        Monthly Specific Fuel Consumption (Ltr/hr) vs Standard Norm
                      </h3>
                      <p className="text-xs text-slate-400">
                        Trend of machine fuel rates following burner calibration, injector tuning, and auto-idle policies
                      </p>
                    </div>
                  </div>

                  <div className="h-72 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={FUEL_FLEET_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="fuelExcavator" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1267D3" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#1267D3" stopOpacity={0.05}/>
                          </linearGradient>
                          <linearGradient id="fuelLoader" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} domain={[10, 22]} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Line type="monotone" dataKey="standardNorm" name="Standard Norm (18.5 L/h)" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" />
                        <Area type="monotone" dataKey="excavator" name="Excavator 20T (L/h)" stroke="#1267D3" fillOpacity={1} fill="url(#fuelExcavator)" strokeWidth={2.5} />
                        <Area type="monotone" dataKey="loader" name="Wheel Loader 3T (L/h)" stroke="#10B981" fillOpacity={1} fill="url(#fuelLoader)" strokeWidth={2} />
                        <Line type="monotone" dataKey="paver" name="Sensor Paver (L/h)" stroke="#F59E0B" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Equipment Benchmark List */}
                <div className="lg:col-span-4 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      Equipment Specific Fuel Saving
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Actual Field Rate vs Standard OEM Benchmarks
                    </p>

                    <div className="space-y-3">
                      {FUEL_CONSUMPTION_BY_EQUIPMENT.map((eq, i) => (
                        <div key={i} className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/80">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-bold text-slate-200 truncate pr-2">{eq.name}</span>
                            <span className="font-mono font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                              -{eq.savingPercent}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span>Actual: <strong className="text-white font-mono">{eq.actual}</strong></span>
                            <span>Standard: <strong className="text-slate-400 font-mono">{eq.standard}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Telematics GPS geo-fencing and calibrated digital flow meters eliminate fuel pilferage &amp; unlogged idling.</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 2. PLANT PRODUCTION & YIELD TAB                                */}
          {/* ============================================================== */}
          {activeTab === 'production' && (
            <motion.div
              key="production"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Monthly Asphalt Output</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">54,900 T</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">109.8% of Target (50,000 T)</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">WMM Plant Throughput</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">71,300 T</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Capacity utilization: 93.8%</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Concrete Batching Volume</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">28,900 m³</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Zero batch rejection rate</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Overall Plant OEE</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 block font-mono">89.4%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">World-Class benchmark &gt; 85%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Production Bar Chart */}
                <div className="lg:col-span-8 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Monthly Production vs Target (Asphalt &amp; WMM Tonnage)
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Tonnage output scaling with synchronized feeder calibration and cold bin optimization
                  </p>

                  <div className="h-72 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={PRODUCTION_CAPACITY_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Bar dataKey="asphaltActual" name="Asphalt Actual (Ton)" fill="#E8B735" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="asphaltTarget" name="Asphalt Target (Ton)" fill="#64748b" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="wmmActual" name="WMM Actual (Ton)" fill="#1267D3" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Radar Chart: Plant OEE Dimensions */}
                <div className="lg:col-span-4 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      Plant OEE Multi-Axis Radar
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">
                      Sanjib's Managed Performance vs Standard Baseline
                    </p>

                    <div className="h-60 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={PLANT_OEE_METRICS}>
                          <PolarGrid stroke="#334155" />
                          <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={10} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={9} />
                          <Radar name="Managed Plant" dataKey="PlantActual" stroke="#10B981" fill="#10B981" fillOpacity={0.5} />
                          <Radar name="Industry Standard" dataKey="StandardNorm" stroke="#64748B" fill="#64748B" fillOpacity={0.2} />
                          <Legend wrapperStyle={{ fontSize: '11px' }} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300">
                    <span className="font-bold text-amber-300 block mb-0.5">Aggregate Feeder Precision:</span>
                    Continuous weighing sensor calibration avoids bin overflowing and guarantees exact mix designs as per MORTH specifications.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 3. MACHINERY PRODUCTIVITY & OEE TAB                            */}
          {/* ============================================================== */}
          {activeTab === 'productivity' && (
            <motion.div
              key="productivity"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Fleet Plant Availability (PA)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">96.5%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Target &gt; 90% consistently met</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Fleet Utilization Rate (EU)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">88.2%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Minimized operational idle delays</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">MTBF (Mean Time Between Failures)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">560 hrs</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Improved from 240 hrs (+133%)</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">MTTR (Mean Time to Repair)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block font-mono">2.4 hrs</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Reduced from 6.8 hrs (-64.7%)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Horizontal Availability vs Utilization Bar */}
                <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Equipment Category Availability % vs Utilization %
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Benchmarking key heavy machines across black-top, concrete, earthmoving, and foundation
                  </p>

                  <div className="h-72 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart layout="vertical" data={PRODUCTIVITY_FLEET_DATA} margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis type="number" domain={[60, 100]} stroke="#94a3b8" fontSize={11} />
                        <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={11} width={130} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Bar dataKey="availability" name="Availability % (PA)" fill="#10B981" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="utilization" name="Utilization % (EU)" fill="#1267D3" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="oee" name="OEE Score %" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* MTBF vs MTTR Trend Line Chart */}
                <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      MTBF (Growth) &amp; MTTR (Reduction) Trend
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      6-Month trajectory following systematic Preventive Maintenance implementation
                    </p>

                    <div className="h-60 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={MTBF_MTTR_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                          <YAxis yAxisId="left" stroke="#10B981" fontSize={11} />
                          <YAxis yAxisId="right" orientation="right" stroke="#EF4444" fontSize={11} domain={[0, 10]} />
                          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                          <Legend wrapperStyle={{ fontSize: '11px' }} />
                          <Line yAxisId="left" type="monotone" dataKey="mtbfHours" name="MTBF (Hours between breakdown)" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
                          <Line yAxisId="right" type="monotone" dataKey="mttrHours" name="MTTR (Hours to repair)" stroke="#EF4444" strokeWidth={2.5} strokeDasharray="3 3" dot={{ r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200 mt-3">
                    Higher MTBF + Lower MTTR ensures project paving and piling deadlines never miss client milestone targets.
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 4. OPERATING COSTING BREAKDOWN TAB                             */}
          {/* ============================================================== */}
          {activeTab === 'costing' && (
            <motion.div
              key="costing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Production Cost per Ton</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">₹285 / Ton</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Budget was ₹360 (₹75/T saved)</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Fuel % of Hourly OpEx</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">46.0%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Largest single cost driver</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Preventive Spares &amp; Filters</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 block font-mono">20.0%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">OEM batch procurement saving</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Monthly Fleet OpEx Savings</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">₹41.2 Lakhs</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Cumulative cost control result</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Cost Distribution Pie Chart */}
                <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      Hourly Machine OpEx Cost Composition
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">
                      Breakdown of total running expenditure per operating hour
                    </p>

                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={HOURLY_COSTING_PIE}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={88}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {HOURLY_COSTING_PIE.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                          <Legend wrapperStyle={{ fontSize: '11px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-700 text-xs">
                    {HOURLY_COSTING_PIE.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </span>
                        <span className="font-mono font-bold">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost per Ton Trend Area */}
                <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Monthly Asphalt Production Cost / Ton (Actual vs Budget)
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Progressive cost per ton reduction due to burner tuning, zero material wastage, and batch optimization
                  </p>

                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={COST_PER_TON_TREND} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="costSaving" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} domain={[250, 400]} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Line type="monotone" dataKey="budgetedCostPerTon" name="Budgeted Norm (₹/Ton)" stroke="#EF4444" strokeWidth={2} strokeDasharray="4 4" />
                        <Area type="monotone" dataKey="actualCostPerTon" name="Actual Cost (₹/Ton)" stroke="#10B981" fillOpacity={1} fill="url(#costSaving)" strokeWidth={2.5} />
                        <Bar dataKey="savingPerTon" name="Net Saving (₹/Ton)" fill="#E8B735" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 5. MAINTENANCE & RCA ANALYSIS TAB                              */}
          {/* ============================================================== */}
          {activeTab === 'maintenance' && (
            <motion.div
              key="maintenance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Summary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Preventive Maintenance (PM)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">76.0%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Scheduled 250h / 500h / 1000h</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Condition-Based (PdM)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">17.0%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Oil analysis, thermal &amp; vibration</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Unplanned Breakdown (CM)</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1 block font-mono">7.0%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Industry avg is ~25%-30%</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">RCA Corrective Action Success</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">95.2%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Zero repeat failure on resolved issues</span>
                </div>
              </div>

              {/* Breakdown Pareto Table & Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* RCA Pareto List */}
                <div className="lg:col-span-8 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Root Cause Failure Analysis (RCA) &amp; Corrective Engineering Action
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Eliminating recurring chronic plant &amp; fleet breakdowns through targeted Root Cause protocols
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-900/90 text-slate-300 font-bold uppercase text-[10px] tracking-wider border-b border-slate-700">
                        <tr>
                          <th className="p-3">Failure Mode / Chronic Root Cause</th>
                          <th className="p-3 text-center">Incidents</th>
                          <th className="p-3 text-center">Resolved</th>
                          <th className="p-3">Implemented RCA Corrective Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700/60 text-slate-300">
                        {ROOT_CAUSE_PARETO.map((rc, i) => (
                          <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                            <td className="p-3 font-semibold text-white flex items-center gap-2">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{rc.cause}</span>
                            </td>
                            <td className="p-3 text-center font-mono font-bold text-rose-400">{rc.occurrences}</td>
                            <td className="p-3 text-center font-mono font-bold text-emerald-400">{rc.resolvedByPM}</td>
                            <td className="p-3 text-slate-300 font-medium">{rc.rcaAction}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Maintenance Split Bar */}
                <div className="lg:col-span-4 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      Maintenance Strategy Ratio
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      PM vs PdM vs Unplanned Breakdown
                    </p>

                    <div className="space-y-4">
                      {MAINTENANCE_TYPE_SPLIT.map((m, i) => (
                        <div key={i} className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                          <div className="flex justify-between items-center text-xs mb-1.5">
                            <span className="font-bold text-slate-200">{m.name}</span>
                            <span className="font-mono font-extrabold" style={{ color: m.color }}>{m.percent}% ({m.hours}h)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${m.percent}%`, backgroundColor: m.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 mt-4">
                    <span className="font-bold text-emerald-400 block mb-0.5">World-Class Maintenance Rule:</span>
                    Achieving &gt; 75% PM and &lt; 10% CM prevents sudden line halts during critical continuous asphalt pouring windows.
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 6. SPARES & INVENTORY ANALYSIS TAB                             */}
          {/* ============================================================== */}
          {activeTab === 'inventory' && (
            <motion.div
              key="inventory"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Inventory Stock Turnover Ratio</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">6.2x / yr</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">High liquidity &amp; fast rotation</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Dead Stock Elimination</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">-94.6%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">From ₹28 Lakhs down to ₹1.5 Lakhs</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Critical Spares Availability</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">99.4%</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Zero machine stranded for lack of parts</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Total Active Inventory Value</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block font-mono">₹78.0 Lakhs</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Optimized JIT reorder points</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Inventory Reduction Trend */}
                <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Quarterly Inventory Rationalization &amp; Dead Stock Reduction
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Transition from bulk unmanaged ordering to Just-In-Time (JIT) SAP PM auto-replenishment
                  </p>

                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={STOCK_DEADWEIGHT_REDUCTION} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="quarter" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Bar dataKey="totalStockValue" name="Total Inventory (₹ Lakhs)" fill="#1267D3" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="deadStockValue" name="Dead Stock (₹ Lakhs)" fill="#EF4444" radius={[4, 4, 0, 0]} />
                        <Line type="monotone" dataKey="stockTurnRatio" name="Turnover Ratio" stroke="#10B981" strokeWidth={3} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Spares Category Classification Table */}
                <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      ABC / VED Inventory Classification
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      Spares categorization by consumption velocity and criticality
                    </p>

                    <div className="space-y-2.5">
                      {SPARES_INVENTORY_DATA.map((sp, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs">
                          <div className="flex justify-between items-center font-bold text-white mb-0.5">
                            <span className="truncate pr-2">{sp.category}</span>
                            <span className="text-amber-400 font-mono shrink-0">₹{sp.stockValueLakhs}L</span>
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>Velocity: <strong className="text-slate-300">{sp.consumptionRate}</strong></span>
                            <span>Turn: <strong className="text-emerald-400 font-mono">{sp.turnoverRatio}x</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 mt-3">
                    Barcoded stock bin tagging linked to SAP MM module ensures complete traceability from stores to plant.
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 7. EQUIPMENT LIFE & LIFECYCLE COST (LCC) TAB                   */}
          {/* ============================================================== */}
          {activeTab === 'lifecycle' && (
            <motion.div
              key="lifecycle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Optimal Replacement Point</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 block font-mono">Year 5</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Lowest Cumulative LCC Sweet Spot</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Major Overhaul Timing</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1 block font-mono">8,000 - 10,000 hrs</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Engine, hyd pump &amp; undercarriage</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">Salvage / Residual Recovery</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block font-mono">40% at Yr 5</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Maximum resale capital return</span>
                </div>
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm">
                  <span className="text-xs font-semibold text-slate-400 block">LCC Optimization Benefit</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 block font-mono">22% CapEx</span>
                  <span className="text-[11px] text-slate-300 mt-0.5 block">Lifecycle cost savings across fleet</span>
                </div>
              </div>

              {/* Total Cost of Ownership Curve */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                <div className="lg:col-span-8 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white font-english mb-1">
                    Total Cost of Ownership (TCO) &amp; Lifecycle Replacement Curve
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Cumulative CapEx, OpEx, Maintenance escalation vs Asset Residual Value (Indexed Base = 100)
                  </p>

                  <div className="h-72 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={LIFECYCLE_COST_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} />
                        <YAxis stroke="#94a3b8" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        <Line type="monotone" dataKey="cumulativeOpex" name="Cumulative Fuel &amp; Running" stroke="#1267D3" strokeWidth={2} />
                        <Line type="monotone" dataKey="cumulativeMaint" name="Cumulative Maintenance &amp; Spares" stroke="#EF4444" strokeWidth={2.5} />
                        <Line type="monotone" dataKey="residualValue" name="Asset Residual Value" stroke="#10B981" strokeWidth={2.5} strokeDasharray="4 4" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Engineering Life Guidance */}
                <div className="lg:col-span-4 bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-english">
                      Lifecycle Decision Matrix
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      When to Overhaul vs Re-deploy vs Replace
                    </p>

                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs">
                        <span className="font-bold text-emerald-400 block mb-0.5">Years 1 - 3: Prime Peak Window</span>
                        Full warranty, lowest maintenance cost, highest availability (&gt;95%). Maximum utilization deployment.
                      </div>
                      <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-xs">
                        <span className="font-bold text-amber-300 block mb-0.5">Years 4 - 5: Mid-Life Overhaul Point</span>
                        Conduct major overhaul (engine rebuilding, hydraulic cylinder seals). Assess replacement vs retrofit.
                      </div>
                      <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/40 text-xs">
                        <span className="font-bold text-rose-300 block mb-0.5">Years 6+: Steep OpEx Escalation</span>
                        Maintenance costs exceed asset residual value. De-mobilize or scrap to avoid project line stoppage.
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                    <span className="text-slate-400">P&amp;M Audit Standard:</span>
                    <span className="font-bold text-amber-300 font-mono">ISO 55000 Asset Mgmt</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
