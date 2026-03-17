'use client';

import { motion } from 'framer-motion';
import resumeData from '../resumeData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const { email, github, linkedin, status } = resumeData;

const channels = [
  {
    label: 'EMAIL',
    value: email,
    href: `mailto:${email}`,
    command: 'mail -s "Hello"',
    colorClass: 'text-neon-green',
    hoverBorder: 'hover:border-neon-green/40',
  },
  {
    label: 'GITHUB',
    value: 'FCraven',
    href: github,
    command: 'git clone',
    colorClass: 'text-neon-cyan',
    hoverBorder: 'hover:border-neon-cyan/40',
  },
  {
    label: 'LINKEDIN',
    value: 'francis-craven',
    href: linkedin,
    command: 'ssh connect',
    colorClass: 'text-neon-magenta',
    hoverBorder: 'hover:border-neon-magenta/40',
  },
];

export default function ContactPage() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-4xl space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-mono">
          // ESTABLISH_CONNECTION
        </p>
        <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl tracking-tight">
          <span className="text-neon-green neon-text">OPEN</span> CHANNEL
        </h1>
        <p className="text-sm text-text-muted font-mono">
          <span className="text-neon-green">&gt;</span> Accepting incoming transmissions. Response time: fast.
        </p>
      </motion.div>

      {/* Connection Channels */}
      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target={ch.label !== 'EMAIL' ? '_blank' : '_self'}
            rel="noreferrer"
            className={`group hud-panel px-5 py-5 transition-all ${ch.hoverBorder} hover:shadow-[0_0_20px_rgba(0,255,136,0.08)] cursor-pointer`}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono">{ch.label}</p>
            <p className="text-xs text-text-muted font-mono mt-2 opacity-60">
              <span className={ch.colorClass}>$</span> {ch.command}
            </p>
            <p className={`mt-2 text-sm font-mono ${ch.colorClass} break-all`}>
              {ch.value}
            </p>
            <p className={`mt-2 text-[9px] uppercase tracking-[0.2em] ${ch.colorClass} opacity-0 group-hover:opacity-100 transition-opacity font-mono`}>
              CONNECT &rarr;
            </p>
          </a>
        ))}
      </motion.div>

      {/* Status Terminal */}
      <motion.div variants={itemVariants} className="terminal-panel px-6 py-5">
        <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-neon-green/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta/60" />
          <span className="ml-3 text-[10px] text-text-muted font-mono">terminal — status</span>
        </div>
        <div className="font-mono text-sm space-y-2">
          <p className="text-text-muted">
            <span className="text-neon-green">$</span> cat /sys/status
          </p>
          <p className="text-text-primary pl-4 border-l-2 border-neon-green/20">
            {status}
          </p>
          <p className="text-text-muted mt-3">
            <span className="text-neon-green">$</span> echo $AVAILABILITY
          </p>
          <p className="text-neon-green pl-4">
            OPEN — roles, consulting, and interesting problems
          </p>
          <p className="text-text-muted mt-3">
            <span className="text-neon-green">$</span> <span className="typing-cursor" />
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
