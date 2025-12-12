'use client';

import Link from 'next/link';
import Image from 'next/image';
import resumeData from './resumeData';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

const featuredLogos = resumeData.experience[0]?.projects?.slice(0, 5) || [];
const featuredExperience = resumeData.experience.slice(0, 3);
const focusAreas = [
  'Design systems & UI libraries',
  'High-performing eCommerce experiences',
  'Developer experience & workflows',
  'Data-informed UX decisions',
];
const keyTech = ['React', 'Next.js', 'Shopify Hydrogen', 'TypeScript', 'Node.js', 'Tailwind'];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl space-y-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-teal-200">Front-end engineer & CS student</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
            Building interfaces that feel premium, fast, and intentional.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            {resumeData.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/projects">View projects & experience</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Work together</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-panel px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Commerce impact</p>
              <p className="mt-2 text-2xl font-semibold text-white">$1.5M/mo</p>
              <p className="text-sm text-slate-400">Revenue influenced across boutique brands</p>
            </div>
            <div className="glass-panel px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Teaching</p>
              <p className="mt-2 text-2xl font-semibold text-white">350+ devs</p>
              <p className="text-sm text-slate-400">Mentored through full-stack curriculum</p>
            </div>
            <div className="glass-panel px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Toolbox</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {keyTech.map((tech, idx) => (
                  <Badge key={tech} variant={idx === 0 ? 'accent' : 'default'}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel subtle-grid relative overflow-hidden px-6 py-7">
          <div className="absolute -left-10 top-4 h-24 w-24 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-amber-300/10 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">What I&apos;m focused on</p>
          <div className="mt-4 space-y-3">
            {focusAreas.map((focus) => (
              <div
                key={focus}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-teal-300 to-amber-200" />
                <p>{focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Recent roles</p>
            <div className="mt-3 space-y-3">
              {featuredExperience.map((role) => (
                <div key={role.company} className="flex items-center justify-between text-sm text-slate-200">
                  <div>
                    <p className="font-semibold text-white">{role.company}</p>
                    <p className="text-slate-400">{role.role}</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    {role.start_date} - {role.end_date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {featuredLogos.length > 0 && (
        <div className="glass-panel subtle-grid overflow-hidden px-6 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Brands shipped for</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {featuredLogos.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={160}
                  height={80}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
