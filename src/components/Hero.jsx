import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero({ onCta }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-black/60 dark:via-black/40 dark:to-black/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 flex min-h-[90vh] items-center">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-300">Passionate Developer • Discord Bot Expert • Lifelong Learner</p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600">
            Manav Dhakate
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-200">
            Building interactive experiences, smart bots, and modern web apps. I love crafting delightful UIs and scalable systems that feel effortless to use.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={onCta} className="rounded-full bg-indigo-600 px-5 py-2 text-white shadow hover:bg-indigo-500 transition">
              View My Work
            </button>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full p-2 bg-white/70 dark:bg-white/10 backdrop-blur hover:scale-105 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full p-2 bg-white/70 dark:bg-white/10 backdrop-blur hover:scale-105 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@example.com" className="rounded-full p-2 bg-white/70 dark:bg-white/10 backdrop-blur hover:scale-105 transition" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://discord.com/users/" target="_blank" rel="noreferrer" className="rounded-full p-2 bg-white/70 dark:bg-white/10 backdrop-blur hover:scale-105 transition" aria-label="Discord">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-300 animate-bounce">
        <ChevronDown />
      </div>
    </section>
  );
}
