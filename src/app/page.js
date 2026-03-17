'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import resumeData from './resumeData';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import GlitchText from './components/GlitchText';
import BootSequence from './components/BootSequence';
import InteractiveTerminal from './components/InteractiveTerminal';

const stats = [
  { label: 'REVENUE_INFLUENCED', numValue: 1.5, prefix: '$', suffix: 'M', unit: '/month', color: 'text-neon-green', decimals: 1 },
  { label: 'DEVS_TRAINED', numValue: 350, prefix: '', suffix: '', unit: '+', color: 'text-neon-cyan', decimals: 0 },
  { label: 'ACTIVE_OPERATIONS', numValue: 3, prefix: '', suffix: '', unit: ' live', color: 'text-neon-magenta', decimals: 0 },
];

const arsenal = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Medusa.js', 'Shopify'];

function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="animate-blink">_</span>}
    </span>
  );
}

function AnimatedCounter({ target, prefix = '', suffix = '', decimals = 0, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (current >= steps) {
        setCount(target);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [started, target, duration]);

  return <span>{prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}</span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HomePage() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('craven_os_booted')) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <>
      <BootSequence onComplete={handleBootComplete} />

      {booted && (
        <section className="mx-auto max-w-6xl space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* System header */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-mono">
                // SYSTEM.BOOT — CRAVEN_OS v1.0
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_rgba(0,255,136,0.5)] animate-glow-pulse" />
                <span className="text-xs text-neon-green font-mono">STATUS: ONLINE</span>
              </div>
            </motion.div>

            {/* Hero with Glitch */}
            <motion.div variants={itemVariants}>
              <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl tracking-tight">
                <GlitchText className="text-neon-green neon-text">FRANCIS</GlitchText>
                <br />
                <GlitchText>CRAVEN</GlitchText>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-lg text-text-muted font-mono leading-relaxed">
                <span className="text-neon-green">&gt;</span>{' '}
                <TypewriterText text={resumeData.bio} delay={600} />
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/projects">[VIEW_PROJECTS]</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">[INIT_CONTACT]</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* HUD Stats with animated counters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="hud-panel px-5 py-5 group hover:border-neon-green/30 transition-all"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono">{stat.label}</p>
                <p className={`mt-2 font-heading text-3xl font-bold ${stat.color}`}>
                  <AnimatedCounter target={stat.numValue} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} delay={800 + i * 200} />
                  <span className="text-base font-mono text-text-muted">{stat.unit}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Terminal — front and center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono mb-3">
              // INTERACTIVE_TERMINAL — type &quot;help&quot; to explore
            </p>
            <InteractiveTerminal />
          </motion.div>

          {/* Arsenal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hud-panel px-6 py-5"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono mb-3">// PRIMARY_ARSENAL</p>
            <div className="flex flex-wrap gap-2">
              {arsenal.map((tech, i) => (
                <Badge key={tech} variant={i === 0 ? 'accent' : 'default'}>
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Mission Log Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="terminal-panel px-6 py-5 space-y-3"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-mono">// RECENT_MISSIONS</p>
            {resumeData.experience.slice(0, 5).map((role) => (
              <div key={role.company} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-mono text-neon-green">{role.company}</p>
                  <p className="text-xs text-text-muted font-mono">{role.role}</p>
                </div>
                <p className="text-[10px] text-text-muted font-mono">
                  {role.start_date} — {role.end_date}
                </p>
              </div>
            ))}
          </motion.div>
        </section>
      )}
    </>
  );
}
