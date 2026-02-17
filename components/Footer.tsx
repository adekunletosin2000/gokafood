import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  // Automatically gets the current year (e.g., 2026)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-goka-dark py-16 px-6 text-white pb-32 md:pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        
        {/* Brand Column - High Visibility */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/gfknew.jpeg" alt="GKF" width={32} height={32} className="rounded-lg" />
            <h3 className="text-2xl font-black text-goka-orange tracking-tighter uppercase">GokaFood</h3>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            The heart of local food delivery. Supporting local eateries like Jollof and Egusi Soup.
          </p>
        </div>
        
        {/* Company Column - Now clearly visible without hover */}
        <div>
          <h4 className="font-bold  mb-6 text-white uppercase tracking-widest text-sm">Company</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-goka-orange transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-goka-orange transition-colors cursor-pointer">Franchise Program</li>
            <li className="hover:text-goka-orange transition-colors cursor-pointer">Campus Ambassadors</li>
            <li className="hover:text-goka-orange transition-colors cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Contact Column - Optimized for 95% mobile users */}
        <div>
          <h4 className="font-bold  mb-6 text-white uppercase tracking-widest text-sm">Contact</h4>
          <p className="text-gray-300 text-sm mb-4 font-medium">support@gokafood.com</p>
          <div className="flex gap-4">
             <a href="https://wa.me/yournumber" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-goka-orange transition-all font-bold">WA</a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-goka-orange transition-all font-bold">IG</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 mt-16 pt-8 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold">
        © {currentYear} GokaFood. Built with love for local eateries.
      </div>
    </footer>
  );
}