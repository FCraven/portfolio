'use client';

import { useEffect } from 'react';

export default function ConsoleMessage() {
  useEffect(() => {
    const styles = {
      banner: 'color: #00FF88; font-size: 14px; font-family: monospace; font-weight: bold; text-shadow: 0 0 10px #00FF88;',
      ascii: 'color: #00FF88; font-size: 10px; font-family: monospace; line-height: 1.2;',
      cyan: 'color: #00D4FF; font-size: 12px; font-family: monospace;',
      magenta: 'color: #FF00FF; font-size: 11px; font-family: monospace;',
      muted: 'color: #888; font-size: 11px; font-family: monospace;',
      green: 'color: #00FF88; font-size: 11px; font-family: monospace;',
      bold: 'color: #00FF88; font-size: 12px; font-family: monospace; font-weight: bold;',
      warn: 'color: #FFD700; font-size: 12px; font-family: monospace; font-weight: bold;',
    };

    console.log(
      '%c\n' +
      '  ██████╗██████╗  █████╗ ██╗   ██╗███████╗███╗   ██╗\n' +
      ' ██╔════╝██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║\n' +
      ' ██║     ██████╔╝███████║██║   ██║█████╗  ██╔██╗ ██║\n' +
      ' ██║     ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║\n' +
      ' ╚██████╗██║  ██║██║  ██║ ╚████╔╝ ███████╗██║ ╚████║\n' +
      '  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝\n' +
      '              ╔═══════════════════════╗\n' +
      '              ║    CRAVEN_OS v1.0     ║\n' +
      '              ╚═══════════════════════╝\n',
      styles.ascii
    );

    console.log('%c> SYSTEM INITIALIZED', styles.banner);
    console.log('%c─────────────────────────────────────────', styles.muted);
    console.log('%c$ whoami', styles.green);
    console.log('%c  Francis Craven — Front-End Systems Architect', styles.cyan);
    console.log('%c$ cat /sys/stack', styles.green);
    console.log('%c  React · Next.js · Vue · TypeScript · Node · Medusa · Shopify', styles.cyan);
    console.log('%c$ echo $STATUS', styles.green);
    console.log('%c  OPEN — roles, consulting, and interesting problems', styles.magenta);
    console.log('%c─────────────────────────────────────────', styles.muted);
    console.log(
      '%cYou found the console. Nice. 👀\n' +
      'If you\'re reading this, we should probably talk.',
      styles.bold
    );
    console.log('%c→ craven.francis@gmail.com', styles.cyan);
    console.log('%c→ github.com/FCraven', styles.cyan);
    console.log('%c─────────────────────────────────────────', styles.muted);
    console.log('%c⚠ HINT: There\'s a Konami code on this site. Just saying.', styles.warn);
    console.log('%c\n', styles.muted);
  }, []);

  return null;
}
