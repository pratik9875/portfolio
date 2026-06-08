import { useState } from 'react';
import DashboardHero from './DashboardHero';
import { Copy, Check, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const emailAddress = 'pratikhirave59@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full pt-8 pb-16 md:py-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-400/5 to-rose-400/5 blur-3xl -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Top Hero: Photo + Text side by side ── */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">

          {/* Left — Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-4 animate-fadeIn">
              INTRODUCTION
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.1] mb-5">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Pratik
              </span>
              <br className="hidden md:block" />
              {' '}Data Analyst
            </h1>

            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-md">
              Transforming raw, messy data into clean dashboards, actionable metrics, and data‑driven business strategies using SQL, Power BI, Python & Excel.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* Email copy pill */}
              <div className="flex items-center bg-white border border-orange-100 shadow-lg shadow-orange-500/5 rounded-2xl p-1 gap-2">
                <div className="flex items-center gap-2 pl-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-600 whitespace-nowrap hidden sm:block">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-95 transition-all px-4 py-2.5 rounded-xl shrink-0 flex items-center gap-1.5"
                >
                  {copied ? (
                    <><Check className="w-3.5 h-3.5" /> Copied!</>
                  ) : (
                    <><Copy className="w-3.5 h-3.5" /> Copy Email</>
                  )}
                </button>
              </div>

              {/* Resume Download button */}
              <a
                href="/pratik hirave resume (1).pdf"
                download="pratik hirave resume (1).pdf"
                className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-5 py-3 rounded-2xl shadow-md transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>

            {/* Tech stack footnotes */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                SQL & Power BI
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Python & Pandas
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Excel & Tableau
              </div>
            </div>
          </div>

          {/* Right — Professional Photo */}
          <div className="relative shrink-0 animate-fadeIn">
            {/* Outer decorative glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-rose-400 to-amber-400 blur-md opacity-20 scale-110 pointer-events-none" />

            {/* Gradient ring border */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-br from-orange-500 via-rose-500 to-amber-400 shadow-2xl shadow-orange-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                {!imgError ? (
                  <img
                    src="/Pratik.jpeg"
                    alt="Pratik Hirave — Data Analyst"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback initials avatar shown until you add the photo */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-rose-50 gap-1">
                    <span className="text-5xl font-black bg-gradient-to-br from-orange-500 to-rose-500 bg-clip-text text-transparent select-none">
                      PH
                    </span>
                    <span className="text-[9px] text-slate-400 font-semibold tracking-wider">Add photo →</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badge — Open to Work */}
            <div className="absolute -bottom-3 -left-4 bg-white border border-orange-100 shadow-xl rounded-2xl px-3 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">Open to Work</span>
            </div>

            {/* Floating badge — Projects count */}
            <div className="absolute -top-2 -right-4 bg-white border border-orange-100 shadow-xl rounded-2xl px-3 py-2 text-center">
              <span className="text-base font-black text-slate-800 block leading-none">8+</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Projects</span>
            </div>
          </div>

        </div>

        {/* ── Dashboard Hero Widget ── */}
        <div className="w-full animate-slideUp">
          <DashboardHero />
        </div>

      </div>
    </section>
  );
}
