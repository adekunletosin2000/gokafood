"use client";
import Image from 'next/image';
import SmartDownloadButton from './SmartDownloadButton';

export default function DownloadSection() {
  return (
    <section id="download-qr" className="py-20 bg-goka-orange px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-white space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
            Your favorite local <br /> meals are one tap away.
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
            Download the GokaFood app to browse menus from local favorites like 
            Jollof Fried Rice (₦4000) and Egusi Soup (₦4000).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <SmartDownloadButton />
          </div>

          {/* Desktop Only: QR Code Fallback */}
          <div className="hidden lg:flex items-center gap-6 mt-12 p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm w-fit">
            <div className="bg-white p-2 rounded-xl">
              {/* Replace with a real generated QR code image */}
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-goka-orange text-[10px] font-bold text-center p-2">
                SCAN TO DOWNLOAD
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">On your computer?</p>
              <p className="text-sm text-white/70">Scan the QR code with your phone camera to get the app instantly.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockups */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Main App Preview */}
          <div className="relative z-20 w-64 h-125 bg-white rounded-4xl border-8 border-goka-dark shadow-2xl overflow-hidden transform rotate-[-5deg]">
             {/* Uses your Menu Preview UI as the featured screen */}
             <div className="p-4 space-y-4">
                <div className="w-full h-8 bg-gray-100 rounded-lg flex items-center px-2 text-[10px] text-gray-400">Search...</div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-goka-bg rounded-xl">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                    <div className="flex-1 h-2 bg-gray-200 rounded" />
                  </div>
                ))}
             </div>
          </div>

          {/* Secondary "Get Started" Preview */}
          <div className="absolute z-10 w-60 h-112 bg-white rounded-4xl border-8 border-goka-dark shadow-xl overflow-hidden transform translate-x-24 translate-y-12 rotate-10 opacity-80 hidden md:block">
             <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-10 w-full bg-goka-orange rounded-xl" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}