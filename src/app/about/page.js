'use client';

import { motion } from 'framer-motion';
import resumeData from '../resumeData';
import { Badge } from '../components/ui/badge';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AboutPage() {
  const { education, skills, bio, tagline } = resumeData;

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
          // SYSTEM.README
        </p>
        <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl tracking-tight">
          <span className="text-neon-green neon-text">OPERATOR</span> PROFILE
        </h1>
      </motion.div>

      {/* Bio Terminal */}
      <motion.div variants={itemVariants} className="terminal-panel px-6 py-5 space-y-3">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-neon-green/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta/60" />
          <span className="ml-3 text-[10px] text-text-muted font-mono">readme.md — francis.craven</span>
        </div>
        <div className="font-mono text-sm space-y-2 text-text-muted">
          <p><span className="text-neon-green">$</span> cat /sys/operator/bio</p>
          <p className="text-text-primary leading-relaxed pl-4 border-l-2 border-neon-green/20">
            {bio}
          </p>
          <p className="mt-3"><span className="text-neon-green">$</span> echo $ROLE</p>
          <p className="text-neon-cyan pl-4">{tagline}</p>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <motion.div variants={itemVariants} className="hud-panel px-6 py-5 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// SYSTEM.CHANGELOG</p>
          <div className="space-y-3">
            {education.map((item) => (
              <div key={item.institution} className="rounded border border-border bg-void/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                  <p className="text-sm font-mono text-text-primary">{item.institution}</p>
                </div>
                <p className="text-xs text-neon-cyan font-mono mt-1 pl-4">{item.degree}</p>
                <p className="text-[10px] text-text-muted font-mono pl-4">
                  {item.start_date} — {item.end_date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status */}
        <motion.div variants={itemVariants} className="hud-panel px-6 py-5 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// SYSTEM.STATUS</p>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-text-muted">uptime</span>
              <span className="text-neon-green">7+ years in production</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-muted">mode</span>
              <span className="text-neon-cyan">seeking new missions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-muted">specialization</span>
              <span className="text-neon-magenta">commerce &amp; design systems</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-muted">location</span>
              <span className="text-text-primary">New York</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills / Capabilities */}
      <motion.div variants={itemVariants} className="terminal-panel px-6 py-5 space-y-5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// SYSTEM.CAPABILITIES</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, values]) => (
            <div key={category} className="rounded border border-border bg-void/50 px-4 py-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neon-green font-mono mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {values.map((value) => (
                  <Badge key={value} variant="outline" className="text-[10px]">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
