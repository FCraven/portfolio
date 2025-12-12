import resumeData from '../resumeData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

const { email, github, linkedin } = resumeData;
const linkedinLabel = linkedin.replace(/^https?:\/\/(www\.)?/, '');
const githubLabel = github.replace(/^https?:\/\/(www\.)?/, '');

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-teal-200">Contact</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Let&apos;s collaborate.</h1>
        <p className="text-lg text-slate-300">
          I&apos;m open to roles, partnerships, and short-term engagements. Drop a note and I&apos;ll respond quickly.
        </p>
      </div>

      <Card className="subtle-grid">
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <a href={`mailto:${email}`} className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-teal-300/60">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
              <p className="mt-2 text-sm font-semibold text-white">{email}</p>
              <p className="mt-1 text-xs text-teal-200 opacity-0 transition group-hover:opacity-100">Say hello</p>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-teal-300/60">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">LinkedIn</p>
              <p className="mt-2 text-sm font-semibold text-white">{linkedinLabel}</p>
              <p className="mt-1 text-xs text-teal-200 opacity-0 transition group-hover:opacity-100">Connect</p>
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-teal-300/60">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">GitHub</p>
              <p className="mt-2 text-sm font-semibold text-white">{githubLabel}</p>
              <p className="mt-1 text-xs text-teal-200 opacity-0 transition group-hover:opacity-100">View code</p>
            </a>
          </div>

          <Card className="border-white/10 bg-white/5">
            <CardHeader className="pb-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Availability</p>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-slate-200">
              Currently exploring front-end roles and consulting engagements where thoughtful UX and measurable impact are the goal.
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
