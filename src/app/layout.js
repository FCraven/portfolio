import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Francis Craven - Portfolio",
  description: "Front-End Developer & Computer Science Student",
  keywords: 'Francis Craven, Front-End Developer, Front-End Engineer, Portfolio, React, JavaScript',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-950 text-slate-100 relative`}
      >
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(250,204,21,0.12),transparent_30%),linear-gradient(135deg,#05080f,#0b1224,#05080f)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 backdrop-blur-3xl bg-white/5 dark:bg-black/30" />
        <Navbar />
        <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
