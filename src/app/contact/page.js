export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-darkGray dark:text-white mb-6">Contact Me</h1>
      <p className="text-gray-700 dark:text-white mb-8">
        {`I'm currently open to new opportunities and collaborations. Feel free to reach out to me through any of the following methods:`}
      </p>
      <ul className="space-y-4 text-gray-700 dark:text-white">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:craven.francis@gmail.com" className="text-primary hover:underline">
            craven.francis@gmail.com
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/your-github-username" className="text-primary hover:underline">
            github.com/your-github-username
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-primary hover:underline">
            linkedin.com/in/your-linkedin-profile
          </a>
        </li>
      </ul>
    </section>
  );
}
