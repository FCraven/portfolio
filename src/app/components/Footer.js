'use client';

import Link from 'next/link';
import resumeData from '../resumeData';

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
];

const Footer = () => (
  <footer className="mt-10 border-t border-border">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-neon-green/40 bg-neon-green/10 font-heading text-xs font-bold text-neon-green">
              FC
            </span>
            <div>
              <p className="text-sm font-mono text-neon-green">francis.craven</p>
              <p className="text-[10px] font-mono text-text-muted">CRAVEN_OS v1.0 // {new Date().getFullYear()}</p>
            </div>
          </div>
          <p className="text-xs text-text-muted font-mono max-w-md">
            Built with Next.js, Tailwind, and an unhealthy amount of neon green.
          </p>
          <p className="text-[9px] text-text-muted/40 font-mono mt-1">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// NAVIGATE</p>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded border border-border px-3 py-1.5 text-xs font-mono text-text-muted transition hover:border-neon-green/40 hover:text-neon-green cursor-pointer"
                >
                  /{link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// CONNECT</p>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${resumeData.email}`} className="rounded border border-border px-3 py-1.5 text-xs font-mono text-text-muted transition hover:border-neon-cyan/40 hover:text-neon-cyan cursor-pointer">
                email
              </a>
              <a href={resumeData.github} target="_blank" rel="noreferrer" className="rounded border border-border px-3 py-1.5 text-xs font-mono text-text-muted transition hover:border-neon-cyan/40 hover:text-neon-cyan cursor-pointer">
                github
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="rounded border border-border px-3 py-1.5 text-xs font-mono text-text-muted transition hover:border-neon-cyan/40 hover:text-neon-cyan cursor-pointer">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
