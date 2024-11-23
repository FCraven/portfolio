'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white
                    dark:bg-gray-800
                    shadow-md
                    text-black
                    dark:text-white
                    fixed
                    w-full
                    z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-primary">
          <Link href="/">FC</Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-primary dark:hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary dark:hover:text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary dark:hover:text-secondary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary dark:hover:text-secondary">
                Contact
              </Link>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
}
