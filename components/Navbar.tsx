"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/gfknew.jpeg" alt="GKF" width={40} height={40} className="rounded-lg" />
          <span className="font-black text-2xl text-goka-dark tracking-tighter uppercase">GokaFood</span>
        </Link>

        {/* Desktop Links - Now includes About Us */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-goka-dark/70">
          <Link href="/" className="hover:text-goka-orange">Home</Link>
          <Link href="#about" className="hover:text-goka-orange transition-colors">About Us</Link>
          <Link href="#menu" className="hover:text-goka-orange transition-colors">Menu</Link>
          <Link href="#franchise" className="hover:text-goka-orange transition-colors">Franchise</Link>
          <Link href="#ambassador" className="hover:text-goka-orange transition-colors">Ambassadors</Link>
        </div>

        <button className="bg-goka-orange text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95">
          Get the App
        </button>
      </div>
    </nav>
  );
}