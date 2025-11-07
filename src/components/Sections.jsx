import { motion } from 'framer-motion';
import { CheckCircle2, Code2, BadgeCheck, Star, ExternalLink } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-square w-full rounded-3xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-rose-200 dark:from-indigo-900/40 dark:via-fuchsia-900/30 dark:to-rose-900/30 shadow-inner" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I'm Manav, an 11th-grade student who loves turning ideas into interactive products. I explore web technologies, automation, and AI — with a special passion for Discord bot development.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Clean, accessible UI</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Strong foundations in JS/TS & Python</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Fast learner, team player</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  const skills = [
    { label: 'JavaScript/TypeScript', level: 85 },
    { label: 'Python', level: 80 },
    { label: 'React', level: 85 },
    { label: 'Node.js', level: 75 },
    { label: 'Discord Bots', level: 90 },
  ];
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/30">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow backdrop-blur dark:bg-white/5">
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.label}</span>
                <Code2 className="text-indigo-500" size={18} />
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" style={{ width: `${s.level}%` }} />
              </div>
              <div className="mt-2 text-right text-sm text-slate-500">{s.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    { title: 'Portfolio 3D', desc: 'Interactive 3D hero with Spline.', stack: ['React','Spline','Tailwind'], link: '#', demo: '#'},
    { title: 'Discord Mod Bot', desc: 'Custom moderation and leveling system.', stack: ['Node','Discord.js'], link: '#', demo: '#'},
    { title: 'Study Planner', desc: 'Task planning with reminders.', stack: ['React','Firebase'], link: '#', demo: '#'},
  ];
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="text-sm text-slate-500">Filters: All / Web / Bots / Apps</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-white/70 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:bg-white/5">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-300 via-fuchsia-300 to-rose-300 dark:from-indigo-900/40 dark:via-fuchsia-900/30 dark:to-rose-900/30" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs dark:bg-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <a href={p.link} className="inline-flex items-center gap-1 hover:underline"><ExternalLink size={14}/> Code</a>
                <a href={p.demo} className="inline-flex items-center gap-1 hover:underline"><Star size={14}/> Live</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-transparent to-slate-50 dark:to-slate-900/30">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-200 bg-white/70 p-3 shadow dark:border-white/10 dark:bg-white/5" placeholder="Name" />
          <input className="rounded-xl border border-slate-200 bg-white/70 p-3 shadow dark:border-white/10 dark:bg-white/5" placeholder="Email" type="email" />
          <textarea className="sm:col-span-2 rounded-xl border border-slate-200 bg-white/70 p-3 shadow dark:border-white/10 dark:bg-white/5" placeholder="Message" rows={5} />
          <div className="sm:col-span-2">
            <button type="submit" className="rounded-full bg-indigo-600 px-5 py-2 text-white shadow hover:bg-indigo-500">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
