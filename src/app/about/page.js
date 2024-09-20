export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-darkGray mb-6">About Me</h1>
      <div className="text-gray-700 space-y-6">
        <p>
          {`I'm Francis Craven, a computer science student with front-end development and engineering experience. I am eager to apply my skills and contribute meaningfully to a collaborative, innovative, and passionate team.`}
        </p>
        <h2 className="text-2xl font-bold text-darkGray">Education</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>CUNY Queens College</strong> &ndash; B.S. Computer Science (Sep 2023 - Present)
          </li>
          <li>
            <strong>Fullstack Academy</strong> &ndash; Certificate (Jun 2018 - Oct 2018)
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-darkGray">Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3, C++, Java, SQL</li>
          <li><strong>Front-End:</strong> React.js, Redux, Vue.js, Next.js, etc.</li>
          <li><strong>Back-End:</strong> Node.js, ExpressJS, GraphQL, etc.</li>
          <li><strong>Tools:</strong> Git, GitHub, AWS, etc.</li>
        </ul>
      </div>
    </section>
  );
}
