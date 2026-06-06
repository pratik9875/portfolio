import { useState, useEffect } from 'react';
import { Menu, X, Database, Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-all">
            <Database className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 tracking-tight leading-none group-hover:text-orange-500 transition-colors">
              Pratik Hirave
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
              Data Analyst Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navbar Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call to Action buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors border border-orange-200 hover:border-orange-500 px-4 py-2 rounded-xl"
          >
            Hire Me
          </a>
          <a 
            href="/Pratik_Hirave_Resume.pdf"
            download="Pratik_Hirave_Resume.pdf"
            className="text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-95 transition-opacity px-4 py-2.5 rounded-xl shadow-md shadow-orange-500/10 flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>

        {/* Mobile menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
        </button>

      </div>

      {/* Mobile Drawer menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-orange-100 shadow-xl py-6 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors border-b border-slate-50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center text-xs font-bold text-orange-500 border border-orange-200 py-3 rounded-xl"
              >
                Hire Me
              </a>
              <a 
                href="/Pratik_Hirave_Resume.pdf"
                download="Pratik_Hirave_Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 py-3 rounded-xl flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
