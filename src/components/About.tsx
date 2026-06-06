import { 
  User, 
  GraduationCap, 
  Languages, 
  Lightbulb, 
  MapPin, 
  Mail, 
  Phone
} from 'lucide-react';

export default function About() {
  const profileDetails = [
    { icon: <User className="w-5 h-5 text-orange-500" />, label: 'Role', value: 'Entry-Level Data Analyst / BI Analyst' },
    { icon: <MapPin className="w-5 h-5 text-rose-500" />, label: 'Location', value: 'Pune, Maharashtra, India' },
    { icon: <Mail className="w-5 h-5 text-amber-500" />, label: 'Email', value: 'pratikhirave01@gmail.com' },
    { icon: <Phone className="w-5 h-5 text-emerald-500" />, label: 'Phone', value: '+91 9503433104' },
  ];

  const softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Clear Communication',
    'Critical Thinking',
    'Detail Oriented',
    'Eager Learner'
  ];

  const languages = [
    { name: 'Marathi', level: 'Native / Bilingual' },
    { name: 'Hindi', level: 'Professional Working' },
    { name: 'English', level: 'Professional Working' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-slate-50/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            PROFILE SUMMARY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            About Pratik Hirave
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block - Bio & Profile Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-500/5 p-6 md:p-8 flex flex-col justify-between transition-all hover:shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <User className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Professional Summary</h3>
                  <p className="text-xs text-slate-400">Aspiring Data Analyst</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                I am an aspiring Data Analyst skilled in <strong>SQL</strong>, <strong>Excel</strong>, <strong>Power BI</strong>, and <strong>Python</strong>. I have a solid understanding of data cleaning, exploratory data analysis, dashboard creation, and general data pipelines. I am highly passionate about turning raw, messy data into clean, meaningful metrics that guide critical business decisions. Currently, I am actively seeking an entry-level Data Analyst or BI Analyst role.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 mt-4">
              {profileDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 mt-0.5">{detail.icon}</div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">{detail.label}</span>
                    <span className="text-xs font-semibold text-slate-700">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Education & Skills */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-500/5 p-6 transition-all hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <GraduationCap className="text-rose-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Education Credentials</h3>
                  <p className="text-[10px] text-slate-400">Shivaji University, Kolhapur</p>
                </div>
              </div>
              
              <div className="border-l-2 border-orange-200 pl-4 py-1 ml-5">
                <span className="text-[10px] font-bold text-orange-500 uppercase">2021 - 2024</span>
                <h4 className="text-xs font-bold text-slate-800 mt-0.5">B.Sc. in Computer Science</h4>
                <p className="text-xs text-slate-500 mt-1">Dahiwadi College, Dahiwadi</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    8.34 CGPA
                  </span>
                  <span className="bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    Ranked Top 10%
                  </span>
                </div>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-500/5 p-6 transition-all hover:shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Lightbulb className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Interpersonal Strengths</h3>
                    <p className="text-[10px] text-slate-400">Core Professional Values</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {softSkills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="bg-slate-50 text-slate-600 border border-slate-100 px-3 py-1.5 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages List */}
              <div className="border-t border-slate-100 pt-4 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">Languages Spoken</span>
                </div>
                <div className="flex justify-between items-center gap-4 text-xs">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-bold text-slate-700">{lang.name}</span>
                      <span className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
