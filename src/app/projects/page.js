'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import resumeData from '../resumeData';
import iconMapping from '../utils/iconMapping';
import { Badge } from '../components/ui/badge';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsPage() {
  const { experience } = resumeData;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-6xl space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-mono">
          // MISSION.LOG
        </p>
        <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl tracking-tight">
          <span className="text-neon-green neon-text">COMPLETED</span> OPERATIONS
        </h1>
        <p className="max-w-2xl text-sm text-text-muted font-mono">
          <span className="text-neon-green">&gt;</span> Each mission shaped how I think about commerce, performance, and developer experience.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="space-y-6">
        {experience.map((job) => {
          const isActive = job.end_date === 'Present';
          return (
            <motion.div
              key={job.company}
              variants={itemVariants}
              className={`hud-panel ${isActive ? 'border-neon-green/30' : ''}`}
            >
              {/* Mission Header */}
              <div className="border-b border-border px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {job.image && (
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-border bg-void">
                      <Image
                        src={job.image}
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  {!job.image && (
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-neon-green/30 bg-neon-green/10">
                      <span className="font-heading text-sm font-bold text-neon-green">
                        {job.company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neon-magenta font-mono">
                      {job.codename}
                    </p>
                    <p className="text-lg font-heading font-semibold text-text-primary">{job.company}</p>
                    <p className="text-xs text-text-muted font-mono">{job.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isActive && (
                    <div className="flex items-center gap-1.5 mr-2">
                      <span className="h-2 w-2 rounded-full bg-neon-green animate-glow-pulse" />
                      <span className="text-[10px] text-neon-green font-mono">ACTIVE</span>
                    </div>
                  )}
                  <Badge variant={isActive ? 'accent' : 'default'} className="text-[10px]">
                    {job.start_date} — {job.end_date}
                  </Badge>
                </div>
              </div>

              {/* Mission Brief */}
              <div className="px-6 py-4 border-b border-border/50">
                <p className="text-sm text-text-muted font-mono">
                  <span className="text-neon-green">&gt;</span> {job.brief}
                </p>
              </div>

              {/* Content */}
              <div className="px-6 py-5 space-y-5">
                {/* Arsenal */}
                {job.techStack?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono mb-2">ARSENAL</p>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => {
                        const IconComponent = iconMapping[tech.icon];
                        return (
                          <Badge key={tech.name} variant="outline" className="text-xs">
                            {IconComponent && <IconComponent className="text-sm text-neon-cyan" aria-label={tech.name} />}
                            {tech.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Impact Log */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono mb-2">IMPACT_LOG</p>
                  <div className="space-y-1.5">
                    {job.impact.map((line, i) => (
                      <p key={i} className="text-sm font-mono text-text-muted flex gap-2">
                        <span className="text-neon-green shrink-0">&gt;</span>
                        <span className="text-text-primary">{line}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Deployments */}
                {job.projects?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono mb-2">DEPLOYMENTS</p>
                    <div className="rounded border border-border bg-void/50 divide-y divide-border/50">
                      {job.projects.map((project) => {
                        const domain = project.link
                          ? project.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
                          : null;
                        return (
                          <a
                            key={project.name}
                            href={project.link || '#'}
                            target={project.link ? '_blank' : '_self'}
                            rel="noreferrer"
                            className={`group flex items-center justify-between px-4 py-3 font-mono text-sm transition-all ${
                              project.link
                                ? 'hover:bg-neon-green/5 cursor-pointer'
                                : 'cursor-default'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-neon-green">{'>'}</span>
                              <span className="text-text-primary">{project.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              {domain && (
                                <span className="text-[10px] text-text-muted hidden sm:inline">
                                  {domain}
                                </span>
                              )}
                              {project.link ? (
                                <span className="text-[9px] uppercase tracking-[0.2em] text-neon-green opacity-50 group-hover:opacity-100 transition-opacity">
                                  LAUNCH →
                                </span>
                              ) : (
                                <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                                  INTERNAL
                                </span>
                              )}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
