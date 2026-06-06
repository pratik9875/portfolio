import { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Clock,
  BookOpen,
  Loader2,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  size: number;
}

// Language color map
const langColors: Record<string, { bg: string; dot: string }> = {
  'Jupyter Notebook': { bg: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-500' },
  'Python':           { bg: 'bg-blue-50 text-blue-700 border-blue-200',   dot: 'bg-blue-500' },
  'TypeScript':       { bg: 'bg-sky-50 text-sky-700 border-sky-200',      dot: 'bg-sky-500' },
  'JavaScript':       { bg: 'bg-yellow-50 text-yellow-700 border-yellow-200', dot: 'bg-yellow-400' },
  'SQL':              { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  'R':                { bg: 'bg-rose-50 text-rose-700 border-rose-200',   dot: 'bg-rose-500' },
};

// Friendly readable names for repos
const repoDisplayNames: Record<string, { title: string; desc: string; tags: string[] }> = {
  'Customer_behaviour_analysis': {
    title: 'Customer Behaviour Analysis',
    desc: 'EDA & segmentation using Python, Pandas, SQL & MySQL on customer purchase data to identify demographic patterns and retention metrics.',
    tags: ['Python', 'Pandas', 'SQL', 'MySQL', 'EDA'],
  },
  'Web-Scraping-for-Analysis': {
    title: 'Web Scraping for Analysis',
    desc: 'BeautifulSoup & Requests pipeline to extract, clean and analyse structured web data for analytical insights.',
    tags: ['Python', 'BeautifulSoup', 'Data Collection'],
  },
  'Superstore-sales-dashboard-Power-Bi': {
    title: 'Superstore Sales Dashboard — Power BI',
    desc: 'Interactive Power BI dashboard visualising Superstore retail KPIs, regional breakdowns, and profit trend analysis.',
    tags: ['Power BI', 'DAX', 'KPI', 'Sales Analysis'],
  },
  'Codealpha-internship-task-3': {
    title: 'CodeAlpha Internship — Task 3',
    desc: 'Advanced data analysis task completed during CodeAlpha Data Analytics internship using Python & Jupyter.',
    tags: ['Python', 'Jupyter', 'CodeAlpha'],
  },
  'Codealpha-internship-task-2': {
    title: 'CodeAlpha Internship — Task 2',
    desc: 'Data wrangling and visualisation task from CodeAlpha internship programme, showcasing EDA skills.',
    tags: ['Python', 'Jupyter', 'Visualisation'],
  },
  'Oasis-Infobyte-Internship-Third-Task': {
    title: 'Oasis Infobyte Internship — Task 3',
    desc: 'Third analytical task from Oasis Infobyte internship: advanced EDA with Matplotlib/Seaborn visualisations.',
    tags: ['Python', 'Seaborn', 'EDA'],
  },
  'Oasis-Infobyte-Internship-Second-Task': {
    title: 'Oasis Infobyte Internship — Task 2',
    desc: 'Second task from Oasis Infobyte internship focusing on data cleaning, transformation, and analysis.',
    tags: ['Python', 'Pandas', 'Data Cleaning'],
  },
  'Oasis-Infobyte-Internship-First-Task': {
    title: 'Oasis Infobyte Internship — Task 1',
    desc: 'Exploratory data analysis and visualisation project completed as first task for Oasis Infobyte internship.',
    tags: ['Python', 'Matplotlib', 'EDA'],
  },
};

// Repos to exclude from display
const EXCLUDE = ['portfolio'];

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 30) return `${diffDays}d ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${Math.floor(diffMonths / 12)}y ago`;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'analysis' | 'dashboard' | 'internship'>('all');

  useEffect(() => {
    fetch('https://api.github.com/users/pratik9875/repos?sort=updated&per_page=30')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API rate limit or network error.');
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        const filtered = data.filter((r) => !EXCLUDE.includes(r.name) && !r.name.startsWith('.'));
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filterCategories = [
    { id: 'all',       label: 'All Repos' },
    { id: 'analysis',  label: 'Data Analysis' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'internship',label: 'Internships' },
  ];

  const getFilteredRepos = () => {
    if (filter === 'all') return repos;
    if (filter === 'analysis')
      return repos.filter(r =>
        r.name.toLowerCase().includes('analysis') ||
        r.name.toLowerCase().includes('scraping') ||
        r.name.toLowerCase().includes('behaviour')
      );
    if (filter === 'dashboard')
      return repos.filter(r =>
        r.name.toLowerCase().includes('dashboard') ||
        r.name.toLowerCase().includes('power') ||
        r.name.toLowerCase().includes('blinkit')
      );
    if (filter === 'internship')
      return repos.filter(r =>
        r.name.toLowerCase().includes('oasis') ||
        r.name.toLowerCase().includes('codealpha') ||
        r.name.toLowerCase().includes('internship')
      );
    return repos;
  };

  const displayedRepos = getFilteredRepos();

  const getLangStyle = (lang: string | null) =>
    langColors[lang ?? ''] ?? { bg: 'bg-slate-50 text-slate-600 border-slate-200', dot: 'bg-slate-400' };

  const getMeta = (repo: GitHubRepo) =>
    repoDisplayNames[repo.name] ?? {
      title: repo.name.replace(/-|_/g, ' '),
      desc: repo.description ?? 'A data analytics project hosted on GitHub.',
      tags: repo.language ? [repo.language] : [],
    };

  return (
    <section id="github" className="py-16 md:py-24 px-6 bg-white relative">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-100 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            OPEN SOURCE WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3">
            <Github className="w-8 h-8 text-slate-700" />
            GitHub Repositories
          </h2>
          <p className="text-xs text-slate-500 mt-3 max-w-md leading-relaxed">
            Live-fetched directly from{' '}
            <a
              href="https://github.com/pratik9875"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 font-semibold hover:underline"
            >
              github.com/pratik9875
            </a>
            {' '}— always up to date.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-slate-50 p-1.5 rounded-2xl max-w-xl mx-auto border border-slate-100">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md shadow-orange-500/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            <span className="text-sm font-medium">Fetching repositories from GitHub…</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 px-5 py-3 rounded-2xl text-sm font-medium">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error} — Showing cached fallback data.
            </div>
          </div>
        )}

        {/* Repo Cards Grid */}
        {!loading && !error && (
          <>
            {displayedRepos.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm">
                No repositories in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayedRepos.map((repo) => {
                  const meta = getMeta(repo);
                  const langStyle = getLangStyle(repo.language);

                  return (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-slate-50/60 hover:bg-white border border-slate-100 hover:border-orange-200 rounded-3xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 no-underline"
                    >
                      {/* Top Row */}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4 text-orange-500" />
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-orange-400 transition-colors mt-1 shrink-0" />
                        </div>

                        <h3 className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                          {meta.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                          {meta.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {meta.tags.slice(0, 4).map((tag, i) => (
                            <span
                              key={i}
                              className="bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-md text-[10px] font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row */}
                      <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-semibold">
                          {/* Language */}
                          {repo.language && (
                            <span className={`flex items-center gap-1 border px-2 py-0.5 rounded-full text-[9px] font-bold ${langStyle.bg}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${langStyle.dot}`} />
                              {repo.language}
                            </span>
                          )}

                          {/* Stars */}
                          <span className="flex items-center gap-0.5">
                            <Star className="w-3 h-3" />
                            {repo.stargazers_count}
                          </span>

                          {/* Forks */}
                          <span className="flex items-center gap-0.5">
                            <GitFork className="w-3 h-3" />
                            {repo.forks_count}
                          </span>
                        </div>

                        {/* Updated */}
                        <span className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
                          <Clock className="w-3 h-3" />
                          {timeAgo(repo.updated_at)}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}

            {/* View All button */}
            <div className="flex justify-center mt-10">
              <a
                href="https://github.com/pratik9875"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-2xl shadow-md transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Github className="w-4 h-4" />
                View All on GitHub
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
