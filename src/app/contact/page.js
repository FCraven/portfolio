import resumeData from '../resumeData';
const { email, github, linkedin } = resumeData

export default function ContactPage() {
  console.log('github', resumeData.github)
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-darkGray dark:text-white mb-6">Contact Me</h1>
      <p className="text-gray-700 dark:text-white mb-8">
        {`I'm currently open to new opportunities and collaborations. Feel free to reach out to me through any of the following methods:`}
      </p>
      <ul className="space-y-4 text-gray-700 dark:text-white">
        <li>
          <strong>Email:</strong>
          <a href={`mailto:${email}`} className="text-primary hover:underline px-4">
            { email }
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a href={ github } className="text-primary hover:underline px-4">
            { github }
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href={ linkedin } className="text-primary hover:underline px-4">
            { linkedin }
          </a>
        </li>
      </ul>
    </section>
  );
}
