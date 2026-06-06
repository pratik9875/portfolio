import { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle2
} from 'lucide-react';

export default function Experience() {
  const [activeDetail, setActiveDetail] = useState<'all' | 'python' | 'sql' | 'eda'>('all');

  const experienceData = {
    role: 'Data Analyst Intern',
    company: 'Oasis Infobyte',
    duration: 'Oct 2023 - Nov 2023',
    location: 'Remote',
    summary: 'Performed exploratory data analysis and database wrangling, optimizing file loads and cleanups. Focused on building Python scripts and writing structured SQL queries to support data-driven retail recommendations.',
    metrics: [
      { label: 'Data Usability', value: '+30%', desc: 'Using Pandas/NumPy transformation routines' },
      { label: 'Analysis Time', value: '-20%', desc: 'Saved through reusable Seaborn templates' },
      { label: 'Database Health', value: '100%', desc: 'Imputed missing values & cleaned structures' },
    ],
    technicalHighlights: {
      python: [
        'Wrote robust Python scripts using Pandas & NumPy to transform messy, unformatted CSV raw tables.',
        'Imputed missing outliers and structured data columns, saving 30% pipeline loading costs.',
        'Executed mathematical matrices transformations for demographic transactions analysis.'
      ],
      sql: [
        'Drafted analytical SQL filtering commands to extract precise order streams.',
        'Analyzed retail customer segmentation clusters by querying database window patterns.',
        'Created aggregated reporting indexes to analyze regional sales performances.'
      ],
      eda: [
        'Conducted detailed Exploratory Data Analysis (EDA) on retail customer transaction files.',
        'Developed visual distributions (histograms, scatter maps, correlation matrices) using Matplotlib.',
        'Presented graphical dashboards to outline peak transaction windows and consumer product preferences.'
      ]
    }
  };

  const getFilteredHighlights = () => {
    if (activeDetail === 'all') {
      return [
        ...experienceData.technicalHighlights.python,
        ...experienceData.technicalHighlights.sql,
        ...experienceData.technicalHighlights.eda
      ];
    }
    return experienceData.technicalHighlights[activeDetail];
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            CAREER TIMELINE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Experience Core Layout */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Timeline Card */}
          <div className="relative pl-8 md:pl-12 border-l-2 border-orange-100 pb-4">
            
            {/* Pulsing Timeline Node */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 border-4 border-white shadow-md shadow-orange-500/20" />
            
            {/* Experience Card */}
            <div className="bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 hover:border-orange-150 p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-orange-500/5">
              
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Briefcase className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wide">Internship</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{experienceData.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mt-1">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" /> {experienceData.company}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {experienceData.location}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/80 shadow-sm px-4 py-2 rounded-xl text-right shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    <span>{experienceData.duration}</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 block mt-0.5 uppercase tracking-wide">October - November</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {experienceData.summary}
              </p>

              {/* Quantitative Metrics Achieved */}
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-3.5">Quantifiable Impact Achieved</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {experienceData.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
                    <span className="text-2xl font-black text-slate-800 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">{m.value}</span>
                    <span className="text-[10px] font-bold text-slate-700 mt-1">{m.label}</span>
                    <span className="text-[9px] text-slate-400 mt-0.5 leading-normal">{m.desc}</span>
                  </div>
                ))}
              </div>

              {/* Technical Detail Filter Tabs */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Technical Responsibilities</h4>
                  
                  {/* Category filters */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-[9px] font-bold">
                    <button 
                      onClick={() => setActiveDetail('all')}
                      className={`px-2 py-1 rounded-lg transition-all ${activeDetail === 'all' ? 'bg-orange-500 text-white' : 'text-slate-500'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setActiveDetail('python')}
                      className={`px-2 py-1 rounded-lg transition-all ${activeDetail === 'python' ? 'bg-orange-500 text-white' : 'text-slate-500'}`}
                    >
                      Python
                    </button>
                    <button 
                      onClick={() => setActiveDetail('sql')}
                      className={`px-2 py-1 rounded-lg transition-all ${activeDetail === 'sql' ? 'bg-orange-500 text-white' : 'text-slate-500'}`}
                    >
                      SQL
                    </button>
                    <button 
                      onClick={() => setActiveDetail('eda')}
                      className={`px-2 py-1 rounded-lg transition-all ${activeDetail === 'eda' ? 'bg-orange-500 text-white' : 'text-slate-500'}`}
                    >
                      EDA
                    </button>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="flex flex-col gap-3 text-xs text-slate-600">
                  {getFilteredHighlights().map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-3 border border-slate-100 rounded-xl hover:border-orange-100 transition-colors animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
