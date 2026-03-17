'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: 'CRAVEN_OS v1.0', delay: 0, type: 'header' },
  { text: '================================', delay: 100, type: 'divider' },
  { text: 'Initializing kernel...', delay: 300, type: 'system' },
  { text: '[OK] Memory allocated: 16GB', delay: 600, type: 'ok' },
  { text: '[OK] GPU detected: RTX_CREATIVE', delay: 900, type: 'ok' },
  { text: '[OK] Loading modules: React, Next.js, Tailwind', delay: 1200, type: 'ok' },
  { text: '[OK] Mounting /dev/portfolio', delay: 1500, type: 'ok' },
  { text: 'Loading operator profile...', delay: 1800, type: 'system' },
  { text: '> Name: Francis P. Craven', delay: 2100, type: 'data' },
  { text: '> Role: Front-end Systems Architect', delay: 2300, type: 'data' },
  { text: '> Status: ONLINE', delay: 2500, type: 'status' },
  { text: '', delay: 2700, type: 'blank' },
  { text: 'All systems operational. Launching interface...', delay: 2800, type: 'final' },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  // Check if already booted this session
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('craven_os_booted')) {
      setSkipped(true);
      onComplete?.();
    }
  }, [onComplete]);

  useEffect(() => {
    if (skipped) return;

    const timeouts = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (i === bootLines.length - 1) {
          setTimeout(() => {
            setDone(true);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('craven_os_booted', 'true');
            }
            setTimeout(() => onComplete?.(), 600);
          }, 800);
        }
      }, line.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [skipped, onComplete]);

  const handleSkip = useCallback(() => {
    setDone(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('craven_os_booted', 'true');
    }
    onComplete?.();
  }, [onComplete]);

  if (skipped) return null;

  const getColor = (type) => {
    switch (type) {
      case 'header': return 'text-neon-green neon-text font-heading text-xl';
      case 'divider': return 'text-border';
      case 'system': return 'text-text-muted';
      case 'ok': return 'text-neon-green';
      case 'data': return 'text-neon-cyan';
      case 'status': return 'text-neon-green font-bold';
      case 'final': return 'text-neon-magenta';
      default: return 'text-text-muted';
    }
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-void flex items-center justify-center"
        >
          <div className="w-full max-w-2xl px-6">
            <div className="terminal-panel px-6 py-6 font-mono text-sm space-y-1">
              {visibleLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={getColor(line.type)}
                >
                  {line.text}
                </motion.p>
              ))}
              {!done && visibleLines.length > 0 && (
                <span className="inline-block w-2 h-4 bg-neon-green animate-blink" />
              )}
            </div>
            <button
              onClick={handleSkip}
              className="mt-4 text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono hover:text-neon-green transition cursor-pointer"
            >
              [SKIP_BOOT] press to skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
