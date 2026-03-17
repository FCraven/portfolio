'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export default function KonamiCode() {
  const [index, setIndex] = useState(0);
  const [activated, setActivated] = useState(false);
  const [show, setShow] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (activated) return;

    if (e.key === KONAMI[index]) {
      const next = index + 1;
      if (next === KONAMI.length) {
        setActivated(true);
        setShow(true);
        setTimeout(() => setShow(false), 6000);
      } else {
        setIndex(next);
      }
    } else {
      setIndex(0);
    }
  }, [index, activated]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void/90 backdrop-blur-md"
          onClick={() => setShow(false)}
        >
          <div className="text-center space-y-6 px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-neon-magenta">
                // EASTER_EGG.UNLOCKED
              </p>
            </motion.div>

            <motion.pre
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-neon-green text-xs sm:text-sm leading-tight neon-text"
            >
{`
  ██████╗██████╗  █████╗ ██╗   ██╗███████╗███╗   ██╗
 ██╔════╝██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║
 ██║     ██████╔╝███████║██║   ██║█████╗  ██╔██╗ ██║
 ██║     ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║
 ╚██████╗██║  ██║██║  ██║ ╚████╔╝ ███████╗██║ ╚████║
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝
`}
            </motion.pre>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <p className="font-heading text-xl text-neon-cyan neon-text-cyan">
                +30 LIVES UNLOCKED
              </p>
              <p className="font-mono text-sm text-text-muted">
                You found the secret. Clearly you have good taste.
              </p>
              <p className="font-mono text-xs text-text-muted mt-4">
                ↑ ↑ ↓ ↓ ← → ← → B A
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="font-mono text-[10px] text-text-muted"
            >
              click anywhere to dismiss
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
