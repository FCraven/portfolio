import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold text-darkGray dark:text-white mb-6">
          Francis Craven
        </h1>
        <p className="text-xl text-gray-700 dark:text-white mb-8">
          Front End Developer & Computer Science Student
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-white mb-12">
          An amalgamation of continuous progress and earned experience, eager to apply this dynamic blend of growth and proficiency, contributing meaningfully to a collaborative, innovative, and passionate team.
        </p>
        <Link
          href="/projects"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:scale-105 hover:font-normal transition duration-300 ease-in-out shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-slate-400 dark:shadow-gray-600"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
