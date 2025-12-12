'use client';

import Link from 'next/link';

export default function Chip({ href, label }) {
  return (
    <Link href={href} className="inline-flex max-w-[12rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-[0_16px_60px_rgba(45,212,191,0.28)]">
      {label}
    </Link>
  );
}
