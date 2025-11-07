import { useState, useEffect } from 'react';
import { Moon, Sun, Palette } from 'lucide-react';

const THEMES = {
  light: {
    name: 'Light',
    bg: 'from-white via-white to-slate-100',
    text: 'text-slate-800',
    accent: 'bg-slate-900 text-white hover:bg-slate-800',
  },
  dark: {
    name: 'Dark',
    bg: 'from-slate-900 via-slate-900 to-black',
    text: 'text-slate-100',
    accent: 'bg-white text-slate-900 hover:bg-slate-200',
  },
  twilight: {
    name: 'Twilight',
    bg: 'from-indigo-900 via-purple-900 to-slate-900',
    text: 'text-indigo-100',
    accent: 'bg-indigo-500 text-white hover:bg-indigo-400',
  },
  futuristic: {
    name: 'Futuristic',
    bg: 'from-slate-900 via-cyan-900 to-emerald-900',
    text: 'text-cyan-100',
    accent: 'bg-cyan-500 text-white hover:bg-cyan-400',
  },
  halloween: {
    name: 'Halloween',
    bg: 'from-black via-zinc-900 to-amber-900',
    text: 'text-amber-100',
    accent: 'bg-amber-500 text-black hover:bg-amber-400',
  },
  cupid: {
    name: 'Pinkish Cupid',
    bg: 'from-rose-100 via-pink-200 to-fuchsia-200',
    text: 'text-rose-900',
    accent: 'bg-rose-600 text-white hover:bg-rose-500',
  },
};

export default function Navbar({ onNavigate, theme, setTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const themeKeys = Object.keys(THEMES);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30`}> 
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => onNavigate('home')} className={`font-semibold tracking-tight text-lg ${THEMES[theme].text}`}>
            Manav Dhakate
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {['home','about','skills','projects','contact'].map((id) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`relative capitalize ${THEMES[theme].text} group`}
              >
                {id}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <div className="relative">
              <button
                aria-label="Change theme"
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm shadow ${THEMES[theme].accent}`}
              >
                <Palette size={16} />
                Theme
              </button>
              <div className="absolute right-0 mt-2 grid w-44 grid-cols-1 rounded-lg border border-white/10 bg-white/90 p-2 shadow-xl backdrop-blur dark:bg-black/70">
                {themeKeys.map((k) => (
                  <button
                    key={k}
                    onClick={() => setTheme(k)}
                    className={`text-left rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 ${THEMES[theme].text}`}
                  >
                    {THEMES[k].name}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`rounded-full p-2 shadow ${THEMES[theme].accent}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className={`rounded-full px-3 py-1 text-sm shadow ${THEMES[theme].accent}`}>
              Menu
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden grid gap-2 pb-3">
            {['home','about','skills','projects','contact'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  setOpen(false);
                }}
                className={`rounded-md px-3 py-2 text-left capitalize hover:bg-black/5 dark:hover:bg-white/10 ${THEMES[theme].text}`}
              >
                {id}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export { THEMES };