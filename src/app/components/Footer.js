'use client';

import Link from 'next/link';
import resumeData from '../resumeData';
import { Badge } from './ui/badge';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="mt-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="glass-panel subtle-grid border border-white/10 px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Available for collaborations</p>
            <h3 className="text-xl font-semibold text-white">Let&apos;s build experiences that feel effortless for users.</h3>
            <p className="text-sm text-slate-400">
              I specialize in front-end architecture, design systems, and high-performing commerce experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge asChild>
              <a
                href={`mailto:${resumeData.email}`}
              >
                Email
              </a>
            </Badge>
            <Badge asChild>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Badge>
            <Badge asChild>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Badge>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-amber-300 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30">
              FC
            </span>
            <p>Built by Francis Craven. Crafted with Next.js & Tailwind.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-3 py-2 text-slate-200 transition hover:border-teal-300/60 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
