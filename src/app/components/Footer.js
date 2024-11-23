'use client';

import Chip from './Chip';

const Footer = () => (
  <footer className="bg-white shadow-md backdrop-blur-md bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 p-6 border-t border-gray-200 dark:border-gray-700">
    <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {/* Column 1: About Section */}
      <div>
        <h3 className="font-semibold mb-2">About Me</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Brief description about yourself or the purpose of this site, giving visitors a quick understanding of what it's about.
        </p>
      </div>
      {/* Column 2: Quick Links */}
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><Chip href="/" label="Home" /></li>
          <li><Chip href="/about" label="About Me" /></li>
          <li><Chip href="/projects" label="Projects" /></li>
          <li><Chip href="/contact" label="Contact" /></li>
        </ul>
      </div>
      {/* Column 3: Contact Information */}
      <div>
        <h3 className="font-semibold mb-2">Contact</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Email: <Chip href="mailto:your.email@example.com" label="your.email@example.com" />
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Phone: <Chip href="tel:+1234567890" label="+123 456 7890" />
        </p>
      </div>
      {/* Column 4: Social Media */}
      <div>
        <h3 className="font-semibold mb-2">Follow Me</h3>
        <div className="flex space-x-4">
          <Chip href="https://linkedin.com/in/yourprofile" label="LinkedIn" />
          <Chip href="https://github.com/yourprofile" label="GitHub" />
        </div>
      </div>
      {/* Column 5: Resume / CV */}
      <div>
        <h3 className="font-semibold mb-2">Resume / CV</h3>
        <Chip href="/resume.pdf" label="Download Resume" />
      </div>
    </div>
    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-xs text-gray-600 dark:text-gray-400">
      <p>&copy; 2024 Francis Craven. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
