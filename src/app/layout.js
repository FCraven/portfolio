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
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
