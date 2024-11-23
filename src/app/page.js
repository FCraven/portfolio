'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">

      {/* Content */}
      <div className="relative z-1 container mx-auto px-4 flex sm:items-center justify-center min-h-screen ">
        <div className="text-center bg-white/20 background-blur-md m-8 p-8 rounded-md shadow-lg">
          <h1 className="text-5xl font-serif font-bold text-white mb-6 shadow-md backdrop-blur-md bg-white/20 p-4 rounded-lg">
            Francis Craven
          </h1>
          <div className="bg-white/20 background-blur-md m-4 p-4 rounded-md">
            <p className="text-xl text-white shadow-md backdrop-blur-md bg-white/20 p-2 rounded-lg mb-4">
              Front End Developer
            </p>
            <hr className="m-4"/>
            <p className="text-xl text-white shadow-md backdrop-blur-md bg-white/20 p-2 rounded-lg mb-4">
              Computer Science Student
            </p>
          </div>
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
