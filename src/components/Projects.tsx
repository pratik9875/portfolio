import { useState } from 'react';
import { 
  FolderGit2, 
  Filter, 
  Star, 
  ChevronRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  bullets: string[];
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'blinkit' | 'customer'>('blinkit');
  const [showMockup, setShowMockup] = useState(true);

  // Blinkit filter state
  const [blinkitOutletTier, setBlinkitOutletTier] = useState<'All' | 'Tier 1' | 'Tier 2' | 'Tier 3'>('All');
  // Customer behavior filter state
  const [customerAgeGroup, setCustomerAgeGroup] = useState<'All' | '18-25' | '26-40' | '41+'>('All');

  const projects: Project[] = [
    {
      id: 'blinkit',
      title: 'Blinkit Sales Analysis Dashboard',
      subtitle: 'Sales Channel Performance & KPI Reporting',
      description: 'Developed a comprehensive analytics solution using Power BI and Excel to track, clean, and visualize key sales performance metrics for Blinkit, highlighting core trends and outlet efficiency.',
      techStack: ['Excel', 'Power BI', 'Power Query', 'Data Cleaning', 'KPI Analysis'],
      bullets: [
        'Cleaned and transformed 10,000+ rows of raw transactional data using Power Query functions.',
        'Analyzed core KPIs including total sales volume, outlet sizes, regional distributions, and customer rating averages.',
        'Identified top sales categories, showing high demand segments and outlet growth patterns.',
        'Created a dynamic, filterable reporting dashboard that highlights outlet performance by tier sizes.'
      ]
    },
    {
      id: 'customer',
      title: 'Customer Behaviour Analysis Project',
      subtitle: 'Customer Segmentation & Trend Analytics',
      description: 'Conducted exploratory data analysis and database clustering using Python and SQL to segment purchasing behaviors, identify demographic patterns, and present data-driven marketing suggestions.',
      techStack: ['Python', 'Pandas', 'SQL', 'MySQL', 'Jupyter Notebook', 'Power BI'],
      bullets: [
        'Preprocessed, imputed missing figures, and ran exploratory statistics on datasets in Jupyter Notebook.',
        'Structured MySQL queries utilizing aggregate windows and joins to extract purchase details.',
        'Modeled demographic distributions, classifying customers based on age groups, order volumes, and retention indexes.',
        'Mapped buying frequency trends, suggesting optimal promotional hours that can improve conversions.'
      ]
    }
  ];

  // Mock data calculations for Blinkit based on Tier Filter
  const getBlinkitData = () => {
    switch (blinkitOutletTier) {
      case 'Tier 1':
        return {
          sales: '$480K',
          rating: '4.45',
          orders: '5,800',
          categories: [
            { name: 'Snacks', value: 85, color: 'bg-orange-500' },
            { name: 'Dairy', value: 72, color: 'bg-rose-500' },
            { name: 'Beverages', value: 50, color: 'bg-amber-500' },
          ],
          chartHeight: [80, 50, 95] // Heights in %
        };
      case 'Tier 2':
        return {
          sales: '$390K',
          rating: '4.32',
          orders: '4,600',
          categories: [
            { name: 'Snacks', value: 70, color: 'bg-orange-500' },
            { name: 'Dairy', value: 65, color: 'bg-rose-500' },
            { name: 'Beverages', value: 55, color: 'bg-amber-500' },
          ],
          chartHeight: [60, 85, 70]
        };
      case 'Tier 3':
        return {
          sales: '$330K',
          rating: '4.28',
          orders: '3,800',
          categories: [
            { name: 'Snacks', value: 55, color: 'bg-orange-500' },
            { name: 'Dairy', value: 50, color: 'bg-rose-500' },
            { name: 'Beverages', value: 68, color: 'bg-amber-500' },
          ],
          chartHeight: [45, 60, 80]
        };
      case 'All':
      default:
        return {
          sales: '$1.20M',
          rating: '4.39',
          orders: '14,200',
          categories: [
            { name: 'Snacks', value: 90, color: 'bg-orange-500' },
            { name: 'Dairy', value: 80, color: 'bg-rose-500' },
            { name: 'Beverages', value: 60, color: 'bg-amber-500' },
          ],
          chartHeight: [90, 70, 85]
        };
    }
  };

  // Mock data calculations for Customer Behavior based on Age Group
  const getCustomerData = () => {
    switch (customerAgeGroup) {
      case '18-25':
        return {
          customers: '1,450',
          avgOrder: '$98',
          retention: '68%',
          chartData: [40, 90, 75, 50, 45, 30] // Data points for chart
        };
      case '26-40':
        return {
          customers: '2,300',
          avgOrder: '$145',
          retention: '82%',
          chartData: [70, 60, 95, 80, 90, 98]
        };
      case '41+':
        return {
          customers: '1,250',
          avgOrder: '$118',
          retention: '74%',
          chartData: [50, 40, 60, 85, 70, 65]
        };
      case 'All':
      default:
        return {
          customers: '5,000',
          avgOrder: '$124',
          retention: '76%',
          chartData: [60, 75, 85, 70, 80, 90]
        };
    }
  };

  const currentProject = projects.find(p => p.id === activeProject)!;
  const blinkitData = getBlinkitData();
  const customerData = getCustomerData();

  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-slate-50/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            PROJECT PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Major Case Studies
          </h2>
          <p className="text-xs text-slate-500 mt-2 max-w-lg leading-relaxed">
            Click on a project to view its documentation and test the interactive dashboard mock-ups below.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProject(p.id as any);
                setShowMockup(true);
              }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeProject === p.id
                  ? 'bg-white border-orange-300 shadow-lg shadow-orange-500/5 ring-1 ring-orange-500/20'
                  : 'bg-white/60 border-slate-100 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FolderGit2 className={`w-4 h-4 ${activeProject === p.id ? 'text-orange-500' : 'text-slate-400'}`} />
                <span className={`text-[10px] font-extrabold uppercase tracking-wide ${activeProject === p.id ? 'text-orange-500' : 'text-slate-400'}`}>
                  {p.id === 'blinkit' ? 'BI Dashboard' : 'EDA & SQL'}
                </span>
              </div>
              <h3 className="text-xs font-black text-slate-800 leading-tight">
                {p.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Selected Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Project Details Sheet (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-500/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-1">{currentProject.title}</h3>
            <p className="text-xs font-semibold text-orange-500 mb-4">{currentProject.subtitle}</p>
            
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {currentProject.description}
            </p>

            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-3">Key Responsibilities</h4>
            <ul className="flex flex-col gap-2.5 mb-6 text-xs text-slate-600">
              {currentProject.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-3">Tech Stack Applied</h4>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-orange-50 text-orange-600 border border-orange-100 px-2.5 py-1 rounded-lg text-[10px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Mockup Container (Right) */}
          <div className="lg:col-span-7">
            {showMockup && (
              <div className="bg-white rounded-3xl border border-orange-100 shadow-2xl p-6 relative overflow-hidden select-none animate-fadeIn">
                
                {/* Mockup Title bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-2">
                      {activeProject === 'blinkit' ? 'Blinkit Dashboard Mockup' : 'Behavior Segments Dashboard'}
                    </span>
                  </div>

                  {/* Filter badge indicators */}
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold">
                    <Filter className="w-3.5 h-3.5 text-orange-500" />
                    <span>Live Mockup Filters</span>
                  </div>
                </div>

                {/* PROJECT 1: BLINKIT INTERACTIVE DASHBOARD */}
                {activeProject === 'blinkit' && (
                  <div>
                    {/* Blinkit Filters */}
                    <div className="flex items-center gap-1.5 mb-6">
                      <span className="text-[10px] text-slate-500 font-bold mr-1">Outlet Tier:</span>
                      {['All', 'Tier 1', 'Tier 2', 'Tier 3'].map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setBlinkitOutletTier(tier as any)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${
                            blinkitOutletTier === tier
                              ? 'bg-slate-900 border-slate-900 text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Total Sales Volume</span>
                        <span className="text-base font-black text-slate-800">{blinkitData.sales}</span>
                        <span className="text-[8px] text-emerald-600 font-semibold block mt-0.5">&uarr; 14.5% target</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Customer Rating</span>
                        <span className="text-base font-black text-slate-800 flex items-center gap-1">
                          {blinkitData.rating} <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                        </span>
                        <span className="text-[8px] text-slate-400 font-semibold block mt-0.5">Average reviews</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Total Transactions</span>
                        <span className="text-base font-black text-slate-800">{blinkitData.orders}</span>
                        <span className="text-[8px] text-slate-400 font-semibold block mt-0.5">Completed orders</span>
                      </div>
                    </div>

                    {/* Visual Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Bar chart - Sales by Outlet */}
                      <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                        <span className="text-[9px] font-bold text-slate-500 uppercase block mb-3">Sales by Outlet Type</span>
                        <div className="flex items-end gap-3 h-28 pt-2">
                          {[
                            { name: 'Supermarket', val: blinkitData.chartHeight[0] },
                            { name: 'Grocery Store', val: blinkitData.chartHeight[1] },
                            { name: 'Express', val: blinkitData.chartHeight[2] },
                          ].map((bar, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                              <div className="w-full bg-slate-100 rounded-md overflow-hidden relative" style={{ height: '80%' }}>
                                <div 
                                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-sm transition-all duration-500" 
                                  style={{ height: `${bar.val}%` }}
                                />
                              </div>
                              <span className="text-[8px] text-slate-400 truncate w-full text-center font-semibold">{bar.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Share breakdown */}
                      <div className="border border-slate-100 rounded-xl p-4 bg-white">
                        <span className="text-[9px] font-bold text-slate-500 uppercase block mb-3">Sales Category Breakdown</span>
                        <div className="flex flex-col gap-2">
                          {blinkitData.categories.map((c, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600">
                                <span>{c.name}</span>
                                <span>{c.value}%</span>
                              </div>
                              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${c.color} transition-all duration-500`} 
                                  style={{ width: `${c.value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* PROJECT 2: CUSTOMER BEHAVIOR INTERACTIVE DASHBOARD */}
                {activeProject === 'customer' && (
                  <div>
                    {/* Customer Behavior Filters */}
                    <div className="flex items-center gap-1.5 mb-6">
                      <span className="text-[10px] text-slate-500 font-bold mr-1">Demographic Age:</span>
                      {['All', '18-25', '26-40', '41+'].map((age) => (
                        <button
                          key={age}
                          onClick={() => setCustomerAgeGroup(age as any)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${
                            customerAgeGroup === age
                              ? 'bg-slate-900 border-slate-900 text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Sample Cohort Size</span>
                        <span className="text-base font-black text-slate-800">{customerData.customers}</span>
                        <span className="text-[8px] text-slate-400 font-semibold block mt-0.5">Segmented records</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Avg Order Value</span>
                        <span className="text-base font-black text-slate-800">{customerData.avgOrder}</span>
                        <span className="text-[8px] text-slate-400 font-semibold block mt-0.5">Purchase value</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <span className="text-[9px] font-bold text-slate-400 block mb-0.5">Retention Rate</span>
                        <span className="text-base font-black text-slate-800">{customerData.retention}</span>
                        <span className="text-[8px] text-emerald-600 font-semibold block mt-0.5">&uarr; Cohort loyal</span>
                      </div>
                    </div>

                    {/* Line chart showing hourly activity */}
                    <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                      <span className="text-[9px] font-bold text-slate-500 uppercase block mb-4">Hourly Purchasing Activity Trend</span>
                      <div className="relative w-full h-24">
                        <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                          {/* Grid line */}
                          <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeDasharray="3" />
                          
                          {/* Path */}
                          <path
                            d={`M 10 ${100 - customerData.chartData[0]} L 80 ${100 - customerData.chartData[1]} L 150 ${100 - customerData.chartData[2]} L 220 ${100 - customerData.chartData[3]} L 290 ${100 - customerData.chartData[4]} L 360 ${100 - customerData.chartData[5]}`}
                            fill="none"
                            stroke="#FF6B4A"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="transition-all duration-500"
                          />

                          {/* Dots */}
                          {customerData.chartData.map((val, i) => (
                            <circle
                              key={i}
                              cx={10 + i * 70}
                              cy={100 - val}
                              r="4"
                              fill="#E14B70"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              className="transition-all duration-500"
                            />
                          ))}

                          {/* Labels */}
                          {['9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '11 PM'].map((time, i) => (
                            <text
                              key={i}
                              x={10 + i * 70}
                              y="100"
                              textAnchor="middle"
                              fill="#94a3b8"
                              fontSize="8"
                              fontWeight="bold"
                            >
                              {time}
                            </text>
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Floating graphic accents in the mockup border */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-orange-400/5 -z-10 pointer-events-none" />
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
