import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubProjects from './components/GitHubProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0d0a14] py-4 px-2 sm:py-8 sm:px-6 md:py-12 md:px-12 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Background ambient lighting blobs */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />

      {/* Main framed card canvas matching the reference screenshot design */}
      <div className="w-full max-w-7xl bg-white border border-slate-200/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] flex flex-col overflow-hidden relative z-10">
        
        {/* Header navigation bar */}
        <Header />

        {/* Core sections */}
        <main className="flex-1 flex flex-col">
          <Hero />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <About />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <Skills />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <Projects />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <GitHubProjects />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <Experience />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <Contact />
        </main>

      </div>
    </div>
  );
}

export default App;
