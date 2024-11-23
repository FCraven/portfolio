'use client';

const FooterChip = ({ label, href }) => (
  <a href={href} className="inline-block">
    <div className="px-4 py-2 font-semibold rounded-full transition ease-in-out
      bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black border-2 border-gray-400 shadow-md
      hover:shadow-lg transform hover:-translate-y-1 hover:scale-105
      dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-500 dark:shadow-sm
      dark:hover:shadow-md">
      {label}
    </div>
  </a>
);

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 flex flex-wrap justify-between gap-6 p-6
    bg-white shadow-md backdrop-blur-sm bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80
    hover:bg-opacity-90 hover:shadow-lg dark:hover:bg-opacity-90 transition-all duration-300 ease-in-out">
    <FooterChip label="Resume/CV" href="/resume.pdf" />
    <FooterChip label="Email Me" href="mailto:your.email@example.com" />
    <FooterChip label="LinkedIn" href="https://linkedin.com/in/yourprofile" />
    <FooterChip label="GitHub" href="https://github.com/yourprofile" />
    <FooterChip label="Hire Me" href="/contact" />
  </footer>
);

export default Footer;
