'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

const defaultLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu({ links = defaultLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((current) => !current);

  return (
    <div className="sm:hidden relative">
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-[0_16px_60px_rgba(45,212,191,0.28)]"
        aria-label="Toggle mobile menu"
        type="button"
      >
        {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
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
        <div className="fixed inset-y-0 right-0 z-50 w-[78%] max-w-xs border-l border-white/20 bg-slate-950 px-6 py-8 shadow-[0_24px_90px_rgba(2,6,23,0.85)]">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Navigate</p>
            <button
              onClick={toggleMenu}
              className="text-slate-200 transition hover:text-white"
              aria-label="Close mobile menu"
              type="button"
            >
              <HiX size={22} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-base font-semibold text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-white hover:shadow-[0_16px_60px_rgba(45,212,191,0.28)]"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Transition>
    </div>
  );
}
