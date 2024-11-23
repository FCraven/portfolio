'use client';

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import Chip from './Chip';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md text-black dark:text-white fixed w-full z-10 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-80 hover:bg-opacity-90 hover:shadow-lg dark:hover:bg-opacity-90 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-primary">
          <Link href="/">FC</Link>
        </div>
        {/* Mobile menu for small screens */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
        {/* Regular navigation links for larger screens using Chip component */}
        <div className="hidden md:flex space-x-6">
          <Chip href="/" label="Home" />
          <Chip href="/about" label="About" />
          <Chip href="/projects" label="Projects" />
          <Chip href="/contact" label="Contact" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}




// 'use client';

// import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';
// import MobileMenu from './MobileMenu';

// export default function Navbar() {
//   return (
//     <>
//       <MobileMenu />
//       <nav className="hidden sm:block bg-white dark:bg-gray-800 shadow-md text-black dark:text-white fixed w-full z-10 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-80 hover:bg-opacity-90 hover:shadow-lg dark:hover:bg-opacity-90 transition-all duration-300 ease-in-out">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl font-serif font-bold text-primary">
//             <Link href="/">FC</Link>
//           </div>
//           <div>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="hover:text-primary dark:hover:text-secondary">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-primary dark:hover:text-secondary">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/projects" className="hover:text-primary dark:hover:text-secondary">
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-primary dark:hover:text-secondary">
//                   Contact
//                 </Link>
//               </li>
//               <ThemeToggle />
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
