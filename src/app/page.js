'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="h-full w-full animated-gradient"></div>
        {/* Optional Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">
            Francis Craven
          </h1>
          <p className="text-xl text-white mb-8">
            Front End Developer & Computer Science Student
          </p>
          <p className="max-w-2xl mx-auto text-white mb-12">
            An amalgamation of continuous progress and earned experience, eager to apply this dynamic blend of growth and proficiency, contributing meaningfully to a collaborative, innovative, and passionate team.
          </p>
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:scale-105 hover:font-normal transition duration-300 ease-in-out shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-slate-400 dark:shadow-gray-600"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
