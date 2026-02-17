"use client";
import { Reveal } from './Reveal';
import SmartDownloadButton from './SmartDownloadButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 1. BACKGROUND VIDEO/IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
        >
          {/* Fetching a high-quality food video automatically */}
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27cf35190875249a716766480f68d9f10433230&profile_id=164" 
            type="video/mp4" 
          />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal width="100%">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block px-4 py-1.5 bg-goka-orange text-white rounded-full text-sm font-bold tracking-wide uppercase">
                🚀 Fast & Reliable Delivery
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                Quick & <span className="text-goka-orange">Fastest</span> <br className="hidden md:block" />
                Food Delivery.
              </h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience the finest local eateries like Jollof Fried Rice and Egusi Soup, 
                delivered in the fastest way possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <SmartDownloadButton />
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
                  View Local Menu
                </button>
              </div>
            </div>
          </Reveal>

          {/* Delivery Man Image remains as the floating foreground element */}
          <Reveal width="100%">
            <div className="relative flex justify-center lg:justify-end">
            
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}