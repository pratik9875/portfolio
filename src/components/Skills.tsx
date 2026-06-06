import { useState } from 'react';
import { 
  BarChart3, 
  Code2, 
  Layers, 
  Database as DatabaseIcon,
  Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'analytics' | 'programming' | 'handling' | 'databases';
  description: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  projects: string[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'analytics' | 'programming' | 'handling' | 'databases'>('all');

  const skillsData: Skill[] = [
    { 
      name: 'Power BI', 
      category: 'analytics', 
      level: 'Advanced', 
      description: 'Creating interactive DAX dashboards, metrics calculation, and ETL reports.',
      projects: ['Blinkit Sales Analysis', 'Customer Behaviour Analysis'] 
    },
    { 
      name: 'Tableau', 
      category: 'analytics', 
      level: 'Advanced', 
      description: 'Building custom views, storytelling maps, and data visualizations.',
      projects: ['Personal visualization showcase'] 
    },
    { 
      name: 'Excel', 
      category: 'analytics', 
      level: 'Expert', 
      description: 'Advanced lookup formulas (VLOOKUP, XLOOKUP), Pivot Tables, and conditional analytics.',
      projects: ['Blinkit Sales Dashboard', 'Data Preprocessing blocks'] 
    },
    { 
      name: 'Python', 
      category: 'programming', 
      level: 'Advanced', 
      description: 'Data cleaning, Exploratory Data Analysis, and dashboard scripting.',
      projects: ['Customer Behaviour Analysis', 'Oasis Infobyte Internship tasks'] 
    },
    { 
      name: 'Pandas & NumPy', 
      category: 'programming', 
      level: 'Advanced', 
      description: 'DataFrame manipulation, mathematical array computations, and merging/joining arrays.',
      projects: ['Customer Behaviour Analysis', 'Oasis Infobyte Intern EDA'] 
    },
    { 
      name: 'Matplotlib & Seaborn', 
      category: 'programming', 
      level: 'Advanced', 
      description: 'Custom plotting of scatter graphs, distribution histograms, and heatmaps.',
      projects: ['Oasis Infobyte EDA tasks'] 
    },
    { 
      name: 'SQL', 
      category: 'programming', 
      level: 'Advanced', 
      description: 'Writing complex nested subqueries, CTEs, window functions, and joins.',
      projects: ['Customer Behaviour Analysis', 'Oasis Infobyte DB tests'] 
    },
    { 
      name: 'MySQL', 
      category: 'databases', 
      level: 'Advanced', 
      description: 'Relational database schema modeling, indexing, and executing queries.',
      projects: ['Customer Behaviour Analysis'] 
    },
    { 
      name: 'PostgreSQL', 
      category: 'databases', 
      level: 'Advanced', 
      description: 'Managing schemas, writing analytical queries, and executing data filtering.',
      projects: ['Customer Behaviour database tests'] 
    },
    { 
      name: 'Power Query', 
      category: 'handling', 
      level: 'Advanced', 
      description: 'Transforming, cleaning, removing duplicate datasets, and automating ETL blocks.',
      projects: ['Blinkit Sales Dashboard'] 
    },
    { 
      name: 'Pivot Tables', 
      category: 'handling', 
      level: 'Expert', 
      description: 'Aggregating large tabular sales datasets and organizing business reports.',
      projects: ['Blinkit Sales Dashboard'] 
    },
    { 
      name: 'ETL Concepts', 
      category: 'handling', 
      level: 'Advanced', 
      description: 'Extracting messy CSVs/SQLs, transforming column attributes, and loading datasets.',
      projects: ['Customer Behaviour Analysis', 'Blinkit Sales Dashboard'] 
    },
  ];

  const categories = [
    { id: 'all', label: 'All Toolbox', icon: <Cpu className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics & BI', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'programming', label: 'Programming & SQL', icon: <Code2 className="w-4 h-4" /> },
    { id: 'handling', label: 'Data Handling / ETL', icon: <Layers className="w-4 h-4" /> },
    { id: 'databases', label: 'Databases', icon: <DatabaseIcon className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            TECHNICAL TOOLS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Data Analyst Skillset
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-50 p-1.5 rounded-2xl max-w-3xl mx-auto border border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md shadow-orange-500/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 hover:border-orange-200 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-slate-800 group-hover:text-orange-500 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${
                    skill.level === 'Expert' 
                      ? 'bg-rose-50 text-rose-600 border-rose-100'
                      : skill.level === 'Advanced'
                      ? 'bg-orange-50 text-orange-600 border-orange-100'
                      : 'bg-amber-50 text-amber-600 border-amber-100'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="border-t border-slate-100/80 pt-4 mt-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">
                  Applied in Projects:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.projects.map((proj, pIdx) => (
                    <span 
                      key={pIdx}
                      className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-medium"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
