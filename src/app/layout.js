import { Orbitron, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import KonamiCode from './components/KonamiCode';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  title: "CRAVEN_OS // Francis Craven",
  description: "Front-end systems architect. Commerce engines. Developer education. Built with code, caffeine, and conviction.",
  keywords: 'Francis Craven, Front-End Engineer, Portfolio, React, Next.js, Commerce, Shopify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen bg-void text-text-primary relative font-mono custom-cursor`}
      >
        <div className="pointer-events-none fixed inset-0 -z-20 cyber-grid" />
        <MatrixRain />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-green/[0.02] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/[0.02] rounded-full blur-[100px]" />
        </div>
        <div className="scanlines" />
        <KonamiCode />
        <Navbar />
        <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
