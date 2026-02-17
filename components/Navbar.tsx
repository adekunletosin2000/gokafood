"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    // Fixed z-index using arbitrary value z-[100]
    <header className="fixed top-0 left-0 w-full z-100 bg-black/95 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-goka-orange">
            <Image 
              src="/gfknew.jpeg" 
              alt="GKF Logo" 
              fill 
              className="object-cover" 
            />
          </div>
          <span className="font-black text-2xl text-white tracking-tighter uppercase">
            Goka<span className="text-goka-orange">Food</span>
          </span>
        </Link>

        {/* Desktop Navigation - Added Contact Us */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Home", "About Us", "Menu", "Franchise", "Ambassadors", "Contact"].map((item) => (
            <Link 
              key={item}
              // Improved href logic to handle spaces and IDs correctly
              href={item === "Home" ? "/" : `#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/80 hover:text-goka-orange transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className="bg-goka-orange text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:scale-105 active:scale-95 transition-all">
            Get App
          </button>
        </div>
      </div>
    </header>
  );
}