'use client'

import resumeData from '../resumeData';
import Image from 'next/image';
import iconMapping from '../utils/iconMapping';

export default function ProjectsPage() {
  const { experience } = resumeData;

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-darkGray dark:text-white mb-10">
        Projects & Experience
      </h1>
      <div className="space-y-8">
          {
            experience.map((job, index) => (

              <div key={index} className="dark:bg-gray-800 shadow-md rounded-lg p-6 border-2">
                {/* Header Section */}
                <div className="flex flex-wrap items-center justify-center mb-4 pb-4">
                  {/* Company Logo */}
                  {job.image && (
                    <div className="flex-shrink-0">
                      <Image
                        src={job.image}
                        alt={`${job.company} Logo`}
                        layout='responsive'
                        width={80}
                        height={80}
                        className="object-contain mb-2 border-8 rounded-2xl border-slate-300 shadow-xl"
                        aria-label={`${job.company} Logo`}
                      />
                    </div>
                  )}

                  {/* Company Name and Role */}
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-primary">{job.company}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.start_date} - {job.end_date}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                {job.techStack && job.techStack.length > 0 && (
                  <div className="my-4 pb-2">
                    <h3 className="text-lg font-semibold mb-4">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2 justify-evenly">
                      {job.techStack.map((tech, idx) => {
                        // Determine the icon component
                        const IconComponent = iconMapping[tech.icon];

                        return (
                          <span
                            key={idx}
                            className="flex items-center bg-gray-200 dark:bg-gray-700 text-sm p-2 rounded-full transition shadow-lg border border-slate-300"
                          >
                            {IconComponent && <IconComponent className="text-2xl mr-1" aria-label={tech.name} />}
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}


             {/* Projects */}
              {job.projects && job.projects.length > 0 && (
              <div className="my-4">
                <h3 className="text-xl font-semibold mb-2">Projects:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {job.projects.map((project, idx) => (
                    <a
                      key={idx}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-300 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-110 hover:border  hover:border-blue-400 transition ease-in-out m-4 border border-slate-400"
                    >
                      <div className="min-w-40 max-h-40">
                        <Image
                          src={project.image}
                          alt={project.name}
                          height={500}
                          width={500}
                          className="w-full"
                          objectFit="contain"
                          aria-label={`${project.name} Logo`}
                        />
                      </div>
                      <div className="p-2">
                        <h4 className="text-xs font-semibold">{project.name}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

              {/* Achievements */}
              <div className="mt-4 shadow-sm pb-4 px-4">
                <h3 className="text-xl font-semibold mb-2">Achievements:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 p-2 m-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md border border-slate-300 pb-4">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      className="p-2 m-2"
                      key={idx}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        {/* end map */}
      </div>
    </main>
  );
}
