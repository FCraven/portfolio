'use client';

import Image from 'next/image';
import resumeData from '../resumeData';
import iconMapping from '../utils/iconMapping';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

export default function ProjectsPage() {
  const { experience } = resumeData;

  return (
    <section className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-teal-200">Projects & experience</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Impact across commerce and education.</h1>
        <p className="max-w-3xl text-slate-300">
          I build performant front-end experiences, mentor teams, and deliver measurable gains for customers and business outcomes.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.company} className="subtle-grid space-y-4">
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {job.image && (
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src={job.image}
                      alt={`${job.company} logo`}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <CardDescription className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    {job.company}
                  </CardDescription>
                  <CardTitle className="text-xl">{job.role}</CardTitle>
                  <p className="text-xs text-slate-500">
                    {job.start_date} &ndash; {job.end_date}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {job.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => {
                    const IconComponent = iconMapping[tech.icon];
                    return (
                      <Badge key={tech.name} variant="outline" className="text-xs sm:text-sm">
                        {IconComponent && <IconComponent className="text-base" aria-label={tech.name} />}
                        {tech.name}
                      </Badge>
                    );
                  })}
                </div>
              )}

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Key achievements</p>
                <ul className="space-y-3">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-teal-300 to-amber-200" />
                      <p>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {job.projects?.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Select launches</p>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {job.projects.map((project) => (
                      <a
                        key={project.name}
                        href={project.link || '#'}
                        target={project.link ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-teal-300/60 hover:shadow-[0_18px_70px_rgba(45,212,191,0.25)]"
                      >
                        <div className="flex h-28 items-center justify-center bg-slate-900/60 px-4">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={220}
                            height={100}
                            className="max-h-16 w-auto object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-between px-4 py-3">
                          <p className="text-sm font-semibold text-white">{project.name}</p>
                          {project.link && (
                            <span className="text-[10px] uppercase tracking-[0.2em] text-teal-200 group-hover:text-white">
                              View
                            </span>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
