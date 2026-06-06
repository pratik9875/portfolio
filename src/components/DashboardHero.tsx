import { useState } from 'react';
import { 
  TrendingUp, 
  Database, 
  PieChart, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface DataPoint {
  label: string;
  sales: number;
  orders: number;
  conversion: number;
}

export default function DashboardHero() {
  const [activeTab, setActiveTab] = useState<'sales' | 'conversion' | 'regions'>('sales');
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT category, SUM(sales) FROM blinkit_sales GROUP BY category ORDER BY sales DESC;');
  const [isQueryExecuting, setIsQueryExecuting] = useState(false);
  const [querySuccess, setQuerySuccess] = useState(false);

  // Sample data points representing sales performance
  const data: DataPoint[] = [
    { label: 'Mon', sales: 12000, orders: 400, conversion: 2.8 },
    { label: 'Tue', sales: 19000, orders: 550, conversion: 3.2 },
    { label: 'Wed', sales: 15000, orders: 480, conversion: 3.0 },
    { label: 'Thu', sales: 28000, orders: 780, conversion: 4.1 },
    { label: 'Fri', sales: 22000, orders: 600, conversion: 3.5 },
    { label: 'Sat', sales: 34000, orders: 950, conversion: 4.8 },
    { label: 'Sun', sales: 39000, orders: 1100, conversion: 5.2 },
  ];

  const categories = [
    { name: 'Snacks & Sweets', sales: '$45.2K', share: 32, color: 'bg-orange-500' },
    { name: 'Dairy & Milk', sales: '$38.1K', share: 27, color: 'bg-rose-500' },
    { name: 'Beverages', sales: '$29.5K', share: 21, color: 'bg-amber-500' },
    { name: 'Fruits & Veggies', sales: '$28.2K', share: 20, color: 'bg-emerald-500' },
  ];

  const handleRunQuery = () => {
    setIsQueryExecuting(true);
    setQuerySuccess(false);
    setTimeout(() => {
      setIsQueryExecuting(false);
      setQuerySuccess(true);
    }, 8000); // 8 seconds execution simulation
  };

  // SVG Chart Dimensions
  const width = 500;
  const height = 180;
  const padding = 30;

  // Find max value to scale Y axis
  const maxSales = Math.max(...data.map(d => d.sales));

  // Helper to map values to SVG coords
  const getCoords = (index: number, value: number, max: number) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - (value / max) * (height - padding * 2);
    return { x, y };
  };

  // Generate SVG path for Sales line
  const points = data.map((d, i) => getCoords(i, activeTab === 'sales' ? d.sales : d.conversion * 7000, maxSales));
  const pathData = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  // Generate area under line
  const areaData = `${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 bg-white/70 backdrop-blur-md rounded-[2rem] border border-orange-100 shadow-2xl p-6 md:p-8 overflow-hidden select-none">
      
      {/* Soft gradient background glow similar to screenshot */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400/20 to-rose-400/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-300/10 to-orange-400/10 blur-3xl -z-10 pointer-events-none" />

      {/* Dashboard Top bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-orange-50 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">LIVE WORKSPACE MOCKUP</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Database className="w-5 h-5 text-orange-500" /> Pratik's Insight Engine
          </h3>
        </div>

        {/* Tab filters */}
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl border border-slate-200">
          <button 
            onClick={() => { setActiveTab('sales'); setSelectedPoint(null); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'sales' 
                ? 'bg-white text-orange-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            Sales Trends
          </button>
          <button 
            onClick={() => { setActiveTab('conversion'); setSelectedPoint(null); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'conversion' 
                ? 'bg-white text-orange-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            Conversion Rate
          </button>
        </div>
      </div>

      {/* Main Grid content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Metric panels (Left / Columns) */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          
          {/* Metric 1 */}
          <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/20 border border-orange-100 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500">Sales Dashboard KPI</span>
              <TrendingUp className="w-4 h-4 text-orange-500" />
            </div>
            <div className="text-2xl font-black text-slate-800">$180.2K</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
              <span>+18.4%</span>
              <span className="text-slate-400 font-normal">vs last month</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/20 border border-orange-100 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500">Blinkit Order Fill</span>
              <CheckCircle2 className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-2xl font-black text-slate-800">98.4%</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
              <span>+2.1%</span>
              <span className="text-slate-400 font-normal">target met</span>
            </div>
          </div>

          {/* Mini SQL console */}
          <div className="col-span-2 lg:col-span-1 bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg text-[11px] font-mono text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Query Console</span>
              </div>
              <button 
                onClick={handleRunQuery}
                disabled={isQueryExecuting}
                className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded text-[9px] font-sans font-bold transition-all disabled:opacity-50"
              >
                <Play className="w-2.5 h-2.5 fill-current" />
                {isQueryExecuting ? 'Running...' : 'Execute'}
              </button>
            </div>
            <textarea
              value={sqlQuery}
              onChange={(e) => setSqlQuery(e.target.value)}
              className="w-full h-11 bg-slate-950 border border-slate-800 rounded-lg p-1.5 text-slate-350 focus:outline-none focus:border-slate-700 text-[10px] leading-relaxed resize-none font-mono scrollbar-none"
            />

            {/* Console output simulation */}
            {isQueryExecuting && (
              <div className="mt-2 text-orange-400 border-t border-slate-800 pt-2 animate-pulse flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                Executing query on PostgreSQL database...
              </div>
            )}

            {querySuccess && !isQueryExecuting && (
              <div className="mt-2 text-emerald-400 border-t border-slate-800 pt-2 flex flex-col gap-1">
                <div className="flex items-center gap-1 font-semibold text-[10px]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Query executed successfully (4 rows, 12ms)
                </div>
                <div className="grid grid-cols-2 text-[9px] text-slate-400 bg-slate-800/50 p-1.5 rounded border border-slate-700">
                  <div>Snacks & Sweets</div><div className="text-right text-emerald-400 font-bold">$45,200</div>
                  <div>Dairy & Milk</div><div className="text-right text-emerald-400 font-bold">$38,100</div>
                </div>
              </div>
            )}

            {!isQueryExecuting && !querySuccess && (
              <div className="mt-2 text-slate-500 border-t border-slate-800 pt-2 text-[10px]">
                Click 'Execute' to run aggregates and fetch statistics.
              </div>
            )}
          </div>
        </div>

        {/* Chart View (Center/Right) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  {activeTab === 'sales' ? 'Weekly Revenue Stream' : 'Conversion Rates (%)'}
                </span>
                <h4 className="text-sm font-bold text-slate-700">
                  {activeTab === 'sales' 
                    ? 'Sales Performance Over Weekdays' 
                    : 'Goal Completion Funnel'
                  }
                </h4>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-orange-500" />
                  <span className="text-slate-600 font-medium">{activeTab === 'sales' ? 'Revenue' : 'Conversion'}</span>
                </div>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative w-full overflow-x-auto select-none">
              <svg 
                viewBox={`0 0 ${width} ${height}`} 
                className="w-full h-auto overflow-visible"
              >
                {/* Horizontal Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
                  const y = padding + r * (height - padding * 2);
                  return (
                    <line 
                      key={idx}
                      x1={padding} 
                      y1={y} 
                      x2={width - padding} 
                      y2={y} 
                      stroke="#f1f5f9" 
                      strokeWidth="1" 
                    />
                  );
                })}

                {/* SVG Area fill under the line */}
                <path 
                  d={areaData} 
                  fill="url(#peachGradient)" 
                  opacity="0.3"
                  className="transition-all duration-500 ease-in-out"
                />

                {/* SVG Path Line */}
                <path 
                  d={pathData} 
                  fill="none" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-in-out"
                />

                {/* SVG Gradient definitions */}
                <defs>
                  <linearGradient id="peachGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B4A" />
                    <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF8E53" />
                    <stop offset="50%" stopColor="#FF6B4A" />
                    <stop offset="100%" stopColor="#E14B70" />
                  </linearGradient>
                </defs>

                {/* Hotspot Hover Dots */}
                {points.map((p, idx) => (
                  <g 
                    key={idx}
                    onMouseEnter={() => setSelectedPoint(idx)}
                    onMouseLeave={() => setSelectedPoint(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulsing indicator ring */}
                    {selectedPoint === idx && (
                      <circle 
                        cx={p.x} 
                        cy={p.y} 
                        r="10" 
                        fill="#FF6B4A" 
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}
                    {/* Inner dots */}
                    <circle 
                      cx={p.x} 
                      cy={p.y} 
                      r={selectedPoint === idx ? '6' : '4'} 
                      fill={selectedPoint === idx ? '#E14B70' : '#FF6B4A'} 
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="transition-all"
                    />
                  </g>
                ))}

                {/* Axis Labels (X Axis only for simplicity) */}
                {data.map((d, idx) => {
                  const x = padding + (idx / (data.length - 1)) * (width - padding * 2);
                  return (
                    <text 
                      key={idx}
                      x={x} 
                      y={height - 10} 
                      textAnchor="middle" 
                      fill="#94a3b8" 
                      fontSize="9" 
                      fontWeight="bold"
                    >
                      {d.label}
                    </text>
                  );
                })}
              </svg>

              {/* Dynamic Interactive Tooltip Card overlay inside graph container */}
              {selectedPoint !== null && (
                <div 
                  className="absolute bg-slate-900 text-white rounded-xl shadow-xl border border-slate-800 p-3 text-xs pointer-events-none transition-all flex flex-col gap-1 z-30"
                  style={{
                    left: `${(points[selectedPoint].x / width) * 100}%`,
                    top: `${(points[selectedPoint].y / height) * 100 - 30}%`,
                    transform: 'translate(-50%, -100%)',
                  }}
                >
                  <span className="font-bold border-b border-slate-800 pb-1 mb-1 text-orange-400">
                    {data[selectedPoint].label} insights
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400">Sales Stream</span>
                    <span className="text-sm font-black">${data[selectedPoint].sales.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-[10px] text-slate-400">Conversion Rate</span>
                    <span className="font-semibold text-emerald-400">{data[selectedPoint].conversion}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Row of sub-analyses details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Category breakdown */}
            <div className="bg-white border border-orange-50 rounded-2xl p-4 shadow-sm">
              <h5 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <PieChart className="w-4 h-4 text-orange-400" /> Category Breakdown (Blinkit)
              </h5>
              <div className="flex flex-col gap-2">
                {categories.map((c, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-600">{c.name}</span>
                      <span className="text-slate-800 font-bold">{c.sales} ({c.share}%)</span>
                    </div>
                    {/* Custom progress bars */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${c.color}`} 
                        style={{ width: `${c.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Data Insights list */}
            <div className="bg-white border border-orange-50 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-orange-400" /> Automated SQL Insights
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  "Query reveals <strong>Snacks & Sweets</strong> leads department sales streams, while customer conversion peaks on <strong>Sundays (5.2%)</strong>. Retail channels should focus ad spend during weekend blocks."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-2 mt-4 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>Model: Blinkit Sales v2</span>
                <span className="text-orange-500 font-semibold cursor-pointer hover:underline">View Project Report &rarr;</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
