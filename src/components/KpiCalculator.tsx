import { useState } from 'react';
import { Calculator, ArrowRight, RefreshCw, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function KpiCalculator() {
  const [totalFleet, setTotalFleet] = useState<number>(20);
  const [operatingHoursPerDay, setOperatingHoursPerDay] = useState<number>(16);
  const [workingDays, setWorkingDays] = useState<number>(30);
  const [breakdownHours, setBreakdownHours] = useState<number>(48);
  const [numberOfBreakdowns, setNumberOfBreakdowns] = useState<number>(6);

  // Math calculations
  const totalPlannedHours = totalFleet * operatingHoursPerDay * workingDays;
  const actualOperatingHours = Math.max(0, totalPlannedHours - breakdownHours);
  const availabilityPercent = totalPlannedHours > 0 
    ? ((actualOperatingHours / totalPlannedHours) * 100).toFixed(1)
    : '0';

  const mtbf = numberOfBreakdowns > 0 
    ? (actualOperatingHours / numberOfBreakdowns).toFixed(1)
    : 'N/A';

  const mttr = numberOfBreakdowns > 0 
    ? (breakdownHours / numberOfBreakdowns).toFixed(1)
    : '0';

  const availabilityNum = parseFloat(availabilityPercent);

  return (
    <section className="py-14 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1267D3] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive P&amp;M Reliability Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-english">
            Construction Fleet Availability &amp; MTBF / MTTR Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Calculate your project's machinery Availability %, MTBF (Mean Time Between Failures), and MTTR (Mean Time to Repair) in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Fleet &amp; Shift Operational Parameters
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Active Heavy Machinery Fleet Size:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={totalFleet}
                    onChange={(e) => setTotalFleet(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1267D3]"
                  />
                  <span className="w-12 text-center text-xs font-bold text-slate-900 bg-white py-1 px-2 rounded-md border border-slate-200">
                    {totalFleet}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Daily Shift Hours (per machine):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="8"
                    max="24"
                    value={operatingHoursPerDay}
                    onChange={(e) => setOperatingHoursPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1267D3]"
                  />
                  <span className="w-12 text-center text-xs font-bold text-slate-900 bg-white py-1 px-2 rounded-md border border-slate-200">
                    {operatingHoursPerDay}h
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Monthly Working Days:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="1"
                    max="31"
                    value={workingDays}
                    onChange={(e) => setWorkingDays(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1267D3]"
                  />
                  <span className="w-12 text-center text-xs font-bold text-slate-900 bg-white py-1 px-2 rounded-md border border-slate-200">
                    {workingDays}d
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Breakdown Hours (Monthly):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="2"
                    value={breakdownHours}
                    onChange={(e) => setBreakdownHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1267D3]"
                  />
                  <span className="w-14 text-center text-xs font-bold text-slate-900 bg-white py-1 px-2 rounded-md border border-slate-200">
                    {breakdownHours}h
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Breakdown Incidents Count:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={numberOfBreakdowns}
                    onChange={(e) => setNumberOfBreakdowns(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1267D3]"
                  />
                  <span className="w-14 text-center text-xs font-bold text-slate-900 bg-white py-1 px-2 rounded-md border border-slate-200">
                    {numberOfBreakdowns}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200">
              <span>Total Planned Hours: <strong className="text-slate-800">{totalPlannedHours.toLocaleString()} hrs</strong></span>
              <button
                type="button"
                onClick={() => {
                  setTotalFleet(20);
                  setOperatingHoursPerDay(16);
                  setWorkingDays(30);
                  setBreakdownHours(48);
                  setNumberOfBreakdowns(6);
                }}
                className="flex items-center gap-1 text-[#1267D3] font-bold hover:underline"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>
          </div>

          {/* Right: Calculated Metrics Display */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Reliability Metrics
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  availabilityNum >= 90 ? 'bg-emerald-100 text-emerald-800' :
                  availabilityNum >= 80 ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {availabilityNum >= 90 ? 'Optimal Fleet Health' :
                   availabilityNum >= 80 ? 'Standard Readiness' :
                   'High Downtime Risk'}
                </span>
              </div>

              {/* Main Availability Score */}
              <div className="text-center py-4 mb-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1267D3] tracking-tight">
                  {availabilityPercent}%
                </span>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">
                  Fleet Availability Rate
                </span>
              </div>

              {/* MTBF and MTTR Cards */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-xl font-bold text-slate-900">{mtbf} hrs</span>
                  <span className="text-[11px] text-slate-500 font-medium">MTBF (Mean Time Between Failures)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-xl font-bold text-slate-900">{mttr} hrs</span>
                  <span className="text-[11px] text-slate-500 font-medium">MTTR (Mean Time to Repair)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full py-2.5 rounded-xl bg-[#1267D3] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 hover:bg-[#0e52aa] transition-colors"
              >
                <span>Consult for Downtime Reduction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
