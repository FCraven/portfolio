'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="terminal-panel mt-4 flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-9 w-9 items-center justify-center rounded border border-neon-green/40 bg-neon-green/10 font-heading text-sm font-bold text-neon-green shadow-[0_0_15px_rgba(0,255,136,0.15)] transition-all group-hover:shadow-[0_0_25px_rgba(0,255,136,0.3)]">
              FC
            </span>
            <div className="leading-tight hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">CRAVEN_OS v1.0</p>
              <p className="text-sm font-mono text-neon-green">francis.craven</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'text-neon-green neon-text'
                      : 'text-text-muted hover:text-neon-green'
                  }`}
                >
                  <span className="text-neon-green/60 mr-1">/</span>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-neon-green shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </nav>
  );
}
