'use client';

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel mt-4 flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-amber-300 text-lg font-semibold text-slate-900 shadow-lg shadow-teal-500/30">
              FC
            </span>
            <div className="leading-tight">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
              <p className="text-sm font-semibold text-white">Francis Craven</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-white hover:shadow-[0_16px_60px_rgba(45,212,191,0.28)]"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </nav>
  );
}
