'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

const defaultLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
];

export default function MobileMenu({ links = defaultLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((c) => !c)}
        className="flex h-10 w-10 items-center justify-center rounded border border-border bg-surface text-neon-green transition hover:border-neon-green/40 hover:shadow-[0_0_15px_rgba(0,255,136,0.15)] cursor-pointer"
        aria-label="Toggle mobile menu"
        type="button"
      >
        {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
      </button>

      <Transition
        show={isOpen}
        enter="transform transition duration-300"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition duration-200"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-[78%] max-w-xs border-l border-border bg-void px-6 py-8 shadow-[0_0_60px_rgba(0,255,136,0.05)]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-mono">// NAVIGATE</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neon-green transition hover:text-white cursor-pointer"
              aria-label="Close mobile menu"
              type="button"
            >
              <HiX size={20} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded border px-4 py-3 font-mono text-sm transition cursor-pointer ${
                    isActive
                      ? 'border-neon-green/40 bg-neon-green/5 text-neon-green'
                      : 'border-border bg-surface text-text-muted hover:border-neon-green/30 hover:text-neon-green'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-neon-green/60 mr-2">&gt;</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 border-t border-border pt-4">
            <p className="text-[10px] text-text-muted font-mono">CRAVEN_OS v1.0</p>
            <p className="text-[10px] text-text-muted font-mono mt-1">SYS.STATUS: <span className="text-neon-green">ONLINE</span></p>
          </div>
        </div>
      </Transition>
    </div>
  );
}
