'use client';

import resumeData from '../resumeData';
import { Badge } from '../components/ui/badge';

const highlights = [
  'Front-end engineer blending UX craft with performance-minded builds.',
  'Comfortable leading implementation of design systems and component libraries.',
  'Strong collaborator who pairs with design, product, and backend to ship quickly.',
];

export default function AboutPage() {
  const { education, skills, summary } = resumeData;

  return (
    <section className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.24em] text-teal-200">About</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Francis Craven</h1>
        <p className="max-w-3xl text-lg text-slate-300">{summary}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass-panel subtle-grid space-y-4 px-6 py-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">How I work</p>
          <div className="space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-teal-300 to-amber-200" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel space-y-4 px-6 py-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Education</p>
          <div className="space-y-3">
            {education.map((item) => (
              <div key={item.institution} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <p className="text-sm font-semibold text-white">{item.institution}</p>
                <p className="text-slate-400">{item.degree}</p>
                <p className="text-xs text-slate-500">
                  {item.start_date} &ndash; {item.end_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-panel subtle-grid space-y-6 px-6 py-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Toolbox</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, values]) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm font-semibold capitalize text-white">{category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <Badge key={value} variant="default">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
