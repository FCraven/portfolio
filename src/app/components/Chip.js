'use client';

import Link from 'next/link';

export default function Chip({ href, label }) {
  return (
    <Link href={href} className="inline-block">
      <div className="px-2 py-1 font-semibold rounded-full transition ease-in-out
        bg-gray-200 text-gray-800 hover:bg-gray-400 border-2 border-gray-400 shadow-md
        hover:shadow-lg transform hover:-translate-y-1 hover:scale-105
        dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-500 dark:shadow-sm dark:hover:shadow-md
        w-auto max-w-[10rem] text-center">
        {label}
      </div>
    </Link>
  );
}

