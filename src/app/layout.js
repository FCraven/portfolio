import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: "Francis Craven - Portfolio",
  description: "Front-End Developer & Computer Science Student",
  keywords: 'Francis Craven, Front-End Developer, Front-End Engineer, Portfolio, React, JavaScript',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen dark:bg-slate-700`}
      >

          <div className="h-full w-full animated-gradient fixed inset-0 -z-20"></div>
          <div className="fixed inset-0 backdrop-blur-lg bg-white/20 dark:bg-black/40 -z-10"></div>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
