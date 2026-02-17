"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-20 pb-32 px-6 overflow-hidden">
      {/* Subtle Background Glow to break the flat black */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-goka-orange/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10">
                <Image src="/gfknew.jpeg" alt="GokaFood" fill className="object-cover" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                Goka<span className="text-goka-orange">Food</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Delivering the heart of local flavors—from Jollof to Egusi—straight to your door.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-goka-orange">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-300">
              <li><Link href="#about" className="hover:text-white transition-all">About Us</Link></li>
              <li><Link href="#menu" className="hover:text-white transition-all">Our Menu</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-all">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-goka-orange">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Franchise Terms</li>
            </ul>
          </div>

          {/* Contact Hook */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-goka-orange">Connect</h4>
            <p className="text-sm font-medium text-gray-400">Join our community of food lovers and partners across Nigeria.</p>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <p>© {currentYear} GokaFood International. Built for speed.</p>
        </div>
      </div>

     {/* 🟢 PULSING WHATSAPP BUTTON */}
<a 
  href="https://wa.me/2348147419688" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-32 right-6 md:bottom-10 md:right-10 z-110 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all group animate-bounce-subtle"
>
  {/* The Pulse Effect Ring */}
  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
  
  <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
    </footer>
  );
}