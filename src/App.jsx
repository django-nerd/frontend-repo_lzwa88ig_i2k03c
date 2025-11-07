import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar, { THEMES } from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Projects, Contact } from './components/Sections';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const sectionsRef = useRef({});

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onCta = () => onNavigate('projects');

  const themeBg = useMemo(() => THEMES[theme].bg, [theme]);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeBg} transition-colors duration-500`}> 
      <Navbar onNavigate={onNavigate} theme={theme} setTheme={setTheme} />
      <main className="overflow-x-hidden">
        <Hero onCta={onCta} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Manav Dhakate — Crafted with care.
      </footer>
    </div>
  );
}

export default App;