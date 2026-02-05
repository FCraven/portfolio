/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme');
    const nextTheme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined' || !mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-[0_16px_60px_rgba(45,212,191,0.28)]"
      aria-label="Toggle theme"
      type="button"
    >
      {mounted ? (isDark ? <HiSun size={18} /> : <HiMoon size={18} />) : null}
    </button>
  );
}
