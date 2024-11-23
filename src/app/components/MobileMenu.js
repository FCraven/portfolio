'use client';

import { useState } from 'react';
import Link from 'next/link'; // Importing Link component from Next.js for internal navigation
import { Transition } from '@headlessui/react'; // Importing Transition component for smooth animation effects
import { HiMenu, HiX } from 'react-icons/hi'; // Importing hamburger menu and close icons from Heroicons

export default function MobileMenu() {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden relative"> {/* Only visible on small screens */}
      {/* Button to toggle the visibility of the mobile menu */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-800 dark:text-gray-200"
        aria-label="Toggle mobile menu"
      >
        {/* Display either the menu or close icon based on the menu state */}
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Transition component to handle the slide-in and fade-in effect of the mobile menu */}
      <Transition
        show={isOpen}
        enter="transform transition duration-300"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition duration-200"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
      >
        {/* Mobile menu drawer styling */}
        <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-700 shadow-lg p-6 flex flex-col gap-6 z-50">
          {/* Close button inside the mobile menu */}
          <button
            onClick={toggleMenu}
            className="self-end text-gray-800 dark:text-gray-200"
            aria-label="Close mobile menu"
          >
            <HiX size={28} />
          </button>

          {/* Navigation links in the mobile menu */}
          <nav className="flex flex-col space-y-4">
            {/* Using Link component for internal navigation within the Next.js app */}
            <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition">
              Home
            </Link>
            <Link href="/about" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition">
              About Me
            </Link>
            <Link href="/projects" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition">
              Projects
            </Link>
            <Link href="/contact" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition">
              Contact
            </Link>
          </nav>
        </div>
      </Transition>
    </div>
  );
}
